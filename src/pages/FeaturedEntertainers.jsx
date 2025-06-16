import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import FeaturedVideos from '../components/FeaturedVideos';
import ReserveTableModal from '../components/ReserveTableModal';

import comedyNightVideo from '@/assets/videos/comedian1.mp4';

const entertainers = [
  {
    category: 'Comedians',
    performers: [
      {
        name: 'Chuks D General',
        description: 'Hilarious Nigerian humor with witty punchlines.',
        video: comedyNightVideo,
      },
      {
        name: 'MC Edo Pikin',
        description: 'High-energy comedy with pidgin flair.',
      },
      {
        name: 'MC Bar Beach',
        description: 'Side-splitting jokes that captivate all.',
      },
    ],
  },
  {
    category: 'Dancers',
    performers: [
      {
        name: 'Afrobeat Crew',
        description: 'Dynamic Afrobeat and street dance.',
      },
      {
        name: 'Zanku Legends',
        description: 'Precise, electrifying Zanku dance moves.',
      },
      {
        name: 'Linda Fire',
        description: 'Fiery, electrifying dance performances.',
      },
    ],
  },
  {
    category: 'Hypemen',
    performers: [
      {
        name: 'HypeKing Lagos',
        description: 'Crowd-pumping energy all night.',
      },
      {
        name: 'MC Energy',
        description: 'Vibrant hype for Club K crowds.',
      },
      {
        name: 'GrandMasterHype',
        description: 'Lively energy for unforgettable events.',
      },
    ],
  },
];

const weekendLineup = {
  comedians: ['Chuks D General', 'MC Edo Pikin'],
  dancers: ['Afrobeat Crew', 'Linda Fire'],
  hypemen: ['HypeKing Lagos', 'GrandMasterHype'],
};

const FeaturedEntertainers = () => {
  const [activeCategory, setActiveCategory] = useState(entertainers[0].category);
  const [showModal, setShowModal] = useState(false);

  const handleReserveTable = () => {
    setShowModal(true);
  };

  return (
    <main className="bg-black bg-opacity-90 min-h-screen font-montserrat text-white py-32">
      {/* Animation style for fadeInUpBlock */}
      <style>
        {`
          @keyframes fadeInUpBlock {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUpBlock {
            animation: fadeInUpBlock 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.1s both;
          }
        `}
      </style>
      <div className="w-full py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated block starts here */}
          <div className="animate-fadeInUpBlock">
            {/* Page Heading */}
            <section className="text-center mb-4 relative">
              <h1
                className="text-4xl sm:text-5xl md:text-4xl font-semibold tracking-tight text-white mb-4 inline-block pb-2"
              >
                Weekend Entertainment
              </h1>
              <p
                className="text-lg sm:text-xl md:text-xl max-w-2xl mx-auto text-gray-200 mb-4"
              >
                Fridays to Sundays
              </p>
            </section>

            {/* This Weekend's Lineup Announcement */}
            <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-0">
              <h2 className="flex items-center justify-center text-2xl sm:text-3xl font-semibold text-gray-400 mb-2 text-center gap-2">
                <div className="inline-block text-3xl" style={{ color: '#b0b3b8' }}>🎤</div>
                 <p>This Weekend’s Lineup</p>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
                <div className="bg-black bg-opacity-70 border-2 border-emerald-500 rounded-lg p-4 min-w-[220px]">
                  <h3 className="text-lg font-bold text-white mb-1 text-center">Comedians</h3>
                  <ul className="text-gray-300 text-center">
                    {weekendLineup.comedians.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black bg-opacity-70 border-2 border-emerald-500 rounded-lg p-4 min-w-[220px]">
                  <h3 className="text-lg font-bold text-white mb-1 text-center">Dancers</h3>
                  <ul className="text-gray-300 text-center">
                    {weekendLineup.dancers.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black bg-opacity-70 border-2 border-emerald-500 rounded-lg p-4 min-w-[220px]">
                  <h3 className="text-lg font-bold text-white mb-1 text-center">Hypemen</h3>
                  <ul className="text-gray-300 text-center">
                    {weekendLineup.hypemen.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleReserveTable}
                  className="bg-emerald-900 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-emerald-500 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  style={{ minWidth: 260, width: 320, maxWidth: '95vw' }}
                  aria-label="Book your table now for an unforgettable weekend!"
                >
                  Reserve Table-4-Four
                </button>
              </div>
            </div>
          </div>
          {/* Animated block ends here */}

          {/* Featured DJ Video Section */}
          <section className="py-8 sm:py-12 rounded-lg">
            <div className="text-center mb-6">
              <FeaturedVideos />
            </div>
          </section>

          {/* Entertainers Tabs */}
          <section className="mb-10">
            {/* Responsive button group: vertical on mobile, horizontal on sm+ */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 w-full max-w-xs sm:max-w-none mx-auto">
              {entertainers.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`px-6 py-2 rounded-full font-semibold border-2 transition
                    ${activeCategory === cat.category
                      ? 'bg-emerald-900 text-white border-emerald-500'
                      : 'bg-black text-gray-300 border-gray-700 hover:bg-emerald-900 hover:text-white hover:border-emerald-500'}
                  `}
                  style={{ width: '100%' }}
                >
                  {cat.category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {entertainers.find((cat) => cat.category === activeCategory)?.performers.map((perf, idx) => (
                <div
                  key={perf.name}
                  className="bg-black bg-opacity-80 border-2 border-emerald-900 rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
                >
                  <h3 className="text-xl font-bold text-amber-400 mb-2">{perf.name}</h3>
                  <p className="text-gray-200 mb-4">{perf.description}</p>
                  {perf.video && (
                    <ReactPlayer
                      url={perf.video}
                      controls
                      width="100%"
                      height="180px"
                      className="rounded-lg overflow-hidden"
                    />
                  )}
                </div>
              )) || <div className="col-span-3 text-center text-gray-400">No performers in this category yet.</div>}
            </div>
          </section>

          {/* Minimalist Promo & Reserve Button (BOTTOM) */}
          <div className="flex flex-col items-center my-8">
            <p className="text-base text-amber-400 font-medium mb-4 text-center">
              Reserve table-4-Four 
            </p>
            <button
              onClick={handleReserveTable}
              className="bg-emerald-900 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-emerald-500 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              style={{ minWidth: 220, maxWidth: '95vw' }}
              aria-label="Reserve your table for weekend entertainment"
            >
              Reserve Table-4-Four
            </button>
          </div>

          {/* Reserve Table Modal */}
          <ReserveTableModal isOpen={showModal} setIsModalOpen={setShowModal} />
        </div>
      </div>
    </main>
  );
};

export default FeaturedEntertainers;
