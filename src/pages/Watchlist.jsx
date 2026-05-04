import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWatchlist } from "../context/WatchlistContext";
import { cryptoAPI } from "../services/api";

function Watchlist() {
  const { user, loading: authLoading } = useAuth();
  const { watchlist, wlLoading, toggle } = useWatchlist();
  const navigate = useNavigate();

  const [coins, setCoins]         = useState([]);
  const [coinsLoading, setCoinsLoading] = useState(false);

  // Redirect to sign-in if not logged in
  useEffect(() => {
    if (!authLoading && !user) navigate("/signin");
  }, [user, authLoading, navigate]);

  // Fetch live data for watched coins
  useEffect(() => {
    if (!watchlist.length) { setCoins([]); return; }
    setCoinsLoading(true);

    // Get full markets list and filter to watchlist
    cryptoAPI
      .getMarkets(1, 250)
      .then((data) => {
        const watched = data.filter((c) => watchlist.includes(c.id));
        setCoins(watched);
      })
      .catch(console.error)
      .finally(() => setCoinsLoading(false));
  }, [watchlist]);

  if (authLoading || wlLoading) {
    return (
      <div className="px-16 py-16">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-48" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-14 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Your Watchlist</h1>
      <p className="text-gray-500 mb-8">
        {watchlist.length === 0
          ? "You haven't added any coins yet."
          : `Tracking ${watchlist.length} coin${watchlist.length > 1 ? "s" : ""}`}
      </p>

      {watchlist.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-gray-300 rounded-2xl">
          <p className="text-5xl mb-4">⭐</p>
          <p className="text-gray-500 mb-6">Star any coin on the Explore page to add it here.</p>
          <Link
            to="/explore"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Browse Crypto
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-5 font-semibold text-gray-500 text-sm">Name</th>
                <th className="p-5 font-semibold text-gray-500 text-sm">Price</th>
                <th className="p-5 font-semibold text-gray-500 text-sm">24h</th>
                <th className="p-5 font-semibold text-gray-500 text-sm">Remove</th>
              </tr>
            </thead>
            <tbody>
              {coinsLoading
                ? Array.from({ length: watchlist.length }).map((_, i) => (
                    <tr key={i} className="border-t animate-pulse">
                      <td className="p-5"><div className="h-4 bg-gray-200 rounded w-40" /></td>
                      <td className="p-5"><div className="h-4 bg-gray-200 rounded w-24" /></td>
                      <td className="p-5"><div className="h-4 bg-gray-200 rounded w-16" /></td>
                      <td className="p-5"><div className="h-4 bg-gray-200 rounded w-6" /></td>
                    </tr>
                  ))
                : coins.map((coin) => (
                    <tr key={coin.id} className="border-t hover:bg-gray-50 transition">
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
                      <td className="p-5">
                        <button
                          onClick={() => toggle(coin.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                          title="Remove from watchlist"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
