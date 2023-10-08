import React from "react";
import logo  from "../images/Logo.svg";
const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Little Lemon"/>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <a href="#reservations">Reservations</a>
                </li>
                <li>
                    <a href="#orderonline">Order Online</a>
                </li>
                <li>
                    <a href="#login">Login</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;