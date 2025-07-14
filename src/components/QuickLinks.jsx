import { useState } from 'react';
import { Link } from 'react-router-dom';
import deluxeRoom from '@/assets/images/hotel/unsplash.webp';
import jollofRice from '@/assets/images/food-drink/naija-jollof.webp';
import weddingReception from '@/assets/images/birthday.webp';
import '../css/q-links.css';

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
      phone: '+234 801 234 5678',
      social: '@shawarmabar.ng',
      socialLink: 'https://instagram.com/shawarmabar.ng',
    },
    {
      title: 'Laundry',
      phone: '+234 802 345 6789',
      social: '@laundryexpress',
    },
    {
      title: 'Car Wash',
      phone: '+234 803 456 7890',
      social: '@cleancars.ng',
      socialLink: 'https://facebook.com/cleancars.ng',
    },
    {
      title: 'Nightclub',
      phone: '+234 804 567 8901',
      social: '@nightlife.kepong',
      socialLink: 'https://instagram.com/nightlife.kepong',
    },
    {
      title: 'Games',
      phone: '+234 805 678 9012',
      social: '@funhub.kepong',
    },
    {
      title: 'Hotel',
      phone: '+234 806 789 0123',
      social: '@keponghotel',
      socialLink: 'https://twitter.com/keponghotel',
    },
    {
      title: 'Boutique',
      phone: '+234 807 890 1234',
      social: '@style.kepong',
    },
    {
      title: 'Nsukka Palm Wine',
      phone: '+234 808 901 2345',
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
    <main className="mt-0 font-montserrat text-yellow-100 bg-black">
      {/* White borders on top and bottom */}
      <div className="w-full border-t border-b border-white">
        <section className="py-12 bg-black bg-opacity-90">
          <div className="container max-w-screen-xl mx-auto text-center">
            {/* Top Cards Section */}
            <section className="py-12 flex justify-center">
              <div className="bg-black bg-opacity-90 rounded-lg p-8 max-w-6xl w-full text-center shadow-xl">
                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    font-dancing
                    font-bold
                    mb-8
                    animate-fade-in-up
                    leading-tight
                    tracking-wider
                    text-yellow-200
                    drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]
                  "
                >
                  Book room, food, events, etc...
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {topCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-black bg-opacity-80 text-yellow-100 p-4 rounded-lg shadow-xl flex flex-col min-h-[360px] transition-transform hover:scale-105 hover:shadow-2xl"
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
                          state: card.state, // Pass state for food form
                        }}
                        className="mt-auto inline-block bg-yellow-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-amber-400 transition-transform hover:scale-105 duration-300 border-2 border-black shadow-lg focus:ring-2 focus:ring-amber-500"
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
            <section className="py-12 flex justify-center">
              <div className="bg-black bg-opacity-90 rounded-2xl p-8 max-w-6xl w-full text-center shadow-xl">
                <h2 className="text-3xl md:text-4xl font-dancing mb-8 text-yellow-100 drop-shadow-lg">
                  More Services...
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {moreServices.map((service, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-lg text-yellow-100 p-6 rounded-2xl border-4 border-yellow-100 transform transition hover:scale-105 hover:shadow-2xl cursor-pointer"
                      role="button"
                      tabIndex="0"
                      onClick={() => toggleReveal(index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          toggleReveal(index);
                        }
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      {revealedServices[index] ? (
                        <div className="text-sm mt-2">
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
                                className="text-amber-400 hover:underline"
                              >
                                {service.social}
                              </a>
                            ) : (
                              service.social
                            )}
                          </p>
                        </div>
                      ) : (
                        <p className="text-yellow-300">Click to reveal contact info</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default QuickLinks;