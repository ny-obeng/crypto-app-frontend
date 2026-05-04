import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cryptoAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useWatchlist } from "../context/WatchlistContext";

function StarIcon({ filled }) {
  return (
    <svg
      className={`w-5 h-5 transition ${filled ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function Explore() {
  const { user } = useAuth();
  const { isWatched, toggle } = useWatchlist();
  const navigate = useNavigate();

  const [coins, setCoins]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState("");
  const [search, setSearch]     = useState("");
  const [page, setPage]         = useState(1);

  const fetchMarkets = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await cryptoAPI.getMarkets(page, 50);
      setCoins(data);
    } catch {
      setError("Failed to load market data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => { fetchMarkets(); }, [fetchMarkets]);

  const filtered = coins.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleWatchlistClick = (e, coinId) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) { navigate("/signin"); return; }
    toggle(coinId);
  };

  return (
    <div className="px-6 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-4">Explore Crypto</h1>
      <p className="text-gray-500 mb-8">Live prices updated every minute via CoinGecko.</p>

      {/* Search */}
      <div className="mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search Bitcoin, ETH, SOL…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
          {error}{" "}
          <button onClick={fetchMarkets} className="underline font-medium">Retry</button>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-5 font-semibold text-gray-500 text-sm w-8">#</th>
              <th className="p-5 font-semibold text-gray-500 text-sm">Name</th>
              <th className="p-5 font-semibold text-gray-500 text-sm">Price</th>
              <th className="p-5 font-semibold text-gray-500 text-sm">24h Change</th>
              <th className="p-5 font-semibold text-gray-500 text-sm hidden md:table-cell">Market Cap</th>
              <th className="p-5 font-semibold text-gray-500 text-sm w-12">Watch</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              Array.from({ length: 10 }).map((_, i) => (
                <tr key={i} className="border-t animate-pulse">
                  <td className="p-5"><div className="h-4 bg-gray-200 rounded w-4" /></td>
                  <td className="p-5"><div className="h-4 bg-gray-200 rounded w-32" /></td>
                  <td className="p-5"><div className="h-4 bg-gray-200 rounded w-20" /></td>
                  <td className="p-5"><div className="h-4 bg-gray-200 rounded w-16" /></td>
                  <td className="p-5 hidden md:table-cell"><div className="h-4 bg-gray-200 rounded w-24" /></td>
                  <td className="p-5"><div className="h-4 bg-gray-200 rounded w-6" /></td>
                </tr>
              ))
            ) : filtered.length === 0 ? (
              <tr className="border-t">
                <td colSpan={6} className="p-10 text-center text-gray-400">
                  No coins match "{search}"
                </td>
              </tr>
            ) : (
              filtered.map((coin, idx) => (
                <tr key={coin.id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-5 text-gray-400 text-sm">{(page - 1) * 50 + idx + 1}</td>

                  <td className="p-5">
                    <Link to={`/asset/${coin.id}`} className="flex items-center gap-3 hover:text-blue-600">
                      <img src={coin.image} alt={coin.name} className="w-7 h-7 rounded-full" />
                      <div>
                        <p className="font-semibold text-sm">{coin.name}</p>
                        <p className="text-xs text-gray-400 uppercase">{coin.symbol}</p>
                      </div>
                    </Link>
                  </td>

                  <td className="p-5 font-medium text-sm">
                    ${coin.current_price?.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </td>

                  <td className={`p-5 font-medium text-sm ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </td>

                  <td className="p-5 text-sm text-gray-600 hidden md:table-cell">
                    ${coin.market_cap?.toLocaleString("en-US", { notation: "compact" })}
                  </td>

                  <td className="p-5">
                    <button onClick={(e) => handleWatchlistClick(e, coin.id)} title={user ? "Toggle watchlist" : "Sign in to watch"}>
                      <StarIcon filled={isWatched(coin.id)} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!loading && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            ← Prev
          </button>
          <span className="px-4 py-2 text-sm text-gray-500">Page {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default Explore;
