import vidImage from "../assets/vid.png";
import handImage from "../assets/hand.png";
import tokensImage from "../assets/tokens.png";
import blackieImage from "../assets/blackie.png";
import whitieImage from "../assets/whitie.png";
import scaleImage from "../assets/scale.png";
import coinnImage from "../assets/coinn.png";
import nan1 from "../assets/nan1.png";
import nan2 from "../assets/nan2.png";
import nan3 from "../assets/nan3.png";
import nan4 from "../assets/nan4.png";
import mam1 from "../assets/mam1.png";
import mam2 from "../assets/mam2.png";
import mam3 from "../assets/mam3.png";
import mam4 from "../assets/mam4.png";
import kak1 from "../assets/kak1.png";
import kak2 from "../assets/kak2.png";
import kak3 from "../assets/kak3.png";
import kak4 from "../assets/kak4.png";
import last1 from "../assets/last1.png";
import last2 from "../assets/last2.png";
import last3 from "../assets/last3.png";
import last4 from "../assets/last4.png";

function Learn() {
  return (
    <div className="pt-16 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Crypto questions, answered
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore clear, simple explanations to common cryptocurrency questions.
            Whether you're just getting started or looking to deepen your knowledge,
            we've got you covered.
          </p>
        </div>


        {/* FEATURED + POPULAR */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">

          {/* FEATURED */}
          <div className="md:col-span-2">

            <p className="text-sm font-semibold text-gray-500 mb-6">
              Featured
            </p>

            <img
              src={vidImage}
              alt="Featured video"
              className="w-full rounded-lg mb-6"
            />

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Video Tutorial
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              When is the best time to invest in crypto?
            </h2>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              When prices are fluctuating, how do you know when to buy?
              Learn more about using dollar-cost averaging to weather
              price volatility.
            </p>
          </div>


        
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Popular
            </h3>

            <div className="space-y-8 text-sm">

              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">
                  Beginner's Guide
                </p>
                <p className="font-semibold">
                  What is cryptocurrency?
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">
                  Getting Started
                </p>
                <p className="font-semibold">
                  How to earn crypto rewards
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">
                  Getting Started
                </p>
                <p className="font-semibold">
                  How to add crypto to your Coinbase Wallet
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">
                  Your Crypto
                </p>
                <p className="font-semibold">
                  Tax forms explained: A guide to U.S. tax forms and crypto reports
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">
                  Market Update
                </p>
                <p className="font-semibold">
                  Everything you need to know about the first-ever U.S. Bitcoin ETF
                </p>
              </div>

            </div>
          </div>

        </div>


        {/* CATEGORY ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm mb-24">
          <div>
            <h4 className="font-semibold mb-2">Crypto basics</h4>
            <p className="text-gray-500">See more →</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Tips and tutorials</h4>
            <p className="text-gray-500">See more →</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Advanced trading</h4>
            <p className="text-gray-500">See more →</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Futures</h4>
            <p className="text-gray-500">See more →</p>
          </div>
        </div>


        {/* CRYPTO BASICS SECTION */}
        <section className="py-24 px-6 bg-gray-50 -mx-6">
          <div className="max-w-6xl mx-auto">

            {/* SECTION HEADER */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Crypto basics
              </h2>

              <p className="text-center text-gray-600 ">
              New to crypto? Not for long — start with these guides and explainers
              </p>
            </div>


            {/* TWO CARDS */}
            <div className="grid md:grid-cols-2 gap-16">

              {/* CARD 1 */}
              <div>
                <img
                  src={handImage}
                  alt="Crypto basics guide"
                  className="w-full rounded-lg mb-6"
                />

                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  Beginner's guide
                </p>

                <h3 className="text-xl font-bold mb-3">
                  What is Bitcoin?
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Understand what cryptocurrency is, how it works, and why
                  it’s transforming the financial system around the world.
                </p>
              </div>


              {/* CARD 2 */}
              <div>
                <img
                  src={tokensImage}
                  alt="Tokens guide"
                  className="w-full rounded-lg mb-6"
                />

                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  Beginner's guide
                </p>

                <h3 className="text-xl font-bold mb-3">
                  Guide to DeFi tokens and altcoins
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Learn the difference between coins and tokens, how they
                  are created, and how they function within blockchain ecosystems.
                </p>
              </div>

            </div>

          </div>
        </section>
        
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">

    {/* 4 IMAGE GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-16">

      {/* CARD 1 */}
      <div className="max-w-sm mx-auto">
        <img
          src={blackieImage}
          alt="Crypto guide 1"
          className="w-72 mx-auto mb-6"
        />
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          BEGINNER'S GUIDE
        </p>
        <h3 className="text-lg font-bold">
          What is Ethereum?
        </h3>
      </div>

      {/* CARD 2 */}
      <div className="max-w-sm mx-auto">
        <img
          src={whitieImage}
          alt="Crypto guide 2"
          className="w-72 mx-auto mb-6"
        />
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          KEY TERM
        </p>
        <h3 className="text-lg font-bold">
          What is DeFi?
        </h3>
      </div>

      {/* CARD 3 */}
      <div className="max-w-sm mx-auto">
        <img
          src={scaleImage}
          alt="Crypto guide 3"
          className="w-72 mx-auto mb-6"
        />
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          BEGINNER'S GUIDE
        </p>
        <h3 className="text-lg font-bold">
          What is a stablecoin?
        </h3>
      </div>

      {/* CARD 4 */}
      <div className="max-w-sm mx-auto">
        <img
          src={coinnImage}
          alt="Crypto guide 4"
          className="w-72 mx-auto mb-6"
        />
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          GLOSSARY
        </p>
        <h3 className="text-lg font-bold">
          Don't let FUD give you FOMO or you'll end uo REKT-crypto slang,exlained
        </h3>
      </div>

    </div>

    {/* CENTERED BUTTON */}
    <div className="text-center">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
        See more crypto basics
      </button>
    </div>

  </div>
</section>
{/* WHAT IS SECTION */}
<section className="py-24 bg-gray-200 -mx-6 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Header */}
    <h2 className="text-3xl font-bold mb-12">
      What is...
    </h2>

    {/* Row 1 (8 buttons) */}
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Bitcoin</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">WBlockchain</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Cardano</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">DeFi</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Ethereum</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Fork</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Market cap</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">NFT</button>
    </div>

    {/* Row 2 (7 buttons) */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Private key</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Protocol</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Smart contract</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Token</button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-bold hover:text-blue-600 transition">Volatility memecoin</button>

    </div>

    {/* See More Button */}
    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      See more
    </button>

  </div>
</section>
{/* TIPS AND TUTORIALS */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Title */}
    <h1 className="text-3xl font-bold mb-3">
      Tips and Tutorials
    </h1>

    <p className="text-gray-500 text-sm mb-16">
    Get practical, step-by-step answers to all things crypto
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-2 gap-12">

      {/* Card 1 */}
      <div className="text-left">
        <img src={nan1} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">Getting started</p>
        <h1 className="font-bold text-lg">How to create a crypto wallet</h1>
      </div>

      {/* Card 2 */}
      <div className="text-left">
        <img src={nan2} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">VIDEO TUTORIAL</p>
        <h1 className="font-bold text-lg">Buying your first crypto</h1>
      </div>

      {/* Card 3 */}
      <div className="text-left">
        <img src={nan3} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">GVIDEO TUTORIAL</p>
        <h1 className="font-bold text-lg">Understanding crypto security</h1>
      </div>

      {/* Card 4 */}
      <div className="text-left">
        <img src={nan4} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">YOUR CRYPTO</p>
        <h1 className="font-bold text-lg">How to store crypto safely</h1>
      </div>

    </div>

    {/* Button */}
    <div className="mt-16">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      See more tips and tutorials
    </button>
    </div>

  </div>
</section>

<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Title */}
    <h1 className="text-3xl font-bold mb-3">
      Advanced Trading
    </h1>

    <p className="text-gray-500 text-sm mb-16">
    Ready to advance? Learn the tools and terminology you need to take control of your trades.
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-2 gap-12">

      {/* Card 1 */}
      <div className="text-left">
        <img src={mam1} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">KEY TERM</p>
        <h1 className="font-bold text-lg">How to track crypto prices</h1>
      </div>

      {/* Card 2 */}
      <div className="text-left">
        <img src={mam2} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">ADVANCED GUIDE</p>
        <h1 className="font-bold text-lg">Understanding market trends</h1>
      </div>

      {/* Card 3 */}
      <div className="text-left">
        <img src={mam3} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">ADVANCED GUIDE</p>
        <h1 className="font-bold text-lg">How crypto transactions work</h1>
      </div>

      {/* Card 4 */}
      <div className="text-left">
        <img src={mam4} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">KEY TERM</p>
        <h1 className="font-bold text-lg">Understanding blockchain basics</h1>
      </div>

    </div>

    {/* Button */}
    <div className="mt-16">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      See more Advanced trading 
    </button>
    </div>
    <hr className="mt-20 border-gray-300" />
  </div>
</section>
{/* FUTURES */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Title */}
    <h1 className="text-3xl font-bold mb-3">
      Futures
    </h1>

    <p className="text-gray-500 text-sm mb-16">
    New to futures trading? Get up to speed on the basics.
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-2 gap-12">

      {/* Card 1 */}
      <div className="text-left">
        <img src={kak1} className="rounded-xl mb-4" />
        <h1 className="font-bold text-lg">Understanding crypto trading</h1>
      </div>

      {/* Card 2 */}
      <div className="text-left">
        <img src={kak2} className="rounded-xl mb-4" />
        <h1 className="font-bold text-lg">How to read crypto charts</h1>
      </div>

      {/* Card 3 */}
      <div className="text-left">
        <img src={kak3} className="rounded-xl mb-4" />
        <h1 className="font-bold text-lg">How to manage crypto risk</h1>
      </div>

      {/* Card 4 */}
      <div className="text-left">
        <img src={kak4} className="rounded-xl mb-4" />
        <h1 className="font-bold text-lg">Understanding crypto volatility</h1>
      </div>

    </div>

    {/* Button */}
    <div className="mt-16">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      See more about Futures
    </button>
    </div>

  </div>

  <hr className="mt-20 w-full border-t border-gray-200" />
</section>
{/* TIPS AND TUTORIALS */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Title */}
    <h1 className="text-3xl font-bold mb-3">
      All Things Wallet
    </h1>

    <p className="text-gray-500 text-sm mb-16">
    Earn yield, dive into crypto apps, control your holdings, and much more
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-2 gap-12">

      {/* Card 1 */}
      <div className="text-left">
        <img src={last1} className="rounded-xl mb-4" />
        <h1 className="font-bold text-lg">What’s the difference between Coinbase and Coinbase Wallet?</h1>
        <p className="text-gray-400 text-sm">And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered</p>
      </div>

      {/* Card 2 */}
      <div className="text-left">
        <img src={last2} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">VIDEO TUTORIAL</p>
        <h1 className="font-bold text-lg">How to set up a crypto wallet</h1>
        <p className="text-gray-400 text-sm">Learn how to setup and get started with a crypto wallet.</p>
      </div>

      {/* Card 3 */}
      <div className="text-left">
        <img src={last3} className="rounded-xl mb-4" />
        <p className="text-gray-400 text-sm">GETTING STARTED</p>
        <h1 className="font-bold text-lg">How to add crypto to your Coinbase Wallet</h1>
        <p className="text-gray-500 text-sm">A quick guide on how to add crypto to your Coinbase self-custody wallet.</p>
      </div>

      {/* Card 4 */}
      <div className="text-left">
        <img src={last4} className="rounded-xl mb-4" />
        <h1 className="font-bold text-lg">How to send or receive crypto using Coinbase Wallet</h1>
        <p className="text-gray-400 text-sm">Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries.</p>
      </div>

    </div>

    {/* Button */}
    <div className="mt-16">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      See more Wallet Articles
    </button>
    </div>

  </div>

</section>

      </div>
    </div>
  );
}

export default Learn;