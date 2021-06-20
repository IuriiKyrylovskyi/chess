import React from 'react';
import { rowData } from '../../data';
import './style.scss';

const Card = props => {
  const noImg = 'https://flatris.com.ua/assets/plugins/chess/img/nophoto_ru.png';
  const {
    id,
    number,
    type,
    rooms,
    square,
    building,
    section,
    floor,
    pricePerM,
    priceTotal,
    image,
    status,
  } = props;

  return (
    <div className="card">
      <div className="card__title">
        {`${rowData.type} ${type}`}
        <span>{`${rowData.building} ${building},  ${rowData.section} ${section}`}</span>
      </div>
      <div className="card__img-box">
        <img src={image || noImg} alt="flat" />
      </div>
      <div className="card__price">
        <span>
          from <p>{priceTotal}</p>$
        </span>
      </div>
      <div className="card__row">
        <div className="card__square">
          {rowData.square}
          <span>{`${square} m2`}</span>
        </div>
        <div className="card__rooms">
          {rowData.rooms}
          <span>{rooms}</span>
        </div>
      </div>
      <div className="card__info">1 was found</div>
    </div>
  );
};

export default Card;
