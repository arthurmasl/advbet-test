const wheelId = '1';
const apiUrl = `https://dev-games-backend.advbet.com/v1/ab-roulette/${wheelId}`;

const api = {
  getConfiguration: () => fetch(`${apiUrl}/configuration`),
  getHistory: () => fetch(`${apiUrl}/history?limit=200`)
};

export default api;
