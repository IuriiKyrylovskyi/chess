import React from 'react';
import './style.scss';

const ChessCell = props => {
  const { rooms, status } = props;

  const cellStyles = () => {
    if (status === 'free') return '#1abc9c';
    if (status === 'sold') return '#ec6372';
    if (status === 'reserved') return '#ffb400';
  };

  return (
    <div className="chess__cell" style={{ backgroundColor: cellStyles() }}>
      {rooms}
    </div>
  );
};

export default ChessCell;
