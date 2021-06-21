import React from 'react';
import ChessBgr from '../ChessBgr/ChessBgr';
import ChessContent from '../ChessContent/ChessContent';
import './style.scss';

const MainChess = () => {
  return (
    <div className="chess">
      <ChessBgr />
      <ChessContent />
    </div>
  );
};

export default MainChess;
