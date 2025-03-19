import React from "react";
import Tv from "./tv.png";
import Animation from "./animation.gif"

export default function Main() {
  return (
    <>
      <div className="flex justify-center"><img src={Animation} alt="Rick and Morty" className="pt-40 mb-2"/></div>
      <p className="text-center text-xl text-gray-600 p-7 m-7">
        "The series follows the misadventures of Rick Sanchez, a cynical mad
        scientist, and his good-hearted but fretful grandson Morty Smith, who
        split their time between domestic life and interdimensional adventures
        that take place across an infinite number of realities, often traveling
        to other planets and dimensions through portals and on Rick's flying
        saucer🛸"
      </p>
      <p className=" text-center text-gray-500 text-xl font-light p-10 m-3">Click on the TV to watch more</p>
      <div className="flex justify-center">
        <a
          href="https://www.adultswim.com/videos/rick-and-morty"
          target="blank"
        >
          <img src={Tv} alt="Rick & Morty" className="w-1/2 mx-auto" />
        </a>
      </div>
    </>
  );
}
