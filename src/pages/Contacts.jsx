import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <main className="bg-black bg-opacity-90 min-h-screen animate-fade-in font-montserrat text-yellow-100 py-32 border-t-4 border-b-4 border-yellow-100">
      <div className="w-full py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <section className="text-center mb-12 relative">
            <h1
              className="text-4xl md:text-4xl font-semibold tracking-tight mb-4 inline-block pb-2"
              style={{
                color: '#fef3c7',
                textShadow: '0 6px 12px rgba(0,0,0,0.7)',
              }}
            >
              Contact Us
            </h1>

            {/* Contact Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto relative bg-black bg-opacity-70 rounded-lg p-6 border-2 border-yellow-100 shadow-lg">
              <div className="flex flex-col items-center">
                <FaMapMarkerAlt className="text-4xl text-yellow-200 mb-2" />
                <h3 className="text-xl font-semibold text-yellow-100">Our Address</h3>
                <p className="text-yellow-200 text-center">#275 Ugwogo Nike Road, Abakpa, Enugu</p>
              </div>
              <div className="flex flex-col items-center">
                <FaPhoneAlt className="text-4xl text-yellow-200 mb-2" />
                <h3 className="text-xl font-semibold text-yellow-100">Phone</h3>
                <a href="tel:+2349162836505" className="text-yellow-200 hover:text-amber-500 transition-colors">
                  0916 283 6505
                </a>
              </div>
              <div className="flex flex-col items-center">
                <FaEnvelope className="text-4xl text-yellow-200 mb-2" />
                <h3 className="text-xl font-semibold text-yellow-100">Email</h3>
                <a href="mailto:odogwucally@gmail.com" className="text-yellow-200 hover:text-amber-500 transition-colors">
                  odogwucally@gmail.com
                </a>
              </div>
            </div>

          </section>

          {/* Map & Message Section */}
          <section className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 max-w-7xl mx-auto">

            {/* Message Form */}
            <div>
              <h2
                className="text-3xl font-semibold text-yellow-100 text-center mb-8 border-b-2 border-yellow-100 pb-2"
              >
                Send us a Message
              </h2>
              <div className="bg-black bg-opacity-80 rounded-lg border-4 border-yellow-100 shadow-xl relative">
                <div className="absolute inset-0 rounded-lg border-2 border-yellow-100 opacity-50 pointer-events-none"></div>
                <form className="p-8 space-y-6 flex flex-col min-h-[400px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-yellow-100 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-black bg-opacity-70 text-yellow-100 px-4 py-2 rounded-md border border-yellow-100 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-yellow-100 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-black bg-opacity-70 text-yellow-100 px-4 py-2 rounded-md border border-yellow-100 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-yellow-100 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full bg-black bg-opacity-70 text-yellow-100 px-4 py-2 rounded-md border border-yellow-100 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-100 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:scale-105 transition-transform duration-300 border-2 border-yellow-100 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="bg-black bg-opacity-80 rounded-xl overflow-hidden border-2 border-yellow-100 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.022447115724!2d7.51408447404588!3d6.518842023219413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a378f42fc857%3A0xd6efa19237e1a2b9!2sKepong%20Villa%20Garden%20%26%20Suites!5e0!3m2!1sen!2sng!4v1745647133234!5m2!1sen!2sng"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Kepong Villa Garden & Suites Location"
              />
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-8 sm:py-12">
            <h2
              className="text-3xl font-bold text-yellow-100 mb-4 border-b-2 border-yellow-100 pb-2"
            >
              Visit Us Today
            </h2>
            <p className="text-yellow-400 mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Enjoy Premium Customer Service
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
