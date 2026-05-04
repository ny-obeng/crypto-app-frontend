import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true, // sends HTTP-only cookie automatically
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
    api.get("/crypto/markets", { params: { page, per_page: perPage } }).then((r) => r.data),

  getCoin: (id) => api.get(`/crypto/coin/${id}`).then((r) => r.data),

  getChart: (id, days = 7) =>
    api.get(`/crypto/chart/${id}`, { params: { days } }).then((r) => r.data),

  search: (query) =>
    api.get("/crypto/search", { params: { query } }).then((r) => r.data),

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