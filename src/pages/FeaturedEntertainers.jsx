import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import FeaturedVideos from '../components/FeaturedVideos';
import ReserveTableModal from '../components/ReserveTableModal';

import starsVideo from '@/assets/videos/stars.webm';
import coupleVideo from '@/assets/videos/couple.mp4';

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
  hypemen: ['HypeKing Lagos', 'GrandMasterHype'],
};

const FeaturedEntertainers = () => {
  const [showModal, setShowModal] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const handleReserveTable = () => setShowModal(true);

  // Carousel controls
  const prevSlide = () => setCarouselIdx((idx) => (idx === 0 ? ENTERTAINER_CAROUSEL.length - 1 : idx - 1));
  const nextSlide = () => setCarouselIdx((idx) => (idx === ENTERTAINER_CAROUSEL.length - 1 ? 0 : idx + 1));

  return (
    <main className="min-h-screen bg-white font-montserrat text-black py-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8">
        {/* Minimalist Header */}
        <header className="pt-2 pb-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold lowercase tracking-tight mb-1">
            entertainment
          </h1>
          <p className="text-gray-700 text-lg mt-1">Wednesdays, Fridays & Sundays</p>
        </header>

        {/* Featured DJ Videos – now at top */}
        <section className="mb-12">
          <FeaturedVideos />
        </section>

        {/* Carousel of Entertainers (video slider) */}
        <section className="mb-16">
          <div className="flex items-center gap-4 justify-center">
            <button
              aria-label="Previous"
              onClick={prevSlide}
              className="rounded-full bg-gray-100 border text-lg w-9 h-9 flex items-center justify-center hover:bg-gray-200"
            >
              ‹
            </button>
            <div className="flex-1 max-w-md mx-2 rounded-xl border bg-gray-50 shadow md:flex md:flex-col md:items-center p-3">
              <div className="rounded-lg overflow-hidden aspect-video w-full mb-2">
                <video
                  src={ENTERTAINER_CAROUSEL[carouselIdx].video}
                  controls
                  loop
                  muted
                  className="w-full h-full bg-black"
                  poster=""
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="text-center text-lg font-semibold text-gray-800">
                {ENTERTAINER_CAROUSEL[carouselIdx].label}
              </div>
            </div>
            <button
              aria-label="Next"
              onClick={nextSlide}
              className="rounded-full bg-gray-100 border text-lg w-9 h-9 flex items-center justify-center hover:bg-gray-200"
            >
              ›
            </button>
          </div>
        </section>

        {/* This Weekend's Lineup minimalist */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-center mb-3">This Weekend’s Lineup</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {Object.entries(weekendLineup).map(([category, names]) => (
              <div
                key={category}
                className="flex-1 min-w-[160px] border rounded-md p-3 bg-white"
              >
                <div className="text-gray-600 text-sm font-semibold mb-1 capitalize">
                  {category}
                </div>
                <ul className="text-gray-900 font-medium space-y-1 text-sm">
                  {names.map((n) => <li key={n}>{n}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Reserve Table (primary call-to-action) */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleReserveTable}
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-gray-800 shadow-sm transition"
            aria-label="Reserve your table"
          >
            Reserve Table-4-Four
          </button>
        </div>

        {/* Modal */}
        <ReserveTableModal isOpen={showModal} setIsModalOpen={setShowModal} />
      </div>
    </main>
  );
};

export default FeaturedEntertainers;
