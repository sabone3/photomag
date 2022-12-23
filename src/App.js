import React from "react";
import "./assets/styles/app.scss";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Price from "./components/Price/Price";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Cards />
      <Price />
      <Footer />
      <Map />
    </div>
  );
};

export default App;
