import React from 'react';
import { dataSection } from '../../data';
import './style.scss';

const InfoTopBar = () => {
  const count = dataSection.length;

  return (
    <div className="main__info info">
      <div className="info__column">
        <div className="info__count">{`Найдено помещений: ${count}`}</div>
      </div>
      <div className="info__column">
        <div className="info__status">Свободно</div>
        <div className="info__status">Интерес</div>
        <div className="info__status">Резерв</div>
        <div className="info__status">Продано</div>
      </div>
    </div>
  );
};

export default InfoTopBar;
