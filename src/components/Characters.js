import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../context/CharactersContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Characters() {
  const {
    characters,
    setCharacters,
    currentPage,
    totalPages,
    setCurrentPage,
    setTotalPages,
  } = useCharacters();

  const [slidesPerView, setSlidesPerView] = useState(4);
  const [spaceBetween, setSpaceBetween] = useState(50);

  useEffect(() => {
    const updateSwiperParams = () => {
      if (window.innerWidth <= 480) { // mobile
        setSlidesPerView(1.5);
        setSpaceBetween(10);
      } else if (window.innerWidth <= 768) { // tablet
        setSlidesPerView(2.5);
        setSpaceBetween(15);
      } else if (window.innerWidth <= 1024) { // small laptop
        setSlidesPerView(3);
        setSpaceBetween(20);
      } else { // desktop
        setSlidesPerView(4);
        setSpaceBetween(30);
      }
    };

    // Initial setup
    updateSwiperParams();

    // Update Swiper parameters on window resize
    window.addEventListener("resize", updateSwiperParams);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSwiperParams);
    };
  }, []);

  useEffect(() => {
    try {
      async function fetchCharacters() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        );
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      }
      fetchCharacters();
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, setCharacters, setTotalPages]);

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center pt-20 sm:pt-28 md:pt-40 mb-2">
        List of all Characters
      </h1>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Navigation, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="px-4 sm:px-8 md:px-12" // Adjusted padding for different screen sizes
      >
        {characters.map((character) => (
          <SwiperSlide
            className="bg-white p-3 sm:p-4 md:p-6 rounded-lg h-[300px] sm:h-[350px] md:h-[400px]" // Responsive height
            key={character.id}
          >
            <Link to={`/rickandmortywiki/characters/${character.id}`}>
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-[180px] sm:h-[200px] md:h-[250px] object-cover rounded" // Responsive height
              />
              <h2 className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg font-semibold truncate">{character.name}</h2>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">{character.species}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4 sm:mt-6">
        <button
          onClick={handlePrevPage}
          className={`px-3 sm:px-4 py-2 bg-orange-500 mr-4 rounded hover:bg-orange-700 focus:outline-none ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className={`px-3 sm:px-4 py-2 bg-orange-500 rounded hover:bg-orange-700 focus:outline-none ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
