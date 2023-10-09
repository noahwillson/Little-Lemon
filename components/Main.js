import React from "react";
import img from "../images/restauranfood.jpg";
import greeksalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemondessert from "../images/lemon dessert.jpg";
const Main = () => {
    return (
        <main>
            <section>
                <h1>little lemon</h1>
                <h3>Chicago</h3>
                <button>Reserv a Table</button>
                <img src={img} alt="chef holds food" />
            </section>
            <section>
                <h1>This weeks specials</h1>
                <button>Online Menu</button>
                <img src={greeksalad} alt="greek salad"/>
                <p>12.99</p>
                <p>lorem ipsum dolor sit amet consectetur</p>
                <button>Order a delivery</button>
                <img src={bruchetta} alt="bruchetta"/>
                <p>5.99</p>
                <p>lorem ipsum dolor sit amet consectetur</p>
                <button>Order a delivery</button>
                <img src={lemondessert} alt="lemondessert"/>
                <p>5.00</p>
                <p>lorem ipsum dolor sit amet consectetur</p>
                <button>Order a delivery</button>
            </section>
        </main>
    );
};

export default Main;