import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/header-images/logo.svg?url";
import Cart from "../../assets/images/header-images/cart.svg?url";
import Authorization from "../authorization/Authorization";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header-component-header">
      <Link
        to={{
          pathname: "/",
        }}
      >
        <div className="header-component-logo">
          <img src={logoImage} alt="" height="60" />
        </div>
      </Link>
      <div className="header-component-wrapper">
        <div className="header-component-buttons">
          <button className="header-component-header-button">
            <Link
              to={{
                pathname: "/products",
              }}
            >
              Часовые элементы
            </Link>
          </button>
          <Link
            to={{
              pathname: "/cart",
            }}
          >
            <div className="header-component-header-button">
              <img src={Cart} width="25px" />
            </div>
          </Link>
          <button
            className="header-component-header-button"
            onClick={() => {
              setOpen(true);
            }}
          >
            Авторизация
          </button>
          {open && <Authorization setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
