import { setConfig } from '../slices/rouletteSlice';
import api from '../utils/api';

export const getConfig = async dipsatch => {
  const response = await api.getConfiguration();
  const data = await response.json();

  dipsatch(setConfig(data));
};
