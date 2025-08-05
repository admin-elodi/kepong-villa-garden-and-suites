import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import tableImage from '@/assets/images/homepage/table-for-four.webp';

const enquiryPhoneNumber = '+2348166540841';
const tablePrice = 50000; // Price per table in Naira

const menuItems = [
  { name: 'Grilled Suya Skewers', description: 'Spicy and smoky Nigerian beef skewers', quantity: '4 skewers per table' },
  { name: 'Peppered Goat Meat', description: 'Tender goat meat with fiery pepper sauce', quantity: '4 servings per table' },
  { name: 'Palm Wine', description: 'Traditional sweet and refreshing palm wine', quantity: '4 full jars + 0.5 jar free per table' },
  { name: 'Zobo Drink', description: 'Hibiscus flower juice, tangy and healthy', quantity: '4 glasses per table' },
  { name: 'Chapman Cocktail', description: 'A popular Nigerian citrus cocktail', quantity: '4 glasses per table' },
];

const ReserveTableModal = ({ isOpen, onClose }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [tables, setTables] = useState(1);

  if (!isOpen || !onClose) return null;

  const handleClose = () => {
    onClose();
    setShowPayment(false);
    setTables(1);
  };

  const handleTablesChange = (e) => {
    const val = e.target.value;
    if (val === '') {
      setTables('');
      return;
    }
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 1) {
      setTables(num);
    }
  };

  const handleProceedToPayment = () => {
    if (!tables || tables < 1) {
      alert('Please enter at least 1 table.');
      return;
    }
    setShowPayment(true);
  };

  const openWhatsApp = () => {
    const menuDetails = menuItems
      .map(
        (item) =>
          `${item.name}: ${item.quantity} x ${tables} table${tables > 1 ? 's' : ''}`
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hello Kepong Villa Team,\n\nI would like to book ${tables} table${tables > 1 ? 's' : ''} for four, priced at ₦${(
        tables * tablePrice
      ).toLocaleString()}.\n\nMenu Details:\n${menuDetails}\n\nPlease note that payment details will follow shortly. Thank you!`
    );

    window.open(`https://wa.me/${enquiryPhoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const totalPrice = tables && !isNaN(tables) ? tables * tablePrice : 0;

  return createPortal(
    <div
      className="modal-overlay fixed inset-0 flex items-center justify-center z-[1500] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-title"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) handleClose();
      }}
      tabIndex={-1}
    >
      <div
        className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto text-white"
        tabIndex={0}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-amber-400 focus:ring-2 focus:ring-amber-500 focus:outline-none text-2xl"
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>

        <h2 id="reserve-title" className="text-2xl font-extrabold text-yellow-400 text-center mb-2">
          BOOK TABLE FOR FOUR
        </h2>

        <div
          className="w-full rounded-lg mb-4 bg-center bg-cover mx-auto"
          style={{
            backgroundImage: `url(${tableImage})`,
            height: '120px',
            backgroundColor: '#1F2937',
          }}
          aria-label="Table for four"
        />

        <p className="text-center text-amber-300 italic mb-6 px-2">
          This menu boosts your vitality and promotes health and natural hydration.
        </p>

        {!showPayment && (
          <>
            <ul className="space-y-4 mb-6 max-h-[220px] overflow-y-auto">
              {menuItems.map(({ name, description, quantity }) => (
                <li
                  key={name}
                  className="bg-emerald-800 bg-opacity-80 rounded-lg p-4 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-yellow-300">{name}</h3>
                  <p className="text-gray-200">{description}</p>
                  <p className="text-amber-300 font-semibold mt-1">{quantity}</p>
                </li>
              ))}
            </ul>

            <div className="mb-6 text-center">
              <label
                htmlFor="tables"
                className="block mb-2 text-yellow-300 font-semibold text-lg"
              >
                Number of Table-For-Four Units
              </label>
              <input
                type="number"
                id="tables"
                name="tables"
                min="1"
                value={tables}
                onChange={handleTablesChange}
                className="mx-auto w-24 px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none text-center"
                aria-describedby="table-price-desc"
                aria-label="Number of tables to book"
              />
              <p id="table-price-desc" className="mt-2 text-gray-300 text-sm">
                Price per table: ₦{tablePrice.toLocaleString()}
              </p>
              <p className="mt-1 text-amber-400 font-bold text-lg">
                Total Price: ₦{totalPrice.toLocaleString()}
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleProceedToPayment}
                className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition max-w-full whitespace-nowrap"
                aria-label="Proceed to payment"
                style={{ maxWidth: '100%' }}
              >
                PROCEED TO PAYMENT
              </button>
            </div>
          </>
        )}

        {showPayment && (
          <div>
            <div className="bg-emerald-900 bg-opacity-95 p-5 rounded-lg shadow text-white text-center border-2 border-yellow-200 mb-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-200">Bank Account Details</h3>
              <p className="mb-2 font-semibold text-amber-200">
                Please make your payment via bank transfer before confirming your reservation.
              </p>
              <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-2 text-gray-900">
                <p><strong>Account Name:</strong><br />Kepong Villa Garden & Suites</p>
                <p><strong>Bank:</strong><br />Wema Bank</p>
                <p><strong>Account Number:</strong><br />0125564025</p>
              </div>
              <p className="text-sm text-amber-200 mt-2">
                Use your full name as payment reference.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <button
                type="button"
                onClick={openWhatsApp}
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition w-full max-w-xs truncate"
                aria-label="Send evidence to WhatsApp"
              >
                Send Evidence to WhatsApp
              </button>
              <p className="text-gray-400 text-sm text-center break-words max-w-xs">
                Or call us at{' '}
                <a
                  href={`tel:${enquiryPhoneNumber}`}
                  className="text-amber-400 font-semibold hover:underline"
                >
                  {enquiryPhoneNumber}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ReserveTableModal;