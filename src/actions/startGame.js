import { getConfig } from './getConfig';
import { getHistory } from './getHistory';
import { getSheduledGames } from './getSheduledGames';
import { setLog } from '../slices/rouletteSlice';

export const startGame = async dispatch => {
  dispatch(setLog('Loading game board'));
  dispatch(getConfig);
  dispatch(getHistory);
  dispatch(getSheduledGames);
};
