import React from "react";
import logo from "../Assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__left">
        <img className="nav__img" src={logo} alt="react-logo" />
        <span className="nav__logo">ReactFacts</span>
      </div>
      <div className="nav__right">
        <span className="nav__text">React Course-Project 1</span>
      </div>
    </nav>
  );
}
