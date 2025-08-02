import React, { useState, useRef, useEffect } from 'react';
import meatsBg from '@/assets/images/foodies/meats.jpg';

const FIXED_SURCHARGE = 1500;

export function MenuModal({ open, onClose, foodie }) {
  if (!open || !foodie) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      className="fixed inset-x-0 top-[calc(120px+1rem)] mx-auto max-w-md rounded-xl shadow-2xl p-6 bg-white z-[1100] max-h-[80vh] overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-lg text-3xl font-bold hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
        aria-label="Close menu modal"
        type="button"
      >
        X
      </button>

      <h2 className="text-2xl font-bold text-red-700 mb-4 text-center mt-2">{foodie.name} Menu</h2>
      <ul className="divide-y divide-gray-300">
        {foodie.menu.map(({ id, name, price, isOrderable }) => (
          <li key={id} className="flex justify-between py-3 text-black font-medium">
            <span>{name}</span>
            <span>
              ₦{price.toLocaleString()}
              {!isOrderable && <span className="text-sm text-gray-500 ml-2">(In-person only)</span>}
            </span>
          </li>
        ))}
      </ul>
      <div className="pb-4"></div>
    </div>
  );
}

export function OrderModal({ open, onClose, foodie }) {
  const [selectedItems, setSelectedItems] = useState({});
  const [showBankDetails, setShowBankDetails] = useState(false);
  const modalRef = useRef(null);

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
    `Hello, I have made payment for the following order from ${foodie?.name}:\n${orderLines}\n\nSubtotal: ₦${totalPrice.toLocaleString()}\nSurcharge: ₦${FIXED_SURCHARGE.toLocaleString()}\nTOTAL: ₦${totalWithSurcharge.toLocaleString()}\n\nPlease confirm from evidence of payment after this message as required by your system.`
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
          className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-lg text-3xl font-bold hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
          aria-label="Close order modal"
          type="button"
        >
          X
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
                              updateItemQuantity(id, val);
                            }}
                            className="w-12 text-center rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black bg-white"
                            aria-label={`Quantity of ${name}`}
                          />
                          <button
                            onClick={() => updateItemQuantity(id, qty + 1)}
                            className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-3 rounded"
                            aria-label={`Increase quantity of ${name}`}
                            type="button"
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
                  <span className="text-lg font-semibold text-green-700">₦${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-black">Surcharge:</span>
                  <span className="text-lg font-semibold text-green-700">₦${FIXED_SURCHARGE.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl border-t border-yellow-300 pt-2">
                  <span>Total:</span>
                  <span className="text-green-800">₦${totalWithSurcharge.toLocaleString()}</span>
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
                type="button"
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
                  <span className="font-semibold">Amount:</span> ₦${totalWithSurcharge.toLocaleString()}
                </div>
              </div>
              <p className="mb-4 text-gray-800">
                After payment, please send payment evidence privately to {foodie.name} using the WhatsApp button below.
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