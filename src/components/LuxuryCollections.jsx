import React from 'react';
import { motion } from 'framer-motion';
import luxuryBanner from '@/assets/images/homepage/gold.webp';

// Replace these with your actual high-quality product photos
import bagsImg from '@/assets/images/bags.jpg';
import jeansImg from '@/assets/images/jeans.jpg';
import shirtsImg from '@/assets/images/shirts.jpg';
import sneakersImg from '@/assets/images/sneakers.jpg';
import jewelryImg from '@/assets/images/jewelry.webp';

const collections = [
  { title: 'Bags',       img: bagsImg,     delay: 0.2 },
  { title: 'Jeans',      img: jeansImg,    delay: 0.3 },
  { title: 'Shirts',     img: shirtsImg,   delay: 0.4 },
  { title: 'Sneakers',   img: sneakersImg, delay: 0.5 },
  { title: 'Jewelry',    img: jewelryImg,  delay: 0.6 },
];

const LuxuryCollections = () => {
  return (
    <section className="min-h-screen sm:mt-30 md:mt-30 bg-black text-white overflow-hidden font-['Cinzel',serif]">

      {/* HERO – Baroque gold meets brutalist minimalism */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="relative h-screen flex items-center justify-center"
      >
        <img
          src={luxuryBanner}
          alt="C & C `N Luxury Collection"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            C & C <span className="block text-5xl md:text-7xl lg:text-8xl text-amber-500 mt-4">`N</span>
          </h1>
          <p className="text-xl md:text-2xl tracking-widest text-amber-400 mt-8 uppercase font-light">
            Luxury Collection
          </p>
        </motion.div>

        {/* Subtle baroque ornament – only where it matters */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </motion.div>

      {/* GRID – Ultra-minimal, museum-like */}
      <div className="max-w-7xl mx-auto px-6 md:py-30 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: item.delay, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-96 md:h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <motion.h2
                className="mt-8 text-4xl md:text-5xl font-medium tracking-wider text-center"
                whileHover={{ letterSpacing: "0.2em" }}
                transition={{ duration: 0.6 }}
              >
                {item.title}
              </motion.h2>

              {/* Tiny baroque flourish under title – used once per item */}
              <div className="flex justify-center mt-4 opacity-60">
                <span className="text-amber-600 text-2xl">✦</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION – Minimal luxury */}
      <div className="py-24 lg:py-32 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl tracking-widest uppercase text-amber-400 mb-12"
        >
          Exclusive pieces • Limited availability
        </motion.p>

        <motion.a
          href="https://wa.me/2347030483031"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-5 border-2 border-amber-600 text-amber-600 text-lg tracking-widest uppercase hover:bg-amber-600 hover:text-black transition-all duration-500"
        >
          Inquire on WhatsApp
        </motion.a>
      </div>

      {/* Footer ornament – one final baroque whisper */}
      <div className="h-32 bg-gradient-to-b from-transparent to-black flex items-center justify-center text-amber-600 text-5xl opacity-30">
        ✦
      </div>
    </section>
  );
};

export default LuxuryCollections;