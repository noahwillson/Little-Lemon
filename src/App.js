import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <Header className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"/>
        <Main/>
        <Footer/>

    </Fragment>
  );
}

export default App;
