import { setEvent } from '../slices/rouletteSlice';

export const counter = async (dispatch, getState) => {
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
