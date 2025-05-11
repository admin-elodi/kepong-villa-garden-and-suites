import { Link } from 'react-router-dom';
import deluxeRoom from '@/assets/images/hotel/unsplash.jpg';
import jollofRice from '@/assets/images/food-drink/naija-jollof.jpg';
import weddingReception from '@/assets/images/wedding-reception.jpg';
import treasureHuntMap from '@/assets/images/treasure-hunt.jpg';
import '../css/q-links.css';


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
          <div className="discover-grid md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col min-h-[360px]">
              <img
                src={deluxeRoom}
                alt="Deluxe Room"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Cozy Rooms</h3>
              <p className="text-gray-600">Book deluxe suites or budget rooms with drone-delivered meals.</p>
              <Link
                to="/bookings"
                className="mt-auto inline-block text-orange-500 font-bold hover:underline"
              >
                Book a Room
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col min-h-[360px]">
              <img
                src={jollofRice}
                alt="Jollof Rice"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Savor the Flavor</h3>
              <p className="text-gray-600">Pre-order jollof rice or smoothies for fast drone delivery.</p>
              <Link
                to="/bookings"
                className="mt-auto inline-block text-orange-500 font-bold hover:underline"
              >
                Order Food
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col min-h-[360px]">
              <img
                src={weddingReception}
                alt="Wedding Event"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Memorable Events</h3>
              <p className="text-gray-600">Host weddings or birthdays with seamless booking.</p>
              <Link
                to="/bookings"
                className="mt-auto inline-block text-orange-500 font-bold hover:underline"
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
          <div className="treasure-hunt-flex md:flex-row md:justify-center">
            <img
              src={treasureHuntMap}
              alt="Treasure Hunt Map"
              className="h-64 object-cover rounded-lg md:w-1/3"
            />
            <div className="text-content md:max-w-md">
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
          <div className="services-grid md:grid-cols-4">
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
            to="/booking"
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