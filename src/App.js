import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
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
        <Route path="*" element={NotFoundPage()} />
      </Routes>
    </>
  );
};
export default App;
