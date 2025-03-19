import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacters } from "../context/CharactersContext";

export default function Character() {
  const { character, setCharacter } = useCharacters();

  const { id } = useParams();
  const naviagte = useNavigate();

  useEffect(() => {
    try {
      async function fetchCharacter() {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(data);
      }
      fetchCharacter();
    } catch (e) {
      console.error(e);
    }
  }, [id, setCharacter]);

  function handleClick() {
    naviagte("/rickandmortywiki/characters");
  }

  return (
    <>
      <h2 className="text-4xl sm:text-5xl font-light text-center pt-28 sm:pt-40 pb-3">
        {character.name}
      </h2>
      <div className="flex flex-col items-center justify-center m-3 sm:m-5 p-4">
        <img
          src={character.image}
          alt={character.name}
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mb-4 shadow-lg"
        />
        <div className="mt-4 text-center space-y-3">
          <p className="text-xl sm:text-2xl font-medium">Status: {character.status}</p>
          <p className="text-lg sm:text-xl">Species: {character.species}</p>
          <p className="text-lg sm:text-xl">Gender: {character.gender}</p>
          {character.origin && (
            <p className="text-gray-600 italic text-lg">
              Origin: {character.origin.name}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4 sm:mt-8">
        <button
          className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-700 focus:outline-none transition-colors duration-200 text-white font-medium"
          onClick={handleClick}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
