import React from "react";
import Cards from "../cards/Cards";
import Price from "../price/Price";
import Footer from "../footer/Footer";
import Map from "../map/Map";

const Home = () => {
  return (
    <div>
      <Cards />
      <Price />
      <Footer />
      <Map />
    </div>
  );
};

export default Home;
