import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const TreasureHunt = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const [activeClue, setActiveClue] = useState(null);

  const clues = [
    {
      id: 1,
      hint: 'A riddle by the pool: "I shimmer under moonlight, but I’m not the sea."',
      answer: 'The Pool',
    },
    {
      id: 2,
      hint: 'An anagram at the bar: "Rearrange ‘LIME’ to find your next clue."',
      answer: 'The Bar',
    },
    {
      id: 3,
      hint: 'A map fragment in the garden: Follow the roses to the treasure.',
      answer: 'The Garden',
    },
  ];

  return (
    <main className="bg-white min-h-screen font-montserrat">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen overflow-hidden m-0 p-0">
        <ReactPlayer
          url="/assets/videos/treasure-hunt.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full"
          style={{ objectFit: 'cover', minHeight: '100vh' }}
        />
        <div className="absolute inset-0 bg-green-800 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-300">
              Play and Win!
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-6 text-white/80">
              Embark on a thrilling treasure hunt across our luxurious grounds. Solve riddles, uncover clues, and claim your prize!
            </p>
            <Link
              to="/booking"
              className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-orange-600 transition duration-300"
              aria-label="Join the treasure hunt"
              style={{ borderColor: '#FFD700', borderWidth: '2px' }}
            >
              Join the Hunt
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-center bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
          Next Treasure Hunt Starts In
        </h2>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
              <span className="text-2xl sm:text-4xl font-bold text-orange-500">
                {timeLeft[unit].toString().padStart(2, '0')}
              </span>
              <p className="text-gray-600 capitalize text-sm sm:text-base">{unit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clue Previews */}
      <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 text-center">
          Sample Clues
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {clues.map((clue) => (
            <div
              key={clue.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setActiveClue(activeClue === clue.id ? null : clue.id)}
            >
              <div className="relative">
                <img
                  src="@/assets/images/scroll.png"
                  alt="Clue scroll"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <div
                  className={`transition-all duration-300 ${
                    activeClue === clue.id ? 'opacity-100' : 'opacity-0 h-0'
                  }`}
                >
                  <p className="text-gray-600">{clue.hint}</p>
                  <p className="text-orange-500 font-semibold mt-2">Location: {clue.answer}</p>
                </div>
                <p className="text-green-800 font-medium">
                  {activeClue === clue.id ? 'Hide Clue' : 'Reveal Clue'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Venue Map */}
      <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 text-center">
          Explore the Hunt Grounds
        </h2>
        <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src="@/assets/images/venue-map.png"
            alt="Kepong Villa Treasure Hunt Map"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div
            className="absolute top-1/4 left-1/4 w-8 h-8 bg-orange-500 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            title="The Pool"
          ></div>
          <div
            className="absolute top-3/4 left-3/4 w-8 h-8 bg-orange-500 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            title="The Bar"
          ></div>
        </div>
        <p className="text-gray-600 text-center mt-4">
          Hover over the map to discover key locations!
        </p>
      </section>

      {/* Social Sharing */}
      <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-center bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">
          Share the Adventure
        </h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com/sharer/sharer.php?u=https://kepongvilla.com/treasure-hunt"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            aria-label="Share on Facebook"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/kepongvilla"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            aria-label="Share on Instagram"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.354c-.058 1.281-.072 1.689-.072 4.945s.014 3.664.072 4.945c.155 3.384 1.898 5.071 5.282 5.226 1.28.058 1.689.072 4.945.072s3.664-.014 4.945-.072c3.384-.155 5.071-1.898 5.226-5.282.058-1.281.072-1.689.072-4.945s-.014-3.664-.072-4.945c-.155-3.384-1.898-5.071-5.226-5.282C15.664.014 15.256 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-green-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-3 sm:mb-4">
          Don’t Miss the Treasure!
        </h2>
        <p className="text-white/80 mb-4 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
          Play the game and uncover a hidden prize.
        </p>
        <Link
          to="/booking"
          className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-orange-600 transition duration-300"
          aria-label="Book your treasure hunt now"
          style={{ borderColor: '#FFD700', borderWidth: '2px' }}
        >
          Book Now
        </Link>
      </section>
    </main>
  );
};

export default TreasureHunt;