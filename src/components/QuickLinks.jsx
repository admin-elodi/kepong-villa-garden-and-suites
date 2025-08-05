import { useState } from 'react';
import { Link } from 'react-router-dom';
import apartment from '@/assets/images/hotel/apartment.webp';
import premiumDrinks from '@/assets/images/homepage/drinks.webp';
import weddingReception from '@/assets/images/homepage/birthday.webp';

// Import the service images with updated shawarma
import shawarma from '@/assets/images/foodies/shawarma.webp';
import hair from '@/assets/images/homepage/barbing.webp';
import carWash from '@/assets/images/homepage/car.webp';  // Replaced light.webp with shawarma.webp
import nightClub from '@/assets/images/club/clubbers.webp';
import meat from '@/assets/images/foodies/meats.webp';
import snooker from '@/assets/images/homepage/snooker.webp';
import shades from '@/assets/images/homepage/laundry.webp';
import salad from '@/assets/images/foodies/palm.webp';

// Import the background video
import starsVideo from '@/assets/videos/stars.webm';

import '@/css/q-links.css';

const serviceImages = [
  shawarma,      // Shawarma Bar
  hair,          // Barber Shop
  carWash,       // Car Wash
  nightClub,     // Nightclub
  snooker,       // Snooker Boardman
  meat,          // Assorted Meat
  shades,        // Laundry
  salad          // Nsukka Palm Wine & Native Food
];

const QuickLinks = () => {
  const topCards = [
    {
      img: premiumDrinks,
      alt: 'Premium Drinks',
      title: 'Order Premium Drinks',
      desc: 'Local & Foreign Drinks',
      link: '/club-k',
      btnLabel: 'Order Drinks',
      state: { showFoodForm: true },
    },
    {
      img: apartment,
      alt: 'Apartment',
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
      whatsappLink: 'https://wa.me/2348060786102',
    },
    {
      title: 'Barber Shop',
      phone: '+234 915 177 6589',
      whatsappLink: 'https://wa.me/2349151776589',
      social: '@barbershop.ng',
    },
    {
      title: 'Car Wash',
      phone: '+234 803 757 5854',
      whatsappLink: 'https://wa.me/2348037575854',
      social: '@carwash.ng',
    },
    {
      title: 'Nightclub',
      phone: '+234 916 943 6106',
      whatsappLink: 'https://wa.me/2349169436106',
      social: '@Sunccent1_',
      socialLink: 'https://x.com/Sunccent1_?t=7LDrva2RghLEEJfOl1vWHg&s=09',
    },
    {
      title: 'Snooker Games',
      phone: '+234 916 350 0634',
      whatsappLink: 'https://wa.me/2349163500634',
      social: '@snookerpro',
    },
    {
      title: 'Ezinwanne Kitchen',
      phone: '+234 816 654 0841',
      whatsappLink: 'https://wa.me/2348166540841',
      social: '@meatlover.ng',
    },
    {
      title: 'Laundry',
      phone: '+234 807 270 1671',
      whatsappLink: 'https://wa.me/2348072701671',
      social: '@cleanlaundry.ng',
    },
    {
      title: 'Nsukka Palm Wine & Native Food',
      phone: '+234 814 559 8866',
      whatsappLink: 'https://wa.me/2348145598866',
      social: '@nsukkapalmwine',
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
    <section>
   
      <main className="mt-0 font-montserrat border-b-2 border-t-none border-red-600 text-yellow-100 bg-black/70 relative z-10">
        <div className="w-full border-b border-red-600">
          <section className="py-12">
            <div className="container max-w-screen-xl mx-auto text-center">
              {/* Top Cards Section */}
              <section className="py-12 flex justify-center">
                
                <div className="p-8 max-w-6xl w-full text-center shadow-xl">
                  <h2 className="text-xl md:text-xl font-dancing font-bold mb-8 animate-fade-in-up leading-tight tracking-wider text-white">
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
                <div className="p-8 max-w-6xl w-full text-center shadow-xl border-b-2 border-red-600">
                  <h2 className="text-xl md:text-xl font-bold mb-8 text-white drop-shadow-lg">
                    More Services...
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 p-4 rounded-xl gap-8">
                    {moreServices.map((service, index) => (
                      <div
                        key={index}
                        className="text-white bg-black rounded-lg border-4 p-[5px] border-red-600 transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                        role="button"
                        tabIndex="0"
                        onClick={() => toggleReveal(index)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            toggleReveal(index);
                          }
                        }}
                      >
                        {/* Service Image with uniform size and hover grow */}
                        <img
                          src={serviceImages[index % serviceImages.length]}
                          alt={`${service.title} icon`}
                          className="mx-auto mb-4 w-[100%] h-[150px] object-cover rounded-t-sm transition-transform duration-300 ease-in-out hover:scale-110"
                          style={{ marginTop: '-1px' }} // Almost touches top of container
                        />
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>

                        {revealedServices[index] ? (
                          <div className="text-sm mt-2 text-white space-y-1">
                            <p>
                              <strong>Phone:</strong> {service.phone}
                            </p>
                            {service.whatsappLink && (
                              <p>
                                <strong>WhatsApp:</strong>{' '}
                                <a
                                  href={service.whatsappLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-green-300 hover:underline"
                                >
                                  Chat on WhatsApp
                                </a>
                              </p>
                            )}
                            {(service.social || service.socialLink) && (
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
                            )}
                          </div>
                        ) : (
                          <p className="text-yellow-100">
                            Click to reveal contact info
                          </p>
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
    </section>
  );
};

export default QuickLinks;
