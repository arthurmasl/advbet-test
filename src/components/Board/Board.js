import React from 'react';
import './Board.style.scss';
import { useSelector } from 'react-redux';
import { selectBoard } from './Board.selectors';

const Board = () => {
  const board = useSelector(selectBoard);

  return (
    <div className="board-wrapper">
      <h3>Game board</h3>
      <div className="board">
        {board.map(({ results, colors, positionToId }) => (
          <button key={results} className={`board-cell ${colors}`}>
            {positionToId}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
