import React, { useState } from 'react';
import { motion } from 'framer-motion';

import promoVideo from '@/assets/videos/stars.webm'; // Background video
import manager from '@/assets/images/man.webp';
import dj from '@/assets/images/man.webp';
import planner from '@/assets/images/babe.webp';
import light from '@/assets/images/hair.webp';
import supervisor from '@/assets/images/supervisor.webp';

const crewMembers = [
  { id: 1, name: 'Mr John', role: 'General Manager', img: manager },
  { id: 2, name: 'Tee Master', role: 'Disc Jockey', img: dj },
  { id: 3, name: 'Planner Ifeoma', role: 'Event Planner', img: planner },
  { id: 4, name: 'Light Crew Kelechi', role: 'Lighting Specialist', img: light },
  { id: 5, name: 'Sound Crew Ada', role: 'Sound Engineer', img: light },
  { id: 6, name: 'Ojiugo', role: 'Supervisor', img: supervisor },
];

const customerMembers = [
  { id: 7, name: 'Chidi Okoye', role: 'Loyal Guest', img: manager },
  { id: 8, name: 'Amaka Igwe', role: 'VIP Customer', img: dj },
  { id: 9, name: 'Emeka Nwosu', role: 'Frequent Visitor', img: planner },
  { id: 10, name: 'Ngozi Eze', role: 'Event Enthusiast', img: light },
  { id: 11, name: 'Tunde Afolabi', role: 'Regular Patron', img: light },
  { id: 12, name: 'Chioma Obi', role: 'Celebrity Guest', img: light },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Don = () => {
  const [activeSet, setActiveSet] = useState('crew');

  return (
    <main className="relative min-h-screen text-yellow-100 font-montserrat px-6 py-32 md:py-40 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-black">
        <video
          src={promoVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>

      {/* Overlay container */}
      <div className="relative z-10 max-w-7xl mx-auto bg-yellow-700/20 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-xl">
        {/* Glowing Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center text-2xl md:text-5xl font-semibold mb-12 select-none text-red-600 tracking-widest"
        >
          Face Behind The Vibe
        </motion.h1>

       <motion.section
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left: Image with border and hover glow */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center h-full text-center"
          >
            <motion.img
              alt="Uche Odogwu - CEO"
              className="rounded-full border-4 border-red-600 shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover filter drop-shadow-lg"
              whileHover={{ scale: 1.07, boxShadow: '0 0 25px #DC2626' }}
              transition={{ type: 'spring', stiffness: 250, damping: 16 }}
              src={manager}
              loading="lazy"
            />
            <div className="mt-6">
              <h2 className="text-3xl font-bold text-white leading-tight">Uche Odogwu</h2>
              <p className="text-red-600 text-sm font-bold uppercase tracking-wider mt-1">
                CEO, Kepong Villa Garden & Suites
              </p>
            </div>
          </motion.div>

          {/* Right: Bio with justified text */}
          <motion.div
            variants={itemVariants}
            className="flex items-center h-full max-w-xl text-center md:text-left"
          >
            <p className="text-lg white leading-relaxed tracking-wide" style={{ textAlign: 'justify' }}>
              Uche Odogwu, affectionately called Odogwu Cally, is the driving force and face behind
              the vibe at Kepong Villa Garden & Suites. His visionary leadership masterfully blends
              Igbo culture with modern hospitality — inspiring the crew and engaging guests alike,
              making every event authentically unforgettable.
            </p>
          </motion.div>
        </motion.section>

        {/* Toggle Buttons */}
        <motion.section
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <button
              onClick={() => setActiveSet('crew')}
              className={`px-8 py-3 rounded-lg font-semibold text-lg border-2 border-red-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 transform ${
                activeSet === 'crew'
                  ? 'bg-red-600 text-white'
                  : 'bg-black bg-opacity-70 text-red-600 hover:bg-red-600 hover:text-white hover:scale-105'
              }`}
              aria-label="Show Kepong crew members"
            >
              Meet Our Crew
            </button>
            <button
              onClick={() => setActiveSet('customers')}
              className={`px-8 py-3 rounded-lg font-semibold text-lg border-2 border-red-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 transform ${
                activeSet === 'customers'
                  ? 'bg-red-600 text-white'
                  : 'bg-black bg-opacity-70 text-red-600 hover:bg-red-600 hover:text-white hover:scale-105'
              }`}
              aria-label="Show Kepong customers"
            >
              Kepong Ballers
            </button>
          </div>

          {/* Grid of members */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
            key={activeSet}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {(activeSet === 'crew' ? crewMembers : customerMembers).map(({ id, name, role, img }) => (
              <motion.div
                key={id}
                className="flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px #DC2626' }} // red-600 subtle glow
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                tabIndex={0}
                role="figure"
                aria-label={`${name}, ${role}`}
              >
                <img
                  src={img}
                  alt={`${name} - ${role}`}
                  className="rounded-full border-2 border-red-600 shadow-md w-24 h-24 object-cover mb-3 transition-transform duration-300"
                  loading="lazy"
                  draggable={false}
                />
                <h4 className="font-semibold text-white text-base truncate max-w-full">{name}</h4>
                <p className="text-sm text-red-600 font-bold uppercase tracking-wide">{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
};

export default Don;
