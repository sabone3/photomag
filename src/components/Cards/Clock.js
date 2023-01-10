import React from "react";
import clock from "../../assets/images/cards-images/clock.jpg";
import { Link } from "react-router-dom";

const Clock = () => {
  return (
    <Link
      to={{
        pathname: "/products",
      }}
    >
      <div className="card-component-postitem">
        <div className="card-component-postitemwrap">
          <img src={clock} height="400" />
          <div className="card-component-postinfo">
            <h3 className="card-component-posttitle">Часовые элементы</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Clock;
