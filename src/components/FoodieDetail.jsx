import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MenuModal, OrderModal } from '@/components/Modals';
import foodies from '@/data/foodiesData';
import meatsBg from '@/assets/images/foodies/meats.webp';
import ezinwanneVideo from '@/assets/videos/ezinwanne.mp4';

const FoodieDetail = () => {
  const { slug } = useParams();
  const foodie = foodies.find((f) => f.branchUrl === `/foodie/${slug}`);
  const navigate = useNavigate();
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  if (!foodie) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Foodie Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded"
            aria-label="Back to homepage"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 font-montserrat p-6 md:p-12 pt-[220px] md:pt-[280px]">
      <button
        onClick={() => navigate('/kepong-foodies')}
        className="mb-6 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-400 inline-flex items-center gap-2"
        aria-label="Go back to foodies list"
      >
        <span>&larr;</span> Back to Kepong Foodies Page
      </button>

      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border-2 border-red-600">
        <h1 className="text-4xl font-bold text-black mb-4">{foodie.name}</h1>

        <img
          src={foodie.image || meatsBg}
          alt={`Image of ${foodie.name}`}
          className="w-full max-h-96 object-cover rounded-lg mb-6"
          loading="lazy"
        />

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6">
          <button
            onClick={() => setMenuModalOpen(true)}
            className="flex-grow bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            aria-label={`View menu for ${foodie.name}`}
            type="button"
          >
            View Menu
          </button>
          <button
            onClick={() => setOrderModalOpen(true)}
            className="flex-grow bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-500"
            aria-label={`Order from ${foodie.name}`}
            type="button"
          >
            Order Now
          </button>
        </div>

        <div className="text-gray-700 mb-6">
          <p>
            <strong>Phone: </strong>{' '}
            <a href={`tel:${foodie.phone}`} className="text-blue-600 underline">
              {foodie.phone}
            </a>
          </p>
          <p>
            <strong>WhatsApp: </strong>{' '}
            <a
              href={`https://wa.me/${foodie.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>

        {/* Tessy Special Kitchen Single Video */}
        {foodie.id === 2 && (
          <section className="mt-12 w-full">
            <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">How Tessy Cooks Nsala Soup</h2>
            <div className="relative bg-yellow-50 rounded-lg p-6 shadow-md border-2 border-red-600">
              <div className="overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/yOr7sx6Usfg"
                  title="Nsala Soup"
                  className="w-full h-64 md:h-80 rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-black">Nsala Soup</h3>
                <p className="text-gray-700">See the spicy and flavorful Nsala soup come to life with goat meat and uyayak.</p>
                <p className="text-gray-600 mt-2">
                  This video was created by{' '}
                  <a
                    href="https://www.youtube.com/watch?v=yOr7sx6Usfg&t=51s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Kikifoodies
                  </a>
                  . Follow Kikifoodies on YouTube for more amazing recipes!
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Conditionally render the video section only for Madam Ezinwanne Kitchen (id:1) */}
        {foodie.id === 1 && (
          <section className="mt-12 w-full">
            <h2 className="text-3xl font-bold text-black mb-4">About Madam Ezinwanne Kitchen</h2>
            <video
              controls
              src={ezinwanneVideo}
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-md"
              aria-label="Video about Madam Ezinwanne Kitchen"
            >
              Your browser does not support the video tag.
            </video>
          </section>
        )}
      </section>

      <MenuModal open={menuModalOpen} onClose={() => setMenuModalOpen(false)} foodie={foodie} />
      <OrderModal open={orderModalOpen} onClose={() => setOrderModalOpen(false)} foodie={foodie} />
    </main>
  );
};

export default FoodieDetail;