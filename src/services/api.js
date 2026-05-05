import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});

// ── Auth ─────────────────────────────────────────────────────────────────────
export const authAPI = {
  register: (data) => api.post("/auth/register", data).then((r) => r.data),
  login:    (data) => api.post("/auth/login",    data).then((r) => r.data),
  logout:   ()     => api.post("/auth/logout").then((r) => r.data),
  getMe:    ()     => api.get("/auth/me").then((r) => r.data),
  getProfile: ()   => api.get("/auth/profile").then((r) => r.data),
};

// ── Crypto ───────────────────────────────────────────────────────────────────
export const cryptoAPI = {
  getMarkets: (page = 1, perPage = 50) =>
    axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: perPage,
        page,
        sparkline: false,
        price_change_percentage: "24h",
      }
    }).then((r) => r.data),

  getCoin: (id) =>
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
      params: { localization: false, tickers: false, community_data: false, developer_data: false }
    }).then((r) => r.data),

  getChart: (id, days = 7) =>
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
      params: { vs_currency: "usd", days }
    }).then((r) => r.data),

  search: (query) =>
    axios.get("https://api.coingecko.com/api/v3/search", { params: { query } })
      .then((r) => r.data.coins.slice(0, 10)),

  getGainers: () => api.get("/crypto/gainers").then((r) => r.data),
  getNewListings: () => api.get("/crypto/new").then((r) => r.data),
  addCrypto: (data) => api.post("/crypto", data).then((r) => r.data),
};

// ── Watchlist ─────────────────────────────────────────────────────────────────
export const watchlistAPI = {
  get:    ()       => api.get("/watchlist").then((r) => r.data),
  add:    (coinId) => api.post(`/watchlist/${coinId}`).then((r) => r.data),
  remove: (coinId) => api.delete(`/watchlist/${coinId}`).then((r) => r.data),
};

export default api;