import React from "react";
import logoImage from "../../assets/images/header-images/logo.svg?url";

const Header = () => {
  return (
    <div className="header-component-header">
      <div className="header-component-logo">
        <img src={logoImage} alt="" height="60" />
      </div>
      <div className="header-component-wrapper">
        <div className="header-component-buttons">
          <button className="header-component-header-button">Услуги</button>
          <button className="header-component-header-button">Прайс-лист</button>
          <button className="header-component-header-button">Контакты</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
