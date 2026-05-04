import { createContext, useContext, useEffect, useState } from "react";
import { watchlistAPI } from "../services/api";
import { useAuth } from "./AuthContext";

const WatchlistContext = createContext(null);

export function WatchlistProvider({ children }) {
  const { user } = useAuth();
  const [watchlist, setWatchlist] = useState([]);
  const [wlLoading, setWlLoading] = useState(false);

  // Fetch watchlist whenever user logs in/out
  useEffect(() => {
    if (!user) { setWatchlist([]); return; }

    setWlLoading(true);
    watchlistAPI
      .get()
      .then(({ watchlist }) => setWatchlist(watchlist))
      .catch(console.error)
      .finally(() => setWlLoading(false));
  }, [user]);

  const isWatched = (coinId) => watchlist.includes(coinId);

  const toggle = async (coinId) => {
    if (!user) return; // caller should redirect to sign-in
    try {
      if (isWatched(coinId)) {
        const { watchlist: updated } = await watchlistAPI.remove(coinId);
        setWatchlist(updated);
      } else {
        const { watchlist: updated } = await watchlistAPI.add(coinId);
        setWatchlist(updated);
      }
    } catch (err) {
      console.error("Watchlist toggle error:", err);
    }
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, wlLoading, isWatched, toggle }}>
      {children}
    </WatchlistContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWatchlist = () => {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error("useWatchlist must be used inside <WatchlistProvider>");
  return ctx;
};
