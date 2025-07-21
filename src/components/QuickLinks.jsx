import { useState } from 'react';
import { Link } from 'react-router-dom';
import deluxeRoom from '@/assets/images/hotel/unsplash.webp';
import jollofRice from '@/assets/images/food-drink/naija-jollof.webp';
import weddingReception from '@/assets/images/birthday.webp';
import '../css/q-links.css';

// Icon set for services (emoji)
const serviceIcons = [
  "🌯", // Shawarma Bar
  "💈", // Barber Shop
  "🚗", // Car Wash
  "🎶", // Nightclub
  "🎱", // Snooker Boardman
  "🍖", // Assorted Meat
  "👗", // Boutique
  "🍶", // Palm Wine
];

const QuickLinks = () => {
  const topCards = [
    {
      img: jollofRice,
      alt: 'Jollof Rice',
      title: 'Savor the Flavor',
      desc: 'Local & Foreign Dishes',
      link: '/bookings',
      btnLabel: 'Order Food',
      state: { showFoodForm: true }, // Signal to show food form
    },
    {
      img: deluxeRoom,
      alt: 'Deluxe Room',
      title: 'Cozy Rooms',
      desc: 'Standard - Deluxe - Executive',
      link: '/bookings',
      btnLabel: 'Book a Room',
    },
    {
      img: weddingReception,
      alt: 'Wedding Event',
      title: 'Plan Memorable Events',
      desc: 'Birthdays, Weddings, etc',
      link: '/events',
      btnLabel: 'Book Event Page',
    },
  ];

  const moreServices = [
    {
      title: 'Shawarma Bar',
      phone: '+234 806 078 6102',
      social: '@shawarmabar.ng',
      socialLink: 'https://instagram.com/shawarmabar.ng',
    },
    {
      title: 'Barber Shop',
      phone: '+234 915 177 6589',
      social: '@kingsley',
    },
    {
      title: 'Car Wash',
      phone: '+234 803 456 7890',
      social: '@cleancars.ng',
      socialLink: 'https://facebook.com/cleancars.ng',
    },
    {
      title: 'Nightclub',
      phone: '+234 916 943 6106',
      social: '@Sunccent1_',
      socialLink: 'https://x.com/Sunccent1_?t=7LDrva2RghLEEJfOl1vWHg&s=09',
    },
    {
      title: 'Snooker Boardman',
      phone: '+234 916 350 0634',
      social: '@funhub.kepong',
    },
    {
      title: 'Assorted Meat',
      phone: '+234 816 654 0841',
      social: '@keponghotel',
      socialLink: 'https://twitter.com/keponghotel',
    },
    {
      title: 'Boutique',
      phone: '+234 807 890 1234',
      social: '@style.kepong',
    },
    {
      title: 'Nsukka Palm Wine & Native Food',
      phone: '+234 814 559 8866',
      social: '@palmwine.ng',
      socialLink: 'https://instagram.com/palmwine.ng',
    },
  ];

  const [revealedServices, setRevealedServices] = useState({});

  const toggleReveal = (index) => {
    setRevealedServices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="mt-0 font-montserrat border-4 border-red-600 text-yellow-100 bg-white">
      <div className="w-full border-t border-b border-red-600">
        <section className="py-12">
          <div className="container bg-black/70 rounded-lg max-w-screen-xl mx-auto text-center">
            {/* Top Cards Section */}
            <section className="py-12 flex justify-center">
              <div className="rounded-lg p-8 max-w-6xl w-full text-center shadow-xl">
                <h2
                  className="
                    text-xl
                    md:text-xl
                    font-dancing
                    font-bold
                    mb-8
                    animate-fade-in-up
                    leading-tight
                    tracking-wider
                    text-white
                  "
                >
                  Book room, events, etc...
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {topCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-white text-black p-4 rounded-lg shadow-xl flex flex-col min-h-[360px] transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                      <img
                        src={card.img}
                        alt={card.alt}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2 drop-shadow-md">
                        {card.title}
                      </h3>
                      <p>{card.desc}</p>
                      <Link
                        to={{
                          pathname: card.link,
                          state: card.state,
                        }}
                        className="mt-auto inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-500 transition-transform hover:scale-105 duration-300 border-2 border-red shadow-lg focus:ring-2 focus:ring-amber-500"
                        aria-label={card.btnLabel}
                      >
                        {card.btnLabel}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* More Services To Enjoy */}
            <section className="py-12 flex justify-center border-t-2 border-red-600">
              <div className="p-8 max-w-6xl w-full text-center shadow-xl">
                <h2 className="text-xl md:text-xl font-bold mb-8 text-white drop-shadow-lg">
                  More Services...
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 p-4 rounded-xl gap-8">
                  {moreServices.map((service, index) => (
                    <div
                      key={index}
                      className="text-white bg-black p-6 rounded-2xl border-4 border-red-600 0 transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                      role="button"
                      tabIndex="0"
                      onClick={() => toggleReveal(index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          toggleReveal(index);
                        }
                      }}
                    >
                      {/* Colored emoji icons with custom colors, no red */}
                      <span
                        className={`text-3xl mb-2 block service-icon-color-${index % 4}`}
                      >
                        {serviceIcons[index % serviceIcons.length]}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      {revealedServices[index] ? (
                        <div className="text-sm mt-2 text-white">
                          <p>
                            <strong>Phone:</strong> {service.phone}
                          </p>
                          <p>
                            <strong>Social:</strong>{' '}
                            {service.socialLink ? (
                              <a
                                href={service.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-200 hover:underline"
                              >
                                {service.social}
                              </a>
                            ) : (
                              service.social
                            )}
                          </p>
                        </div>
                      ) : (
                        <p className="text-yellow-100">Click to reveal contact info</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* --- Add styles for icon colors --- */}
      <style>{`
        /* White to grey to light blue icon colors */
        .service-icon-color-0 { color: #f0f0f0; }      /* white */
        .service-icon-color-1 { color: #a0a0a0; }      /* medium grey */
        .service-icon-color-2 { color: #c0d9f7; }      /* light blue */
        .service-icon-color-3 { color: #d7e6fb; }      /* very light blue */
      `}</style>
    </main>
  );
};

export default QuickLinks;
