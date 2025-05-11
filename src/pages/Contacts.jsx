import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Contacts = () => {
  return (
    <main className="bg-white min-h-screen animate-fade-in font-montserrat">
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("@/assets/images/venue-hero.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-green-800 opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-6">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-yellow-300 mb-4">
              Connect With Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white/80">
              Reach out to Kepong Villa Garden & Suites for a premium experience tailored just for you.
            </p>
            <Link
              to="/bookings"
              className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-transform"
              aria-label="Book your experience now"
              style={{ borderColor: '#FFD700', borderWidth: '2px' }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold text-green-800 mb-6">Contact Information</h2>
            <div className="space-y-5 text-gray-600">
              <div>
                <h3 className="text-xl font-medium text-green-800">Address</h3>
                <p>Kepong Villa Garden & Suites<br />#275 Ugwogo Nike Road, Abakpa, Enugu</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-green-800">Phone</h3>
                <a href="tel:+2349162836505" className="text-orange-500 hover:underline">
                  0916 283 6505
                </a>
              </div>
              <div>
                <h3 className="text-xl font-medium text-green-800">Email</h3>
                <a
                  href="mailto:odogwucally@gmail.com"
                  className="text-orange-500 hover:underline"
                >
                  odogwucally@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-medium text-green-800">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://facebook.com/kepongvilla"
                    aria-label="Facebook"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a
                    href="https://instagram.com/kepongvilla"
                    aria-label="Instagram"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.022447115724!2d7.51408447404588!3d6.518842023219413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a378f42fc857%3A0xd6efa19237e1a2b9!2sKepong%20Villa%20Garden%20%26%20Suites!5e0!3m2!1sen!2sng!4v1745647133234!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Kepong Villa Garden & Suites Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-green-800 text-center mb-8">
          Send Us a Message
        </h2>
        <form className="bg-white rounded-xl p-8 shadow-xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-transform"
            style={{ borderColor: '#FFD700', borderWidth: '2px' }}
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="text-center py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-green-800">
        <h2 className="text-3xl font-semibold text-yellow-200 mb-4">Visit Us Today</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Discover the charm and elegance of Kepong Villa Garden & Suites in the heart of Enugu.
        </p>
        <Link
          to="/bookings"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-transform"
          aria-label="Book your visit now"
          style={{ borderColor: '#FFD700', borderWidth: '2px' }}
        >
          Book Now
        </Link>
      </section>
    </main>
  );
};

export default Contacts;