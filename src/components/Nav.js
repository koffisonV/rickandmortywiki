import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="absolute top-0 w-full bg-transparent/10 bg-opacity-30 backdrop-blur-md shadow-2xl bg-gradient-to-b from-white from-70%  via-white via-10%">
      <nav className="flex p-3 m-6 space-x-7 text-center font-bold mt-6">
        <div className="py-2 flex-auto duration-300 rounded-md cursor-pointer hover:bg-orange-600">
          <i className="bi bi-house-door-fill pr-1" />
          <Link className="" to="/">
            Home
          </Link>
        </div>
        <div className="py-2 flex-auto duration-300 rounded-md cursor-pointer hover:bg-orange-600">
          <i className="bi bi-people-fill pr-1" />
          <Link to="/characters">Characters</Link>
        </div>
        <div className="py-2 flex-auto duration-300 rounded-md cursor-pointer hover:bg-orange-600">
          <i className="bi bi-map-fill pr-1" />
          <Link to="/locations">Locations</Link>
        </div>
        <div className="py-2 flex-auto duration-300 rounded-md cursor-pointer hover:bg-orange-600">
          <i className="bi bi-tv-fill pr-1.5" />
          <Link to="/episodes">Episodes</Link>
        </div>
      </nav>
    </div>
  );
}
