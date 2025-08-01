import React, { useState, useRef, useEffect } from 'react';
import ReserveTableModal from '../components/ReserveTableModal';
import meatsBg from '@/assets/images/meats.jpg';
import nsukka from '@/assets/images/palm.webp';
import tessy from '@/assets/images/images.jpg';
import banquet from '@/assets/images/foodies/chef.jpg';
import chickenSalad from '@/assets/images/images.jpg';

// Foodies array with individual menus, including isOrderable flag
const foodies = [
  {
    id: 1,
    name: 'Madam Ezinwanne Kitchen',
    image: meatsBg,
    phone: '+2348012345678',
    whatsapp: '+2348012345678',
    bankDetails: {
      bankName: 'Zenith Bank',
      accountName: 'Madam Ezinwanne Kitchen',
      accountNumber: '0123456789',
    },
    menu: [
      { id: 'ezinwa1', name: 'Jollof Rice', price: 2500, isOrderable: true },
      { id: 'ezinwa2', name: 'Egusi Soup', price: 3000, isOrderable: true },
      { id: 'ezinwa3', name: 'Pounded Yam', price: 2000, isOrderable: false }, // In-person only
    ],
  },
  {
    id: 2,
    name: 'Tessy Special Kitchen',
    image: tessy,
    phone: '+2348063025640',
    whatsapp: '+2348063025640',
    bankDetails: {
      bankName: 'Moniepoint',
      accountName: 'Tessy Special',
      accountNumber: '5322466243',
    },
    menu: [
      { id: 'tessy1', name: 'Fried Rice', price: 2200, isOrderable: true },
      { id: 'tessy2', name: 'Vegetable Soup', price: 2800, isOrderable: true },
      { id: 'tessy3', name: 'Suya Platter', price: 3500, isOrderable: false }, // In-person only
    ],
  },
  {
    id: 3,
    name: 'De Banquet Hotel Kitchen',
    image: '',
    phone: '+2348023456789',
    whatsapp: '+2348023456789',
    bankDetails: {
      bankName: 'First Bank',
      accountName: 'De Banquet Hotel Kitchen',
      accountNumber: '1122334455',
    },
    menu: [
      { id: 'banquet1', name: 'Grilled Fish', price: 4000, isOrderable: true },
      { id: 'banquet2', name: 'Chicken Stew', price: 2500, isOrderable: true },
      { id: 'banquet3', name: 'Special Platter', price: 5000, isOrderable: false }, // In-person only
    ],
  },
  {
    id: 4,
    name: 'Nsukka Food & Drink',
    image: nsukka,
    phone: '+2348034567890',
    whatsapp: '+2348034567890',
    bankDetails: {
      bankName: 'United Bank for Africa',
      accountName: 'Nsukka Food & Drink',
      accountNumber: '5566778899',
    },
    menu: [
      { id: 'nsukka1', name: 'Nsukka Soup', price: 2700, isOrderable: true },
      { id: 'nsukka2', name: 'Yam Porridge', price: 2000, isOrderable: true },
    ],
  },
  {
    id: 5,
    name: 'Chicken Salad Special',
    image: chickenSalad,
    phone: '+2348045678901',
    whatsapp: '+2348045678901',
    bankDetails: {
      bankName: 'Access Bank',
      accountName: 'Chicken Salad Special',
      accountNumber: '3344556677',
    },
    menu: [
      { id: 'salad1', name: 'Chicken Salad', price: 3000, isOrderable: true },
      { id: 'salad2', name: 'Fruit Salad', price: 1500, isOrderable: true },
    ],
  },
  {
    id: 6,
    name: 'Fish Barbecue Package',
    image: '',
    phone: '+2348056789012',
    whatsapp: '+2348056789012',
    bankDetails: {
      bankName: 'FCMB',
      accountName: 'Fish Barbecue Package',
      accountNumber: '7788990011',
    },
    menu: [
      { id: 'fish1', name: 'BBQ Fish', price: 3500, isOrderable: true },
      { id: 'fish2', name: 'Fish Pepper Soup', price: 2500, isOrderable: true },
    ],
  },
  {
    id: 7,
    name: 'Abacha Enugu Special',
    image: '',
    phone: '+2348067890123',
    whatsapp: '+2348067890123',
    bankDetails: {
      bankName: 'Polaris Bank',
      accountName: 'Abacha Enugu Special',
      accountNumber: '2233445566',
    },
    menu: [
      { id: 'abacha1', name: 'Abacha Special', price: 2000, isOrderable: true },
      { id: 'abacha2', name: 'Ugba Platter', price: 2200, isOrderable: true },
    ],
  },
  {
    id: 8,
    name: 'Okpa 9th Mile with Chicken',
    image: '',
    phone: '+2348078901234',
    whatsapp: '+2348078901234',
    bankDetails: {
      bankName: 'Keystone Bank',
      accountName: 'Okpa 9th Mile with Chicken',
      accountNumber: '4455667788',
    },
    menu: [
      { id: 'okpa1', name: 'Okpa with Chicken', price: 1800, isOrderable: true },
      { id: 'okpa2', name: 'Okpa Special', price: 1500, isOrderable: true },
    ],
  },
];

