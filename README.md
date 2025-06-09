# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


import FeaturedVideos from '../components/FeaturedVideos';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import comedyNightVideo from '@/assets/videos/comedian1.mp4';
import FeaturedVideos from '../components/FeaturedVideos';

const entertainers = [
  {
    category: 'Comedians',
    performers: [
      {
        name: 'Chuks D General',
        description: 'A hilarious comedian known for relatable Nigerian humor and witty punchlines.',
        video: comedyNightVideo,
      },
      {
        name: 'MC Edo Pikin',
        description: 'Brings high-energy comedy with a mix of pidgin and local vibes.',
      },
      {
        name: 'MC Bar Beach',
        description: 'MC Bar Beach because mami water dey follow laugh when comedian crack joke.',
      },
    ],
  },
  {
    category: 'Dancers',
    performers: [
      {
        name: 'Afrobeat Crew',
        description: 'Dynamic dance group specializing in Afrobeat and street dance styles.',
      },
      {
        name: 'Zanku Legends',
        description: 'Masters of the Zanku dance, electrifying the stage with precision.',
      },
      {
        name: 'Linda Fire',
        description: 'She is simply electrifying & eats fire like ice cream.',
      },
    ],
  },
  {
    category: 'Hypemen',
    performers: [
      {
        name: 'HypeKing Lagos',
        description: 'The ultimate crowd-pumper, keeping the energy high all night.',
      },
      {
        name: 'MC Energy',
        description: 'Vibrant hypeman with a knack for engaging audiences at Club K.',
      },
      {
        name: 'GrandMasterHype',
        description: 'A vibrant hypeman that keeps event energy high and lively.',
      },
    ],
  },
];

const FeaturedEntertainers = () => {
  const [activeCategory, setActiveCategory] = useState(entertainers[0].category);
  const performers = entertainers.find((cat) => cat.category === activeCategory)?.performers || [];

  return (
    <main className="bg-emerald-500 min-h-screen font-montserrat text-gray-800 py-16">
      <div className="w-full py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="text-center mb-12 relative">
            <div
              className="absolute w-full h-[300px] bg-gradient-to-r from-emerald-900 via-amber-700 to-emerald-900 -z-10 rounded-lg shadow-xl"
              style={{ top: '160px', left: 0 }}
            ></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-900 mb-4 border-b-2 border-amber-400 inline-block pb-2">
              Meet Our Entertainers
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white mb-8">
              Enjoy talented comedians, dancers, etc. Fridays to Sundays at Kepong Villa Garden & Suites
            </p>
          </section>

          <section className="py-8 sm:py-12 bg-emerald-100 rounded-t-xl overflow-hidden">
            <div className="text-center mb-20">
              <FeaturedVideos />
              <div className="bg-emerald-100">
                <h1 className="text-xl font-bold">FEATURED DJ</h1>
                <p>DJ PRINCE, ENUGU</p>
              </div>

              <Link
                to="/bookings"
                className="mt-6 inline-block bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:scale-105 transition-transform duration-300 border-2 border-amber-400 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                aria-label="Book a night to experience the DJ at Club K"
              >
                Book & Enjoy
              </Link>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-10">
              {entertainers.map(({ category }) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 border-2 ${
                    activeCategory === category
                      ? 'bg-amber-500 text-white border-amber-400 shadow-sm'
                      : 'bg-white text-emerald-900 border-emerald-900 hover:bg-emerald-900 hover:text-white hover:scale-105'
                  } focus:ring-2 focus:ring-amber-500 focus:outline-none`}
                  aria-label={`View ${category}`}
                  aria-current={activeCategory === category ? 'true' : 'false'}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="border-t-2 border-b-2 border-emerald-900 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
                {performers.map(({ name, description, video }, idx) => (
                  <div
                    key={`${activeCategory}-${name}-${idx}`}
                    className={`bg-emerald-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col ${
                      idx < performers.length - 1 ? 'border-r-0 sm:border-r-2 border-amber-400' : ''
                    }`}
                  >
                    <div className="relative h-48 sm:h-56 bg-black mt-[-20px] rounded-t-xl overflow-hidden shadow-inner z-10">
                      {video ? (
                        <ReactPlayer
                          url={video}
                          controls
                          width="100%"
                          height="100%"
                          className="absolute top-0 left-0"
                          style={{ objectFit: 'cover', backgroundColor: 'black' }}
                          config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-emerald-900 text-center px-4 border-b-2 border-emerald-900">
                          <p className="text-base">Video unavailable</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-center">
                      <h3 className="text-xl font-semibold text-black mb-2">{name}</h3>
                      <p className="text-white text-base flex-grow mb-4">{description}</p>
                      <Link
                        to="/bookings"
                        className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-amber-600 hover:scale-105 transition-transform duration-300 border-2 border-amber-400 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        aria-label={`Book a night to see ${name}`}
                      >
                        Book a Night
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-emerald-900 border-b-2 border-amber-400 pb-2">
              Experience Live Entertainment Fridays to Sundays
            </h2>
            <p className="text-base sm:text-lg mb-6 text-white max-w-xl mx-auto">
              Visit or book a room to enjoy talented entertainers!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/bookings"
                className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:scale-105 transition-transform duration-300 border-2 border-amber-400 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                aria-label="Book your night at Club K"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-transparent text-emerald-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-900 hover:text-white transition-colors duration-300 border-2 border-emerald-900 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                aria-label="Contact us to learn more about Club K entertainers"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FeaturedEntertainers;
