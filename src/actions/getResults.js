import api from '../utils/api';
import { setLog, setIsSpinning, setEvent } from '../slices/rouletteSlice';
import { getNextGame } from './getNextGame';

export const getResults = id => async (dispatch, getState) => {
  const state = getState();
  const isSpinning = state.roulette.isSpinning;
  const response = await api.getGame(id);
  const game = await response.json();

  dispatch(setLog(`GET ../game/${id}`));

  if (!game.result) {
    if (!isSpinning) {
      // SPIN
      dispatch(setIsSpinning(true));
      dispatch(setLog('Spinning the wheel'));
      dispatch(setEvent({ message: 'Wheel is spinning', time: 0 }));
    } else {
      // CONINIUE SPINNING
      dispatch(setLog('Still no result, continue spinning'));
    }

    // REPEAT REQUEST
    setTimeout(() => {
      dispatch(getResults(id));
    }, 1000);
  } else {
    // RESULTS
    dispatch(setLog(`Result is ${game.result}`));
    dispatch(setLog(`Stopping the wheel`));
    dispatch(setEvent({ message: `Game ${game.id} result is ${game.result}` }));

    dispatch(setIsSpinning(false));
    dispatch(getNextGame);
  }
};
