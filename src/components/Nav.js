import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine, RiHome5Line, RiGroupLine, RiMapPinLine, RiTvLine } from "react-icons/ri";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <nav className="relative container mx-auto px-4">
        {/* Mobile menu button */}
        <button 
          className="md:hidden absolute right-4 top-4 p-2 z-50 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <RiCloseLine className="text-2xl text-gray-800" />
          ) : (
            <RiMenu3Line className="text-2xl text-gray-800" />
          )}
        </button>

        {/* Navigation links */}
        <div 
          className={`
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            fixed md:relative
            top-0 md:top-auto
            right-0 md:right-auto
            left-0 md:left-auto
            h-screen md:h-auto
            w-full md:w-auto
            bg-white md:bg-transparent
            flex flex-col md:flex-row
            items-center justify-center md:justify-start
            space-y-8 md:space-y-0 md:space-x-8
            py-8 md:py-4
            transition-transform duration-300 ease-in-out
            md:flex
            z-40
          `}
        >
          <Link 
            className="w-full md:w-auto px-8 py-3 md:py-2 text-lg md:text-base font-medium text-gray-800 hover:text-orange-600 transition-colors" 
            to="rickandmortywiki/"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center justify-center">
              <RiHome5Line className="text-xl mr-2" />
              Home
            </div>
          </Link>
          <Link 
            className="w-full md:w-auto px-8 py-3 md:py-2 text-lg md:text-base font-medium text-gray-800 hover:text-orange-600 transition-colors" 
            to="rickandmortywiki/characters"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center justify-center">
              <RiGroupLine className="text-xl mr-2" />
              Characters
            </div>
          </Link>
          <Link 
            className="w-full md:w-auto px-8 py-3 md:py-2 text-lg md:text-base font-medium text-gray-800 hover:text-orange-600 transition-colors" 
            to="rickandmortywiki/locations"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center justify-center">
              <RiMapPinLine className="text-xl mr-2" />
              Locations
            </div>
          </Link>
          <Link 
            className="w-full md:w-auto px-8 py-3 md:py-2 text-lg md:text-base font-medium text-gray-800 hover:text-orange-600 transition-colors" 
            to="rickandmortywiki/episodes"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center justify-center">
              <RiTvLine className="text-xl mr-2" />
              Episodes
            </div>
          </Link>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </div>
  );
}
