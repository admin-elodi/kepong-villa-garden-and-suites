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

  const features = [
    {
      title: 'World-Class DJs',
      img: dj,
      desc: 'Electrifying beats every weekend',
    },
    {
      title: 'Premium Drinks',
      img: drink1,
      desc: 'Expertly crafted cocktails',
    },
    {
      title: 'Exclusive VIP Areas',
      img: vip1,
      desc: 'Luxury private booths',
    },
    {
      title: 'Themed Events',
      img: dance1,
      desc: 'Unforgettable party nights',
    },
    {
      title: 'Vibrant Dance Floor',
      img: dance2,
      desc: 'State-of-the-art visuals',
    },
    {
      title: 'Immersive Ambiance',
      img: ambience1,
      desc: 'Neon lights & energy',
    },
  ];

  const handleBookVIP = () => {
    navigate('/bookings');
  };
  const handleOrderDrinks = () => {
    navigate('/order');
  };

  return (
    <main className="bg-black bg-opacity-90 min-h-screen font-montserrat text-white border-t-4 border-b-4 border-white pt-[90px] sm:pt-[110px]">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] sm:h-[520px] md:h-[640px] lg:h-[720px] xl:h-[800px] overflow-hidden m-0 p-0">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto gap-8 sm:gap-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 pb-0 animate-fadeInUp"
            style={{
              color: 'white',
              textShadow: '0 6px 12px rgba(0,0,0,0.7)',
            }}
          >
            Club K Nightclub
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mx-auto text-gray-200 animate-fadeInUp-delayed max-w-[340px] sm:max-w-none mb-4"
            style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.7)',
              wordBreak: 'break-word',
            }}
          >
            Open Wednesdays & Weekends
            <br className="block sm:hidden" />
            <span className="hidden sm:inline"> — </span>
            The Heartbeat of Enugu Nightlife
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-xl mx-auto px-4 mt-2">
            <button
              onClick={handleOrderDrinks}
              className="bg-emerald-900 text-white px-7 py-4 rounded-lg text-lg font-semibold hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none w-full"
            >
              Order Premium Drinks
            </button>
            <button
              onClick={handleBookVIP}
              className="bg-amber-400 text-black px-7 py-4 rounded-lg text-lg font-semibold hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none w-full"
            >
              Reserve Private Area
            </button>
          </div>
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

      <div className="w-full py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Section */}
          <section className="py-12 sm:py-16">
            <h2
              className="text-3xl font-bold text-center mb-12 pb-3"
              style={{
                color: 'white',
                textShadow: '0 4px 10px rgba(0,0,0,0.6)',
                borderBottom: '2px solid #fff',
              }}
            >
              Why Club K?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 sm:gap-x-12 max-w-6xl mx-auto">
              {features.map(({ title, img, desc }, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden border-4 border-white shadow-xl bg-black bg-opacity-70 flex flex-col items-center text-center"
                  style={{ height: '340px' }}
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-40 object-cover mb-4"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col flex-grow justify-between w-full">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-md">{title}</h3>
                      <p className="text-gray-200 text-base">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ClubK;
