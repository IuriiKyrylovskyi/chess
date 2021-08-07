import React from 'react';

import './styles.scss';

const CardButton = ({ text, onClick }) => {
  return (
    <div className="card-button__wrapper">
      <button className="card-button__button" onClick={onClick}>{text}</button>
    </div>
  );
};

export default CardButton;
