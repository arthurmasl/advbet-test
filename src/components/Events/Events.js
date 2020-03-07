import React from 'react';
import './Events.style.scss';
import { useSelector } from 'react-redux';
import { selectEvents } from '../../slices/rouletteSlice';

const Events = () => {
  const events = useSelector(selectEvents);

  return (
    <div className="events-wrapper">
      <h3>Events</h3>
      {events.map(event => (
        <div className="event" key={event.id}>
          {event.message}
        </div>
      ))}
    </div>
  );
};

export default Events;
