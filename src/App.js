import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards"
import Price from "./components/Price/Price";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="container">
      <Header />
      <Cards />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
