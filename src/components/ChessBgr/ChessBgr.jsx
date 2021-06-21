import React from 'react';
import ChessLine from '../ChessLine/ChessLine';
import './style.scss';

const ChessBgr = () => {
  const lineNumber = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1];

  return (
    <div className="chess__bg">
      <div className="chess__info">
        {/* Building 1<span>section 1</span> */}
      </div>
      <div className="chess__lines">
        {lineNumber.map(num => (
          <ChessLine key={num} num={num} />
        ))}
      </div>
      <div className="chess__info">
        {/* <span>section 1</span>Building 1 */}
      </div>
    </div>
  );
};

export default ChessBgr;
