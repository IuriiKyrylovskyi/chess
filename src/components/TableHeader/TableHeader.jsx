import React from 'react';
import TableRow from '../TableRow/TableRow';
import { rowData } from '../../data';
import './style.scss';

const TableHeader = () => {
  return (
    <div className="table__header-filter">
      <TableRow key={rowData.id} {...rowData} />
    </div>
  );
};

export default TableHeader;
