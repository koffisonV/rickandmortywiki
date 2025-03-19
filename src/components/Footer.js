import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="bg-gray-500 text-white py-8 mt-20">
    <div className="container mx-auto text-center">
        <nav className="mb-4">
            <Link to="/rickandmortywiki" className="text-gray-300 hover:text-white mx-4">Home</Link>
            <Link to="/rickandmortywiki/characters" className="text-gray-300 hover:text-white mx-4">Characters</Link>
            <Link to="/rickandmortywiki/locations" className="text-gray-300 hover:text-white mx-4">Locations</Link>
            <Link to="/rickandmortywiki/episodes" className="text-gray-300 hover:text-white mx-4">Episodes</Link>
        </nav>
        <p className="text-sm opacity-75 mb-2">© Koffison Voumadi&mdash;Summer 2023 Tech Talent Pipeline</p>
    </div>
</footer>

  );
};