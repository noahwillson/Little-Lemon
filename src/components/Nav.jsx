import React from "react";
import NavItem from "./NavItem";
import Logo from "../images/Logo.svg";

export const navLinks = [
  { id: 1, text: "Home", to: "/" },
  { id: 2, text: "About", to: "/about" },
  { id: 3, text: "Menu", to: "/menu" },
  { id: 4, text: "Reservations", to: "/reservations" },
  { id: 5, text: "Order Online", to: "/orderonline" },
  { id: 6, text: "Login", to: "/login" },
];

const Nav = () => {
  return (
    <nav className="container mx-auto flex py-6 justify-between items-center text-2xl font-medium">
      <img src={Logo} alt="Little Lemon" className="w-72" />

      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <NavItem key={link.id} path={link.to} text={link.text} />
        ))}
      </ul>
    </nav>
  );
};

// Define your components for each route

export default Nav;
