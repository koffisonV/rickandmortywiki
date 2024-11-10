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
  }, [id]);

  function handleClick() {
    naviagte("/characters");
  }

  return (
    <>
      <h2 className="text-5xl font-light text-center pt-40 pb-3">
        {character.name}
      </h2>
      <div className="flex flex-col items-center justify-center m-5">
        <img
          src={character.image}
          alt={character.name}
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mb-4 sm:mb-0"
        />
        <div className="mt-4 sm:pl-8 text-center sm:text-left">
          <p className="mb-2 text-2xl">Status: {character.status}</p>
          <span className="mb-2">Species: {character.species}</span>
          <p className="mb-2">Gender: {character.gender}</p>
          {character.origin && (
            <p className="text-gray-600 italic">
              Origin: {character.origin.name}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 bg-orange-500 mr-4 rounded hover:bg-orange-700 focus:outline-none"
          onClick={handleClick}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
