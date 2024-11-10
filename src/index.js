import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CharactersProvider from "./context/CharactersContext";
import EpisodesProvider from "./context/EpisodesContext";
import LocationsProvider from "./context/LocationsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CharactersProvider>
      <EpisodesProvider>
        <LocationsProvider>
          <Router>
            <App />
          </Router>
        </LocationsProvider>
      </EpisodesProvider>
    </CharactersProvider>
  </React.StrictMode>
);
