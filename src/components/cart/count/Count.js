import "./style.scss";
import React from "react";
import { func, number } from "prop-types";
import iconup from "../../../assets/images/icons/icon-up.svg";
import icondown from "../../../assets/images/icons/icon-down.svg";

const Count = ({ count, increase, decrease, changeValue, id }) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          onChange={(e) => {
            changeValue(id, +e.target.value);
          }}
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
        />
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            increase(id);
          }}
        >
          <img src={iconup} alt="Increase" />
        </button>
        <button
          type="button"
          className="count__down"
          onClick={() => {
            decrease(id);
          }}
        >
          <img src={icondown} alt="Decrease" />
        </button>
      </div>
    </div>
  );
};

Count.propTypes = {
  count: number,
  increase: func,
  decrease: func,
  changeValue: func,
  id: number,
};

export default Count;
