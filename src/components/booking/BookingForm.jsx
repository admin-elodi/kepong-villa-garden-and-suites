import { useState } from 'react';
import emailjs from '@emailjs/browser';
import heroBg from '@/assets/images/hotel/hotel-front.png';

const BookingForm = ({ selectedRoom, onBack, onSubmit }) => {
  const foodOptions = [
    { name: 'Jollof Rice', price: 2000 },
    { name: 'Egusi Soup with Pounded Yam', price: 3500 },
    { name: 'Fried Rice and Chicken', price: 4500 },
    { name: 'Vegetable Soup with Fufu', price: 3000 },
    { name: 'Pepper Soup', price: 1500 },
  ];
  const drinkOptions = [
    { name: 'Chapman', price: 2500 },
    { name: 'Zobo', price: 800 },
    { name: 'Palm Wine', price: 1200 },
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
      bankDetails: `Bank: Wema Bank\nAccount Name: Kepong Villa Garden & Suites\nAccount Number: 0125564025\nInstructions: Copy and paste these details into your banking app to make the payment. Use your full name as the reference.`,
      instructions: `Thank you for booking with Kepong Villa Garden & Suites! Please check your email for your booking details and make the payment via bank transfer using the provided account details. Your booking will be confirmed once payment is received.`,
    };

    // Send email to customer
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...emailData, to_email: formData.email, reply_to: formData.email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // Send email to Kepong Villa
          emailjs
            .send(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              { ...emailData, to_email: 'elodinigeria@gmail.com', reply_to: formData.email },
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
              () => {
                setIsLoading(false);
                setShowBankDetails(true);
                onSubmit({ ...formData, selectedRoom, totalAmount });
              },
              (error) => {
                setIsLoading(false);
                setError('Failed to send booking to Kepong Villa. Please try again.');
                console.error('EmailJS error (Kepong):', error);
              }
            );
        },
        (error) => {
          setIsLoading(false);
          setError('Failed to send booking to customer. Please check your connection and try again.');
          console.error('EmailJS error (Customer):', error);
        }
      );
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">
          {selectedRoom ? `Book ${selectedRoom.roomType}` : 'Book Food & Drinks'}
        </h2>
        {error && (
          <p className="text-red-500 mb-4 text-center" role="alert">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          {selectedRoom && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Selected Room</label>
              <p className="text-orange-600 font-semibold">
                {selectedRoom.roomType} - ₦{selectedRoom.price.toLocaleString()}/day
              </p>
            </div>
          )}
          {selectedRoom ? (
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
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  min={new Date().toISOString().split('T')[0]}
                  required
                  aria-describedby="checkIn-error"
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
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  required
                  aria-describedby="checkOut-error"
                />
              </div>
            </>
          ) : (
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
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  min={new Date().toISOString().split('T')[0]}
                  required
                  aria-describedby="deliveryDate-error"
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
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="e.g., 123 Unity Avenue, Enugu"
                  required
                  aria-describedby="location-error"
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
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
              aria-describedby="fullName-error"
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
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
              aria-describedby="email-error"
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
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
              aria-describedby="phone-error"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              aria-label="Go back"
              disabled={isLoading}
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
              style={{ borderColor: '#FFD700', borderWidth: '2px' }}
              aria-label="Confirm booking"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>

      {showBankDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-cover bg-center rounded-lg p-6 max-w-md mx-auto text-center font-montserrat shadow-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 100, 0, 0.7), rgba(0, 100, 0, 0.7)), url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">Complete Your Payment</h3>
            <p className="text-white mb-4">
              Your booking details have been sent to your email. Please check your inbox (and spam/junk folder) for payment instructions.
            </p>
            <div className="bg-white bg-opacity-90 p-4 rounded-lg mb-6">
              <p className="text-orange-600 font-semibold">Bank: Wema Bank</p>
              <p className="text-orange-600 font-semibold">Account Name: Kepong Villa Garden & Suites</p>
              <p className="text-orange-600 font-semibold">Account Number: 0125564025</p>
              <p className="text-orange-600 font-semibold">Total Amount: ₦{calculateTotal().toLocaleString()}</p>
            </div>
            <p className="text-white mb-6">
              Use your phone, POS, or ATM to transfer the total amount. Once payment is confirmed, you’ll receive a final confirmation email.
            </p>
            <a
              href="mailto:"
              className="bg-amber-500 text-emerald-900 px-6 py-3 rounded-lg hover:bg-amber-600 transition font-semibold text-base border-2 border-amber-400 hover:shadow-lg"
              aria-label="Check email for payment details"
            >
              Check Your Email Now
            </a>
            <button
              onClick={() => {
                setShowBankDetails(false);
                onSubmit({ ...formData, selectedRoom, totalAmount: calculateTotal() });
              }}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-semibold text-base mt-4"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingForm;