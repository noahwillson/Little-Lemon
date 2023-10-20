import React, { Fragment } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer";
import About from "./pages/About.js";
import Menu from "./pages/Menu.js";
import Reservations from "./pages/Reservations.js";
import OrderOnline from "./pages/Orderonline.js";
import Login from "./pages/Login.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
