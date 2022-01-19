import React from "react";

export default function Island({ island, p }) {
  const settingIsland = () => {
    p(island);
  };
  return (
    <div onClick={settingIsland} className="Island">
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors 0</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
