import React from "react";
import airbnbLogo from "../Assets/airbnbLogo.png";
import Global from "./Global.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="logo" src={airbnbLogo} />
    </nav>
  );
}
