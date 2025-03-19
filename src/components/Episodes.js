import axios from "axios";
import React, { useEffect } from "react";
import { useEpisodes } from "../context/EpisodesContext";

export default function Episodes() {
  const {
    episodes,
    setEpisodes,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  } = useEpisodes();

  useEffect(() => {
    try {
      async function fetchEpisodes() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/episode/?page=${currentPage}`
        );
        setEpisodes(data.results);
        setTotalPages(data.info.pages);
      }
      fetchEpisodes();
    } catch (e) {
      console.error(e);
    }
  }, [currentPage, setEpisodes, setTotalPages]);

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
      <h1 className="text-4xl sm:text-5xl font-light text-center pt-28 sm:pt-40 mb-6">Episodes</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {episodes.map((episode) => (
          <li key={episode.id}>
            <article className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">{episode.name}</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                <span className="font-medium">Air Date:</span> {episode.air_date}
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-medium">Episode:</span> {episode.episode}
              </p>
            </article>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-8 sm:mt-10 pb-8">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 bg-orange-500 mr-4 rounded hover:bg-orange-700 focus:outline-none transition-colors duration-200 text-white font-medium ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 bg-orange-500 rounded hover:bg-orange-700 focus:outline-none transition-colors duration-200 text-white font-medium ${
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
