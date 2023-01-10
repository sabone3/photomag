import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/header-images/logo.svg?url";
const Header = () => {
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
          <button className="header-component-header-button">Услуги</button>
          <button className="header-component-header-button">Прайс-лист</button>
          <button className="header-component-header-button">Контакты</button>
          <Link
            to={{
              pathname: "/cart",
            }}
          >
            <button className="header-component-header-button">
              @Корзина@
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
