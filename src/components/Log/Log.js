import React from 'react';
import { useSelector } from 'react-redux';
import { selectLog } from '../../slices/rouletteSlice';

const Log = () => {
  const log = useSelector(selectLog);

  return (
    <React.Fragment>
      <h3>Log</h3>
      <div className="log">
        {log.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Log;
