import React from "react";
import Star from "../Assets/Star.png";

export default function DynamicCards(props) {
  return (
    <div className="cards">
      <img className="card--image" src={props.img} />
      <div className="attribute">
        {" "}
        <img className="star-lgo" src={Star} />
        <span className="rating">{props.rating}</span>
        <span> ({props.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>{props.description}</p>
      <p>
        <b>From ${props.price}</b>/person
      </p>
      <p> openSpots :{props.opensports}</p>
    </div>
  );
}