// Fixed surcharge
const FIXED_SURCHARGE = 1500;

// Card styles for uniform styling with override capability
const foodieCardStyles = {
  cardBase:
    'bg-black bg-opacity-80 rounded-lg shadow-lg hover:shadow-red-600 transition-shadow duration-300 flex flex-col min-h-[400px]',
  cardContent: 'p-6 flex flex-col flex-grow justify-start',
  cardTitle: 'text-2xl font-semibold mb-2 text-red-600 p-6 text-center',
  cardImage: 'w-full h-48 object-cover transition-transform duration-300 hover:scale-105 flex-shrink-0',
  buttonsContainer: 'flex flex-col gap-3 flex-shrink-0 items-center min-h-[100px]',
  buttonBase:
    'w-full max-w-xs whitespace-nowrap font-semibold rounded-md px-5 py-2 shadow-md transform hover:scale-105 transition-colors duration-300 focus:outline-none focus:ring-4',
  buttonViewMenu:
    'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black focus:ring-yellow-400 text-center',
  buttonOrderNow:
    'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white focus:ring-red-500 text-center',
  contactContainer: 'mt-3 text-center space-y-1',
  phoneLink: 'text-yellow-300 hover:text-yellow-400 block',
  whatsappLink: 'text-green-400 hover:text-green-500 block',
};

