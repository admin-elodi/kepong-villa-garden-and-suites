import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import tableImage from '@/assets/images/homepage/table-for-four.webp';

const enquiryPhoneNumber = '+2348166540841';

// Integrated Table For Four menu with combo offerings
const tableForFourMenus = [
  {
    combo: 'Vitality Feast',
    description: 'For boosting energy and wellness',
    dineIn: [
      { name: 'Ukwa', quantity: 2, description: 'Traditional African breadfruit, rich in fiber and vitamins.' },
      { name: 'Nsala Soup with Eba', quantity: 4, description: 'Light, spicy white soup for digestive health.' },
      { name: 'Chicken Salad', quantity: 2, description: 'Fresh, protein-rich salad for vitality.' },
      { name: 'Zobo Drink', quantity: 4, description: 'Hibiscus juice, high in antioxidants.' },
    ],
    takeHome: [
      { name: 'Abacha', quantity: 2, description: 'Tasty African salad, perfect for sharing.' },
      { name: 'Tiger Nut Drinks', quantity: 4, description: 'Nutrient-dense drink for home enjoyment.' },
    ],
    price: 50000, // Unified price per table
  },
  {
    combo: 'Traditional Delight',
    description: 'Very rich local dishes and flavors',
    dineIn: [
      { name: 'Peppered Goat Meat', quantity: 4, description: 'Fiery, protein-packed goat meat.' },
      { name: 'Jollof Rice & Chicken', quantity: 4, description: 'Flavorful rice with tender chicken.' },
      { name: 'Palm Wine', quantity: 4, description: 'Sweet, traditional drink for relaxation.' },
    ],
    takeHome: [
      { name: 'Fried Chicken with Chips', quantity: 2, description: 'Crispy chicken for home feasts.' },
      { name: 'Ukwa Fresh with Dried Fish', quantity: 2, description: 'Portable breadfruit delicacy.' },
    ],
    price: 50000, // Unified price per table
  },
  {
    combo: 'Seafood Special',
    description: 'Dishes that celebrate Nigeria’s seafood',
    dineIn: [
      { name: 'Barbecue Fish', quantity: 1, description: 'Grilled fish, rich in omega-3.' },
      { name: 'Fresh Fish Peppersoup (Head)', quantity: 2, description: 'Spicy, warming fish soup.' },
      { name: 'Chapman Cocktail', quantity: 4, description: 'Refreshing citrus cocktail.' },
    ],
    takeHome: [
      { name: 'Achicha/Agbugbu with Fish', quantity: 2, description: 'Fish-infused delicacy for sharing.' },
      { name: 'Dry Fish, Green & Ukpaka', quantity: 2, description: 'Flavorful fish mix for home.' },
    ],
    price: 50000, // Unified price per table
  },
];

const ReserveTableModal = ({ isOpen, onClose }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [tables, setTables] = useState(1);
  const [selectedCombo, setSelectedCombo] = useState(tableForFourMenus[0]);

  if (!isOpen || !onClose) return null;

  const handleClose = () => {
    onClose();
    setShowPayment(false);
    setTables(1);
    setSelectedCombo(tableForFourMenus[0]);
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

  const handleComboChange = (e) => {
    const combo = tableForFourMenus.find((menu) => menu.combo === e.target.value);
    setSelectedCombo(combo);
  };

  const handleProceedToPayment = () => {
    if (!tables || tables < 1) {
      alert('Please enter at least 1 table.');
      return;
    }
    setShowPayment(true);
  };

  const openWhatsApp = () => {
    const menuDetails = [
      ...selectedCombo.dineIn.map(
        (item) =>
          `${item.name}: ${item.quantity} serving${item.quantity > 1 ? 's' : ''} per table × ${tables} table${tables > 1 ? 's' : ''}`
      ),
      ...selectedCombo.takeHome.map(
        (item) =>
          `${item.name}: ${item.quantity} serving${item.quantity > 1 ? 's' : ''} per table × ${tables} table${tables > 1 ? 's' : ''} (Take-Home)`
      ),
    ].join('\n');

    const message = encodeURIComponent(
      `Hello Kepong Villa Team,\n\nI would like to book ${tables} Table${tables > 1 ? 's' : ''} For Four, combo "${selectedCombo.combo}" at ₦${(
        tables * selectedCombo.price
      ).toLocaleString()} each.\n\nMenu Details:\n${menuDetails}\n\nPlease provide payment details and confirmation. Thank you!`
    );

    window.open(`https://wa.me/${enquiryPhoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const totalPrice = tables && !isNaN(tables) ? tables * selectedCombo.price : 0;

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
        className="bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto text-white scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-gray-900"
        style={{ scrollBehavior: 'smooth' }}
        tabIndex={0}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-amber-400 focus:ring-2 focus:ring-amber-400 focus:outline-none text-2xl transition-colors duration-200"
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>

        <h2 id="reserve-title" className="text-3xl font-extrabold text-yellow-400 text-center mb-4 tracking-tight">
          Book Table For Four
        </h2>

        <div
          className="w-full rounded-lg mb-6 bg-center bg-cover mx-auto shadow-inner"
          style={{
            backgroundImage: `url(${tableImage})`,
            height: '140px',
            backgroundColor: '#1F2937',
          }}
          aria-label="Table for four"
        />

        <p className="text-center text-amber-200 italic mb-8 px-4 text-lg">
          Enjoy Kepong's "Table For Four" Special. Dine-in and take some home
        </p>

        {!showPayment && (
          <>
            <div className="mb-8">
              <label
                htmlFor="combo-select"
                className="block mb-2 text-yellow-300 font-semibold text-xl text-center"
              >
                Select Your Table Combo
              </label>
              <select
                id="combo-select"
                value={selectedCombo.combo}
                onChange={handleComboChange}
                className="md:w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-amber-400 focus:outline-none transition-colors duration-200"
                aria-label="Select menu combo"
              >
                {tableForFourMenus.map((menu) => (
                  <option key={menu.combo} value={menu.combo}>
                    {menu.combo}
                  </option>
                ))}
              </select>
              <p className="text-gray-300 text-sm mt-3 text-center">{selectedCombo.description}</p>
            </div>

            <div className="space-y-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">Dine-In Menu</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-emerald-900 text-yellow-300 uppercase">
                        <th className="p-3 font-semibold">Dish</th>
                        <th className="p-3 font-semibold">Description</th>
                        <th className="p-3 font-semibold text-center">Servings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCombo.dineIn.map(({ name, description, quantity }, index) => (
                        <tr
                          key={name}
                          className="bg-emerald-800 bg-opacity-70 hover:bg-opacity-90 transition-all duration-200"
                          style={{ animation: `fadeIn 0.3s ease-in ${index * 0.1}s forwards`, opacity: 0 }}
                        >
                          <td className="p-3 border-b border-gray-700 text-yellow-200 font-medium">{name}</td>
                          <td className="p-3 border-b border-gray-700 text-gray-100">{description}</td>
                          <td className="p-3 border-b border-gray-700 text-amber-300 text-center">{quantity} serving{quantity > 1 ? 's' : ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">Take-Home Menu</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-emerald-900 text-yellow-300 uppercase">
                        <th className="p-3 font-semibold">Dish</th>
                        <th className="p-3 font-semibold">Description</th>
                        <th className="p-3 font-semibold text-center">Servings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCombo.takeHome.map(({ name, description, quantity }, index) => (
                        <tr
                          key={name}
                          className="bg-emerald-800 bg-opacity-70 hover:bg-opacity-90 transition-all duration-200"
                          style={{ animation: `fadeIn 0.3s ease-in ${index * 0.1}s forwards`, opacity: 0 }}
                        >
                          <td className="p-3 border-b border-gray-700 text-yellow-200 font-medium">{name}</td>
                          <td className="p-3 border-b border-gray-700 text-gray-100">{description}</td>
                          <td className="p-3 border-b border-gray-700 text-amber-300 text-center">{quantity} serving{quantity > 1 ? 's' : ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mb-8 text-center">
              <label
                htmlFor="tables"
                className="block mb-2 text-yellow-300 font-semibold text-xl"
              >
                Choose Number of Tables
              </label>
              <input
                type="number"
                id="tables"
                name="tables"
                min="1"
                value={tables}
                onChange={handleTablesChange}
                className="mx-auto w-24 px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-amber-400 focus:outline-none text-center transition-colors duration-200"
                aria-describedby="table-price-desc"
                aria-label="Number of tables to book"
              />
              <p id="table-price-desc" className="mt-2 text-gray-300 text-sm">
                Price per table (fixed bundle): ₦{selectedCombo.price.toLocaleString()}
              </p>
              <p className="mt-2 text-amber-400 font-bold text-xl">
                Total Price: ₦{totalPrice.toLocaleString()}
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleProceedToPayment}
                className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 focus:ring-2 focus:ring-amber-400 transition-all duration-200 shadow-md"
                aria-label="Proceed to payment"
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}

        {showPayment && (
          <div>
            <div className="bg-emerald-900 bg-opacity-95 p-6 rounded-lg shadow-lg text-white text-center border border-yellow-300 mb-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-200">Bank Account Details</h3>
              <p className="mb-3 font-semibold text-amber-200">
                Please make your payment via bank transfer before confirming your reservation.
              </p>
              <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-3 text-gray-900">
                <p><strong>Account Name:</strong><br />Kepong Villa Garden & Suites</p>
                <p><strong>Bank:</strong><br />Wema Bank</p>
                <p><strong>Account Number:</strong><br />0125564025</p>
              </div>
              <p className="text-sm text-amber-200">
                Use your full name as payment reference.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                type="button"
                onClick={openWhatsApp}
                className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-green-400 transition-all duration-200 shadow-md w-full max-w-xs"
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

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .scrollbar-thin::-webkit-scrollbar {
            width: 8px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: #1F2937;
            border-radius: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #FBBF24;
            border-radius: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: #F59E0B;
          }
        `}
      </style>
    </div>,
    document.body
  );
};

export default ReserveTableModal;