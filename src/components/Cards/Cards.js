import React from "react";
import doki from "../../assets/images/cards-images/doki.png";
import photoprint from "../../assets/images/cards-images/photoprint.jpg";
import rest from "../../assets/images/cards-images/rest.jpg";
import colorprint from "../../assets/images/cards-images/colorprint.jpg";

const Cards = () => (
  <div className="card-component-cards">
    <div className="card-component-title">
      <h1>Наши Услуги</h1>
    </div>

    <div className="card-component-postwrap">
      <div className="card-component-postitem">
        <div className="card-component-postitemwrap">
          <a href="" className="card-component-post-link">
            <img src={doki} height="440px" />
            <div className="card-component-postinfo">
              <h3 className="card-component-posttitle">Фото на документы</h3>
            </div>
          </a>
        </div>
      </div>

      <div className="card-component-postitem">
        <div className="card-component-postitemwrap">
          <a href="" className="card-component-post-link">
            <img src={photoprint} height="440px" />
            <div className="card-component-postinfo">
              <h3 className="card-component-posttitle">Печать фотографий</h3>
            </div>
          </a>
        </div>
      </div>

      <div className="card-component-postitem">
        <div className="card-component-postitemwrap">
          <a href="" className="card-component-post-link">
            <img src={colorprint} height="440px" />
            <div className="card-component-postinfo">
              <h3 className="card-component-posttitle">
                Лазерная печать вплоть до А3
              </h3>
            </div>
          </a>
        </div>
      </div>

      <div className="card-component-postitem">
        <div className="card-component-postitemwrap">
          <a href="" className="card-component-post-link">
            <img src={rest} height="440px" />
            <div className="card-component-postinfo">
              <h3 className="card-component-posttitle">
                Реставрация фотографий
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
