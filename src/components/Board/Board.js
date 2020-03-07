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
        {board.map(({ item, color }) => (
          <button key={item} className={`board-cell ${color}`}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
