import React from "react";
import { array } from "prop-types";
import { connect } from "react-redux";
import maxell from "../../assets/images/products-images/maxell.png";
import murata from "../../assets/images/products-images/murata.png";
import renata from "../../assets/images/products-images/renata.jpg";
import seizaken from "../../assets/images/products-images/seizaken.jpg";

const FIELD = [
  {
    id: 1,
    title: "renata 377",
    images: renata,
    category: "Renata",
    price: "55 рублей",
    availability: "40",
  },
  {
    id: 2,
    title: "renata 359",
    images: renata,
    category: "Renata",
    price: "105 рублей",
    availability: "0",
  },
  {
    id: 3,
    title: "Murata 377",
    images: murata,
    category: "Murata",
    price: "55 рублей",
    availability: "20",
  },
  {
    id: 4,
    title: "Seizaken 377",
    images: seizaken,
    category: "Seizaken",
    price: "35 рублей",
    availability: "30",
  },
  {
    id: 5,
    title: "Seizaken 359",
    images: seizaken,
    category: "Seizaken",
    price: "85 рублей",
    availability: "100",
  },
  {
    id: 6,
    title: "Maxell 377",
    images: maxell,
    category: "Maxcell",
    price: "25 рублей",
    availability: "60",
  },
];

const Products = () => {
  const listRender = () => {
    return FIELD.map((item, index) => {
      return (
        <div className="tovar" key={index}>
          <img src={item.images} />
          <h5>{item.title}</h5>
          <h5>{item.price}</h5>
          <h5>{item.availability}</h5>
          {/* <input
            placeholder="Кол-во"
            value={setCountBattery}
            type="number"
            min={item.availability > 0 ? 1 : 0}
            max={item.availability}
            required
          /> */}
          <button className="add-to-cart">В корзину</button>
        </div>
      );
    });
  };

  // const productsCounter = selectedProducts?.length ?? 0;
  return (
    <div className="product-component-cards">
      <div className="product-component-title">
        <h1>Часовые элементы</h1>
      </div>
      {/* {productsCounter > 0 ? (
        <p>Selected {productsCounter} products</p>
      ) : (
        <p>Products not selected</p>
      )} */}
      <div className="product-component-postwrap">
        <div className="product-component-postitem">
          <div className="product-component-postitemwrap">{listRender()}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
