import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import clubkHero from '@/assets/videos/club.mp4';
import dance2 from '@/assets/images/club/dance2.jpg';
import dj from '@/assets/images/club/dj.jpg';
import drink1 from '@/assets/images/club/drink1.jpeg';
import vip1 from '@/assets/images/club/vip1.jpeg';
import dance1 from '@/assets/images/club/dance1.jpeg';
import ambience1 from '@/assets/images/club/ambience1.jpg';

const ClubK = () => {
  const navigate = useNavigate();

  // Creative interaction handlers
  const handleJoinBeat = () => {
    alert('Feel the rhythm! Dance floor is waiting for you!');
  };

  const handleJoinEvent = () => {
    alert('Stay tuned for upcoming themed events!');
  };

  const handleSeePhotos = () => {
    alert('Check out our vibrant club moments on Instagram!');
  };

  // Features with conditional buttons and interactions
  const features = [
    {
      title: 'World-Class DJs',
      img: dj,
      desc: 'Electrifying beats every weekend',
      button: {
        label: 'Join Event',
        onClick: handleJoinEvent,
      },
    },
    {
      title: 'Premium Drinks',
      img: drink1,
      desc: 'Expertly crafted cocktails',
      button: {
        label: 'Order Drinks',
        onClick: () => navigate('/order'),
      },
    },
    {
      title: 'Exclusive VIP Areas',
      img: vip1,
      desc: 'Luxury private booths',
      button: {
        label: 'Book VIP',
        onClick: () => navigate('/bookings'),
      },
    },
    {
      title: 'Themed Events',
      img: dance1,
      desc: 'Unforgettable party nights',
      button: {
        label: 'Join Event',
        onClick: handleJoinEvent,
      },
    },
    {
      title: 'Vibrant Dance Floor',
      img: dance2,
      desc: 'State-of-the-art visuals',
      button: {
        label: 'Join the Beat',
        onClick: handleJoinBeat,
      },
    },
    {
      title: 'Immersive Ambiance',
      img: ambience1,
      desc: 'Neon lights & energy',
      button: {
        label: 'See Photos',
        onClick: handleSeePhotos,
      },
    },
  ];

  return (
    <main className="bg-black bg-opacity-90 min-h-screen font-montserrat text-white border-t-4 border-b-4 border-white">
      {/* Hero Section - full viewport width, no margin above, overlays */}
      <section className="relative w-full h-[420px] sm:h-[520px] md:h-[640px] lg:h-[720px] xl:h-[800px] overflow-hidden m-0 p-0">
        {/* Background video */}
        <video
          src={clubkHero}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        {/* Overlayed content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 pb-2 animate-fadeInUp"
            style={{
              color: 'white',
              textShadow: '0 6px 12px rgba(0,0,0,0.7)',
              borderBottom: '2px solid #fff',
            }}
          >
            Club K Nightclub
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 mb-8 animate-fadeInUp-delayed"
            style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.7)',
            }}
          >
            The Ultimate Nightlife Experience is at CLUB K Nightclub
          </p>
          <Link
            to="/bookings"
            className="inline-block bg-emerald-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
            aria-label="Book your night at Club K"
          >
            Book Your Night
          </Link>
        </div>
      </section>

      {/* Custom animation for text */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fadeInUp-delayed {
            animation: fadeInUp 1s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
          }
        `}
      </style>

      <div className="w-full py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Section */}
          <section className="py-8 sm:py-12">
            <h2
              className="text-3xl font-bold text-center mb-8 pb-2"
              style={{
                color: 'white',
                textShadow: '0 4px 10px rgba(0,0,0,0.6)',
                borderBottom: '2px solid #fff',
              }}
            >
              Why Club K?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
              {features.map(({ title, img, desc, button }, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden border-4 border-white shadow-xl bg-black bg-opacity-70 flex flex-col items-center text-center"
                  style={{ height: '320px' }}
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 flex flex-col flex-grow justify-between w-full">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-md">{title}</h3>
                      <p className="text-gray-200 text-base">{desc}</p>
                    </div>
                    {button && (
                      <button
                        onClick={button.onClick}
                        className="mt-4 w-full bg-emerald-900 text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        aria-label={button.label}
                        type="button"
                      >
                        {button.label}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-8 sm:py-12 text-center">
            <h2
              className="text-3xl font-bold mb-4 pb-2"
              style={{
                color: 'white',
                textShadow: '0 4px 10px rgba(0,0,0,0.6)',
                borderBottom: '2px solid #fff',
              }}
            >
              Ready to Party at Club K?
            </h2>
            <p className="text-base sm:text-lg mb-6 text-gray-200 max-w-xl mx-auto">
              Join us at Kepong Villa Garden & Suites for a night you’ll never forget!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/bookings"
                className="inline-block bg-emerald-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                aria-label="Book your night at Club K"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-transparent text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                aria-label="Contact us to learn more about Club K"
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

export default ClubK;
