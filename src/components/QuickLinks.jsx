import { useState } from 'react';
import { Link } from 'react-router-dom';
import deluxeRoom from '@/assets/images/hotel/unsplash.jpg';
import jollofRice from '@/assets/images/food-drink/naija-jollof.jpg';
import weddingReception from '@/assets/images/birthday.jpg';
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
      link: '/bookings',
      btnLabel: 'Book Event Venue',
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
    <main className="mt-0 font-montserrat text-gray-800">
      {/* White borders on top and bottom */}
      <div className="w-full border-t-4 border-b-4 border-white">
        <section className="py-12 bg-black bg-opacity-90">
          <div className="container max-w-screen-xl mx-auto text-center">
            {/* Top Cards Section */}
            <section className="py-12 flex justify-center">
              <div className="bg-black opacity-90 rounded-lg p-8 max-w-6xl w-full text-center shadow-xl">
                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    font-dancing
                    font-bold
                    mb-8
                    animate-fade-in-up
                    leading-tight
                    tracking-wide
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-yellow-300
                    via-orange-400
                    to-red-500
                    drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]
                  "
                >
                  Book room, food, events, etc...
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {topCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 text-sm text-black p-2 rounded-lg shadow-xl flex flex-col min-h-[360px] transition-transform hover:scale-105 hover:shadow-2xl"
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
                        to={card.link}
                        className="mt-auto inline-block bg-emerald-900 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-transform hover:scale-105 duration-300 border-2 border-white shadow-lg focus:ring-2 focus:ring-amber-500"
                        aria-label={card.btnLabel}
                      >
                        {card.btnLabel}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* Upcoming Events Section */}
<section className="py-14 flex justify-center">
  <div className="relative bg-gradient-to-br from-yellow-50 via-emerald-50 to-white rounded-3xl p-8 md:p-12 max-w-6xl w-full text-center shadow-2xl border-2 border-emerald-200 overflow-hidden">
    {/* Decorative Confetti SVGs */}
    <svg className="absolute top-0 left-0 w-32 h-32 opacity-30 pointer-events-none" viewBox="0 0 100 100">
      <circle cx="20" cy="20" r="8" fill="#fbbf24"/>
      <circle cx="80" cy="30" r="6" fill="#34d399"/>
      <circle cx="60" cy="80" r="5" fill="#f472b6"/>
      <circle cx="30" cy="70" r="4" fill="#f59e42"/>
    </svg>
    <svg className="absolute bottom-0 right-0 w-32 h-32 opacity-30 pointer-events-none" viewBox="0 0 100 100">
      <circle cx="80" cy="80" r="10" fill="#fbbf24"/>
      <circle cx="20" cy="70" r="6" fill="#34d399"/>
      <circle cx="60" cy="20" r="5" fill="#f472b6"/>
      <circle cx="70" cy="40" r="4" fill="#f59e42"/>
    </svg>
    {/* Premium Event Announcement */}
    <div className="mb-12">
      <h2
        className="
          text-4xl
          md:text-5xl
          font-dancing
          font-extrabold
          mb-6
          animate-bounce
          leading-tight
          tracking-wide
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-yellow-400
          via-orange-400
          to-emerald-500
          drop-shadow-[0_4px_16px_rgba(0,0,0,0.13)]
        "
      >
        Upcoming Event at Kepong Villa
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Example: Birthday Bash */}
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 flex flex-col items-center max-w-md w-full border border-emerald-100">
          <img
            src={weddingReception} // Replace with actual image for the event
            alt="Birthday Celebration"
            className="w-full h-48 object-cover rounded-xl mb-4 shadow"
          />
          <span className="inline-block bg-amber-400 text-emerald-900 font-bold px-4 py-1 rounded-full mb-3 text-xs shadow">
            Featured Event
          </span>
          <h3 className="text-2xl font-extrabold mb-2 text-emerald-900 drop-shadow-md">
            Birthday Bash Extravaganza
          </h3>
          <p className="text-lg text-gray-700 mb-1 font-semibold">July 20, 2025</p>
          <p className="text-base text-gray-800 mb-2">
            Join us as we celebrate <span className="text-emerald-700 font-bold">Amaka’s 30th Birthday</span> with music, laughter, and memories to last a lifetime. Don’t miss the party of the year!
          </p>
          <div className="flex flex-col items-center mt-2">
            <span className="text-sm text-emerald-700 font-medium">
              Venue: Main Banquet Hall, 7pm till late
            </span>
            <span className="text-sm text-amber-700 font-medium">
              Hosted by: DJ Spinall & MC Edo Pikin
            </span>
          </div>
        </div>
        {/* You can duplicate the above block for more events if needed */}
      </div>
    </div>

    {/* Call-to-action for advertising events */}
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center mb-3">
        <span className="text-3xl mr-2">🌟</span>
        <span className="text-lg font-bold text-amber-400">
          Want your event announced here?
        </span>
      </div>
      <Link
        to="/events"
        className="
          inline-block
          bg-gradient-to-r from-yellow-400 via-orange-400 to-emerald-400
          text-black
          py-3
          px-8
          rounded-lg
          hover:bg-gradient-to-r hover:from-amber-500 hover:via-yellow-400 hover:to-emerald-400
          transition-transform
          hover:scale-105
          duration-300
          border-2
          border-white
          shadow-lg
          focus:ring-2
          focus:ring-amber-500
          text-lg
          font-extrabold
        "
        aria-label="Announce Your Event"
      >
        Announce Your Event with Us!
      </Link>
      <p className="text-sm text-emerald-700 mt-4 max-w-lg">
        Want your birthday, wedding, or special event to be seen by hundreds?{' '}
        <Link to="/events" className="text-amber-500 hover:underline font-semibold">
          Contact us now to secure a premium announcement slot!
        </Link>
      </p>
    </div>
  </div>
</section>


            

            {/* More Services To Enjoy */}
            <section className="py-12 flex justify-center">
              <div className="bg-black opacity-90 rounded-2xl p-8 max-w-6xl w-full text-center shadow-xl">
                <h2 className="text-3xl md:text-4xl font-dancing mb-8 text-white drop-shadow-lg">
                  More Services...
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {moreServices.map((service, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-lg text-white p-6 rounded-2xl border-4 border-emerald-900 transform transition hover:scale-105 hover:shadow-2xl cursor-pointer"
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
                        <div className="text-sm text-white mt-2">
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
                        <p className="text-gray-200">Click to reveal contact info</p>
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
