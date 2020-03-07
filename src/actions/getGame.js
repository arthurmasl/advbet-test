import api from '../utils/api';
import { setLog, setIsSpinning, setEvent } from '../slices/rouletteSlice';
import { getNextGame } from './getNextGame';

export const getGame = id => async (dispatch, getState) => {
  const state = getState();
  const isSpinning = state.roulette.isSpinning;
  const response = await api.getGame(id);
  const data = await response.json();

  dispatch(setLog(`GET ../game/${id}`));

  if (!data.result) {
    if (!isSpinning) {
      dispatch(setIsSpinning(true));
      dispatch(setLog('Spinning the wheel'));
      dispatch(setEvent({ message: 'Wheel is spinning', time: 0 }));
      setTimeout(() => {
        dispatch(getGame(id));
      }, 1000);
    } else {
      dispatch(setLog('Still no result, continue spinning'));
      setTimeout(() => {
        dispatch(getGame(id));
      }, 1000);
    }
  } else {
    dispatch(setLog(`Result is ${data.result}`));
    dispatch(setLog(`Stopping the wheel`));
    dispatch(setEvent({ message: `Game ${data.id} result is ${data.result}` }));

    dispatch(setIsSpinning(false));
    dispatch(getNextGame);
  }
};
