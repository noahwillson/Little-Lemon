import React, { Fragment } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
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
      <div>
        <Routes>
          <Route path="/" exact component={<Main />} />
          <Route path="/about" component={<About />} />
          <Route path="/menu" component={<Menu />} />
          <Route path="/reservations" component={<Reservations />} />
          <Route path="/orderonline" component={<OrderOnline />} />
          <Route path="/login" component={<Login />} />
        </Routes>
      </div>
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
