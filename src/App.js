import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import DynamicCards from "./components/DynamicCards";
import DyncardData from "./components/DyncardData.js";
console.log(DyncardData);

export default function App() {
  const dyncards = DyncardData.map((card) => (
    <DynamicCards
      key={card.id}
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      description={card.description}
      price={card.price}
      opensports={card.openSpots}
    />
  ));
  return (
    <>
      <Navbar />
      <Hero />

      <div className="cards-list">{dyncards}</div>
    </>
  );
}
