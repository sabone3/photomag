import React from "react";
import PhotoForDocument from "../cards/PhotoForDocuments";
import Rest from "../cards/Rest";
import ColorPrint from "../cards/ColorPrint";
import PhotoPrint from "../cards/PhotoPrint";
import Clock from "../cards/Clock";

const Cards = () => (
  <div className="card-component-cards">
    <div className="card-component-title">
      <h1>Наши Услуги</h1>
    </div>

    <div className="card-component-postwrap">
      <PhotoForDocument />
      <PhotoPrint />
      <ColorPrint />
      <Rest />
      <Clock />
    </div>
  </div>
);

export default Cards;
