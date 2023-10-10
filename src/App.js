import "./App.css";
import React, { Fragment } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <div className="container mx-auto">
        <Nav />
        <Main />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
