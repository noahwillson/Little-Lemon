import Logo from "../images/Logo.svg"
import Nav from "./Nav"
import React from "react";
const Header = () => {
    return (
        <div >
        <header>
                <meta name="description" content="This is a description"/>
                <meta name="og:title" content="Little Lemon" />
                <meta name="og:description" content="This is a description" />
                <meta name="og:image" content="https://www.littlelemon.com/images/logo.svg" />
            <img src={Logo} alt="Little Lemon" className="width-100 height-200"/>
        </header>
        <Nav/>
        </div>
    )
}
export default Header