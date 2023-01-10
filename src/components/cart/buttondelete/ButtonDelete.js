import React from "react";
import { func, number } from "prop-types";
import cross from "../../../assets/images/icons/cross.svg";

const ButtonDelete = ({ deleteProduct, id }) => {
  return (
    <button
      type="button"
      onClick={() => {
        deleteProduct(id);
      }}
    >
      <img src={cross} alt="Delete" />
    </button>
  );
};

ButtonDelete.propTypes = {
  deleteProduct: func,
  id: number,
};

export default ButtonDelete;
