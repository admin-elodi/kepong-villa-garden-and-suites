kepong-villa-garden-and-suites/
        # Kepong Village Garden logo (used in Header.jsx)
│   ├── icons/                    # SVG icons (e.g., fork-knife.svg, treasure-chest.svg)
│   ├── videos/                   # Promo clips (e.g., comedy-night.mp4)
│   └── fonts/                    # Custom fonts (e.g., Poppins.ttf, Roboto.ttf)
├── design/
│   ├── wireframes/               # Low-fidelity sketches (e.g., homepage.png, booking.png)
│   ├── mockups/                  # High-fidelity designs (e.g., menu-page.psd)
│   ├── style-guide/              # Typography, colors, etc. (e.g., style-guide.pdf)
│   └── components/               # Reusable UI elements (e.g., button-card.fig)
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── food-drink/           # Menu item images (e.g., palm_wine.jpg, suya.jpg)
│   │   ├── entertainment/        # Club K, snooker, comedy visuals (e.g., club_k_night.jpg)
│   │   ├── hotel/                # Room and facility photos (e.g., standard.jpg, deluxe.jpg)
│   │   ├── services/             # Laundry, car wash, boutique images (e.g., car_wash.jpg)
│   │   └── logo-white.png
│   ├── css/
│   │   ├── styles.css            # Global styles (defines --primary-color, etc.)
│   │   └── booking.css           # Booking-specific styles
│   ├── js/
│   │   ├── treasure-hunt.js      # Treasure hunt game logic (placeholder)
│   │   └── order-form.js         # Shared form validation logic (placeholder)
│   ├── components/
│   │   ├── booking/              # Booking system components
│   │   │   ├── RoomSelector.jsx      # Room type selection
│   │   │   ├── DateGuestPicker.jsx   # Date and guest selector
│   │   │   ├── FoodDrinkMenu.jsx     # Food/drink pre-order menu
│   │   │   ├── OrderItem.jsx         # Individual menu item
│   │   │   ├── BookingSummary.jsx    # Booking summary display
│   │   │   ├── PaymentForm.jsx       # Payment form
│   │   │   └── ConfirmationModal.jsx # Booking confirmation popup
│   │   ├── Header.jsx            # Navigation bar (existing)
│   │   ├── Footer.jsx            # Footer with contact/social links (existing)
│   │   ├── Hero.jsx              # Homepage hero with carousel (existing)
│   │   ├── QuickLinks.jsx        # Quick links for homepage (existing)
│   │   └── DroneOrderModal.jsx   # Drone delivery modal (existing)
│   ├── context/
│   │   ├── BookingContext.jsx    # Shared booking state (optional)
│   ├── data/
│   │   ├── rooms.js              # Room types and pricing (e.g., Standard, Deluxe)
│   │   └── menu.js               # Food/drink items (extends DroneOrderModal)
│   ├── pages/
│   │   ├── Home.jsx              # Homepage with Hero and QuickLinks (existing)
│   │   ├── ClubK.jsx             # Club K page (existing, placeholder)
│   │   ├── FeaturedEntertainers.jsx # Entertainment page (existing, placeholder)
│   │   ├── Booking.jsx           # Hotel booking system
│   │   ├── TreasureHunt.jsx      # Treasure hunt game page (existing, placeholder)
│   │   └── Contacts.jsx          # Contact page (existing, placeholder)
│   ├── api/
│   │   ├── drone-delivery.js     # Drone delivery API mock (existing logic)
│   │   └── booking-api.js        # Booking API mock (placeholder)
│   └── App.jsx                   # Main app with routing (existing)
├── docs/
│   ├── ux-spec/                  # UX design specification (e.g., ux-spec.docx)
│   ├── user-testing/             # Test plans and results (e.g., test-plan.xlsx)
│   └── implementation/           # Developer handoff notes (e.g., dev-handoff.md)
├── content/
│   ├── text/                     # Copy (e.g., menu-descriptions.txt)
│   ├── schedules/                # Event schedules (e.g., comedy-night.csv)
│   └── game/                     # Treasure hunt clues (e.g., clues.json)
├── dist/                         # Compiled production files (e.g., index.min.js, styles.min.css)
├── package.json                  # Project dependencies (React, react-router-dom, etc.)
└── README.md                     # Project overview and setup instructions


