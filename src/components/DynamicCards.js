import React from "react";
import Star from "../Assets/Star.png";

export default function DynamicCards(props) {
  console.log(props);
  return (
    <div className="cards">
      {props.card.opensports === 0 && (
        <div className="card--badge">SOLD OUT</div>
      )}
      <img className="card--image" src={props.card.coverImg} />
      <div className="attribute">
        {" "}
        <img className="star-lgo" src={Star} />
        <span className="rating">{props.card.stats.rating}</span>
        <span> ({props.card.stats.reviewCount}) • </span>
        <span>{props.card.location}</span>
      </div>
      <p className="card--title">{props.card.title}</p>-{" "}
      <p>{props.card.description}</p>
      <p>
        <b>From ${props.card.price}</b>/person
      </p>
      <p> openSpots :{props.card.opensports}</p>
    </div>
  );
}
