import React from 'react';
import { motion } from 'framer-motion';

import promoVideo from '@/assets/videos/stars.mp4'; // Import the video

import manager from '@/assets/images/man.webp';
import dj from '@/assets/images/man.webp';
import planner from '@/assets/images/babe.webp';
import light from '@/assets/images/hair.webp';
import sound from '@/assets/images/babe.webp';

const crewMembers = [
  { id: 1, name: 'General Manager, Kepong Villa, John ', role: 'General Management', img: manager },
  { id: 2, name: 'DJ, Nneka', role: 'Master of Beats', img: dj },
  { id: 3, name: 'Planner Ifeoma', role: 'Event Planner', img: planner },
  { id: 4, name: 'Light Crew Kelechi', role: 'Lighting Specialist', img: light },
  { id: 5, name: 'Sound Crew Ada', role: 'Sound Engineer', img: light },
  { id: 6, name: 'Support Staff Uche', role: 'Logistics & Support', img: sound },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Odogwu = () => {
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
      </div>

      {/* Overlay content */}
      <div className="relative z-10 bg-yellow-700/50 rounded-lg p-6 md:p-12 max-w-7xl mx-auto">
        {/* Glowing Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center text-xl md:text-5xl font-semibold mb-8 select-none
            text-yellow-100
            drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]
            tracking-widest"
        >
          Face Behind The Vibe
        </motion.h1>

        {/* Proprietor Section */}
        <motion.section
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left: Image, Name, Designation */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col items-center justify-center h-full text-center md:text-center"
          >
            <motion.img
              src=''
              alt="Uche Odogwu - CEO"
              className="rounded-full border-4 border-black shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px #FFD700' }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-white">Uche Odogwu</h2>
              <p className="text-yellow-100 text-sm font-semibold">CEO, Kepong Villa Garden & Suites</p>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            variants={itemVariants}
            className="max-w-xl text-center md:text-left"
          >
            <p className="text-lg text-white text-justify leading-relaxed mb-16">
              Uche Odogwu, affectionately called Odogwu Cally, is the driving force and face
              behind the vibe at Kepong Villa Garden & Suites. 
              His leadership brings people together within and beyond the hood
              in a way that blends Igbo culture with modern hospitality. 
              He inspires the crew and guests alike, making every night unforgettable.
            </p>
          </motion.div>
        </motion.section>

        {/* Crew Section */}
        <motion.section
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-12 text-white text-center tracking-wide">
            Crew Behind the Vibe
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {crewMembers.map(({ id, name, role, img }) => (
              <motion.div
                key={id}
                className="flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px #A52A2A' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={img}
                  alt={`${name} - ${role}`}
                  className="rounded-full border-2 border-yellow-100 shadow-md w-24 h-24 object-cover mb-3"
                />
                <h4 className="font-semibold text-white">{name}</h4>
                <p className="text-sm text-yellow-100">{role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Odogwu;
