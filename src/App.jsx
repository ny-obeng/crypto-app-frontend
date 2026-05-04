import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import DemoBanner from "./components/layout/DemoBanner";

// Pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Gainers      from "./pages/Gainers";
import NewListings  from "./pages/NewListings";
import AddCrypto    from "./pages/AddCrypto";

// Redirect logged-in users away from auth pages
function GuestRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <Navigate to="/" replace /> : children;
}

function App() {
  return (
    <Router>
      <DemoBanner />
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/explore"   element={<Explore />} />
          <Route path="/asset/:id" element={<AssetDetail />} />
          <Route path="/learn"     element={<Learn />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/profile"   element={<Profile />} />
          <Route path="/gainers"      element={<Gainers />} />
          <Route path="/new-listings" element={<NewListings />} />
          <Route path="/add-crypto"   element={<AddCrypto />} />

          <Route path="/signin" element={<GuestRoute><SignIn /></GuestRoute>} />
          <Route path="/signup" element={<GuestRoute><SignUp /></GuestRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;