import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const BookingForm = ({ selectedRoom, onBack, onSubmit }) => {
  const foodOptions = [
    { name: 'Jollof Rice', price: 2500 },
    { name: 'Egusi Soup with Pounded Yam', price: 2500 },
    { name: 'Fried Rice and Chicken', price: 2500 },
    { name: 'Vegetable Soup with Fufu', price: 2500 },
    { name: 'Goat meat Pepper Soup', price: 1500 },
  ];
  const drinkOptions = [
    { name: 'Chapman', price: 2500 },
    { name: 'Palm Wine', price: 1500 },
    { name: 'Soft Drinks', price: 500 },
    { name: 'Cocktails', price: 2000 },
  ];

  const deliverySurcharge = 1000;

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    location: '',
    deliveryDate: '',
    food: [],
    drinks: [],
    fullName: '',
    email: '',
    phone: '',
  });
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const overlayRef = useRef(null);

  // Close overlay on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showBankDetails) {
        setShowBankDetails(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showBankDetails]);

  // Close overlay if clicked outside content
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      setShowBankDetails(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, category, item) => {
    const { checked } = e.target;
    setFormData((prev) => {
      const updatedCategory = checked
        ? [...prev[category], { name: item.name, price: item.price }]
        : prev[category].filter((selected) => selected.name !== item.name);
      return { ...prev, [category]: updatedCategory };
    });
  };

  const calculateTotal = () => {
    const foodTotal = formData.food.reduce((sum, item) => sum + item.price, 0);
    const drinkTotal = formData.drinks.reduce((sum, item) => sum + item.price, 0);
    const roomTotal = selectedRoom ? selectedRoom.price : 0;
    const surcharge = selectedRoom ? 0 : deliverySurcharge;
    return roomTotal + foodTotal + drinkTotal + surcharge;
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Full Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Invalid email address';
    if (!formData.phone.match(/^\+?\d{10,14}$/)) return 'Invalid phone number (10-14 digits)';
    if (selectedRoom && (!formData.checkIn || !formData.checkOut)) return 'Check-in and check-out dates are required';
    if (!selectedRoom && (!formData.deliveryDate || !formData.location.trim())) {
      return 'Delivery Date and Location are required';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError(null);

    const totalAmount = calculateTotal();

    const emailData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      roomType: selectedRoom ? selectedRoom.roomType : 'Food & Drinks Only',
      checkIn: formData.checkIn || 'N/A',
      checkOut: formData.checkOut || 'N/A',
      location: formData.location || 'N/A',
      deliveryDate: formData.deliveryDate || 'N/A',
      food: formData.food.map((item) => item.name).join(', ') || 'None',
      drinks: formData.drinks.map((item) => item.name).join(', ') || 'None',
      totalAmount: totalAmount.toLocaleString(),
      bankDetails: `Bank: Wema Bank\nAccount Name: Kepong Villa Garden & Suites\nAccount Number: 0125564025\nUse your full name as payment reference.`,
      instructions: `Please pay before confirming your booking.`,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...emailData, to_email: formData.email, reply_to: formData.email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        return emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          { ...emailData, to_email: 'elodinigeria@gmail.com', reply_to: formData.email },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      })
      .then(() => {
        setIsLoading(false);
        setShowConfirmation(true);
        onSubmit({ ...formData, selectedRoom, totalAmount });
      })
      .catch((error) => {
        setIsLoading(false);
        setError('Failed to send booking details. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

  if (showConfirmation) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[350px]">
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-800 rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
          <h2 className="text-2xl font-bold text-yellow-200 mb-4">Booking Successful!</h2>
          <p className="text-white mb-3">
            Thank you for booking with Kepong Villa Garden & Suites.
          </p>
          <p className="text-emerald-200 mb-3">
            Please proceed to the hotel with your evidence of payment. Our team will welcome you and confirm your booking on arrival.
          </p>
          <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-4">
            <p className="text-gray-800 font-semibold mb-2">Bank Account Details:</p>
            <p className="text-gray-900">Account Name: <span className="font-bold">Kepong Villa Garden & Suites</span></p>
            <p className="text-gray-900">Bank: <span className="font-bold">Wema Bank</span></p>
            <p className="text-gray-900">Account Number: <span className="font-bold">0125564025</span></p>
          </div>
          <p className="text-gray-100 text-sm">
            For enquiries, call <a href="tel:+2349162836505" className="text-amber-400 underline">+234 916 283 6505</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-8 relative">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto relative z-0">
        {/* Back Button */}
        <button
          onClick={onBack}
          type="button"
          className="mb-6 inline-block text-amber-600 hover:text-amber-700 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          aria-label="Go back"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-semibold text-green-600 mb-6">
          {selectedRoom ? `Book ${selectedRoom.roomType}` : 'Book Food & Drinks'}
        </h2>
        {error && (
          <p className="text-red-500 mb-4 text-center" role="alert">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          {selectedRoom && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium" htmlFor="checkIn">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 text-gray-900"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium" htmlFor="checkOut">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 text-gray-900"
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </>
          )}
          {!selectedRoom && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium" htmlFor="deliveryDate">
                  Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 text-gray-900"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium" htmlFor="location">
                  Delivery Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 text-gray-900"
                  placeholder="e.g., 123 Unity Avenue, Enugu"
                  required
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Food (Optional)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {foodOptions.map((food, index) => (
                <label key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="food"
                      value={food.name}
                      checked={formData.food.some((item) => item.name === food.name)}
                      onChange={(e) => handleCheckboxChange(e, 'food', food)}
                      className="mr-2 text-orange-600 focus:ring-orange-600"
                      aria-label={`Select ${food.name}`}
                    />
                    <span className="text-gray-600">{food.name}</span>
                  </div>
                  <span className="text-orange-600 font-medium">
                    ₦{food.price.toLocaleString()}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Drinks (Optional)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {drinkOptions.map((drink, index) => (
                <label key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="drinks"
                      value={drink.name}
                      checked={formData.drinks.some((item) => item.name === drink.name)}
                      onChange={(e) => handleCheckboxChange(e, 'drinks', drink)}
                      className="mr-2 text-orange-600 focus:ring-orange-600"
                      aria-label={`Select ${drink.name}`}
                    />
                    <span className="text-gray-700">{drink.name}</span>
                  </div>
                  <span className="text-orange-600 font-medium">
                    ₦{drink.price.toLocaleString()}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {!selectedRoom && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Delivery Surcharge</label>
              <p className="text-orange-600 font-semibold">
                ₦{deliverySurcharge.toLocaleString()} (added to total)
              </p>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Total Amount</label>
            <p className="text-orange-600 font-semibold">
              ₦{calculateTotal().toLocaleString()}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 text-gray-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 text-gray-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium" htmlFor="phone">
              {selectedRoom ? 'Phone Number' : 'Phone Number (For Delivery Contact)'}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 text-gray-900"
              required
            />
          </div>

          {/* Show/Hide Account Details Overlay */}
          <div>
            <button
              type="button"
              onClick={() => setShowBankDetails(true)}
              className="bg-yellow-200 text-black px-6 py-3 rounded-lg border-2 border-emerald-700 font-semibold hover:bg-emerald-700 hover:text-white transition mb-6 w-full max-w-md"
              aria-expanded={showBankDetails}
              aria-controls="account-details-overlay"
            >
              Show Account Details
            </button>

            {showBankDetails && (
              <div
                ref={overlayRef}
                id="account-details-overlay"
                role="dialog"
                aria-modal="true"
                aria-labelledby="account-details-title"
                tabIndex={-1}
                onClick={handleOverlayClick}
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              >
                <div className="bg-emerald-900 bg-opacity-95 p-6 text-center rounded-lg shadow-lg text-white max-w-md w-full relative">
                  <button
                    type="button"
                    onClick={() => setShowBankDetails(false)}
                    aria-label="Close account details"
                    className="absolute top-3 right-3 text-white hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
                  >
                    ✕
                  </button>
                  <h3 id="account-details-title" className="text-lg font-bold mb-3 text-yellow-200">
                    Bank Account Details
                  </h3>
                  <p className="mb-3 text-white font-bold">
                    Pay with your app then click "Send Booking Details"
                  </p>
                  <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-6 text-gray-900">
                    <p><strong>Account Name:</strong><br />Kepong Villa Garden & Suites</p>
                    <p><strong>Bank:</strong><br />Wema Bank</p>
                    <p><strong>Account Number:</strong><br />0125564025</p>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-yellow-200 text-black px-6 py-3 rounded-lg font-semibold text-lg hover:text-white hover:bg-orange-700 hover:scale-105 transition-transform duration-300 border-2 border-yellow-200 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label="Confirm booking"
                  >
                    {isLoading ? 'Submitting...' : 'Send Booking Details'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
