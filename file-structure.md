kepong-villa-garden-and-suites/
├── assets/
│   ├── images/
│   │   ├── food-drink/           # Menu item images (e.g., palm_wine.jpg, suya.jpg)
│   │   ├── entertainment/        # Club K, snooker, comedy visuals (e.g., club_k_night.jpg)
│   │   ├── hotel/                # Room and facility photos (e.g., standard.jpg, deluxe.jpg)
│   │   ├── services/             # Laundry, car wash, boutique images (e.g., car_wash.jpg)
│   │   └── logo-white.png        # Kepong Village Garden logo (used in Header.jsx)
│   ├── icons/                    # SVG icons (e.g., fork-knife.svg, treasure-chest.svg)
│   ├── videos/                   # Promo clips (e.g., comedy-night.mp4)
│   └── fonts/                    # Custom fonts (e.g., Poppins.ttf, Roboto.ttf)
├── design/
│   ├── wireframes/               # Low-fidelity sketches (e.g., homepage.png, booking.png)
│   ├── mockups/                  # High-fidelity designs (e.g., menu-page.psd)
│   ├── style-guide/              # Typography, colors, etc. (e.g., style-guide.pdf)
│   └── components/               # Reusable UI elements (e.g., button-card.fig)
├── src/
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


import { Link } from 'react-router-dom';
import deluxeRoom from '../../public/assets/images/hotel/unsplash.jpg';
import jollofRice from '../../public/assets/images/food-drink/naija-jollof.jpg';
import weddingReception from '../../public/assets/images/wedding-reception.jpg';
import treasureHuntMap from '../../public/assets/images/treasure-hunt.jpg';

const QuickLinks = () => {
  return (
    <main>
      {/* Villa Highlights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Discover Kepong Villa Garden & Suites
          </h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            From luxurious rooms to vibrant nightlife, we’ve got it all.
          </p>
          <div className="discover-grid">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={deluxeRoom}
                alt="Deluxe Room"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Cozy Rooms</h3>
              <p className="text-gray-600">Book deluxe suites or budget rooms with drone-delivered meals.</p>
              <Link
                to="/bookings"
                className="mt-4 inline-block text-orange-500 font-bold hover:underline"
              >
                Book a Room
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={jollofRice}
                alt="Jollof Rice"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Savor the Flavor</h3>
              <p className="text-gray-600">Pre-order jollof rice or smoothies for fast drone delivery.</p>
              <Link
                to="/bookings"
                className="mt-4 inline-block text-orange-500 font-bold hover:underline"
              >
                Order Food
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={weddingReception}
                alt="Wedding Event"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Memorable Events</h3>
              <p className="text-gray-600">Host weddings or birthdays with seamless booking.</p>
              <Link
                to="/bookings"
                className="mt-4 inline-block text-orange-500 font-bold hover:underline"
              >
                Plan an Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treasure Hunt Teaser */}
      <section className="py-16 bg-yellow-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Embark on a Treasure Hunt!</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            Fun for kids and adults – solve clues, explore the villa, and win rewards!
          </p>
          <div className="treasure-hunt-flex">
            <img
              src={treasureHuntMap}
              alt="Treasure Hunt Map"
              className="h-64 object-cover rounded-lg"
            />
            <div className="text-content">
              <p className="text-lg mb-4">
                Register now for an interactive adventure. Free to start, premium clues for exclusive
                prizes!
              </p>
              <Link
                to="/entertainment"
                className="inline-block bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600"
              >
                Join the Hunt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">More to Enjoy</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            From shawarma to laundry, we’ve got you covered.
          </p>
          <div className="services-grid">
            <div className="service-card bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Shawarma Bar</h3>
              <p className="text-gray-600">Tasty bites delivered by drone.</p>
            </div>
            <div className="service-card bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Laundry</h3>
              <p className="text-gray-600">Quick and reliable cleaning.</p>
            </div>
            <div className="service-card bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Car Wash</h3>
              <p className="text-gray-600">Keep your ride sparkling.</p>
            </div>
            <div className="service-card bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Nightclub</h3>
              <p className="text-gray-600">Dance the night away in style.</p>
            </div>
            <div className="service-card bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Unisex Hair Care</h3>
              <p className="text-gray-600">Slay with fresh cuts and vibrant styles at our chic salon.</p>
            </div>
            <div className="service-card bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Boutique</h3>
              <p className="text-gray-600">Rock the latest Ankara fits and trendy accessories.</p>
            </div>
            <div className="service-card bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Nsukka Palm Wine</h3>
              <p className="text-gray-600">Savor the sweet, frothy taste of authentic Nsukka palm wine.</p>
            </div>
            <div className="service-card bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Snooker Options</h3>
              <p className="text-gray-600">Hustle and flex your skills at our sleek snooker lounge.</p>
            </div>
          </div>
          <Link
            to="/services"
            className="mt-8 inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </main>
  );
};

export default QuickLinks;