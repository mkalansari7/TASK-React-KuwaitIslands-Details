import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./data/islands";
import React, { useState } from "react";

function App() {
  const [island, setIsland] = useState({
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  });

  const p = (islandId) => {
    setIsland(islandId);
  };
  // let island = {
  //   name: "Boubyan",
  //   img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  // };

  return (
    <div>
      <Header />
      <div className="homePage">
        <IslandList p={p} />
        <IslandForm island={island} />
      </div>
    </div>
  );
}

export default App;
