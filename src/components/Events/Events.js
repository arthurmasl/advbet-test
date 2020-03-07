import React from 'react';
import { useSelector } from 'react-redux';
import { selectGame, selectTimeToStart } from '../../slices/rouletteSlice';

const Events = () => {
  const game = useSelector(selectGame);
  const time = useSelector(selectTimeToStart);

  return (
    <React.Fragment>
      <h3>Events</h3>
      <p>
        Game {game.id} will start in {time}
      </p>
    </React.Fragment>
  );
};

export default Events;
