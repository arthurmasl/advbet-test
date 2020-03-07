import { createSelector } from '@reduxjs/toolkit';
import { selectConfig } from '../../slices/rouletteSlice';

export const selectBoard = createSelector(selectConfig, config => {
  if (!config.name) return [];

  const board = config.positionToId.map(item => ({
    item,
    color: config.colors[item]
  }));

  return board;
});
