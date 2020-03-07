import React, { useEffect } from 'react';
import './App.style.scss';

import { useDispatch } from 'react-redux';

import Board from '../Board/Board';
import History from '../History/History';

import { getConfig } from '../../actions/getConfig';
import { getHistory } from '../../actions/getHistory';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig);
    dispatch(getHistory);
  }, [dispatch]);

  return (
    <div className="app-wrapper">
      <History />
      <Board />
    </div>
  );
};

export default App;
