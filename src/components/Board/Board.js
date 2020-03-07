import React from 'react';
import './Board.style.scss';
import { useSelector } from 'react-redux';
import { selectBoard } from './Board.selectors';

const Board = () => {
  const board = useSelector(selectBoard);

  return (
    <div className="board">
      {board.map(({ results, colors, positionToId }) => (
        <button key={results} className={`board-cell ${colors}`}>
          {positionToId}
        </button>
      ))}
    </div>
  );
};

export default Board;
