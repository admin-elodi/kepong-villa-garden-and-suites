import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import tableImage from '@/assets/images/table-for-four.jpg';

const enquiryPhoneNumber = '+234 916 283 6505';

const ReserveTableModal = ({ isOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    tables: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) modalRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tables') {
      if (value === '' || (/^\d+$/.test(value) && parseInt(value, 10) >= 0)) {
        setFormData((prev) => ({ ...prev, tables: value.replace(/^0+/, '') }));
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendBooking = (e) => {
    e.preventDefault();
    if (!formData.tables || parseInt(formData.tables, 10) < 1) {
      alert('Please enter a valid number of tables (at least 1).');
      return;
    }
    setIsSending(true);

    // Replace with your EmailJS or booking logic
    setTimeout(() => {
      setIsSending(false);
      setShowConfirmation(true);
      setFormData({ name: '', date: '', tables: '' });
    }, 1200);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setShowConfirmation(false);
    setFormData({ name: '', date: '', tables: '' });
    setShowBank(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) handleClose();
  };

  if (showConfirmation) {
    return createPortal(
      <div
        className="modal-overlay fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
        onClick={handleOutsideClick}
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-800 rounded-xl shadow-lg p-8 max-w-lg w-full text-center relative">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white hover:text-amber-400 focus:ring-2 focus:ring-amber-500 focus:outline-none text-2xl"
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-yellow-200 mb-4">Booking Successful!</h2>
          <p className="text-white mb-3">
            Thank you for reserving a table at Kepong Villa Garden & Suites.
          </p>
          <p className="text-emerald-200 mb-3">
            Please proceed to the hotel with your evidence of payment. Our team will welcome you and confirm your reservation on arrival.
          </p>
          <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-4">
            <p className="text-gray-800 font-semibold mb-2">Bank Account Details:</p>
            <p className="text-gray-900">Account Name: <br /><span className="font-bold">Kepong Villa Garden & Suites</span></p>
            <p className="text-gray-900">Bank: <br /><span className="font-bold">Wema Bank</span></p>
            <p className="text-gray-900">Account Number: <br /><span className="font-bold">0125564025</span></p>
          </div>
          <p className="text-gray-100 text-sm">
            For enquiries, call <a href="tel:+2349162836505" className="text-amber-400 underline">+234 916 283 6505</a>
          </p>
        </div>
      </div>,
      document.body
    );
  }

  return createPortal(
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={handleOutsideClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-title"
    >
      <div
        ref={modalRef}
        className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto"
        tabIndex="-1"
      >
        {/* Table image at the top */}
        <div
          className="w-full h-40 bg-gray-700 rounded-lg mb-4 bg-center bg-cover"
          style={{
            backgroundImage: `url(${tableImage})`,
            backgroundColor: '#1F2937',
          }}
          aria-label="Table for four"
        />
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-amber-400 focus:ring-2 focus:ring-amber-500 focus:outline-none text-2xl"
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>
        <h2 id="reserve-title" className="text-2xl font-bold text-white mb-2 text-center">
          Reserve a Table
        </h2>
        <div className="mb-2 text-center text-gray-300 text-sm">
          <span className="font-semibold text-amber-400">Cost:</span> ₦50,000 per table-for-four.
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
              inputMode="numeric"
              pattern="[0-9]*"
              value={formData.tables}
              onChange={handleInputChange}
              required
              placeholder=""
              className="mt-1 w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none no-spinner"
              style={
                window.innerWidth < 768
                  ? { appearance: 'textfield', MozAppearance: 'textfield' }
                  : {}
              }
            />
            <div className="mt-2 text-center text-amber-400 font-semibold">
              Total tables reserved: {formData.tables || 0}
            </div>
            <div className="mt-1 text-center text-gray-300 text-sm">
              Total cost: ₦{((parseInt(formData.tables, 10) || 0) * 50000).toLocaleString()}
            </div>
          </div>

          {/* Show/Hide Account Details Button */}
          <div className="flex justify-center my-4">
            <button
              type="button"
              onClick={() => setShowBank((v) => !v)}
              className="bg-yellow-200 text-black px-4 py-2 rounded-lg border-2 border-emerald-700 font-semibold hover:bg-emerald-700 hover:text-white transition"
              aria-label={showBank ? "Hide account details" : "Show account details"}
            >
              {showBank ? "Hide Account Details" : "Show Account Details"}
            </button>
          </div>

          {/* Account Details (shown after fields, before submit) */}
          {showBank && (
            <div className="mb-4 bg-emerald-900 bg-opacity-95 p-5 rounded-lg shadow text-white text-center border-2 border-yellow-200">
              <h3 className="text-lg font-bold mb-2 text-yellow-200">Bank Account Details</h3>
              <p className="mb-1 text-amber-200 font-semibold">
                Use <span className="underline">Bank Transfer</span> to pay before clicking Send Booking Details.
              </p>
              <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-2 text-gray-900 text-center">
                <p><strong>Account Name:</strong><br />Kepong Villa Garden & Suites</p>
                <p><strong>Bank:</strong><br />Wema Bank</p>
                <p><strong>Account Number:</strong><br />0125564025</p>
              </div>
              <div className="text-sm text-amber-200 mt-2">
                Use your full name as payment reference.
              </div>
              
            </div>
          )}

          <button
            type="submit"
            disabled={isSending}
            className={`w-full bg-emerald-900 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-emerald-500 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none ${
              isSending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Send booking details"
          >
            {isSending ? 'Sending...' : 'Send Booking Details'}
          </button>
        </form>
        <p className="text-gray-400 text-center text-xs mt-3">
          For enquiries, call <a href={`tel:${enquiryPhoneNumber}`} className="text-amber-400 font-semibold hover:underline">{enquiryPhoneNumber}</a>
        </p>
      </div>
    </div>,
    document.body
  );
};

export default ReserveTableModal;
