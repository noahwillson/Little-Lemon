import React from "react";
import Logo from "../images/Logo.svg";

const Nav = () => {
  return (
    <nav className="page-container mx-auto flex py-6 justify-between items-center text-2xl font-medium">
      <img src={Logo} alt="Little Lemon" className="w-72" />

      <ul className="list-none flex">
        <li className=" mx-4">
          <a href="#home">Home</a>
        </li>
        <li className="mx-4">
          <a href="#about">About</a>
        </li>
        <li className="mx-4">
          <a href="#menu">Menu</a>
        </li>
        <li className="mx-4">
          <a href="#reservations">Reservations</a>
        </li>
        <li className="mx-4">
          <a href="#orderonline">Order Online</a>
        </li>
        <li className="ml-4">
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
