import { setConfig } from '../slices/rouletteSlice';
import { setLog } from '../slices/rouletteSlice';
import api from '../utils/api';

export const getConfig = async dispatch => {
  const response = await api.getConfiguration();
  const data = await response.json();

  dispatch(setLog('GET .../configuration'));
  dispatch(setConfig(data));
};
