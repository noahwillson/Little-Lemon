import React from "react";
import img from "../images/restauranfood.jpg";
import greeksalad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemondessert from "../images/lemon dessert.jpg";
const Main = () => {
  return (
    <main>
      <section
        className="xl:padding-1
            wide:padding-r padding-b main-section"
      >
        <div className="right-section">
          <h1 className="text-4xl" style={{ color: "#F4CE14" }}>
            little lemon
          </h1>
          <h3 style={{ color: "#fff" }}>Chicago</h3>
          <p className="my-5 description">
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a className="btn" href="/#">
            Reserv a Table
          </a>
        </div>
        <div className="left-section">
          <img className="chef-photo" src={img} alt="chef holds food" />
        </div>
      </section>
      <section>
        <div className="flex justify-between mt-9">
          <p className="text-5xl font-medium">This weeks specials</p>
          <a href="/#" className="btn">
            Online Menu
          </a>
        </div>
        <img src={greeksalad} alt="greek salad" className="w-20 h-20" />
        <p>12.99</p>
        <p>lorem ipsum dolor sit amet consectetur</p>
        <button>Order a delivery</button>
        <img src={bruchetta} alt="bruchetta" />
        <p>5.99</p>
        <p>lorem ipsum dolor sit amet consectetur</p>
        <button>Order a delivery</button>
        <img src={lemondessert} alt="lemondessert" />
        <p>5.00</p>
        <p>lorem ipsum dolor sit amet consectetur</p>
        <button>Order a delivery</button>
      </section>
    </main>
  );
};

export default Main;
