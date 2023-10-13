import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg";

const Nav = () => {
  return (
    <nav className="page-container bg-gray-300 mx-auto flex py-6 justify-between items-center text-2xl font-medium">
      <img src={Logo} alt="Little Lemon" className="w-72" />

      <ul className="list-none flex">
        <li className="active mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-4">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="mx-4">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="mx-4">
          <Link to="/orderonline">Order Online</Link>
        </li>
        <li className="ml-4">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

// Define your components for each route

export default Nav;
