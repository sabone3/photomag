import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import "./assets/styles/components/cart/App/_vars.scss";
import "./assets/styles/components/cart/App/_reset.scss";
import "./assets/styles/components/cart/App/_base.scss";
import "./assets/styles/components/cart/App/_section-cart.scss";

const App = () => {
  const NotFoundPage = () => {
    <div>
      <p>Нет такой страницы</p>
    </div>;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={NotFoundPage()} />
      </Routes>
    </>
  );
};
export default App;