function MenuModal({ open, onClose, foodie }) {
  if (!open || !foodie) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      className="fixed inset-x-0 top-[calc(120px+1rem)] mx-auto max-w-md rounded-xl shadow-2xl p-6 bg-white z-[1100]"
    >
      <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">{foodie.name} Menu</h2>
      <ul className="divide-y divide-gray-300">
        {foodie.menu.map(({ id, name, price, isOrderable }) => (
          <li key={id} className="flex justify-between py-2 text-black font-medium">
            <span>{name}</span>
            <span>
              ₦{price.toLocaleString()}
              {!isOrderable && <span className="text-sm text-gray-500 ml-2">(In-person only)</span>}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={onClose}
        className="mt-6 w-full py-2 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-400 transition"
        aria-label="Close menu modal"
      >
        Close
      </button>
    </div>
  );
}

function OrderModal({ open, onClose, foodie }) {
  const [selectedItems, setSelectedItems] = useState({});
  const [showBankDetails, setShowBankDetails] = useState(false);
  const modalRef = useRef(null);

  // Fix: Ensure modal doesn't cause blank page
  useEffect(() => {
    if (!open) {
      setSelectedItems({});
      setShowBankDetails(false);
      return;
    }
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, onClose]);

  // Fix: Initialize selectedItems for orderable items
  useEffect(() => {
    if (open && foodie) {
      const initialItems = foodie.menu
        .filter((item) => item.isOrderable)
        .reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {});
      setSelectedItems(initialItems);
    }
  }, [open, foodie]);

  const updateItemQuantity = (id, qty) => {
    if (qty < 0) return;
    setSelectedItems((prev) => ({
      ...prev,
      [id]: qty,
    }));
  };

  const totalPrice = foodie
    ? Object.entries(selectedItems).reduce((total, [id, qty]) => {
        const item = foodie.menu.find((i) => i.id === id);
        return total + (item ? item.price * qty : 0);
      }, 0)
    : 0;

  const totalWithSurcharge = totalPrice + FIXED_SURCHARGE;

  const orderLines = Object.entries(selectedItems)
    .map(([id, qty]) => {
      const item = foodie?.menu.find((i) => i.id === id);
      if (!item || qty === 0) return null;
      return `- ${item.name} × ${qty} = ₦${(item.price * qty).toLocaleString()}`;
    })
    .filter((x) => x)
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hello, I have made payment for the following order from ${foodie?.name}:\n${orderLines}\n\nSubtotal: ₦${totalPrice.toLocaleString()}\nSurcharge: ₦${FIXED_SURCHARGE.toLocaleString()}\nTOTAL: ₦${totalWithSurcharge.toLocaleString()}\n\nPlease find my payment evidence attached.`
  );

  const whatsappNum = foodie?.whatsapp ? foodie.whatsapp.replace(/\D/g, '') : '2348123456789';
  const whatsappLink = `https://wa.me/${whatsappNum}?text=${whatsappMessage}`;

  if (!open || !foodie) return null;

  return (
    <div className="fixed inset-0 mt-16 md:mt-40 flex items-center justify-center z-[1100] px-4">
      <div
        ref={modalRef}
        className="bg-[#fef3c7] rounded-xl border-4 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] max-w-md w-full p-0 relative max-h-[80vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 text-2xl font-bold hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          aria-label="Close modal"
        >
          ×
        </button>
        <img
          src={foodie.image || meatsBg}
          alt={`${foodie.name} Preview`}
          className="w-full h-40 object-cover rounded-t-xl border border-white"
          loading="lazy"
        />
        <div className="p-4 sm:p-6">
          {!showBankDetails ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-red-600">Select Your Order from {foodie.name}</h2>
              <div className="space-y-4 mb-6">
                {foodie.menu
                  .filter((item) => item.isOrderable)
                  .map(({ id, name, price }) => {
                    const qty = selectedItems[id] || 0;
                    return (
                      <div key={id} className="flex items-center gap-4">
                        <img
                          src={foodie.image || meatsBg}
                          alt={name}
                          className="w-16 h-16 object-cover rounded-lg border border-yellow-300"
                          loading="lazy"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-black">{name}</h3>
                          <p className="text-green-700 font-bold">₦{price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateItemQuantity(id, qty - 1)}
                            className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-3 rounded disabled:opacity-50"
                            disabled={qty === 0}
                            aria-label={`Decrease quantity of ${name}`}
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min="0"
                            value={qty}
                            onChange={(e) => {
                              const val = Math.max(0, Number(e.target.value));
                              updateItemQuantity(id, val);
                            }}
                            className="w-12 text-center rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black bg-white"
                            aria-label={`Quantity of ${name}`}
                          />
                          <button
                            onClick={() => updateItemQuantity(id, qty + 1)}
                            className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-3 rounded"
                            aria-label={`Increase quantity of ${name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="flex flex-col gap-2 mb-6 border-t border-yellow-300 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-black">Subtotal:</span>
                  <span className="text-lg font-semibold text-green-700">₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-black">Surcharge:</span>
                  <span className="text-lg font-semibold text-green-700">₦{FIXED_SURCHARGE.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl border-t border-yellow-300 pt-2">
                  <span>Total:</span>
                  <span className="text-green-800">₦{totalWithSurcharge.toLocaleString()}</span>
                </div>
              </div>
              <p className="mb-4 text-black text-justify font-medium">
                Is this your first order? Call us on{' '}
                <a href="tel:09169436106" className="hover:text-yellow-600">
                  09169436106
                </a>{' '}
                or{' '}
                <a href="tel:07031576094" className="hover:text-yellow-600">
                  07031576094
                </a>{' '}
                if you need immediate information. Otherwise, click the button below after choosing your items.
              </p>
              <button
                onClick={() => {
                  if (totalPrice === 0) {
                    alert('Please select at least one item before proceeding to pay.');
                    return;
                  }
                  setShowBankDetails(true);
                }}
                className={`w-full bg-black text-yellow-100 font-bold py-3 rounded-lg transition-colors ${
                  totalPrice === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-300 hover:text-black'
                }`}
                disabled={totalPrice === 0}
                aria-label="Proceed to payment instructions"
              >
                Proceed to Payment Instructions
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4 text-red-600">Bank Details</h2>
              <div className="mb-6 space-y-3 text-gray-900">
                <div>
                  <span className="font-semibold">Bank Name:</span> {foodie.bankDetails.bankName}
                </div>
                <div>
                  <span className="font-semibold">Account Name:</span> {foodie.bankDetails.accountName}
                </div>
                <div>
                  <span className="font-semibold">Account Number:</span> {foodie.bankDetails.accountNumber}
                </div>
                <div>
                  <span className="font-semibold">Amount:</span> ₦{totalWithSurcharge.toLocaleString()}
                </div>
              </div>
              <p className="mb-4 text-gray-800">
                After completing your payment, please send your payment evidence privately to {foodie.name} using the
                WhatsApp button below.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
                aria-label={`Send payment evidence to ${foodie.name} on WhatsApp`}
              >
                Send Payment Evidence via WhatsApp
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const specialTableDescription = `Our "Table for Four" brings a special menu from all foodies, celebrating the best of every kitchen at Kepong.`;

const KepongFoodies = () => {
  const [menuModal, setMenuModal] = useState({ open: false, foodie: null });
  const [orderModal, setOrderModal] = useState({ open: false, foodie: null });
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  return (
    <main
      className="min-h-screen font-montserrat text-white px-6 md:px-16 pt-40 pb-12 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${meatsBg})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-80 -z-10"></div>

      {/* Heading */}
      <section className="text-center max-w-4xl mx-auto py-30 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">Kepong Foodies Connect</h1>
        <p className="bg-white/40 text-lg text-red-600 font-bold rounded-lg py-8 max-w-xl mx-auto">
          Taste Kepong Foodies, vibe, and connect with the best kitchen spots in Enugu located at Kepong Villa Garden &
          Suites. Order online or visit in person today!
        </p>
      </section>

      {/* Foodies Grid */}
      <section
        className="grid gap-12 md:grid-cols-4 max-w-7xl mx-auto mb-20 relative z-10"
        style={{ gridAutoRows: '1fr' }}
      >
        {foodies.map(({ id, name, image, phone, whatsapp }) => (
          <article key={id} className={foodieCardStyles.cardBase}>
            <h2 className={foodieCardStyles.cardTitle}>{name}</h2>
            <div className="overflow-hidden flex-shrink-0">
              <img src={image || meatsBg} alt={`Photo of ${name}`} className={foodieCardStyles.cardImage} loading="lazy" />
            </div>
            <div className={foodieCardStyles.cardContent}>
              <div className={foodieCardStyles.buttonsContainer}>
                <button
                  type="button"
                  onClick={() => setMenuModal({ open: true, foodie: foodies.find((f) => f.id === id) })}
                  className={`${foodieCardStyles.buttonBase} ${foodieCardStyles.buttonViewMenu}`}
                  aria-label={`View menu for ${name}`}
                >
                  View Menu
                </button>
                <button
                  type="button"
                  className={`${foodieCardStyles.buttonBase} ${foodieCardStyles.buttonOrderNow}`}
                  aria-label={`Order from ${name}`}
                  onClick={() => setOrderModal({ open: true, foodie: foodies.find((f) => f.id === id) })}
                >
                  Order Now
                </button>
              </div>
              <div className={foodieCardStyles.contactContainer}>
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className={foodieCardStyles.phoneLink}
                    aria-label={`Call ${name} at ${phone}`}
                  >
                    📞 {phone}
                  </a>
                )}
                {whatsapp && (
                  <a
                    href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={foodieCardStyles.whatsappLink}
                    aria-label={`WhatsApp ${name} at ${whatsapp}`}
                  >
                    💬 WhatsApp
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Special Table for Four Section */}
      <section className="max-w-4xl mx-auto mb-16 bg-black bg-opacity-80 border-2 border-red-600 rounded-lg p-8 shadow-lg text-center relative z-10">
        <h3 className="text-3xl font-bold text-red-600 mb-6">Special Table for Four</h3>
        <p className="text-white text-lg mb-6">{specialTableDescription}</p>
        <button
          type="button"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 transition-colors duration-300 text-black font-semibold rounded-md px-8 py-3 shadow-md hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-yellow-400"
          onClick={() => setReserveModalOpen(true)}
          aria-label="Book the Special Table for Four"
        >
          Book Your Table Now
        </button>
      </section>

      {/* Call to Action Section */}
      <section className="text-center max-w-3xl mx-auto mb-12 px-6 py-10 bg-black bg-opacity-80 rounded-lg border-2 border-red-600 shadow-lg relative z-10">
        <h3 className="text-3xl font-bold text-red-600 mb-4">Want to Join Kepong Foodies?</h3>
        <p className="text-white mb-6 text-lg">
          Run a food biz? Join our groove at Kepong Villa Garden & Suites — come jolly with us!
        </p>
        <a
          href="mailto:partnerships@kepongvilla.ng"
          className="inline-block bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors duration-300 text-white font-semibold rounded-md px-8 py-3 shadow-md hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-red-500"
          aria-label="Contact Kepong Foodies Partnerships"
        >
          Contact Us to Get Started
        </a>
      </section>

      {/* Modals */}
      <MenuModal
        open={menuModal.open}
        foodie={menuModal.foodie}
        onClose={() => setMenuModal({ open: false, foodie: null })}
      />
      <OrderModal
        open={orderModal.open}
        foodie={orderModal.foodie}
        onClose={() => setOrderModal({ open: false, foodie: null })}
      />
      {reserveModalOpen && <ReserveTableModal onClose={() => setReserveModalOpen(false)} />}
    </main>
  );
};

export default KepongFoodies;