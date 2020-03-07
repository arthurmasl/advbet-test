import { getConfig } from './getConfig';
import { getNextGame } from './getNextGame';
import { setLog } from '../slices/rouletteSlice';

export const startGame = async dispatch => {
  dispatch(setLog('Loading game board'));
  dispatch(getConfig);
  dispatch(getNextGame);
};
