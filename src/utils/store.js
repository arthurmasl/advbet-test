import { configureStore } from '@reduxjs/toolkit';
import rouletteReducer from '../slices/rouletteSlice';

const store = configureStore({
  reducer: {
    roulette: rouletteReducer
  }
});

export default store;
