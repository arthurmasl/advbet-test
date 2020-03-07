import { createSelector } from '@reduxjs/toolkit';
import { selectStats } from '../../slices/rouletteSlice';
import { selectBoard } from '../Board/Board.selectors';

export const selectHistory = createSelector(
  [selectStats, selectBoard],
  (stats, board) => {
    if (!board.length) return [];
    const history = stats.reduce((acc, curr) => {
      if (!acc[curr.result]) {
        acc[curr.result] = {
          hits: 0,
          slot: curr.result,
          color: board.find(item => +item.results === curr.result).colors
        };
      } else {
        acc[curr.result].hits += 1;
      }

      return acc;
    }, []);

    history.sort((a, b) => a.hits - b.hits);

    return history;
  }
);
