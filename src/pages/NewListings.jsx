import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cryptoAPI } from "../services/api";

function NewListings() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
  cryptoAPI
    .getGainers()
    .then(setGainers)
    .catch(() => {}) // silently fail — empty state handles it
    .finally(() => setLoading(false));
 }, []);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">New Listings</h1>
      <p className="text-gray-500 mb-8">
        Most recently added cryptocurrencies, sorted from newest to oldest.
      </p>

      

      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : coins.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-gray-300 rounded-2xl">
          <p className="text-5xl mb-4">🆕</p>
          <p className="text-gray-500 mb-6">No listings yet. Be the first to add one.</p>
          <Link
            to="/add-crypto"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Crypto
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-5 text-sm font-semibold text-gray-500">#</th>
                <th className="p-5 text-sm font-semibold text-gray-500">Name</th>
                <th className="p-5 text-sm font-semibold text-gray-500">Price (USD)</th>
                <th className="p-5 text-sm font-semibold text-gray-500">24h Change</th>
                <th className="p-5 text-sm font-semibold text-gray-500 hidden md:table-cell">Listed</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, idx) => (
                <tr key={coin._id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-5 text-gray-400 text-sm">{idx + 1}</td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      {coin.image ? (
                        <img src={coin.image} alt={coin.name} className="w-7 h-7 rounded-full" />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">
                          {coin.symbol?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-sm">{coin.name}</p>
                        <p className="text-xs text-gray-400 uppercase">{coin.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 font-medium text-sm">
                    ${Number(coin.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </td>
                  <td className={`p-5 font-medium text-sm ${coin.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {coin.change24h >= 0 ? "▲" : "▼"} {Math.abs(coin.change24h).toFixed(2)}%
                  </td>
                  <td className="p-5 text-sm text-gray-400 hidden md:table-cell">
                    {formatDate(coin.createdAt)}
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

export default NewListings;