import React, { useState } from "react";
import islands from "../data/islands";

export default function IslandForm({ island }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const confirmMessage = () => {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`
    );
  };

  const typePhone = (e) => {
    setPhone(e.target.value);
  };
  const typeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input onChange={typeName} placeholder="Type Full Name" />
      <input onChange={typePhone} type="tel" placeholder="Type Phone Number" />
      <button className="book" onClick={confirmMessage}>
        Book for today!
      </button>
    </div>
  );
}
