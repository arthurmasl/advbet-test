import {
  setShedule,
  setLog,
  addEvent,
  setEvent
} from '../slices/rouletteSlice';
import api from '../utils/api';
import { getGame } from './getGame';
import { getHistory } from './getHistory';

let timer = null;

export const getNextGame = async dispatch => {
  const response = await api.getNextGame();
  const data = await response.json();

  dispatch(getHistory);
  dispatch(setLog('Checking for new game'));
  dispatch(setLog(`GET ../nextGame`));

  if (data) {
    const game = data;
    const timeToStart = game.fakeStartDelta;

    dispatch(setShedule(game));
    dispatch(setLog(`Sleeping for ${timeToStart} sec`));
    dispatch(addEvent({ id: game.id, time: timeToStart }));

    timer = setInterval(() => dispatch(timerFn), 1000);

    setTimeout(() => {
      clearInterval(timer);
      dispatch(getGame(game.id));
    }, timeToStart * 1000);
  }
};

const timerFn = async (dispatch, getState) => {
  const state = getState();
  const { events } = state.roulette;

  const lastEvent = events[events.length - 1];

  if (lastEvent.time > 0) {
    dispatch(
      setEvent({
        time: lastEvent.time - 1,
        message: `Game ${lastEvent.id} starts in ${lastEvent.time - 1}`
      })
    );
  }
};
