import React from 'react';
import ChessCell from '../ChessCell/ChessCell';
import './style.scss';

const ChessFloor = ({ floor }) => {
  return (
    <div className="chess__floor">
      {floor.map(item => (
        <ChessCell key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ChessFloor;
