import { createSlice } from '@reduxjs/toolkit';

const rouletteSlice = createSlice({
  name: 'roulette',
  initialState: {
    config: {},
    stats: [],
    shedule: {},
    log: [],
    events: [],
    isSpinning: false
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

      state.log.push(`${date.toISOString()} ${action.payload}`);
    },

    setIsSpinning(state, action) {
      state.isSpinning = action.payload;
    },

    addEvent(state, action) {
      state.events.push(action.payload);
    },

    setEvent(state, action) {
      state.events[state.events.length - 1] = {
        ...state.events[state.events.length - 1],
        ...action.payload
      };
    }
  }
});

export const selectConfig = state => state.roulette.config;
export const selectStats = state => state.roulette.stats;
export const selectLog = state => state.roulette.log;
export const selectIsSpinning = state => state.roulette.isSpinning;
export const selectGame = state => state.roulette.shedule;
export const selectEvents = state => state.roulette.events;

export const {
  setConfig,
  setStats,
  setShedule,
  setLog,
  setIsSpinning,
  addEvent,
  setEvent
} = rouletteSlice.actions;
export default rouletteSlice.reducer;
