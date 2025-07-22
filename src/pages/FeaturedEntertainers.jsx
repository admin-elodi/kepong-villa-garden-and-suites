import React, { useState } from 'react';
import ReserveTableModal from '../components/ReserveTableModal';
import FeaturedVideos from '../components/FeaturedVideos';
import starsVideo from '@/assets/videos/club.mp4';
import coupleVideo from '@/assets/videos/clubbing.mp4';
import rappersImage from '@/assets/images/rappers.webp';

const ENTERTAINER_CAROUSEL = [
  {
    label: 'Traditional Dance Band',
    video: starsVideo,
  },
  {
    label: 'Hype Men',
    video: coupleVideo,
  },
  // more to add later
];

const weekendLineup = {
  comedians: ['Chuks D General', 'MC Edo Pikin'],
  dancers: ['Afrobeat Crew', 'Linda Fire'],
  hypemen: ['DoubleClassique', 'GrandMasterHype'],
};

const FeaturedEntertainers = () => {
  const [showModal, setShowModal] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const handleReserveTable = () => setShowModal(true);

  // Carousel controls
  const prevSlide = () => setCarouselIdx((idx) => (idx === 0 ? ENTERTAINER_CAROUSEL.length - 1 : idx - 1));
  const nextSlide = () => setCarouselIdx((idx) => (idx === ENTERTAINER_CAROUSEL.length - 1 ? 0 : idx + 1));

  return (
    <main
      className="min-h-screen font-montserrat text-red-600 py-40 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${rappersImage})`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Subtle overlay for readability
        backgroundBlendMode: 'darken',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Minimalist Header */}
        <header className="pt-2 pb-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-1 text-white drop-shadow-md">
            Entertainment
          </h1>
          <p className="text-white text-lg mt-1 font-medium">Wednesdays, Fridays & Sundays</p>
        </header>

        {/* Featured DJ Videos */}
        <section className="mb-12">
          <FeaturedVideos />
        </section>

        {/* Carousel of Entertainers */}
        <section className="mb-16">
          <div className="w-full mx-auto">
            <div className="rounded-xl border border-gray-700 bg-gray-900/50 shadow-lg p-4">
              <div className="rounded-lg overflow-hidden aspect-video w-full sm:max-w-6xl mx-auto mb-4">
                <video
                  src={ENTERTAINER_CAROUSEL[carouselIdx].video}
                  controls
                  loop
                  muted
                  className="w-full sm:w-full h-full bg-black md:max-w-6xl mx-auto"
                  poster=""
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="text-center text-xl font-semibold text-white mb-4">
                {ENTERTAINER_CAROUSEL[carouselIdx].label}
              </div>
              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  aria-label="Previous"
                  onClick={prevSlide}
                  className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Previous
                </button>
                <button
                  aria-label="Next"
                  onClick={nextSlide}
                  className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Weekend Lineup */}
        <section className="mb-10">
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-red-600 inline-block pb-2 text-center">
              Weekend Lineup
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {Object.entries(weekendLineup).map(([category, names]) => (
              <div
                key={category}
                className="flex-1 min-w-[180px] border border-gray-700 rounded-lg p-4 bg-gray-900/50 shadow-md"
              >
                <div className="text-red-600 text-base font-bold mb-2 capitalize">
                  {category}
                </div>
                <ul className="text-white font-medium space-y-2 text-sm">
                  {names.map((n) => (
                    <li key={n} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Reserve Table */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleReserveTable}
            className="bg-red-600 text-white font-bold border-2 border-white px-8 py-3 rounded-lg text-base hover:bg-red-700 shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Reserve your table"
          >
            Reserve Table
          </button>
        </div>

        {/* Modal */}
        <ReserveTableModal isOpen={showModal} setIsModalOpen={setShowModal} />
      </div>
    </main>
  );
};

export default FeaturedEntertainers;