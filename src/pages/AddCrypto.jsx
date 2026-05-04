import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { cryptoAPI } from "../services/api";

function AddCrypto() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    symbol: "",
    price: "",
    image: "",
    change24h: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await cryptoAPI.addCrypto({
        name: form.name,
        symbol: form.symbol,
        price: Number(form.price),
        image: form.image,
        change24h: Number(form.change24h),
      });
      setSuccess(`${form.name} added successfully!`);
      setForm({ name: "", symbol: "", price: "", image: "", change24h: "" });
      setTimeout(() => navigate("/new-listings"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add cryptocurrency.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="bg-white w-full max-w-lg p-10 rounded-2xl border border-gray-200 shadow-sm">

        <div className="mb-8">
          <Link to="/explore" className="text-sm text-gray-400 hover:text-blue-600 transition">
            ← Back to Explore
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-1">Add Cryptocurrency</h1>
          <p className="text-gray-500 text-sm">Add a new coin to the database.</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
            ✅ {success} Redirecting...
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Bitcoin"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Symbol <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="symbol"
              value={form.symbol}
              onChange={handleChange}
              placeholder="e.g. BTC"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (USD) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. 65000"
              required
              min="0"
              step="any"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              24h Change (%)
            </label>
            <input
              type="number"
              name="change24h"
              value={form.change24h}
              onChange={handleChange}
              placeholder="e.g. +2.5 or -1.3"
              step="any"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/coin-logo.png"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {form.image && (
              <div className="mt-2 flex items-center gap-2">
                <img
                  src={form.image}
                  alt="preview"
                  className="w-8 h-8 rounded-full object-cover border"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <span className="text-xs text-gray-400">Preview</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? "Adding..." : "Add Cryptocurrency"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCrypto;