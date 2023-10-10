import React from "react";
import Logo from "../images/Logo.svg";

const Nav = () => {
  return (
    <nav className="page-container mx-auto flex py-6 justify-between items-center">
      <img src={Logo} alt="Little Lemon" />

      <ul className="list-none flex">
        <li className=" mx-2">
          <a href="#home">Home</a>
        </li>
        <li className="mx-2">
          <a href="#about">About</a>
        </li>
        <li className="mx-2">
          <a href="#menu">Menu</a>
        </li>
        <li className="mx-2">
          <a href="#reservations">Reservations</a>
        </li>
        <li className="mx-2">
          <a href="#orderonline">Order Online</a>
        </li>
        <li className="mx-2">
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
