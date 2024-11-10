import React, { createContext, useContext, useState } from "react";
const CharactersContext = createContext();

export default function CharactersProvider({children}) {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        character,
        setCharacters,
        setCharacter,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
        {children}
    </CharactersContext.Provider>
  );
}

export function useCharacters() {
  return useContext(CharactersContext);
}
