import { createSlice } from '@reduxjs/toolkit';

const rouletteSlice = createSlice({
  name: 'roulette',
  initialState: {
    config: {},
    stats: [],
    shedule: {},
    log: [],
    events: [],
    isSpinning: false,
    timeToStart: 0
  },
  reducers: {
    setConfig(state, action) {
      state.config = action.payload;
    },

    setStats(state, action) {
      state.stats = action.payload;
    },

    setShedule(state, action) {
      state.shedule = action.payload;
    },

    setLog(state, action) {
      const date = new Date();

      state.log.push(`${date} ${action.payload}`);
    },

    setIsSpinning(state, action) {
      state.isSpinning = action.payload;
    },

    setGame(state, action) {
      state.game = action.payload;
    },

    setTime(state, action) {
      state.timeToStart = action.payload;
    },

    setEvents(state, action) {
      state.events = action.payload;
    }
  }
});

export const selectConfig = state => state.roulette.config;
export const selectStats = state => state.roulette.stats;
export const selectLog = state => state.roulette.log;
export const selectIsSpinning = state => state.roulette.isSpinning;
export const selectGame = state => state.roulette.shedule;
export const selectTimeToStart = state => state.roulette.timeToStart;

export const {
  setConfig,
  setStats,
  setShedule,
  setLog,
  setIsSpinning,
  setTime
} = rouletteSlice.actions;
export default rouletteSlice.reducer;
