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
        <h1 className="text-5xl font-light text-center pt-40 mb-2">Episodes</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((episode) => (
          <li key={episode.id}>
            <article className="bg-white p-6 rounded-lg shadow-md">
            <h2>{episode.name}</h2>
            <p>{episode.air_date}</p>
            <p>{episode.episode}</p>
            </article>
          </li>
        ))}
      </ul>
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
