import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Centralized Social Button Styles
  const socialBtnBase =
    'transform hover:scale-125 transition-all duration-300 rounded-full p-2 border-2';

  const socialBtnColors =
    'text-gray-200 hover:text-yellow-200 border-2 border-amber-200';

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed. Please try again.');
      }

      setSuccess(
        'Thanks for subscribing! Check your email for updates from Kepong Villa!'
      );
      setEmail('');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <footer className="bg-black opacity-90 text-gray-200 py-16 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kepong Villa Vibes Section */}
          <div className="space-y-6 text-center border-4 border-emerald-900 rounded-lg p-6 bg-transparent">
            <h3 className="text-2xl font-bold text-emerald-300 animate-pulse">
              Kepong Villa Vibes
            </h3>
            <p className="text-gray-200 font-semibold text-sm max-w-md mx-auto">
              Join the ultimate entertainment experience at Kepong Villa Garden & Suites, Enugu!
            </p>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://facebook.com/kepongvilla"
                aria-label="Facebook"
                className={`${socialBtnBase} ${socialBtnColors}`}
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://instagram.com/kepongvilla"
                aria-label="Instagram"
                className={`${socialBtnBase} ${socialBtnColors}`}
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://twitter.com/kepongvilla"
                aria-label="Twitter"
                className={`${socialBtnBase} ${socialBtnColors}`}
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6 text-center border-4 border-emerald-900 rounded-lg p-6 bg-transparent">
            <h3 className="text-2xl font-bold text-emerald-300">Get in the Groove</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/club-k', label: 'Club K' },
                { to: '/entertainment', label: 'Featured Entertainers' },
                { to: '/booking', label: 'Book Now' },
                { to: '/contact', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-200 hover:text-yellow-200 hover:underline transition-colors duration-300 border-b border-amber-400/50 pb-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact Section */}
          <div className="space-y-6 text-center border-4 border-emerald-900 rounded-lg p-6 bg-transparent">
            <h3 className="text-2xl font-bold text-emerald-300">Entertainment Updates</h3>
            <p className="text-gray-200 font-semibold text-sm max-w-md mx-auto">
              Subscribe for Entertainment News
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col space-y-4 max-w-sm mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-white text-gray-800 px-4 py-3 rounded-lg border-2 border-amber-500 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-emerald-300 text-sm">{success}</p>}
              <button
                type="submit"
                className="bg-yellow-100 text-emerald-900 font-semibold px-4 py-3 rounded-lg hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 w-full border-2 border-amber-400"
              >
                Subscribe
              </button>
            </form>
            <div className="space-y-3 text-sm text-gray-200 font-semibold">
              <p>
                <a
                  href="tel:+2349162836505"
                  className="hover:text-amber-400 transition-colors border-b border-amber-400/50 pb-1"
                >
                  0916 283 6505
                </a>
              </p>
              <p>
                <a
                  href="mailto:odogwucally@gmail.com"
                  className="hover:text-amber-400 transition-colors border-b border-amber-400/50 pb-1"
                >
                  odogwucally@gmail.com
                </a>
              </p>
              <p className="border-b border-amber-400/50 pb-1">
                #275 Ugwogo Nike Road, Abakpa, Enugu
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-amber-400/20 text-center">
          <p className="text-gray-200 font-bold md:text-lg text-xs">
            © {new Date().getFullYear()} Kepong Villa Garden & Suites. All rights reserved.
          </p>
          <small className="text-gray-400 opacity-40 text-xs mt-2 block">
            Site Designed by Elodi Nigeria Enterprises, Enugu
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
