import React from 'react';
import './style.scss';

const ChessLine = props => {
  const { num } = props;
  
  return (
    <div className="chess__line">
      <span>{num}</span>
      <span>{num}</span>
    </div>
  );
};

export default ChessLine;
