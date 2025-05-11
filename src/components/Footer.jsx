import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter subscription logic
    console.log('Subscribed with:', email);
    setEmail('');
    alert('Thanks for subscribing to Kepong Villa’s updates!');
  };

  return (
    <footer className="bg-green-800 text-white py-12 font-montserrat text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-yellow-500 animate-pulse">Kepong Villa Vibes</h3>
            <p className="text-white/80 text-sm">
              Join the ultimate entertainment experience at Kepong Villa Garden & Suites. From electrifying nights at Club K to thrilling treasure hunts, we bring the buzz to Enugu!
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://facebook.com/kepongvilla"
                aria-label="Facebook"
                className="text-gray-300 hover:text-orange-500 transform hover:scale-125 transition-all duration-300"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://instagram.com/kepongvilla"
                aria-label="Instagram"
                className="text-gray-300 hover:text-orange-500 transform hover:scale-125 transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://twitter.com/kepongvilla"
                aria-label="Twitter"
                className="text-gray-300 hover:text-orange-500 transform hover:scale-125 transition-all duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-500">Get in the Groove</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/club-k"
                  className="text-white/80 hover:text-orange-500 hover:underline transition-colors duration-300"
                >
                  Club K
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  className="text-white/80 hover:text-orange-500 hover:underline transition-colors duration-300"
                >
                  Featured Entertainers
                </Link>
              </li>
              <li>
                <Link
                  to="/treasure-hunt"
                  className="text-white/80 hover:text-orange-500 hover:underline transition-colors duration-300"
                >
                  Treasure Hunt
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-white/80 hover:text-orange-500 hover:underline transition-colors duration-300"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-orange-500 hover:underline transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-500">Stay in the Loop</h3>
            <p className="text-white/80 text-sm">
              Subscribe for exclusive updates on events, performances, and more!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 sm:w-auto"
                style={{ borderColor: '#FFD700', borderWidth: '2px' }}
              >
                Subscribe
              </button>
            </form>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <a href="tel:+2349162836505" className="hover:text-orange-500 transition-colors">
                  0916 283 6505
                </a>
              </p>
              <p>
                <a
                  href="mailto:odogwucally@gmail.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  odogwucally@gmail.com
                </a>
              </p>
              <p>#275 Ugwogo Nike Road, Abakpa, Enugu</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 text-lg">
            © {new Date().getFullYear()} Kepong Villa Garden & Suites. All rights reserved.
          </p>
          <small className="text-white/80 text-sm mt-2 opacity-50">
            Site Designed by Elodi Nigeria Enterprises, Enugu
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;