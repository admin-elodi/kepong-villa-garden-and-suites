import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import emailjs from '@emailjs/browser';

import comedyNightVideo from '@/assets/videos/comedian1.mp4';
import FeaturedVideos from '../components/FeaturedVideos';
import tableImage from '@/assets/images/table-for-four.jpg';

const entertainers = [
  {
    category: 'Comedians',
    performers: [
      {
        name: 'Chuks D General',
        description: 'Hilarious Nigerian humor with witty punchlines.',
        video: comedyNightVideo,
      },
      {
        name: 'MC Edo Pikin',
        description: 'High-energy comedy with pidgin flair.',
      },
      {
        name: 'MC Bar Beach',
        description: 'Side-splitting jokes that captivate all.',
      },
    ],
  },
  {
    category: 'Dancers',
    performers: [
      {
        name: 'Afrobeat Crew',
        description: 'Dynamic Afrobeat and street dance.',
      },
      {
        name: 'Zanku Legends',
        description: 'Precise, electrifying Zanku dance moves.',
      },
      {
        name: 'Linda Fire',
        description: 'Fiery, electrifying dance performances.',
      },
    ],
  },
  {
    category: 'Hypemen',
    performers: [
      {
        name: 'HypeKing Lagos',
        description: 'Crowd-pumping energy all night.',
      },
      {
        name: 'MC Energy',
        description: 'Vibrant hype for Club K crowds.',
      },
      {
        name: 'GrandMasterHype',
        description: 'Lively energy for unforgettable events.',
      },
    ],
  },
];

const weekendLineup = {
  comedians: ['Chuks D General', 'MC Edo Pikin'],
  dancers: ['Afrobeat Crew', 'Linda Fire'],
  hypemen: ['HypeKing Lagos', 'GrandMasterHype'],
};

const enquiryPhoneNumber = '+234 916 283 6505';

