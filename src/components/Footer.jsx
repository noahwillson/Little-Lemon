import React from "react";
import logo from "../images/Logo.svg";
import { navLinks } from "./Nav";
import NavItem from "./NavItem";
const Footer = () => {
  return (
    <footer className="container mx-auto flex py-6 justify-between items-center text-center text-2xl font-medium">
      <img src={logo} alt="Little Lemon" className="w-72" />
      <ul>
        <p>Doormat Navigation</p>
        {navLinks.map((link) => (
          <NavItem key={link.id} path={link.to} text={link.text} />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
