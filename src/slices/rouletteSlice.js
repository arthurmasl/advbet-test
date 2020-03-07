import { createSlice } from '@reduxjs/toolkit';

const rouletteSlice = createSlice({
  name: 'roulette',
  initialState: {
    config: {},
    stats: []
  },
  reducers: {
    setConfig(state, action) {
      state.config = action.payload;
    },
    setStats(state, action) {
      state.stats = action.payload;
    }
  }
});

export const selectConfig = state => state.roulette.config;
export const selectStats = state => state.roulette.stats;

export const { setConfig, setStats } = rouletteSlice.actions;
export default rouletteSlice.reducer;
