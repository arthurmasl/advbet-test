import React from 'react';
import './History.style.scss';

import { useSelector } from 'react-redux';
import { selectHistory } from './History.selectors';

const History = () => {
  const history = useSelector(selectHistory);

  const cold = i => i < 5;
  const hot = i => i >= history.length - 5;

  const statusCn = i => (cold(i) ? 'cold' : hot(i) ? 'hot' : null);

  return (
    <div className="history-wrapper">
      <h3>Stats</h3>

      <div className="history">
        <div className="history-labels">
          <div></div>
          <div>Slot</div>
          <div>Hits</div>
        </div>

        <div className="history-grid">
          <div className="history-stats">
            <div className="cold">Cold</div>
            <div className="neutral">Neutral</div>
            <div className="hot">Hot</div>
          </div>

          <div className="history-cells">
            {history.map(({ hits, slot, color }, i) => (
              <div key={slot} className={`history-cell ${statusCn(i)}`}>
                <div className={`slot-cell ${color}`}>{slot}</div>
                <div className="hits-cell">{hits}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
