import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Centralized Social Button Styles
  const socialBtnBase =
    'transform hover:scale-125 transition-all duration-300 rounded-full p-2 border-2';
  const socialBtnColors =
    'text-white hover:text-yellow-100 border-red-600';

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
    <footer className="bg-black bg-opacity-95 text-white py-16 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="border-t-2 border-b-2 border-red-600 py-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Contact Details */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl" />
                <p>
                  #275 Ugwogo Nike Road, Abakpa, Enugu
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-xl" />
                <a
                  href="tel:+2349162836505"
                  className="hover:text-yellow-100 transition-colors"
                >
                  0916 283 6505
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:odogwucally@gmail.com"
                  className="hover:text-yellow-100 transition-colors"
                >
                  odogwucally@gmail.com
                </a>
              </div>
            </div>
            {/* Map */}
            <div className="w-full md:w-1/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.022447115724!2d7.51408447404588!3d6.518842023219413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a378f42fc857%3A0xd6efa19237e1a2b9!2sKepong%20Villa%20Garden%20%26%20Suites!5e0!3m2!1sen!2sng!4v1745647133234!5m2!1sen!2sng"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                title="Kepong Villa Garden & Suites Location"
              />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kepong Villa Vibes Section */}
          <div className="space-y-6 text-center border-2 border-red-600 rounded-lg p-6 bg-black bg-opacity-80">
            <h3 className="text-2xl font-bold animate-pulse text-white">
              Kepong Villa Vibes
            </h3>
            <p className="text-sm max-w-md mx-auto text-white">
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
          <div className="space-y-6 text-center border-2 border-red-600 rounded-lg p-6 bg-black bg-opacity-80">
            <h3 className="text-2xl font-bold text-white">Get in the Groove</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/odogwu', label: 'Odogwu Cally' },
                { to: '/club-k', label: 'Club K' },
                { to: '/booking', label: 'Book Now' },
                { to: '/featured-entertainers', label: 'Featured Entertainers' },
          
           
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white hover:text-yellow-200 hover:underline transition-colors duration-300 border-b border-red-600 pb-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact Section */}
          <div className="space-y-6 text-center border-2 border-red-600 rounded-lg p-6 bg-black bg-opacity-80">
            <h3 className="text-2xl font-bold text-white">Entertainment Updates</h3>
            <p className="text-sm max-w-md mx-auto text-white">
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
                className="w-full bg-yellow-100 text-black px-4 py-3 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                required
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-yellow-300 text-sm">{success}</p>}
              <button
                type="submit"
                className="bg-yellow-100 text-black font-semibold px-4 py-3 rounded-lg hover:bg-amber-500 hover:text-black transform hover:scale-105 transition-all duration-300 w-full"
              >
                Subscribe
              </button>
            </form>
            <div className="space-y-3 text-sm font-semibold text-white">
              <p>
                <a
                  href="tel:+2349162836505"
                  className="hover:text-amber-400 transition-colors border-b border-red-600 pb-1"
                >
                  0916 283 6505
                </a>
              </p>
              <p>
                <a
                  href="mailto:odogwucally@gmail.com"
                  className="hover:text-amber-400 transition-colors border-b border-red-600 pb-1"
                >
                  odogwucally@gmail.com
                </a>
              </p>
              <p className="border-b border-red-600 pb-1">
                #275 Ugwogo Nike Road, Abakpa, Enugu
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white text-center">
          <p className="font-bold md:text-lg text-xs text-white">
            © {new Date().getFullYear()} Kepong Villa Garden & Suites. All rights reserved.
          </p>
          <small className="text-yellow-100 opacity-40 text-sm mt-2 block">
            Site Design & Build by Elodi Nigeria Enterprises, Enugu: <a href="08136573235">08136573235</a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;