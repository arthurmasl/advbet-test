import React from 'react';
import './Log.style.scss';
import { useSelector } from 'react-redux';
import { selectLog } from '../../slices/rouletteSlice';

const Log = () => {
  const log = useSelector(selectLog);

  return (
    <div className="log-wrapper">
      <h3>Log</h3>
      <div className="log">
        {log.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Log;
