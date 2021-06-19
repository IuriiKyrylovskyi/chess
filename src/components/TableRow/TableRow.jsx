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
      <div className="cell">{status}</div>
    </div>
  );
};

export default TableRow;
