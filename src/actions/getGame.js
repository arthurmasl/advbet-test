import api from '../utils/api';
import { setLog, setIsSpinning, setEvent } from '../slices/rouletteSlice';
import { getNextGame } from './getNextGame';

export const getGame = id => async (dispatch, getState) => {
  const state = getState();
  const isSpinning = state.roulette.isSpinning;
  const response = await api.getGame(id);
  const game = await response.json();

  dispatch(setLog(`GET ../game/${id}`));

  if (!game.result) {
    if (!isSpinning) {
      dispatch(setIsSpinning(true));
      dispatch(setLog('Spinning the wheel'));
      dispatch(setEvent({ message: 'Wheel is spinning', time: 0 }));
    } else {
      dispatch(setLog('Still no result, continue spinning'));
    }

    setTimeout(() => {
      dispatch(getGame(id));
    }, 1000);
  } else {
    dispatch(setLog(`Result is ${game.result}`));
    dispatch(setLog(`Stopping the wheel`));
    dispatch(setEvent({ message: `Game ${game.id} result is ${game.result}` }));

    dispatch(setIsSpinning(false));
    dispatch(getNextGame);
  }
};
