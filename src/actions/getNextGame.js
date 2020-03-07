import { setShedule, setLog, addEvent } from '../slices/rouletteSlice';
import api from '../utils/api';
import { getGame } from './getGame';
import { getHistory } from './getHistory';
import { counter } from './counter';

let timer = null;

export const getNextGame = async dispatch => {
  const response = await api.getNextGame();
  const game = await response.json();

  dispatch(getHistory);
  dispatch(setLog('Checking for new game'));
  dispatch(setLog(`GET ../nextGame`));

  if (game) {
    const timeToStart = game.fakeStartDelta;

    dispatch(setShedule(game));
    dispatch(setLog(`Sleeping for ${timeToStart} sec`));
    dispatch(addEvent({ id: game.id, time: timeToStart }));

    timer = setInterval(() => dispatch(counter), 1000);

    setTimeout(() => {
      clearInterval(timer);
      dispatch(getGame(game.id));
    }, timeToStart * 1000);
  }
};
