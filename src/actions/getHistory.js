import api from '../utils/api';
import { setStats } from '../slices/rouletteSlice';

export const getHistory = async dispatch => {
  const response = await api.getHistory();
  const data = await response.json();

  dispatch(setStats(data));
};
