import React from 'react';
import { dataSection } from '../../data';
import TableRow from '../TableRow/TableRow';
import './style.scss';

const TableContent = () => {
  return (
    <div className="table__content">
      {dataSection.map(row => (
        <TableRow key={row.id} {...row} />
      ))}
    </div>
  );
};

export default TableContent;
