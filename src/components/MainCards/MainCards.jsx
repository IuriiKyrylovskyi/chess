import React from 'react';
import Card from '../Card/Card';
import { dataSection } from '../../data';
import './style.scss';

const MainCards = () => {
  return (
    <div className="cards">
      {dataSection.map(flat => (
        <Card {...flat} />
      ))}
    </div>
  );
};

export default MainCards;
