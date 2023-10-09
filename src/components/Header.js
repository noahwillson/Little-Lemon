import Logo from "../images/Logo.svg"
import Nav from "./Nav"
import React from "react";
const Header = () => {
    return (
        <div>
        <header className="flex justify-content-between align-items-center">
                <meta name="description" content="This is a description"/>
                <meta name="og:title" content="Little Lemon" />
                <meta name="og:description" content="This is a description" />
                <meta name="og:image" content="https://www.littlelemon.com/images/logo.svg" />
            <img src={Logo} alt="Little Lemon"/>
        </header>
        <Nav/>
        </div>
    )
}
export default Header