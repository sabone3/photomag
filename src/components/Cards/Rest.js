import React, { useState } from "react";
import rest from "../../assets/images/cards-images/rest.jpg";

const Rest = () => {
  const [open, setOpen] = useState(false);

  const modalRender = () => {
    return (
      <>
        <div className="modal-background" />
        <div className="modal">
          <button
            className="close-modal"
            onClick={() => {
              setOpen(false);
            }}
          >
            x
          </button>
          <div className="modal-text">
            Занимаемся удалением физических повреждений фотографий
          </div>
          <div className="modal-text">Фото 5 на 4</div>
          <div className="modal-text">Фото 4 на 6</div>
          <div className="modal-text">Фото 9 на 12</div>
          <div className="modal-text">Фото на визу</div>
          <div className="modal-text">Фото на паспорт</div>
          <div className="modal-text">Фото на заграничный паспорт</div>
          <div className="modal-text">Фото на медицинскую книжку</div>
          <div className="modal-text">Фото на международные права</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="card-component-postitem"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="card-component-postitemwrap">
          <img src={rest} height="400" />
          <div className="card-component-postinfo">
            <h3 className="card-component-posttitle">Реставрация фотографий</h3>
          </div>
        </div>
      </div>
      {open && modalRender()}
    </>
  );
};

export default Rest;
