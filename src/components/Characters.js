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
      if (window.innerWidth <= 600) {
        setSlidesPerView(2);
        setSpaceBetween(10);
      } else {
        setSlidesPerView(4);
        setSpaceBetween(50);
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
  }, [currentPage]);

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
      <h1 className="text-5xl font-light text-center pt-40 mb-2">
        List of all Characters
      </h1>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Navigation, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {characters.map((character) => (
          <SwiperSlide
            className="bg-white p-6 rounded-lg shadow-lg"
            key={character.id}
          >
            <Link to={`/characters/${character.id}`}>
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-auto object-cover rounded"
              />
              <h2 className="mt-4 text-lg font-semibold">{character.name}</h2>
            </Link>
            <p className="mt-2 text-gray-600">{character.species}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 bg-orange-500 mr-4 rounded hover:bg-orange-700 focus:outline-none ${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 bg-orange-500 mr-4 rounded hover:bg-orange-700 focus:outline-none ${
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
