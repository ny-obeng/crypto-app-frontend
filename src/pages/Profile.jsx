import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  // Protect — redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate("/signin", { replace: true });
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  if (loading || !user) return null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-[#111111] w-full max-w-md p-10 rounded-2xl border border-gray-800">

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold text-white">
            {user.name?.charAt(0).toUpperCase()}
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white text-center mb-1">{user.name}</h1>
        <p className="text-gray-400 text-center text-sm mb-8">{user.email}</p>

        {/* Info cards */}
        <div className="space-y-4 mb-8">
          <div className="bg-[#1a1a1a] rounded-xl px-5 py-4 border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Full Name</p>
            <p className="text-white font-medium">{user.name}</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl px-5 py-4 border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Address</p>
            <p className="text-white font-medium">{user.email}</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl px-5 py-4 border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Member Since</p>
            <p className="text-white font-medium">
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric"
              })}
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl px-5 py-4 border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Watchlist</p>
            <p className="text-white font-medium">{user.watchlist?.length ?? 0} coins</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600/20 border border-red-700/50 text-red-400 py-3 rounded-lg font-semibold hover:bg-red-600/30 transition"
        >
          Sign Out
        </button>

      </div>
    </div>
  );
}

export default Profile;