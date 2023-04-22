
import React from "react";
import NavBar from "./components/navbar/NavBar";
import "./App.css"
import './components/Banner/Banner.js'
import Banner from "./components/Banner/Banner";
import RawPost from "./components/Rawpost/RawPost";
import { action,HorrorMovies,original, RomanceMovies } from "./constants/url";
function App() {
  return (
    <div className="App">
      <NavBar/>  
      <Banner/>
      <RawPost  url={original} title="NETFLIX ORIGINALS" />
      <RawPost url={action} title="ACTION-MOVIES" isSmall />
      <RawPost url={HorrorMovies} title="HORROR-MOVIES" isSmall />
      <RawPost url={RomanceMovies} title="ROMANCE-MOVIES" isSmall />
    </div>
  );
}

export default App;