import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <main className="min-h-screen animate-fade-in font-montserrat text-gray-800 py-16">
      <div className="w-full py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-12 relative">
            {/* Deep Emerald-Amber Strip */}
            <div
              className="absolute w-full h-[300px] bg-gradient-to-r from-emerald-900 via-amber-700 to-emerald-900 -z-10 rounded-lg shadow-xl"
              style={{ top: '160px', left: 0 }}
            ></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-900 mb-4 border-b-2 border-amber-400 inline-block pb-2">
              Connect With Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-600 mb-8">
              Reach out to Kepong Villa Garden & Suites for a premium experience tailored just for you.
            </p>
            {/* Contact Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto z-10 relative bg-white rounded-lg p-6 border-2 border-emerald-900 shadow-md">
              <div className="flex flex-col items-center">
                <FaMapMarkerAlt className="text-4xl text-amber-500 mb-2" />
                <h3 className="text-xl font-semibold text-emerald-900">Our Address</h3>
                <p className="text-gray-600 text-center">#275 Ugwogo Nike Road, Abakpa, Enugu</p>
              </div>
              <div className="flex flex-col items-center">
                <FaPhoneAlt className="text-4xl text-amber-500 mb-2" />
                <h3 className="text-xl font-semibold text-emerald-900">Phone</h3>
                <a href="tel:+2349162836505" className="text-amber-500 hover:text-amber-600">
                  0916 283 6505
                </a>
              </div>
              <div className="flex flex-col items-center">
                <FaEnvelope className="text-4xl text-amber-500 mb-2" />
                <h3 className="text-xl font-semibold text-emerald-900">Email</h3>
                <a href="mailto:odogwucally@gmail.com" className="text-amber-500 hover:text-amber-600">
                  odogwucally@gmail.com
                </a>
              </div>
            </div>
            <Link
              to="/bookings"
              className="mt-8 inline-block bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-amber-400 shadow-sm"
              aria-label="Book your experience now"
            >
              Book Now
            </Link>
          </section>

          {/* Map Section */}
          <section className="py-8 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              <div className="bg-white rounded-xl transition-all duration-300 border-2 border-emerald-900 shadow-md">
                <div className="rounded-lg p-8 bg-white flex flex-col min-h-[300px]">
                  <h2 className="text-3xl font-bold text-emerald-900 mb-6 border-b-2 border-amber-400 pb-2">
                    Find Us On The Map
                  </h2>
                  <p className="text-gray-600 text-base mb-4">
                    Come see the charm and elegance of Kepong Villa Garden & Suites in person.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 border-2 border-emerald-900 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.022447115724!2d7.51408447404588!3d6.518842023219413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a378f42fc857%3A0xd6efa19237e1a2b9!2sKepong%20Villa%20Garden%20%26%20Suites!5e0!3m2!1sen!2sng!4v1745647133234!5m2!1sen!2sng"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Kepong Villa Garden & Suites Location"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Message Form */}
          <section className="max-w-3xl mx-auto py-8 sm:py-12">
            <h2 className="text-3xl font-bold text-emerald-900 text-center mb-8 border-b-2 border-amber-400 pb-2">
              Send Us a Message
            </h2>
            <div className="bg-white rounded-lg transition-all duration-300 border-4 border-white shadow-lg relative">
              <div className="absolute inset-0 rounded-lg border-2 border-white opacity-50 pointer-events-none"></div>
              <form className="p-8 bg-white space-y-6 flex flex-col min-h-[400px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-900 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-emerald-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-900 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-emerald-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-900 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-emerald-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-amber-400 shadow-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-8 sm:py-12">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4 border-b-2 border-amber-400 pb-2">
              Visit Us Today
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Discover the charm and elegance of Kepong Villa Garden & Suites in the heart of Enugu.
            </p>
            <Link
              to="/bookings"
              className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-amber-400 shadow-sm"
              aria-label="Book your visit now"
            >
              Book Now
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contacts;




import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
          {/* ...all your form fields as before... */}
          {/* ...room/food/drink fields... */}
          {/* ...contact fields... */}

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
                <div className="bg-emerald-900 bg-opacity-95 p-6 rounded-lg shadow-lg text-white max-w-md w-full relative">
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
                  <p className="mb-3 text-red-400 font-bold uppercase">
                    CAUTION! Ensure you pay before you confirm booking.
                  </p>
                  <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-6 text-gray-900 text-left">
                    <p><strong>Account Name:</strong><br />Kepong Villa Garden & Suites</p>
                    <p><strong>Bank:</strong><br />Wema Bank</p>
                    <p><strong>Account Number:</strong><br />0125564025</p>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 hover:scale-105 transition-transform duration-300 border-2 border-yellow-200 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label="Confirm booking"
                  >
                    {isLoading ? 'Submitting...' : 'Confirm Booking'}
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
