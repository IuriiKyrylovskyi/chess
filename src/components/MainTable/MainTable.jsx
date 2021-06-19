import React from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableContent from '../TableContent/TableContent';
import './style.scss';

const MainTable = () => {
  return (
    <div className="table">
      <TableHeader />
      <TableContent />
    </div>
  );
};

export default MainTable;
