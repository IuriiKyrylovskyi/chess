import React from 'react';
import ChessCell from '../ChessCell/ChessCell';

const ChessFloor = ({ floor }) => {
  console.log(floor);
  return (
    <div className="chess__floor">
      {floor.map(item => (
        <ChessCell key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ChessFloor;
