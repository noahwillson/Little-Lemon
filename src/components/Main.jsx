import React from "react";
import img from "../images/restauranfood.jpg";
import Card from "./Card";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    btn: "Order a delivery",
    getImageSrc: () => require("../images/greek salad.jpg"),
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil and made with love.",
    btn: "Order a delivery",
    getImageSrc: () => require("../images/bruchetta.jpg"),
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    btn: "Order a delivery",
    getImageSrc: () => require("../images/lemon dessert.jpg"),
  },
];

console.log(specials);

const Main = () => {
  return (
    <main>
      <section className="container mx-auto">
        <div className="mx-auto flex flex-row items-center justify-between">
          <div className="right-section">
            <h1
              className="text-7xl font-medium font-serif"
              style={{ color: "#F4CE14" }}
            >
              Little Lemon
            </h1>
            <h3 className="text-gray-600 text-4xl font-medium font-serif">
              Chicago
            </h3>
            <p className="text-gray-600 my-5 description text-2xl font-medium">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a className="btn" href="/#">
              Reserve a Table
            </a>
          </div>
          <img
            className="w-1/2 h-[600px] rounded-3xl "
            src={img}
            alt="chef holds food"
          />
        </div>
      </section>
      <section className="container mx-auto mt-16">
        <div className="flex justify-between mb-9">
          <p className="text-5xl font-semibold font-serif">
            This weeks specials
          </p>
          <a href="/#" className="btn">
            Online Menu
          </a>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <>
            {specials.map((special) => (
              <Card
                key={special.title}
                title={special.title}
                price={special.price}
                description={special.description}
                btn={special.btn}
                imageSrc={special.getImageSrc()}
              />
            ))}
            {/* <img
              src={greeksalad}
              alt="greek salad"
              className="card-img w-100 h-100"
            />
          </div>
          <div className="flex justify-between mt-4">
            <span className="ml-4">greeksalad</span>
            <span className="mr-4">12.99</span>
          </div>
          <div className="text-start	p-4">
            <p className="mb-6 ">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <a href="/#" className="font-normal">
              Order a delivery
            </a> */}
          </>
        </section>
        {/* <img src={bruchetta} alt="bruchetta" />
        <p>5.99</p>
        <p>lorem ipsum dolor sit amet consectetur</p>
        <button>Order a delivery</button>
        <img src={lemondessert} alt="lemondessert" />
        <p>5.00</p>
        <p>lorem ipsum dolor sit amet consectetur</p>
        <button>Order a delivery</button> */}
      </section>
    </main>
  );
};

export default Main;
