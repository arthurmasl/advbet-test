import { createSelector } from '@reduxjs/toolkit';
import { selectConfig } from '../../slices/rouletteSlice';

export const selectBoard = createSelector(selectConfig, config => {
  const board = [];

  Object.entries(config).forEach(([key, value]) => {
    if (!Array.isArray(value)) return;

    value.forEach((item, i) => {
      board[i] = { ...board[i], [key]: item };
    });
  });

  return board;
});
