import React from "react";
import Count from "../count/Count";
import ButtonDelete from "../buttondelete/ButtonDelete";
import formatPrice from "../../../utils/priceFormatter";
import "./style.scss";
import { func, object } from "prop-types";

const Product = ({
  product,
  deleteProduct,
  increase,
  changeValue,
  decrease,
}) => {
  const { img, title, priceTotal, count, id } = product;

  return (
    <section className="product">
      <div className="product__img">
        <img src={img} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
          id={id}
        />
      </div>
      <div className="product__price">{formatPrice(priceTotal)} руб.</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

Product.propTypes = {
  product: object,
  deleteProduct: func,
  increase: func,
  changeValue: func,
  decrease: func,
};

export default Product;
