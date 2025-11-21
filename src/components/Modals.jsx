// Modals.jsx
import React, { useState, useRef, useEffect } from 'react';
import meatsBg from '@/assets/images/foodies/meats.webp';

// Food-inspired background colors for each foodie
const foodieBackgroundColors = [
  'bg-red-100', // Tomato red for Madam Ezinwanne Kitchen
  'bg-green-100', // Olive green for Tessy Special Kitchen
  'bg-yellow-100', // Mustard yellow for De Banquet Hotel Kitchen
  'bg-orange-100', // Carrot orange for Mama Chioma Enterprises
  'bg-lime-100', // Lime green for Chop with Nazzy
  'bg-rose-100', // Salmon pink for Fresh Fish Barbecue
  'bg-amber-100', // Honey amber for Abacha Nwanyi Ezeagu
  'bg-teal-100', // Mint teal for Vacant Spot
];

export function MenuModal({ open, onClose, foodie }) {
  const [showPrices, setShowPrices] = useState(false);

  if (!open || !foodie) return null;

  // Select background color based on foodie ID (id - 1 for 0-based index)
  const bgColor = foodieBackgroundColors[foodie.id - 1] || 'bg-amber-100';

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      className={`
        fixed inset-x-0 top-[calc(120px+1rem)] mx-auto 
        w-[92%] max-w-sm sm:max-w-md 
        bg-white/20 backdrop-blur-xl 
        rounded-2xl shadow-2xl border border-white/30 
        p-5 sm:p-6 
        max-h-[82vh] overflow-y-auto z-[1100]
        scrollbar-thin
        ${bgColor.replace('bg-', 'bg-gradient-to-br from-').replace('100', '500/20 via-').replace('100', '400/10 to-').replace('100', '300/5')}
      `}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white text-xl z-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-md"
        aria-label="Close menu modal"
        type="button"
      >
        X
      </button>

      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center mt-2 tracking-widest">{foodie.name} Menu</h2>
      
      {/* Toggle Prices Button */}
      <div className="mb-4 text-center">
        <button
          onClick={() => setShowPrices(!showPrices)}
          className="bg-red-600/70 hover:bg-red-700 text-white font-semibold rounded-sm px-2 transition-colors duration-200 focus:outline-none text-xs sm:text-sm py-1.5"
          aria-label={showPrices ? 'Hide prices' : 'Show prices'}
          type="button"
        >
          {showPrices ? 'Hide Prices' : 'Show Prices'}
        </button>
      </div>

      <ul className="divide-y divide-white/20">
        {foodie.menu.map((item, index) => {
          if (item.category) {
            return (
              <li
                key={`category-${index}`}
                className="py-4 text-lg font-bold text-red-600 border-t border-white/20"
                aria-label={`${item.category} section`}
              >
                {item.category}
              </li>
            );
          }
          return (
            <li key={item.id} className="flex justify-between py-3 text-white font-medium">
              <span>{item.name}</span>
              {showPrices ? (
                <span>
                  ₦{item.price.toLocaleString()}
                  {!item.isOrderable && <span className="text-sm text-gray-300 ml-2">(In-person only)</span>}
                </span>
              ) : (
                <span className="text-white/40 italic text-sm">₦ ???</span>
              )}
            </li>
          );
        })}
      </ul>
      <div className="pt-4 text-center">
        <p className="text-gray-200 mb-2">
          <strong>Phone: </strong>
          <a href={`tel:${foodie.phone}`} className="text-red-400 underline">
            {foodie.phone}
          </a>
        </p>
        <button
          onClick={onClose}
          className="w-full max-w-xs bg-red-600/80 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 focus:outline-none"
          aria-label="Close menu modal"
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function OrderModal({ open, onClose, foodie }) {
  const [selectedItems, setSelectedItems] = useState({});
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showPrices, setShowPrices] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setSelectedItems({});
      setShowBankDetails(false);
      setShowPrices(false);
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

  const orderLines = Object.entries(selectedItems)
    .map(([id, qty]) => {
      const item = foodie.menu.find((i) => i.id === id);
      if (!item || qty === 0) return null;
      return `- ${item.name} × ${qty} = ₦${(item.price * qty).toLocaleString()}`;
    })
    .filter(Boolean)
    .join('\n');

  const whatsappNum = foodie?.whatsapp ? foodie.whatsapp.replace(/\D/g, '') : '2348123456789';
  const whatsappMessage = encodeURIComponent(
    `Hello, I have made payment for the following order from ${foodie?.name}:\n${orderLines}\n\nSubtotal: ₦${totalPrice.toLocaleString()}\nSurcharge: To be negotiated\n\nPlease confirm from evidence of payment after this message as required by your system.`
  );
  const whatsappLink = `https://wa.me/${whatsappNum}?text=${whatsappMessage}`;

  if (!open || !foodie) return null;

  return (
    <div className="fixed inset-0 mt-16 md:mt-40 flex items-center justify-center z-[1100] px-4">
      <div
        ref={modalRef}
        className={`
          bg-white/20 backdrop-blur-xl 
          rounded-2xl border-2 border-white/30 shadow-2xl 
          w-[92%] max-w-sm sm:max-w-md 
          p-0 relative 
          max-h-[82vh] overflow-y-auto 
          scrollbar-thin
          ${foodieBackgroundColors[foodie.id - 1] 
            ? foodieBackgroundColors[foodie.id - 1]
                .replace('bg-', 'bg-gradient-to-br from-')
                .replace('100', '500/20 via-')
                .replace('100', '400/10 to-')
                .replace('100', '300/5')
            : 'bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-amber-300/5'
          }
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white text-xl z-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-md"
          aria-label="Close order modal"
          type="button"
        >
          X
        </button>

        <img
          src={foodie.image || meatsBg}
          alt={`${foodie.name} Preview`}
          className="w-full h-40 object-cover rounded-t-2xl border-b border-white/20"
          loading="lazy"
        />
        <div className="p-4 sm:p-6">
          {!showBankDetails ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-white">Order from {foodie.name}</h2>
              
              {/* Toggle Prices Button */}
              <div className="mb-4 text-center">
                <button
                  onClick={() => setShowPrices(!showPrices)}
                  className="bg-red-600/70 hover:bg-red-700 text-white font-semibold rounded-sm px-2 transition-colors duration-200 focus:outline-none text-xs sm:text-sm py-1.5"
                  aria-label={showPrices ? 'Hide prices' : 'Show prices'}
                  type="button"
                >
                  {showPrices ? 'Hide Prices' : 'Show Prices'}
                </button>
              </div>

              <div className="space-y-6 mb-6">
                {(() => {
                  const elements = [];

                  foodie.menu.forEach((item, idx) => {
                    if (item.category) {
                      elements.push(
                        <h3
                          key={`category-${idx}`}
                          className="text-lg font-bold text-red-400 border-t border-white/20 pt-3"
                          aria-label={`${item.category} section`}
                        >
                          {item.category}
                        </h3>
                      );
                    } else if (item.isOrderable) {
                      const qty = selectedItems[item.id] || 0;
                      elements.push(
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="flex-1">
                            <h4 className="text-base font-semibold text-white">{item.name}</h4>
                            {showPrices ? (
                              <p className="text-green-300 font-bold">₦{item.price.toLocaleString()}</p>
                            ) : (
                              <p className="text-white/40 italic text-sm">₦ ???</p>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateItemQuantity(item.id, qty - 1)}
                              className="bg-white/20 hover:bg-white/30 text-white font-bold px-3 rounded disabled:opacity-50 w-8 h-8 flex items-center justify-center"
                              disabled={qty === 0}
                              aria-label={`Decrease quantity of ${item.name}`}
                              type="button"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="0"
                              value={qty}
                              onChange={(e) => {
                                const val = Math.max(0, Number(e.target.value));
                                updateItemQuantity(item.id, val);
                              }}
                              className="w-12 text-center rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-white/10 text-sm"
                              aria-label={`Quantity of ${item.name}`}
                            />
                            <button
                              onClick={() => updateItemQuantity(item.id, qty + 1)}
                              className="bg-white/20 hover:bg-white/30 text-white font-bold px-3 rounded w-8 h-8 flex items-center justify-center"
                              aria-label={`Increase quantity of ${item.name}`}
                              type="button"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    }
                  });

                  return elements;
                })()}
              </div>
              <div className="flex flex-col gap-2 mb-6 border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Subtotal:</span>
                  <span className="text-lg font-semibold text-green-300">₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Surcharge:</span>
                  <span className="text-lg font-semibold text-gray-300">To be negotiated</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl border-t border-white/20 pt-2">
                  <span>Total:</span>
                  <span className="text-green-200">Subtotal + Negotiated Surcharge</span>
                </div>
              </div>
              <p className="mb-4 text-white/80 text-justify font-medium text-sm">
                Is this your first order? Call us on{' '}
                <a href="tel:09169436106" className="text-red-400 underline hover:text-red-300">
                  09169436106
                </a>{' '}
                or{' '}
                <a href="tel:07031576094" className="text-red-400 underline hover:text-red-300">
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
                className={`w-full bg-red-600/80 text-white font-bold py-3 rounded-lg transition-colors ${
                  totalPrice === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                }`}
                disabled={totalPrice === 0}
                aria-label="Proceed to payment instructions"
                type="button"
              >
                Proceed to Payment Instructions
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4 text-red-400">Bank Details</h2>
              <div className="mb-6 space-y-3 text-white/90 text-sm">
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
                  <span className="font-semibold">Amount:</span> ₦{totalPrice.toLocaleString()} (Subtotal + Negotiated Surcharge)
                </div>
              </div>
              <p className="mb-4 text-white/70">
                After payment, please send payment evidence privately to {foodie.name} using the WhatsApp button below.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-green-600/80 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
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

// Custom Scrollbar
<style jsx>{`
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background: #dc2626;
    border-radius: 3px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: #b91c1c;
  }
`}</style>