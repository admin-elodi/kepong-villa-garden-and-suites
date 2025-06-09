import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import tableImage from '@/assets/images/table-for-four.jpg';

const enquiryPhoneNumber = '+234 916 283 6505';

const ReserveTableModal = ({ isOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    tables: '1', // Keep as string for better input control
  });
  const [isSending, setIsSending] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    // Focus first input when modal opens
    if (isOpen && modalRef.current) {
      const firstInput = modalRef.current.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits for tables, empty string allowed for deletion
    if (name === 'tables') {
      if (value === '') {
        setFormData((prev) => ({ ...prev, tables: '' }));
        return;
      }
      if (/^\d+$/.test(value)) {
        // Prevent zero or negative numbers
        if (parseInt(value, 10) === 0) return;
        setFormData((prev) => ({ ...prev, tables: value }));
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

    const templateParams = {
      name: formData.name,
      date: formData.date,
      tables: formData.tables,
      table_cost: `₦${(parseInt(formData.tables, 10) * 50000).toLocaleString()}`,
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
        setIsModalOpen(false);
        setFormData({ name: '', date: '', tables: '1' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send booking details. Please try again.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        // Close modal if clicking outside modal content
        if (e.target === e.currentTarget) setIsModalOpen(false);
      }}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 relative max-h-[80vh] overflow-y-auto"
        tabIndex="0"
      >
        {/* Close button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-8 right-4 text-white bg-gray-700 bg-opacity-80 hover:bg-amber-500 hover:text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none"
          aria-label="Close modal"
          type="button"
        >
          ×
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
        <p className="text-lg font-semibold text-amber-400 text-center mb-2">
          Cost: ₦50,000 per table-for-four
        </p>
        <div className="text-gray-200 text-sm mb-4">
          <p className="font-semibold">Bank Details:</p>
          <p>Account Name: Kepong Villa Garden & Suites</p>
          <p>Bank: Wema Bank</p>
          <p>Account Number: 0125564025</p>
          <p>Please make payment to reserve your table(s).</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 mb-4 text-center">
          <span className="text-gray-300">For enquiries, call </span>
          <a
            href={`tel:${enquiryPhoneNumber}`}
            className="text-amber-400 font-semibold hover:underline"
          >
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
              step="1"
              inputMode="numeric"
              pattern="[0-9]*"
              value={formData.tables}
              onChange={handleInputChange}
              required
              className="mt-1 w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
            <div className="mt-2 text-center text-amber-400 font-semibold">
              Total tables reserved: {formData.tables || 0}
            </div>
            <div className="mt-1 text-center text-gray-300 text-sm">
              Total cost: ₦
              {((parseInt(formData.tables, 10) || 0) * 50000).toLocaleString()}
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default ReserveTableModal;
