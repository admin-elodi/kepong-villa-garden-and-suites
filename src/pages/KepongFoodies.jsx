import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReserveTableModal from '@/components/ReserveTableModal';
import { MenuModal } from '@/components/Modals';
import foodiesBg from '@/assets/images/foodies/back.webp';
import foodies from '@/data/foodiesData';

// Card styles for uniform styling with override capability
const foodieCardStyles = {
  cardBase:
    'bg-black bg-opacity-80 rounded-lg shadow-lg hover:shadow-red-600 transition-shadow duration-300 flex flex-col min-h-[400px] border-2 border-white',
  cardContent: 'p-6 flex flex-col flex-grow justify-start',
  cardTitle: 'text-2xl font-semibold mb-2 text-white p-6 text-center',
  cardImage: 'w-full h-48 object-cover transition-transform duration-300 hover:scale-105 flex-shrink-0',
  buttonsContainer: 'flex flex-col border-2 border-white p-2 rounded-lg gap-3 flex-shrink-0 items-center min-h-[100px]',
  buttonBase:
    'w-full max-w-xl whitespace-nowrap font-semibold rounded-md px-2 py-2 shadow-md transform hover:scale-105 transition-colors duration-300',
  buttonViewMenu: 'bg-yellow-700 hover:bg-yellow-600 active:bg-yellow-700 text-white text-center',
  buttonVisitPage: 'bg-red-600 hover:bg-red-600 active:bg-red-800 text-white text-center',
  orText: 'text-white font-bold text-lg select-none my-0.5',
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
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-80 -z-10"></div>

      {/* Heading */}
      <section className="bg-black/60 text-center rounded-lg mx-auto py-8 md:py-30 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Kepong Foodies</h1>
        <h3 className="text-white max-w-7xl mx-auto px-4">
          Visit Kepong or Book Online For Delivery to Your Home or Office
        </h3>
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
                  See Menu & Visit Kepong
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
      <section className="max-w-4xl mx-auto mb-16 bg-black bg-opacity-80 border-2 border-red-600 rounded-lg p-8 shadow-lg text-center relative z-10">
        <h3 className="text-3xl font-bold text-red-600 mb-6">Also Try Kepong Foodies Table for Four</h3>

        <button
          type="button"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 transition-colors duration-300 text-black font-semibold rounded-md px-8 py-3 shadow-md hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-yellow-400"
          onClick={openReserveModal}
          aria-label="Book the Special Table for Four"
        >
          Book Your Table Now
        </button>
      </section>

      {/* Call to Action Section */}
      <section className="text-center max-w-3xl mx-auto mb-12 px-6 py-10 bg-black bg-opacity-80 rounded-lg border-2 border-red-600 shadow-lg relative z-10">
        <h3 className="text-3xl font-bold text-red-600 mb-4">You Want to Join Kepong Foodies?</h3>
        <p className="text-white mb-4 font-semibold text-lg">Contact or WhatsApp to get started:</p>
        <div className="flex flex-col md:flex-row md:justify-center gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block bg-red-900/40 hover:bg-red-600 active:bg-red-800 transition-colors duration-300 text-white font-semibold rounded-md px-6 py-3 shadow-md hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-red-500"
            aria-label="Call to get started"
          >
            {phoneNumber}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 active:bg-green-800 transition-colors duration-300 text-white font-semibold rounded-md px-6 py-3 shadow-md hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-green-500"
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
