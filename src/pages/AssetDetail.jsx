import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { cryptoAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useWatchlist } from "../context/WatchlistContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const DAY_OPTIONS = [
  { label: "1D", days: 1 },
  { label: "7D", days: 7 },
  { label: "1M", days: 30 },
  { label: "3M", days: 90 },
  { label: "1Y", days: 365 },
];

function AssetDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const { isWatched, toggle } = useWatchlist();
  const navigate = useNavigate();

  const [coin, setCoin]       = useState(null);
  const [chartData, setChartData] = useState(null);
  const [days, setDays]       = useState(7);
  const [coinLoading, setCoinLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(true);
  const [error, setError]     = useState("");

  // Fetch coin detail
  useEffect(() => {
    setCoinLoading(true);
    cryptoAPI
      .getCoin(id)
      .then(setCoin)
      .catch(() => setError("Coin not found."))
      .finally(() => setCoinLoading(false));
  }, [id]);

  // Fetch chart on id or days change
  useEffect(() => {
    setChartLoading(true);
    cryptoAPI
      .getChart(id, days)
      .then((data) => {
        const prices = data.prices; // [[timestamp, price], ...]
        const labels = prices.map(([ts]) => {
          const d = new Date(ts);
          return days <= 1
            ? d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            : d.toLocaleDateString([], { month: "short", day: "numeric" });
        });
        const values = prices.map(([, price]) => price);

        const isPositive = values.length > 1 && values[values.length - 1] >= values[0];
        const color = isPositive ? "rgb(34,197,94)" : "rgb(239,68,68)";

        setChartData({
          labels,
          datasets: [
            {
              data: values,
              borderColor: color,
              backgroundColor: isPositive ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        });
      })
      .catch(() => {})
      .finally(() => setChartLoading(false));
  }, [id, days]);

  const handleWatchlist = () => {
    if (!user) { navigate("/signin"); return; }
    toggle(id);
  };

  if (error) {
    return (
      <div className="px-16 py-16">
        <h2 className="text-2xl font-semibold text-gray-700">{error}</h2>
        <Link to="/explore" className="mt-4 inline-block text-blue-600 hover:underline">← Back to Explore</Link>
      </div>
    );
  }

  const change24h = coin?.market_data?.price_change_percentage_24h;
  const price     = coin?.market_data?.current_price?.usd;

  return (
    <div className="px-6 md:px-16 py-12 max-w-5xl mx-auto">

      {/* Breadcrumb */}
      <Link to="/explore" className="text-sm text-gray-400 hover:text-blue-600 transition mb-6 inline-block">
        ← Back to Explore
      </Link>

      {coinLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-200 rounded w-64" />
          <div className="h-16 bg-gray-200 rounded w-40" />
        </div>
      ) : coin && (
        <>
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-4">
              <img src={coin.image?.large} alt={coin.name} className="w-14 h-14 rounded-full" />
              <div>
                <h1 className="text-4xl font-bold">{coin.name}</h1>
                <p className="text-gray-400 uppercase tracking-wide text-sm mt-1">{coin.symbol}</p>
              </div>
            </div>

            <button
              onClick={handleWatchlist}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition border ${
                isWatched(id)
                  ? "bg-yellow-50 border-yellow-300 text-yellow-700 hover:bg-yellow-100"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <svg className="w-4 h-4" fill={isWatched(id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {isWatched(id) ? "Watching" : "Add to Watchlist"}
            </button>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-5xl font-bold">
              ${price?.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
            <p className={`mt-2 text-xl font-medium ${change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              {change24h >= 0 ? "▲" : "▼"} {Math.abs(change24h)?.toFixed(2)}% (24h)
            </p>
          </div>

          {/* Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
            {/* Time range selector */}
            <div className="flex gap-2 mb-6">
              {DAY_OPTIONS.map(({ label, days: d }) => (
                <button
                  key={label}
                  onClick={() => setDays(d)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                    days === d
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {chartLoading ? (
              <div className="h-64 flex items-center justify-center text-gray-400 animate-pulse">
                Loading chart…
              </div>
            ) : chartData ? (
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { ticks: { maxTicksLimit: 8, font: { size: 11 } }, grid: { display: false } },
                    y: {
                      ticks: {
                        font: { size: 11 },
                        callback: (v) => "$" + Number(v).toLocaleString("en-US", { notation: "compact" }),
                      },
                      grid: { color: "rgba(0,0,0,0.05)" },
                    },
                  },
                }}
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-400">
                Chart unavailable
              </div>
            )}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Market Cap",    value: `$${coin.market_data?.market_cap?.usd?.toLocaleString("en-US", { notation: "compact" })}` },
              { label: "24h Volume",    value: `$${coin.market_data?.total_volume?.usd?.toLocaleString("en-US", { notation: "compact" })}` },
              { label: "Circulating",   value: `${coin.market_data?.circulating_supply?.toLocaleString("en-US", { notation: "compact" })} ${coin.symbol?.toUpperCase()}` },
              { label: "All-Time High", value: `$${coin.market_data?.ath?.usd?.toLocaleString("en-US", { minimumFractionDigits: 2 })}` },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-400 mb-1">{label}</p>
                <p className="font-semibold text-sm">{value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          {coin.description?.en && (
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">About {coin.name}</h2>
              <p
                className="text-gray-600 text-sm leading-relaxed line-clamp-5"
                dangerouslySetInnerHTML={{ __html: coin.description.en }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AssetDetail;
