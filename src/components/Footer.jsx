import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  // Base style for all social buttons: fixed size for perfect circle, transition on hover, border
  const socialBtnBase =
    'transform hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center w-12 h-12 border-2 shadow-md';

  // Individual social button styles for official brand backgrounds and hover colors
  const socialBtnStyles = {
    facebook: 'text-white border-[#1877F2] bg-[#1877F2] hover:bg-[#155fbe]',
    instagram:
      'text-white border-transparent bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:brightness-110',
    twitter: 'text-white border-[#1DA1F2] bg-[#1DA1F2] hover:bg-[#0d8ddb]',
    tiktok:
      'text-white border-white bg-black hover:bg-pink-600', // TikTok black bg with white border and pink hover
  };

  return (
    <footer className="bg-black/70 text-white py-16 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="border-t-2 border-b-2 border-red-600 py-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Contact Details */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl" />
                <p>#275 Ugwogo Nike Road, Abakpa, Enugu</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-xl" />
                <a href="tel:+2349162836505" className="hover:text-yellow-100 transition-colors">
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
              {/* Facebook */}
              <a
                href="https://web.facebook.com/p/Kepong-Villa-Garden-100063802974099/?_rdc=1&_rdr#"
                aria-label="Facebook"
                className={`${socialBtnBase} ${socialBtnStyles.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-xl" />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/kepongvilla"
                aria-label="Instagram"
                className={`${socialBtnBase} ${socialBtnStyles.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" />
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/kepongvilla"
                aria-label="Twitter"
                className={`${socialBtnBase} ${socialBtnStyles.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@kepongvilla"
                aria-label="TikTok"
                className={`${socialBtnBase} ${socialBtnStyles.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* TikTok SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2.25c.53 0 1.04.102 1.5.289v4.362a2.84 2.84 0 01-1.5-.471 3.022 3.022 0 00-1.693-.518c-1.659 0-3 1.502-3 3.358 0 1.854 1.341 3.357 3 3.357.15 0 .298-.034.437-.061V19.5a6.022 6.022 0 01-3.936-1.568 6.318 6.318 0 01-1.425-5.006 6.04 6.04 0 015.361-4.844V2.25z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6 text-center border-2 border-red-600 rounded-lg p-6 bg-black bg-opacity-80">
            <h3 className="text-2xl font-bold text-white">Get in the Groove</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/don', label: 'Don Cally' },
                { to: '/club-k', label: 'Club K' },
                { to: '/booking', label: 'Book Now' },
                { to: '/featured-entertainers', label: 'Featured Entertainers' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white hover:text-yellow-200 transition-colors duration-300 border-b border-red-600 pb-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enugu Nightlife Spotlight Section */}
          <div className="space-y-6 text-center border-2 border-red-600 rounded-lg p-6 bg-black bg-opacity-80">
            <h3 className="text-2xl font-bold text-white">Enugu Nightlife Spotlight</h3>
            <p className="text-sm max-w-md mx-auto text-white leading-relaxed">
              Celebrate the vibrant rhythm of Enugu’s nightlife with unmatched energy
            </p>
            <p className="text-sm max-w-md mx-auto text-yellow-200 font-semibold">
              Join is Wednesdays, Fridays and Sundays for Ogene, Afrobeat Jam Sessions
              or chill at Club K 
            </p>
            <p className="text-xs text-gray-400 italic max-w-md mx-auto">
              Experience the heart of Enugu music, dance, and socials
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white text-center">
          <p className="font-bold md:text-lg text-xs text-white">
            © {new Date().getFullYear()} Kepong Villa Garden & Suites. All rights reserved.
          </p>
          <small className="text-yellow-100 opacity-40 text-sm mt-2 block">
            Site Design & Build by Elodi Nigeria Enterprises, Enugu:{' '}
            <a href="tel:08136573235" className="hover:text-yellow-100">
              08136573235
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
