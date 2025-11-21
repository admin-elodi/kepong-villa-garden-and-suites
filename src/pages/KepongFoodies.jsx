import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReserveTableModal from '@/components/ReserveTableModal';
import { MenuModal } from '@/components/Modals';
import foodiesBg from '@/assets/images/foodies/back.webp';
import foodies from '@/data/foodiesData';

// Card styles for uniform styling with override capability
const foodieCardStyles = {
  cardBase:
    'bg-black bg-opacity-80 rounded-xl shadow-xl hover:shadow-red-600/30 transition-all duration-500 flex flex-col min-h-[400px] border-2 border-white/60 hover:border-red-600/60',
  cardContent: 'p-6 flex flex-col flex-grow justify-start',
  cardTitle: 'text-2xl font-bold mb-3 text-white p-6 text-center bg-gradient-to-r from-red-600/30 to-transparent rounded-t-lg',
  cardImage: 'w-full h-48 object-cover transition-transform duration-500 hover:scale-105 flex-shrink-0 rounded-lg',
  buttonsContainer: 'flex flex-col border-2 border-white/60 p-2 rounded-lg gap-3 flex-shrink-0 items-center min-h-[100px] bg-white/5',
  buttonBase:
    'w-full max-w-xl whitespace-nowrap font-bold rounded-md px-2 py-2 shadow-md transform hover:scale-105 transition-all duration-300',
  buttonViewMenu: 'bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 active:bg-yellow-700 text-white text-center',
  buttonVisitPage: 'bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 active:from-red-800 text-white text-center',
  orText: 'text-white font-bold text-lg select-none my-0.5 bg-red-600/30 px-3 py-1 rounded-full',
};

const KepongFoodies = () => {
  const [menuModal, setMenuModal] = useState({ open: false, foodie: null });
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  const openReserveModal = () => setReserveModalOpen(true);
  const closeReserveModal = () => setReserveModalOpen(false);

  // Your phone / WhatsApp info
  const phoneNumber = '+2349162836505'; // example number, replace with your own
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`; // WhatsApp direct link

  return (
    <main
      className="min-h-screen font-montserrat text-white px-6 md:px-16 pt-[160px] pb-2 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${foodiesBg})` }}
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80 -z-10"></div>

      {/* Heading */}
      <section className="bg-black/60 backdrop-blur-sm text-center rounded-xl mx-auto py-10 md:py-12 md:pt-24 relative z-10 border border-white/20">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-3 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
          Kepong Foodies
        </h1>
        <h2 className="text-white max-w-7xl md:text-[17px] mx-auto px-4 mb-6 leading-relaxed">
          Visit Kepong or Book Online For Delivery to Your Home or Office
        </h2>
        <div className="bg-gradient-to-r from-black/70 to-black/80 py-4 border-2 border-red-600/40 rounded-lg backdrop-blur-sm">
          <div className="mb-4 space-y-2">
            <h3 className="uppercase font-bold text-red-400 text-lg">Lunch & Dinner Orders Only</h3>
            <h3 className="text-white">Delivery Time for Lunch - 1pm</h3>
            <h3 className="text-white">Delivery Time for Dinner - 7pm</h3>
          </div>
          <p className="text-white/90">Order on time to meet delivery times</p>
          <small className="bg-white/10 px-3 py-2 text-white font-bold border border-red-600/50 rounded-lg block mt-3">
            For enquiries call Joy on: <a href="tel:+2348162482304" className="text-red-300 hover:text-red-200">0816 248 2304</a>
          </small>
        </div>
      </section>

      {/* Foodies Grid */}
      <section
        className="grid gap-12 md:grid-cols-4 max-w-7xl mx-auto mb-20 relative z-10"
        style={{ gridAutoRows: '1fr' }}
      >
        {foodies.map(({ id, name, image, branchUrl }) => (
          <article key={id} className={foodieCardStyles.cardBase}>
            <h2 className={foodieCardStyles.cardTitle}>{name}</h2>
            <div className="overflow-hidden flex-shrink-0">
              {/* Render video for Madam Ezinwanne Kitchen (id:1); else show image */}
              {id === 1 ? (
                <video
                  src={image}
                  className={foodieCardStyles.cardImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`Video of ${name}`}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={image}
                  alt={`Photo of ${name}`}
                  className={foodieCardStyles.cardImage}
                  loading="lazy"
                />
              )}
            </div>
            <div className={foodieCardStyles.cardContent}>
              <div className={foodieCardStyles.buttonsContainer}>
                <button
                  type="button"
                  onClick={() =>
                    setMenuModal({ open: true, foodie: foodies.find((f) => f.id === id) })
                  }
                  className={`${foodieCardStyles.buttonBase} ${foodieCardStyles.buttonViewMenu}`}
                  aria-label={`View menu for ${name}`}
                >
                  See Menu
                </button>

                {/* Minimalist OR text separator */}
                <span className={foodieCardStyles.orText}>OR</span>

                <Link
                  to={branchUrl}
                  className={`${foodieCardStyles.buttonBase} ${foodieCardStyles.buttonVisitPage}`}
                  aria-label={`Visit page for ${name}`}
                >
                  Enter Kitchen to Order
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Special Table for Four Section */}
      <section className="max-w-4xl mx-auto mb-16 bg-black/70 backdrop-blur-sm border-2 border-red-600/50 rounded-xl p-8 shadow-xl text-center relative z-10">
        <h3 className="text-3xl font-bold text-red-400 mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-md">
          Also Try Kepong Foodies Table for Four
        </h3>

        <button
          type="button"
          className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 active:from-yellow-700 text-black font-bold rounded-md px-8 py-3 shadow-md hover:shadow-yellow-500/30 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          onClick={openReserveModal}
          aria-label="Book the Special Table for Four"
        >
          Book Your Table Now
        </button>
      </section>

      {/* Call to Action Section */}
      <section className="text-center max-w-3xl mx-auto mb-12 px-6 py-10 bg-black/70 backdrop-blur-sm rounded-xl border-2 border-red-600/50 shadow-xl relative z-10">
        <h3 className="text-3xl font-bold text-red-400 mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-md">
          You Want to Join Kepong Foodies?
        </h3>
        <p className="text-white/90 mb-4 font-semibold text-lg leading-relaxed">
          Contact or WhatsApp to get started:
        </p>
        <div className="flex flex-col md:flex-row md:justify-center gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block bg-gradient-to-r from-red-700/60 to-red-800/60 hover:from-red-600 hover:to-red-700 active:from-red-800 text-white font-bold rounded-md px-6 py-3 shadow-md hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500"
            aria-label="Call to get started"
          >
            {phoneNumber}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-600 active:from-green-800 text-white font-bold rounded-md px-6 py-3 shadow-md hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500"
            aria-label="WhatsApp to get started"
          >
            WhatsApp Chat
          </a>
        </div>
      </section>

      {/* Modals */}
      <MenuModal
        open={menuModal.open}
        foodie={menuModal.foodie}
        onClose={() => setMenuModal({ open: false, foodie: null })}
      />
      <ReserveTableModal isOpen={reserveModalOpen} onClose={closeReserveModal} />
    </main>
  );
};

export default KepongFoodies;