const FeaturedEntertainers = () => {
  const [activeCategory, setActiveCategory] = useState(entertainers[0].category);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    tables: 1,
  });
  const performers = entertainers.find((cat) => cat.category === activeCategory)?.performers || [];

  const handleReserveTable = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'tables' ? Math.max(1, parseInt(value) || 1) : value,
    }));
  };

  const handleSendBooking = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      date: formData.date,
      tables: formData.tables,
      table_cost: `₦${(formData.tables * 50000).toLocaleString()}`,
      to_email: 'ikezion@gmail.com',
    };

    emailjs
      .send(
        'service_uov8gcj',
        'template_3pc7ksc',
        templateParams,
        '1_i-cz9iExZKgWIAD'
      )
      .then(() => {
        alert('Booking details sent successfully!');
        setShowModal(false);
        setFormData({ name: '', date: '', tables: 1 });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send booking details. Please try again.');
      });
  };

  return (
    <main className="bg-black bg-opacity-90 min-h-screen font-montserrat text-white py-16">
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
      <div className="w-full py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Heading */}
          <section className="text-center mb-4 relative">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 border-b-2 border-amber-400 inline-block pb-2 animate-fadeInUp"
            >
              Entertainment
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 mb-4 animate-fadeInUp-delayed"
            >
              Reserve a Table for Premium Entertainment Fridays to Sundays
            </p>
          </section>

          {/* This Weekend's Lineup Announcement */}
          <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-0">
            <h2 className="flex items-center justify-center text-2xl sm:text-3xl font-semibold text-gray-400 mb-2 text-center gap-2">
              <span className="inline-block text-3xl" style={{ color: '#b0b3b8' }}>🎤</span>
              This Weekend’s Lineup (Fri–Sun)
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
              <div className="bg-black bg-opacity-70 border-2 border-emerald-500 rounded-lg p-4 min-w-[220px]">
                <h3 className="text-lg font-bold text-white mb-1 text-center">Comedians</h3>
                <ul className="text-gray-300 text-center">
                  {weekendLineup.comedians.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-black bg-opacity-70 border-2 border-emerald-500 rounded-lg p-4 min-w-[220px]">
                <h3 className="text-lg font-bold text-white mb-1 text-center">Dancers</h3>
                <ul className="text-gray-300 text-center">
                  {weekendLineup.dancers.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-black bg-opacity-70 border-2 border-emerald-500 rounded-lg p-4 min-w-[220px]">
                <h3 className="text-lg font-bold text-white mb-1 text-center">Hypemen</h3>
                <ul className="text-gray-300 text-center">
                  {weekendLineup.hypemen.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleReserveTable}
                className="bg-emerald-900 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-emerald-500 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                style={{ minWidth: 260, width: 320, maxWidth: '95vw' }}
                aria-label="Book your table now for an unforgettable weekend!"
              >
                Reserve a Table
              </button>
            </div>
          </div>

          {/* Featured DJ Video Section */}
          <section className="py-8 sm:py-12 rounded-lg">
            <div className="text-center mb-6">
              <FeaturedVideos />
            </div>

            {/* Performers Grid */}
            <div className="border-t-2 border-b-2 border-amber-400 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
                {performers.map(({ name, description, video }, idx) => (
                  <div
                    key={`${activeCategory}-${name}-${idx}`}
                    className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div
                      className="relative h-56 sm:h-[320px] bg-black -mt-4 rounded-t-xl overflow-hidden shadow-2xl border-4 border-white"
                    >
                      {video ? (
                        <ReactPlayer
                          url={video}
                          controls={false}
                          playing
                          loop
                          muted
                          width="100%"
                          height="100%"
                          className="absolute top-0 left-0"
                          style={{ objectFit: 'cover', backgroundColor: 'black' }}
                          config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white text-center px-4 border-b-2 border-amber-400">
                          <p className="text-base">Video unavailable</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
                      <p className="text-gray-200 text-base mb-4 line-clamp-1">{description}</p>
                      <button
                        onClick={handleReserveTable}
                        className="bg-emerald-900 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-emerald-500 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        aria-label="Reserve a table for premium entertainment"
                      >
                        Reserve a Table
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mt-10">
              {entertainers.map(({ category }) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 border-2 ${
                    activeCategory === category
                      ? 'bg-emerald-900 text-white border-emerald-500 shadow-sm'
                      : 'text-white border-emerald-500 hover:bg-orange-500 hover:text-white hover:scale-105'
                  } focus:ring-2 focus:ring-amber-500 focus:outline-none`}
                  aria-label={`View ${category}`}
                  aria-current={activeCategory === category ? 'true' : 'false'}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-8 sm:py-12 text-center">
            <h2
              className="text-3xl font-bold mb-4 text-white border-b-2 border-amber-400 pb-2 animate-fadeInUp"
            >
              Experience Live Entertainment Fridays to Sundays
            </h2>
            <p className="text-base sm:text-lg mb-6 text-gray-200 max-w-xl mx-auto">
              Visit or book a room to enjoy talented entertainers!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/bookings"
                className="inline-block bg-emerald-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-emerald-500 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                aria-label="Book your night at Club K"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-transparent text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-500 hover:text-black transition-colors duration-300 border-2 border-emerald-500 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                aria-label="Contact us to learn more about Club K entertainers"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 relative max-h-[80vh] overflow-y-auto"
            tabIndex="0"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white hover:text-amber-400 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>
            <h2 id="modal-title" className="text-2xl font-bold text-white mb-4 text-center">
              Reserve a Table
            </h2>
            <div
              className="w-full h-48 bg-gray-700 rounded-lg mb-4 bg-center bg-cover"
              style={{
                backgroundImage: `url(${tableImage})`,
                backgroundColor: '#1F2937',
              }}
              aria-label="Image of a table for 4"
            />
            <p className="text-lg font-semibold text-amber-400 text-center mb-2">Cost: ₦50,000 per table-for-four</p>
            <div className="text-gray-200 text-sm mb-4">
              <p className="font-semibold">Bank Details:</p>
              <p>Account Name: Kepong Villa Garden & Suites</p>
              <p>Bank: Wema Bank</p>
              <p>Account Number: 0125564025</p>
              <p>PAY to above details & send booking details.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 mb-4 text-center">
              <span className="text-gray-300">For enquiries, call </span>
              <a href={`tel:${enquiryPhoneNumber}`} className="text-amber-400 font-semibold hover:underline">
                {enquiryPhoneNumber}
              </a>
            </div>
            <form onSubmit={handleSendBooking} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-200">
                  Date for Reservation
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="tables" className="block text-sm font-medium text-gray-200">
                  Number of Table-for-Four Units
                </label>
                <input
                  type="number"
                  id="tables"
                  name="tables"
                  min="1"
                  value={formData.tables}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
                {/* Auto-calculated total tables reserved */}
                <div className="mt-2 text-center text-amber-400 font-semibold">
                  Total tables reserved: {formData.tables}
                </div>
                <div className="mt-1 text-center text-gray-300 text-sm">
                  Total cost: ₦{(formData.tables * 50000).toLocaleString()}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-900 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-emerald-500 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                aria-label="Send booking details"
              >
                Send Booking Details
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default FeaturedEntertainers;
