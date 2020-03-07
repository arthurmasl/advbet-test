const wheelId = '1';
const apiUrl = `https://dev-games-backend.advbet.com/v1/ab-roulette/${wheelId}`;

const api = {
  getConfiguration: () => fetch(`${apiUrl}/configuration`),
  getHistory: () => fetch(`${apiUrl}/history?limit=200`),
  getShedule: () => fetch(`${apiUrl}/scheduledGames`),
  getGame: id => fetch(`${apiUrl}/game/${id}`),
  getNextGame: () => fetch(`${apiUrl}/nextGame`)
};

export default api;
