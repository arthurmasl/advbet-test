import React from 'react';
import './History.style.scss';

import { useSelector } from 'react-redux';
import { selectHistory } from './History.selectors';

const History = () => {
  const history = useSelector(selectHistory);

  return (
    <div className="history">
      {history.map(({ hits, slot, color }) => (
        <div key={slot}>
          <div className={color}>{slot}</div>
          <div>{hits}</div>
        </div>
      ))}
    </div>
  );
};

export default History;
