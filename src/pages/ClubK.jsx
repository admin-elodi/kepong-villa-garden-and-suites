import React, { useState, useRef, useEffect } from 'react';
import clubkHero from '@/assets/videos/clubbing.mp4';
import dance2 from '@/assets/images/club/dance2.webp';
import dj from '@/assets/images/club/dj.webp';
import drink1 from '@/assets/images/club/drink1.webp';
import vip1 from '@/assets/images/club/vip1.webp';
import dance1 from '@/assets/images/club/dance1.webp';
import ambience1 from '@/assets/images/club/ambience1.webp';
import redLabel from '@/assets/images/club/don.jpg';
import vodka from '@/assets/images/club/donj.jpg';
import redWine from '@/assets/images/club/wine.webp';

const ClubK = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [selectedDrinks, setSelectedDrinks] = useState({});
  const modalRef = useRef(null);

  const features = [
    { title: 'World-Class DJs', img: dj, desc: 'Electrifying beats every weekend' },
    { title: 'Premium Drinks', img: drink1, desc: 'Expertly crafted cocktails' },
    { title: 'Exclusive VIP Areas', img: vip1, desc: 'Luxury private booths' },
    { title: 'Themed Events', img: dance1, desc: 'Unforgettable party nights' },
    { title: 'Vibrant Dance Floor', img: dance2, desc: 'State-of-the-art visuals' },
    { title: 'Immersive Ambiance', img: ambience1, desc: 'Neon lights & energy' },
  ];

  const drinksList = [
    { id: 'whisky', name: 'Don Julio', price: 500000, img: redLabel },
    { id: 'hennessyxo', name: 'Henessy X.O', price: 450000, img: vodka },
    { id: 'wine', name: 'Four cousins', price: 20000, img: redWine },
  ];

  const SERVICE_CHARGE_RATE = 0.05;

  // WhatsApp number for barman (international format, no '+' or spaces)
  const barmanNumber = '2349169436106';

  const openModal = () => {
    setIsModalOpen(true);
    setShowBankDetails(false);
    setSelectedDrinks({});
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowBankDetails(false);
    setSelectedDrinks({});
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  const updateDrinkQuantity = (id, qty) => {
    if (qty < 0) return;
    setSelectedDrinks((prev) => {
      const newSelection = { ...prev };
      if (qty === 0) {
        delete newSelection[id];
      } else {
        newSelection[id] = qty;
      }
      return newSelection;
    });
  };

  const totalPrice = Object.entries(selectedDrinks).reduce((total, [id, qty]) => {
    const drink = drinksList.find((d) => d.id === id);
    return total + (drink ? drink.price * qty : 0);
  }, 0);

  const serviceCharge = Math.round(totalPrice * SERVICE_CHARGE_RATE);

  const handlePayNow = () => {
    if (totalPrice === 0) {
      alert('Please select at least one drink before proceeding to pay.');
      return;
    }
    setShowBankDetails(true);
  };

  const orderLines = Object.entries(selectedDrinks)
    .map(([id, qty]) => {
      const drink = drinksList.find(d => d.id === id);
      if (!drink) return null;
      return `- ${drink.name} × ${qty} = ₦${(drink.price * qty).toLocaleString()}`;
    })
    .filter(x => x)
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hello, I have made payment for the following drinks at Club K:\n${orderLines}\n\nSubtotal: ₦${totalPrice.toLocaleString()}\nService Charge (5%): ₦${serviceCharge.toLocaleString()}\nTOTAL: ₦${(totalPrice + serviceCharge).toLocaleString()}\n\nPlease find my payment evidence attached.`
  );
  const whatsappLink = `https://wa.me/${barmanNumber}?text=${whatsappMessage}`;

  return (
    <main className="relative min-h-screen font-montserrat text-yellow-100">
      {/* Full-page video background */}
      <video
        src={clubkHero}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover brightness-100 contrast-100"
        style={{ zIndex: -1 }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay for content readability */}
      <div className="relative z-10 bg-black/50 min-h-screen border-t-4 border-b-4 border-red-600 pt-[90px] sm:pt-[110px]">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] sm:h-[520px] md:h-[640px] lg:h-[720px] xl:h-[800px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-full px-6 text-center max-w-3xl mx-auto gap-6 sm:gap-8">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold tracking-widest leading-tight text-white px-6 py-4 mb-2 rounded-xl animate-fadeInUp">
                Club K Nightclub
              </h1>
              <p className="bg-white/10 border-2 border-red-600 rounded-lg text-lg sm:text-xl md:text-2xl text-white font-bold max-w-md mx-auto leading-relaxed drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] px-2 py-2 md:px-4 rounded animate-fadeInUp-delayed">
                Open Wednesdays, Fridays & Sundays<br className="block sm:hidden" />
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-xl mx-auto px-4 mt-2">
              <button
                onClick={openModal}
                className="bg-red-600 text-white px-4 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-100 hover:text-black hover:scale-105 transition-transform duration-300 shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none md:w-[400px]"
                aria-label="Order Premium Drinks"
              >
                Order Premium Drinks
              </button>
            </div>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 mt-16 md:mt-40 flex items-center justify-center z-50 px-4">
            <div
              ref={modalRef}
              className="bg-[#fef3c7] rounded-xl border-4 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] max-w-md w-full p-0 relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-700 text-2xl font-bold hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Close modal"
              >
                ×
              </button>
              <img src={vodka} alt="Premium Drink" className="w-full h-40 object-cover rounded-t-xl border border-white" loading="lazy" />
              <div className="p-4 sm:p-6">
                {!showBankDetails ? (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-red-600">Select Your Drinks</h2>
                    <div className="space-y-4 mb-6">
                      {drinksList.map(({ id, name, price, img }) => {
                        const qty = selectedDrinks[id] || 0;
                        return (
                          <div key={id} className="flex items-center gap-4">
                            <img src={img} alt={name} className="w-16 h-16 object-cover rounded-lg border border-yellow-300" loading="lazy" />
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-black">{name}</h3>
                              <p className="text-green-700 font-bold">₦{price.toLocaleString()}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateDrinkQuantity(id, qty - 1)}
                                className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-3 rounded disabled:opacity-50"
                                disabled={qty === 0}
                                aria-label={`Decrease quantity of ${name}`}
                              >
                                −
                              </button>
                              <input
                                type="number"
                                min="0"
                                value={qty}
                                onChange={(e) => {
                                  const val = Math.max(0, Number(e.target.value));
                                  updateDrinkQuantity(id, val);
                                }}
                                className="w-12 text-center rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black bg-white"
                                aria-label={`Quantity of ${name}`}
                              />
                              <button
                                onClick={() => updateDrinkQuantity(id, qty + 1)}
                                className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-3 rounded"
                                aria-label={`Increase quantity of ${name}`}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-2 mb-6 border-t border-yellow-300 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-black">Subtotal:</span>
                        <span className="text-lg font-semibold text-green-700">₦{totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-black">Service Charge (5%):</span>
                        <span className="text-lg font-semibold text-green-700">₦{serviceCharge.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center font-bold text-xl border-t border-yellow-300 pt-2">
                        <span>Total:</span>
                        <span className="text-green-800">₦{(totalPrice + serviceCharge).toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="mb-4 text-black text-justify font-medium">
                      Is this your first order? Call us on{' '}
                      <a href="tel:09169436106" className="hover:text-yellow-600">09169436106</a> or{' '}
                      <a href="tel:07031576094" className="hover:text-yellow-600">07031576094</a> if you need immediate information. Otherwise click button below after choosing your drinks
                    </p>
                    <button
                      onClick={handlePayNow}
                      className={`w-full bg-black text-yellow-100 font-bold py-3 rounded-lg transition-colors ${totalPrice === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-300 hover:text-black'}`}
                      disabled={totalPrice === 0}
                      aria-label="Proceed to payment instructions"
                    >
                      Proceed to Payment Instructions
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-red-600">Bank Details</h2>
                    <div className="mb-6 space-y-3 text-gray-900">
                      <div><span className="font-semibold">Bank Name:</span> Wema Bank</div>
                      <div><span className="font-semibold">Account Name:</span> Kepong Villa Garden & Suites</div>
                      <div><span className="font-semibold">Account Number:</span> 0125564025</div>
                      <div><span className="font-semibold">Amount:</span> ₦{(totalPrice + serviceCharge).toLocaleString()}</div>
                    </div>
                    <p className="mb-4 text-gray-800">
                      After completing your payment, please send your payment evidence privately to our barman using the WhatsApp button below.
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
                      aria-label="Send payment evidence to barman on WhatsApp"
                    >
                      Send Payment Evidence via WhatsApp
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="w-full relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="py-4 sm:py-16">
              <h2 className="text-3xl text-white font-bold text-center mb-4 pb-3 px-4 py-2 rounded">Experience Club K</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 sm:gap-x-12 max-w-6xl mx-auto">
                {features.map(({ title, img, desc }, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border-2 border-red-600 shadow-xl bg-black/80 flex flex-col items-center text-center" style={{ height: '340px' }}>
                    <img src={img} alt={title} className="w-full h-40 object-cover mb-4" loading="lazy" />
                    <div className="p-6 flex flex-col flex-grow justify-between w-full">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-md">{title}</h3>
                        <p className="text-white text-base">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <style>
          {`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
            .animate-fadeInUp-delayed { animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.2s; opacity: 0; }
            .modal-content::-webkit-scrollbar {
              width: 8px;
            }
            .modal-content::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 4px;
            }
            .modal-content::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 4px;
            }
            .modal-content::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
          `}
        </style>
      </div>
    </main>
  );
};

export default ClubK;
