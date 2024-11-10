import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="bg-gray-500 text-white py-8 mt-20">
    <div className="container mx-auto text-center">
        <nav className="mb-4">
            <Link to="/" className="text-gray-300 hover:text-white mx-4">Home</Link>
            <Link to="/characters" className="text-gray-300 hover:text-white mx-4">Characters</Link>
            <Link to="/locations" className="text-gray-300 hover:text-white mx-4">Locations</Link>
            <Link to="/episodes" className="text-gray-300 hover:text-white mx-4">Episodes</Link>
        </nav>
        <p className="text-sm opacity-75 mb-2">© Summer 2023 Tech Talent Pipeline</p>
        <p className="text-lg font-semibold mb-2">Koffison Voumadi</p>
        <a href="mailto:koffison29@gmail.com" className="text-orange-400 hover:underline">Koffison29@gmail.com</a>
    </div>
</footer>

  );
};