import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Add a scroll event listener to handle fading effect
    const handleScroll = () => {
      const nav = document.querySelector(".nav-container");
      if (nav) {
        const opacity = 1 - window.scrollY / 300; // Adjust the divisor to control the fading speed
        nav.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="rickandmortywiki/" element={<Main />} />
          <Route path="rickandmortywiki/characters" element={<Characters />} />
          <Route path="rickandmortywiki/characters/:id" element={<Character />} />
          <Route path="rickandmortywiki/locations" element={<Locations />} />
          <Route path="rickandmortywiki/episodes" element={<Episodes />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
