import React, { useState, useEffect, useRef } from 'react';
import ReserveTableModal from '@/components/ReserveTableModal';
import FeaturedVideos from '@/components/FeaturedVideos';
import { Link } from 'react-router-dom';
import rappersImage from '@/assets/images/entertainment/rappers.webp';

import clubbing from '@/assets/videos/clubbing.mp4';
import club from '@/assets/videos/club.mp4';
import djDemure from '@/assets/videos/dj-demure.mp4';

const Confetti = ({ active }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(animationRef.current);
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      particlesRef.current = [];
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    canvas.width = screenW;
    canvas.height = screenH;

    const createParticle = () => ({
      x: Math.random() * screenW,
      y: Math.random() * screenH - screenH,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 10,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngle: 0,
      tiltAngleIncrement: Math.random() * 0.1 + 0.05,
      velocityX: (Math.random() - 0.5) * 2,
      velocityY: Math.random() * 3 + 2,
    });

    particlesRef.current = Array.from({ length: 100 }, createParticle);

    let angle = 0;

    const update = () => {
      angle += 0.01;

      ctx.clearRect(0, 0, screenW, screenH);

      particlesRef.current.forEach((p) => {
        p.tiltAngle += p.tiltAngleIncrement;
        p.x += p.velocityX + Math.sin(angle);
        p.y += p.velocityY;
        p.tilt = Math.sin(p.tiltAngle) * 15;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.lineTo(p.x + p.tilt - p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y - p.tilt - p.r / 2);
        ctx.closePath();
        ctx.fill();

        if (p.y > screenH || p.x > screenW || p.x < 0) {
          p.x = Math.random() * screenW;
          p.y = -10;
          p.velocityX = (Math.random() - 0.5) * 2;
          p.velocityY = Math.random() * 3 + 2;
        }
      });

      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationRef.current);
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
      }}
    />
  );
};

const weekendLineupVideos = {
  comedians: [
    { label: 'MC Afrobeats Live', src: clubbing, title: 'MC Afrobeats Performance' },
    { label: 'MC Prof', src: clubbing, title: 'MC Prof' },
  ],
  dancers: [
    { label: 'Afrobeat Crew Dance', src: club, title: 'Afrobeat Crew Dance Performance' },
    { label: 'Linda Fire Show', src: djDemure, title: 'Linda Fire Dance Show' },
  ],
  hypemen: [
    { label: 'DoubleClassique Hype', src: clubbing, title: 'DoubleClassique Hypeman Energy' },
    { label: 'GrandMasterHype Live', src: clubbing, title: 'GrandMasterHype Event' },
  ],
};

const FeaturedEntertainers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('comedians');
  const [confettiActive, setConfettiActive] = useState(false);

  const handleReserveTable = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const celebrate = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 4000);
  };

  return (
    <main
      className="min-h-screen font-montserrat text-red-600 pt-[185px] md:pt-[250px] pb-34 bg-cover bg-center bg-fixed z-10"
      style={{
        backgroundImage: `url(${rappersImage})`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'darken',
      }}
    >
      <div className="w-full mx-auto">
        <header className="text-center bg-red-600/50 m-0 p-4 relative z-20 border-0 rounded-md">
          <h1 className="text-3xl sm:text-5xl md:pt-4 tracking-widest font-bold tracking-tight mb-1 text-white drop-shadow-md">
            Entertainment
          </h1>
          <p className="text-white text-lg mt-1 font-medium">Wednesdays, Fridays & Sundays</p>
        </header>

        <section className="my-12">
          <FeaturedVideos />
        </section>

        <section className="mb-16">
          <div className="w-full text-center mb-6">
            <h2 className="text-2xl font-bold text-white border-b-2 border-red-600 inline-block pb-2">
              Weekend Lineup
            </h2>
          </div>

          {/* Buttons container: overflow-x-auto removed on desktop */}
          <div className="flex justify-center gap-4 mb-8 flex-nowrap px-2 max-w-xs sm:max-w-none mx-auto">
            {['comedians', 'dancers', 'hypemen'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 w-24 sm:w-auto px-4 py-3 rounded-lg font-semibold text-center transition focus:outline-none focus:ring-2 focus:ring-red-400 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-900/50 text-gray-300 hover:bg-red-600 hover:text-white'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weekendLineupVideos[selectedCategory].map(({ label, src, title }) => (
              <div
                key={label}
                className="rounded-lg overflow-hidden shadow-lg bg-gray-900/70 border border-gray-700"
              >
                <div className="aspect-video w-full bg-black">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                    title={title}
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-3 text-white font-semibold text-lg text-center bg-gray-800/80">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-8 max-w-3xl mx-auto">
          <p className="text-white text-lg md:text-xl font-semibold mb-6">
            Enjoy food, drink, entertainment and hotel
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <button
              onClick={handleReserveTable}
              className="bg-red-600 text-white font-bold border-2 border-white px-8 py-3 rounded-lg text-base hover:bg-red-700 shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Reserve your table"
            >
              Reserve Table
            </button>

            <Link
              to="/bookings"
              className="bg-gray-900/70 text-white font-bold border-2 border-white px-8 py-3 rounded-lg text-base hover:bg-red-600 hover:border-red-600 shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
              aria-label="Book Hotel"
            >
              Book Hotel
            </Link>

            <Link
              to="/kepong-foodies"
              className="bg-gray-900/70 text-white font-bold border-2 border-white px-8 py-3 rounded-lg text-base hover:bg-red-600 hover:border-red-600 shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
              aria-label="Enjoy Kepong Foodies"
            >
              Enjoy Kepong Foodies
            </Link>
          </div>
        </section>

        <section className="text-center mb-20">
          <button
            onClick={celebrate}
            className="inline-block bg-yellow-400 text-black font-extrabold px-10 py-4 rounded-full shadow-xl hover:bg-yellow-300 transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-60"
            aria-label="Celebrate the weekend"
          >
            Celebrate the Weekend!
          </button>
        </section>

        <ReserveTableModal isOpen={showModal} onClose={closeModal} />
        <Confetti active={confettiActive} />
      </div>
    </main>
  );
};

export default FeaturedEntertainers;
