import { Link } from 'react-router-dom';
import { FaMap, FaTrophy, FaSignInAlt } from 'react-icons/fa';
import { useState } from 'react';

const TreasureHunt = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <main className="bg-black bg-opacity-90 min-h-screen font-montserrat text-white py-16 border-t-4 border-b-4 border-white">
      <div className="w-full py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <section className="text-center mb-12 relative">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 inline-block pb-2"
              style={{
                color: 'white',
                textShadow: '0 6px 12px rgba(0,0,0,0.7)',
                borderBottom: '2px solid #fbbf24', // amber-400
              }}
            >
              Solve Entertainment Puzzles
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-8">
              Solve entertainment puzzles and win prizes!
            </p>

            {/* Game Info Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto bg-black bg-opacity-70 rounded-lg p-6 border-2 border-white shadow-lg">
              <div className="flex flex-col items-center">
                <FaMap className="text-4xl text-amber-400 mb-2" />
                <h3 className="text-xl font-semibold text-white">Interactive Map</h3>
                <p className="text-gray-300 text-center">Navigate clues using our dynamic map.</p>
              </div>
              <div className="flex flex-col items-center">
                <FaTrophy className="text-4xl text-amber-400 mb-2" />
                <h3 className="text-xl font-semibold text-white">Rewards</h3>
                <p className="text-gray-300 text-center">Win discounts and premium perks!</p>
              </div>
              <div className="flex flex-col items-center">
                <FaSignInAlt className="text-4xl text-amber-400 mb-2" />
                <h3 className="text-xl font-semibold text-white">Join Now</h3>
                <p className="text-gray-300 text-center">Register solo or as a team.</p>
              </div>
            </div>

            <Link
              to="#register"
              className="mt-8 inline-block bg-emerald-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              aria-label="Join the Treasure Hunt"
            >
              Start Hunting
            </Link>
          </section>

          {/* Registration Form */}
          <section className="max-w-3xl mx-auto py-8 sm:py-12" id="register">
            <h2
              className="text-3xl font-bold text-white text-center mb-8 border-b-2 border-amber-400 pb-2"
            >
              Register for the Treasure Hunt
            </h2>
            <div className="bg-black bg-opacity-80 rounded-lg border-4 border-white shadow-xl relative">
              <form onSubmit={handleRegister} className="p-8 space-y-6 flex flex-col min-h-[400px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-900 bg-opacity-70 text-white px-4 py-2 rounded-md border border-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-900 bg-opacity-70 text-white px-4 py-2 rounded-md border border-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="team" className="block text-sm font-medium text-white mb-1">
                    Team Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="team"
                    className="w-full bg-gray-900 bg-opacity-70 text-white px-4 py-2 rounded-md border border-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:scale-105 transition-transform duration-300 border-2 border-amber-400 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  Register Now
                </button>
              </form>
            </div>
            {isRegistered && (
              <div className="mt-4 text-center text-amber-400">
                <p className="text-lg font-semibold animate-pulse">
                  Registration successful! Check your email for game details.
                </p>
              </div>
            )}
          </section>

          {/* Game Preview Section */}
          <section className="py-8 sm:py-12">
            <h2
              className="text-3xl font-bold text-white text-center mb-8 border-b-2 border-amber-400 pb-2"
            >
              Explore the Adventure
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              <div className="bg-black bg-opacity-80 rounded-xl overflow-hidden border-2 border-white shadow-xl">
                <div id="game-canvas" className="w-full h-[400px] flex items-center justify-center">
                  <p className="text-amber-400">Interactive Map (Phaser.js integration coming soon)</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">How It Works</h3>
                <ul className="space-y-4 text-amber-400">
                  <li className="flex items-start"><span className="mr-2">•</span>Register</li>
                  <li className="flex items-start"><span className="mr-2">•</span>Engage</li>
                  <li className="flex items-start"><span className="mr-2">•</span>Submit answers</li>
                </ul>
                <Link
                  to="#register"
                  className="mt-6 inline-block bg-emerald-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  aria-label="Join the Treasure Hunt"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section>

          {/* Leaderboard Placeholder */}
          <section className="text-center py-8 sm:py-12">
            <h2
              className="text-3xl font-bold text-white mb-4 border-b-2 border-amber-400 pb-2"
            >
              Leaderboard
            </h2>
            <p className="text-amber-400 mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Compete with others and see where you rank! (Leaderboard coming soon.)
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default TreasureHunt;
