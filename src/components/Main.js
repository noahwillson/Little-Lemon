import React from "react";
import img from "../images/restauranfood.jpg";
const Main = () => {
    return (
        <main>
            <h1>little lemon</h1>
            <h3>Chicago</h3>
            <button>Reserv a Table</button>
            <img src={img} alt="chef holds food" />
        </main>
    );
};

export default Main;