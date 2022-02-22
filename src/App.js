import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import DynamicCards from "./components/DynamicCards";
import DyncardData from "./components/DyncardData.js";
console.log(DyncardData);

export default function App() {
  const dyncards = DyncardData.map((card) => (
    <DynamicCards key={card.id} card={card} />
  ));
  return (
    <>
      <Navbar />
      <Hero />

      <div className="cards-list">{dyncards}</div>
    </>
  );
}
