import React, { createContext, useContext, useState } from "react";
const LocationsContext = createContext();

export default function LocationsProvider({children}) {
    const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <LocationsContext.Provider
      value={{
        locations,
        setLocations,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
        {children}
    </LocationsContext.Provider>
  );
}

export function useLocations() {
  return useContext(LocationsContext);
}
