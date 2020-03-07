import React, { useEffect } from 'react';
import './App.style.scss';

import { useDispatch } from 'react-redux';

import Board from '../Board/Board';
import History from '../History/History';
import Events from '../Events/Events';

import { startGame } from '../../actions/startGame';
import Log from '../Log/Log';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGame);
  }, [dispatch]);

  return (
    <div className="app-wrapper">
      <History />
      <Board />
      <Events />
      <Log />
    </div>
  );
};

export default App;
