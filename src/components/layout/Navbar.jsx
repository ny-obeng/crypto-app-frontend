import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import coinbaseImage from "../../assets/coinbaseimage.png";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate("/");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={coinbaseImage} alt="Crypto App Logo" className="h-8 w-auto" />
        </Link>

        {/* Center links — desktop only */}
        <div className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <Link to="/explore"      className="hover:text-black transition">Explore</Link>
          <Link to="/gainers"      className="hover:text-black transition">Top Gainers</Link>
          <Link to="/new-listings" className="hover:text-black transition">New Listings</Link>
          <Link to="/add-crypto"   className="hover:text-black transition">Add Crypto</Link>
          <Link to="/learn"        className="hover:text-black transition">Learn</Link>
          {user && <Link to="/watchlist" className="hover:text-black transition">Watchlist</Link>}
          {user && <Link to="/profile"   className="hover:text-black transition">Profile</Link>}
        </div>

        {/* Right side — desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
            aria-label="Search"
            onClick={() => navigate("/explore")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>

          <button
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
            aria-label="Language"
            onClick={() => alert("Language selection coming soon.")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          <div className="w-px h-5 bg-gray-200 mx-1" />

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-gray-700"
              >
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <span className="hidden sm:inline">{user.name.split(" ")[0]}</span>
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                  <Link to="/watchlist" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">⭐ Watchlist</Link>
                  <Link to="/profile"   onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">👤 Profile</Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Sign out</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" className="text-gray-700 font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition">Sign in</Link>
              <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Sign up</Link>
            </>
          )}
        </div>

        {/* Hamburger button — mobile/tablet only */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-1">
          <Link to="/explore"      onClick={closeMenu} className="block py-2 text-gray-700 font-medium hover:text-blue-600">Explore</Link>
          <Link to="/gainers"      onClick={closeMenu} className="block py-2 text-gray-700 font-medium hover:text-blue-600">Top Gainers</Link>
          <Link to="/new-listings" onClick={closeMenu} className="block py-2 text-gray-700 font-medium hover:text-blue-600">New Listings</Link>
          <Link to="/add-crypto"   onClick={closeMenu} className="block py-2 text-gray-700 font-medium hover:text-blue-600">Add Crypto</Link>
          <Link to="/learn"        onClick={closeMenu} className="block py-2 text-gray-700 font-medium hover:text-blue-600">Learn</Link>
          {user && <Link to="/watchlist" onClick={closeMenu} className="block py-2 text-gray-700 font-medium hover:text-blue-600">⭐ Watchlist</Link>}
          {user && <Link to="/profile"   onClick={closeMenu} className="block py-2 text-gray-700 font-medium hover:text-blue-600">👤 Profile</Link>}

          {/* Search & Language — included in mobile menu */}
          <div className="border-t border-gray-200 pt-3 mt-3 flex gap-2">
            <button
              className="flex items-center gap-2 py-2 px-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition flex-1"
              aria-label="Search"
              onClick={() => { navigate("/explore"); closeMenu(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              Search
            </button>
            <button
              className="flex items-center gap-2 py-2 px-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition flex-1"
              aria-label="Language"
              onClick={() => { alert("Language selection coming soon."); closeMenu(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z" />
              </svg>
              Language
            </button>
          </div>

          <div className="border-t border-gray-200 pt-3 mt-3">
            {user ? (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <button onClick={handleLogout} className="w-full text-left py-2 text-red-600 font-medium hover:text-red-700">
                  Sign out
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Link to="/signin" onClick={closeMenu} className="block text-center py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">Sign in</Link>
                <Link to="/signup" onClick={closeMenu} className="block text-center py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Sign up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
