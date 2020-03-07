import api from '../utils/api';
import { setStats, setLog } from '../slices/rouletteSlice';

export const getHistory = async dispatch => {
  const response = await api.getHistory();
  const history = await response.json();

  dispatch(setLog('GET .../stats'));
  dispatch(setStats(history));
};
