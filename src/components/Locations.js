import axios from "axios";
import React, { useEffect } from "react";
import { useLocations } from "../context/LocationsContext";

export default function Locations() {
  const {
    locations,
    setLocations,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  } = useLocations();

  useEffect(() => {
    try {
      async function fetchLocations() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/location/?page=${currentPage}`
        );
        setLocations(data.results);
        setTotalPages(data.info.pages);
      }
      fetchLocations();
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
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-light text-center pt-40 pb-9">
          Locations
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <li key={location.id} >
            <article key={location.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-orange-400 p-3" >{location.name}</h2>
              <p className="text-gray-600 p-4">{location.type}</p>
              <p className="text-gray-600 p-4">{location.dimension}</p>
            </article>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-orange-500 mr-4 rounded hover:bg-orange-700 focus:outline-none"
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-700 focus:outline-none"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
