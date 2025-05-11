import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const entertainers = [
  {
    category: 'Comedians',
    performers: [
      {
        name: 'Chuks D General',
        description: 'A hilarious comedian known for relatable Nigerian humor and witty punchlines.',
        video: '/assets/videos/comedy-night.mp4',
        image: '@/assets/images/entertainment/chuks_d_general.jpg',
      },
      {
        name: 'MC Edo Pikin',
        description: 'Brings high-energy comedy with a mix of pidgin and local vibes.',
        video: '/assets/videos/edo_pikin.mp4',
        image: '@/assets/images/entertainment/edo_pikin.jpg',
      },
      {
        name: 'MC Bar Beach',
        description: 'MC Bar Beach because mami water dey follow laugh when comedian crack joke.',
        video: '/assets/videos/bar_beach.mp4',
        image: '@/assets/images/entertainment/bar_beach.jpg',
      },
    ],
  },
  {
    category: 'Dancers',
    performers: [
      {
        name: 'Afrobeat Crew',
        description: 'Dynamic dance group specializing in Afrobeat and street dance styles.',
        video: '/assets/videos/afrobeat_dance.mp4',
        image: '@/assets/images/entertainment/afrobeat_crew.jpg',
      },
      {
        name: 'Zanku Legends',
        description: 'Masters of the Zanku dance, electrifying the stage with precision.',
        video: '/assets/videos/zanku_dance.mp4',
        image: '@/assets/images/entertainment/zanku_legends.jpg',
      },
      {
        name: 'Linda Fire',
        description: 'She is simply electrifying & eats fire like ice cream.',
        video: '/assets/videos/linda_fire.mp4',
        image: '@/assets/images/entertainment/linda_fire.jpg',
      },
    ],
  },
  {
    category: 'Hypemen',
    performers: [
      {
        name: 'HypeKing Lagos',
        description: 'The ultimate crowd-pumper, keeping the energy high all night.',
        video: '../../public/assets/videos/vid2.mp4',
        image: '@/assets/images/entertainment/hypeking_lagos.jpg',
      },
      {
        name: 'MC Energy',
        description: 'Vibrant hypeman with a knack for engaging audiences at Club K.',
        video: '/assets/videos/mc_energy.mp4',
        image: '@/assets/images/entertainment/mc_energy.jpg',
      },
      {
        name: 'GrandMasterHype',
        description: 'A vibrant hypeman that keep event energy high and lively.',
        video: '/assets/videos/doubleclassic.mp4',
        image: '@/assets/images/entertainment/doubleclassic.jpg',
      },
    ],
  },
];

const FeaturedEntertainers = () => {
  const [activeCategory, setActiveCategory] = useState(entertainers[0].category);

  const backgroundMedia = {
    type: 'video',
    videoUrl: '/assets/videos/hero-background.mp4',
    imageUrl: '@/assets/images/club/dance2.jpg',
  };

  return (
    <main className="bg-white min-h-screen animate-fade-in font-montserrat">
      {/* Hero Section with Video or Image Background */}
      <section className="relative w-full h-screen overflow-hidden m-0 p-0 z-10">
        {backgroundMedia.type === 'video' ? (
          <>
            <ReactPlayer
              url={backgroundMedia.videoUrl}
              playing
              loop
              muted
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-full"
              style={{ objectFit: 'cover', minHeight: '100vh' }}
              onError={() => (
                <img
                  src={backgroundMedia.imageUrl}
                  alt="Hero background"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            />
            <img
              src={backgroundMedia.imageUrl}
              alt="Hero background"
              className="absolute top-0 left-0 w-full h-full object-cover hidden"
              loading="lazy"
              id="video-fallback"
            />
          </>
        ) : (
          <img
            src={backgroundMedia.imageUrl}
            alt="Hero background"
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-green-800 opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-300">
              Meet Our Entertainers
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-white/80">
              From side-splitting comedians to electrifying dancers and hypemen, Kepong Villa Garden & Suites showcases the best!
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in bg-gray-100">
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8 overflow-x-auto">
          {entertainers.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 ${
                activeCategory === category.category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-600 text-white hover:bg-gray-700 hover:scale-105'
              }`}
              aria-label={`View ${category.category}`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Performer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {entertainers
            .find((cat) => cat.category === activeCategory)
            .performers.map((performer, index) => (
              <div
                key={`${activeCategory}-${performer.name}-${index}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 sm:h-64">
                  <img
                    src={performer.image}
                    alt={`${performer.name} performing at Kepong Villa`}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => window.open(performer.video, '_blank')}
                      className="bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                      aria-label={`Watch ${performer.name}'s performance video`}
                    >
                      Watch Video
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-green-800">
                    {performer.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{performer.description}</p>
                  <Link
                    to="/booking"
                    className="mt-3 sm:mt-4 inline-block bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300 text-sm sm:text-base animate-fade-in"
                    aria-label={`Book a night to see ${performer.name}`}
                  >
                    Book a Night
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in bg-green-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-3 sm:mb-4">
          Don’t Miss the Fun!
        </h2>
        <p className="text-white/80 mb-4 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
          Catch these amazing performers live on stage at Kepong Villa Garden & Suites.
        </p>
        <Link
          to="/booking"
          className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-orange-600 hover:scale-105 transition-transform duration-300 animate-fade-in"
          aria-label="Book your entertainment experience now"
          style={{ borderColor: '#FFD700', borderWidth: '2px' }}
        >
          Book Now
        </Link>
      </section>
    </main>
  );
};

export default FeaturedEntertainers;