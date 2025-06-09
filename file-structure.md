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