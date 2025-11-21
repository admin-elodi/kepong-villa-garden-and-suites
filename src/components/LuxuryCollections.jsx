import React from 'react';
import { motion } from 'framer-motion';
import luxuryBanner from '@/assets/images/homepage/gold.webp'; 
import bagsImg from '@/assets/images/homepage/gold.webp';
import jeansImg from '@/assets/images/homepage/gold.webp';
import shirtsImg from '@/assets/images/homepage/gold.webp';
import sneakersImg from '@/assets/images/homepage/gold.webp';
import jewelryImg from '@/assets/images/homepage/gold.webp';

const products = [
  { title: 'Bags', description: 'Elegant, spacious, and crafted with premium materials.', img: bagsImg },
  { title: 'Jeans', description: 'Stylish and comfortable denim perfect for any occasion.', img: jeansImg },
  { title: 'Shirts', description: 'Classic and trendy shirts tailored to enhance your look.', img: shirtsImg },
  { title: 'Sneakers', description: 'Trendy sneakers combining style and comfort.', img: sneakersImg },
  { title: 'Jewelry', description: 'Exquisite pieces that add sparkle to your outfit.', img: jewelryImg },
];

const LuxuryCollections = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b py-30 from-gray-100 via-white to-gray-100 font-montserrat">
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-72 md:h-96 overflow-hidden rounded-b-3xl shadow-lg"
      >
        <img src={luxuryBanner} alt="C & C Luxury Collection Banner" className="w-full h-full object-cover brightness-90" loading="lazy" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center px-6">
            C & C `N Luxury Collection
          </h1>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-5xl mx-auto py-12 px-6 text-gray-800 text-center"
      >
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-2">
          Discover Luxury!
        </p>
        <ul className="text-center mb-2 font-bold">
            <li>Bags</li>
            <li>Jeans</li>
            <li>Shirts</li>
            <li>Sneakers</li>
            <li>Jewelry</li>
        </ul>
      
      </motion.div>

      {/* Products Grid */}
      

    

      {/* Call to Action */}
      <div className="text-center mb-20">
        <motion.a 
          href="https://wa.me/2347030483031" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition-colors"
          aria-label="Contact C & C Luxury Collection on WhatsApp"
        >
          Contact Us on WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default LuxuryCollections;
