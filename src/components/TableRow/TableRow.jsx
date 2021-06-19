import React from 'react';
import './style.scss';

const TableRow = props => {
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
    status,
  } = props;

  const statusStylesColor = () => {
    if (status === 'free') return '#1abc9c';
    if (status === 'sold') return '#ec6372';
    if (status === 'reserved') return '#ffb400';
  };

  return (
    <div className="table__row">
      <div className="cell">{id}</div>
      <div className="cell">{number}</div>
      <div className="cell">{type}</div>
      <div className="cell">{rooms}</div>
      <div className="cell">{square}</div>
      <div className="cell">{building}</div>
      <div className="cell">{section}</div>
      <div className="cell">{floor}</div>
      <div className="cell">{pricePerM}</div>
      <div className="cell">{priceTotal}</div>
      <div className="cell">
        <span style={{ backgroundColor: statusStylesColor() }}>{status}</span>
        {/* {status === 'sold' && <span style={{ backgroundColor: '#ec6372' }}>{status}</span>}
        {status === 'reserved' && <span style={{ backgroundColor: '#ffb400' }}>{status}</span>} */}
      </div>
    </div>
  );
};

export default TableRow;
