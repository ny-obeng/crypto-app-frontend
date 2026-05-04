function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 text-sm text-gray-600">

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Affiliates</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Security</li>
              <li>Investors</li>
              <li>Vendors</li>
              <li>Legal & privacy</li>
              <li>Cookie policy</li>
              <li>Cookie preferences</li>
              <li>Digital Asset Disclosures</li>
            </ul>
          </div>

          {/* LEARN */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>Explore</li>
              <li>Market statistics</li>
              <li>Crypto Bytes newsletter</li>
              <li>Crypto basics</li>
              <li>Tips & tutorials</li>
              <li>Crypto glossary</li>
              <li>Market updates</li>
              <li>What is Bitcoin?</li>
              <li>What is crypto?</li>
              <li>What is a blockchain?</li>
              <li>How to set up a crypto wallet?</li>
              <li>How to send crypto?</li>
              <li>Taxes</li>
            </ul>
          </div>

          {/* INDIVIDUALS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Individuals</h3>
            <ul className="space-y-2">
              <li>Buy & sell</li>
              <li>Earn free crypto</li>
              <li>Base App</li>
              <li>Coinbase One</li>
              <li>Debit Card</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-6 mb-4">Businesses</h3>
            <ul className="space-y-2">
              <li>Asset Listings</li>
              <li>Crypto Business</li>
              <li>Payments</li>
              <li>Commerce</li>
              <li>Token Manager</li>
            </ul>
          </div>

          {/* INSTITUTIONS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Institutions</h3>
            <ul className="space-y-2">
              <li>Prime</li>
              <li>Staking</li>
              <li>Exchange</li>
              <li>International Exchange</li>
              <li>Derivatives Exchange</li>
              <li>Verified Pools</li>
            </ul>
          </div>

          {/* DEVELOPERS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>Developer Platform</li>
              <li>Base</li>
              <li>Server Wallets</li>
              <li>Embedded Wallets</li>
              <li>Base Accounts (Smart Wallets)</li>
              <li>Onramp & Offramp</li>
              <li>x402</li>
              <li>Trade API</li>
              <li>Paymaster</li>
              <li>OnchainKit</li>
              <li>Data API</li>
              <li>Verifications</li>
              <li>Node</li>
              <li>AgentKit</li>
              <li>Staking</li>
              <li>Faucet</li>
              <li>Exchange API</li>
              <li>International Exchange API</li>
              <li>Prime API</li>
              <li>Derivatives API</li>
            </ul>
          </div>

          {/* SUPPORT + PRICES */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Help center</li>
              <li>Contact us</li>
              <li>Create account</li>
              <li>ID verification</li>
              <li>Account information</li>
              <li>Payment methods</li>
              <li>Account access</li>
              <li>Supported crypto</li>
              <li>Status</li>
              <li>Asset prices</li>
              <li>Bitcoin price</li>
              <li>Ethereum price</li>
              <li>Solana price</li>
              <li>XRP price</li>
              <li>Stock prices</li>
              <li>NVIDIA price</li>
              <li>Apple price</li>
              <li>Microsoft price</li>
              <li>Amazon price</li>
            </ul>
          </div>

        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 mt-14 mb-6">
          {/* X (Twitter) */}
          <a href="#" aria-label="X" className="text-gray-500 hover:text-black transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-black transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-black transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>

          {/* TikTok */}
          <a href="#" aria-label="TikTok" className="text-gray-500 hover:text-black transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
            </svg>
          </a>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© 2026 Crypto App</span>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-black transition">Privacy</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-black transition">Terms &amp; Conditions</a>
          </div>

          <div className="flex items-center gap-1 hover:text-black transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>Global</span>
            <span className="text-gray-300">•</span>
            <span>English</span>
          </div>
        </div>

      </div>
      {/* Demo disclaimer */}
<div className="border-t border-gray-800 mt-6 pt-4 text-center">
  <p className="text-xs text-gray-500">
    🎓 This is a demo/student project. Do not enter real personal information.
    Not affiliated with Coinbase, Inc.
  </p>
</div>
    </footer>
  );
}

export default Footer;
