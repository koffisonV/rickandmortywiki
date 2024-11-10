import React, { createContext, useContext, useState } from "react";
const EpisodesContext = createContext();

export default function EpisodesProvider({children}) {
    const [episodes, setEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

  return (
    <EpisodesContext.Provider
      value={{
       episodes,
       setEpisodes,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
        {children}
    </EpisodesContext.Provider>
  );
}

export function useEpisodes() {
  return useContext(EpisodesContext);
}
