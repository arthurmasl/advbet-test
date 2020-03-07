import { setShedule, setLog, setTime } from '../slices/rouletteSlice';
import api from '../utils/api';
import { getGame } from './getGame';

export const getSheduledGames = async dispatch => {
  const response = await api.getShedule();
  const data = await response.json();

  dispatch(setLog('Checking for new game'));

  if (data.length) {
    const game = data[0];
    const timeToStart = game.fakeStartDelta;

    dispatch(setShedule(game));
    dispatch(setLog(`Sleeping for ${timeToStart} sec`));

    if (game.fakeStartDelta > 0) {
      dispatch(setTime(timeToStart));
      dispatch(startTimer);
    }

    setTimeout(() => {
      dispatch(getGame(game.id));
    }, timeToStart * 1000);
  }
};

const startTimer = async (dispatch, getState) => {
  const state = getState();
  const { timeToStart, events } = state.roulette;

  const lastEvent = events[events.length - 1];

  console.log(lastEvent);

  if (timeToStart > 0) {
    setTimeout(() => {
      dispatch(setTime(timeToStart - 1));
      dispatch(startTimer);
    }, 1000);
  }
};
