import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import droneImage from '@/assets/images/drone.jpeg'; // Change path as needed

const enquiryPhoneNumber = '0916 283 6505';

const PACKAGES = [
  {
    value: 'party-starter',
    name: 'Party Starter',
    price: 3500,
    teaser: 'Kick off your night with this lively combo!',
    contents: [
      'Palm Wine (1L)',
      'Mini Suya Platter',
      'Peppered Snails',
      '2 Soft Drinks'
    ]
  },
  {
    value: 'african-delight',
    name: 'African Delight',
    price: 6500,
    teaser: 'A taste of the best local flavors.',
    contents: [
      'Isi Ewu (Goat Head)',
      'Grilled Fish',
      'Palm Wine (2L)',
      'Spicy Yam Fries'
    ]
  },
  {
    value: 'luxury-lounge',
    name: 'Luxury Lounge',
    price: 12000,
    teaser: 'For when you want to go all out.',
    contents: [
      'Bottle of Champagne',
      'Full Suya Board',
      'Isi Ewu',
      'Fruit Platter',
      'Cocktail Mixer Kit'
    ]
  },
  {
    value: 'veggie-vibes',
    name: 'Veggie Vibes',
    price: 4000,
    teaser: 'For the healthy and happy crowd.',
    contents: [
      'Grilled Veggie Skewers',
      'Fruit Salad',
      'Chilled Zobo Drink (1L)',
      'Spicy Yam Fries'
    ]
  }
];

function DroneOrderModal({ isOpen, setIsModalOpen }) {
  const [orderStatus, setOrderStatus] = useState('');
  const [userCoords, setUserCoords] = useState(null);
  const [selected, setSelected] = useState(PACKAGES[0].value);
  const [showContents, setShowContents] = useState(null);
  const [address, setAddress] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showBank, setShowBank] = useState(false);
  const modalRef = useRef(null);

  const selectedPackage = PACKAGES.find(pkg => pkg.value === selected);

  useEffect(() => {
    if (isOpen && modalRef.current) modalRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    let watchId;
    if (isOpen && navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setUserCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setOrderStatus('Device location captured! Please stand where you want the drone to deliver.');
        },
        (error) => {
          setOrderStatus('Failed to get device location. Please try again.');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [isOpen]);

  const handleClose = () => setIsModalOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) handleClose();
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setIsLocating(true);
      setOrderStatus('Fetching your location...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setOrderStatus('Device location captured! Please stand where you want the drone to deliver.');
          setIsLocating(false);
        },
        (error) => {
          setOrderStatus('Failed to get device location. Please try again.');
          setIsLocating(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setOrderStatus('Geolocation not supported by your device.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userCoords) {
      setOrderStatus('Error: Please capture your device location before submitting.');
      return;
    }
    if (!date || !time) {
      setOrderStatus('Please select your desired delivery date and time.');
      return;
    }
    setOrderStatus('Processing order...');
    const kepongCoords = { lat: 6.4385, lng: 7.4951 };
    const deliveryCoords = userCoords;
    const distance = calculateDistance(kepongCoords, deliveryCoords);
    if (distance <= 5) {
      setOrderStatus(
        `Order confirmed! Drone launching to your device location on ${date} at ${time}. Additional info: ${address || 'None'}`
      );
      await launchDrone(deliveryCoords);
    } else {
      setOrderStatus('Sorry, your device location is beyond 5km from Kepong Villa.');
    }
  };

  function calculateDistance(coord1, coord2) {
    const R = 6371;
    const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
    const dLng = ((coord2.lng - coord1.lng) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((coord1.lat * Math.PI) / 180) *
        Math.cos((coord2.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.asin(Math.sqrt(a));
  }

  async function launchDrone(coords) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setOrderStatus('Drone en route to your device location!');
        resolve();
      }, 2000);
    });
  }

  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOutsideClick}
      role="dialog"
      aria-labelledby="order-title"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto"
        tabIndex="-1"
      >
        {/* Drone image at the top */}
        <div
          className="w-full h-40 bg-gray-700 rounded-lg mb-4 bg-center bg-cover"
          style={{
            backgroundImage: `url(${droneImage})`,
            backgroundColor: '#1F2937',
          }}
          aria-label="Drone delivery"
        />
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-amber-400 focus:ring-2 focus:ring-amber-500 focus:outline-none text-2xl"
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>
        <h2 id="order-title" className="text-2xl font-bold text-white mb-2 text-center">
          Order by Drone
        </h2>
        <div className="mb-2 text-center text-gray-300 text-sm">
          <span className="font-semibold text-amber-400">Delivery Area:</span> Within 5km of Kepong Villa. <br />
          <span className="font-semibold text-amber-400">Payment:</span> Prepay required.
        </div>
        {/* Bank details toggle */}
        <div className="text-center mb-4">
          <button
            className="text-amber-400 underline font-semibold focus:outline-none"
            onClick={() => setShowBank((v) => !v)}
            type="button"
          >
            {showBank ? 'Hide Bank Details' : 'Show Bank Details'}
          </button>
          {showBank && (
            <div className="bg-gray-800 rounded-lg p-3 mt-2 text-center animate-fadeInUp">
              <p className="font-semibold text-gray-200 mb-1">Kepong Villa Garden & Suites</p>
              <p className="text-gray-200">Bank: Wema Bank</p>
              <p className="text-gray-200">Account Number: 0125564025</p>
              <p className="text-gray-400 text-xs">Send proof of payment if requested.</p>
            </div>
          )}
        </div>
        <form id="drone-order-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="package" className="block text-sm font-medium text-gray-200 mb-1">
              Select Package
            </label>
            <div className="space-y-2">
              {PACKAGES.map(pkg => (
                <div
                  key={pkg.value}
                  className={`rounded-lg border-2 p-3 cursor-pointer transition ${
                    selected === pkg.value
                      ? 'border-amber-400 bg-gray-800'
                      : 'border-gray-700 bg-gray-900 hover:border-amber-300'
                  }`}
                  onClick={() => {
                    setSelected(pkg.value);
                    setShowContents(showContents === pkg.value ? null : pkg.value);
                  }}
                  tabIndex={0}
                  onKeyPress={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelected(pkg.value);
                      setShowContents(showContents === pkg.value ? null : pkg.value);
                    }
                  }}
                  aria-label={`Select ${pkg.name} package`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-amber-400">{pkg.name}</span>
                      <span className="ml-2 text-gray-300 text-sm">{pkg.teaser}</span>
                    </div>
                    <span className="text-emerald-400 font-bold">₦{pkg.price.toLocaleString()}</span>
                  </div>
                  <button
                    type="button"
                    className="mt-2 text-xs text-amber-400 underline focus:outline-none"
                    onClick={e => {
                      e.stopPropagation();
                      setShowContents(showContents === pkg.value ? null : pkg.value);
                    }}
                  >
                    {showContents === pkg.value ? 'Hide contents' : 'Show contents'}
                  </button>
                  {showContents === pkg.value && (
                    <ul className="mt-2 pl-4 text-gray-200 list-disc text-sm">
                      {pkg.contents.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-200 mb-1">
              Desired Delivery Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-200 mb-1">
              Desired Delivery Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-200 mb-1">
              Delivery Address (Optional)
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="e.g., Apartment 3B, 2nd floor"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <button
              type="button"
              className="bg-amber-500 text-emerald-900 font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm w-full sm:w-auto"
              onClick={handleGetLocation}
              aria-label="Capture device location for drone delivery"
              disabled={isLocating}
            >
              {isLocating ? 'Locating...' : '📍 Use Device Location'}
            </button>
            {userCoords && (
              <span className="text-emerald-400 text-xs text-center w-full sm:w-auto">
                Location captured!
              </span>
            )}
          </div>
          <div className="text-center text-amber-400 font-semibold mt-2">
            Total: ₦{selectedPackage.price.toLocaleString()}
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-900 text-white font-semibold px-4 py-3 rounded-lg hover:bg-amber-500 hover:text-black hover:scale-105 transition-transform duration-300 border-2 border-emerald-500 shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
            aria-label="Confirm drone order"
            disabled={!userCoords}
          >
            Confirm Order
          </button>
        </form>
        <p id="order-status" className="text-white mt-4 text-center min-h-[32px]" aria-live="polite">
          {orderStatus}
        </p>
        <p className="text-gray-400 text-center text-xs mt-3">
          Need help? Call <a href={`tel:${enquiryPhoneNumber}`} className="text-amber-400 font-semibold hover:underline">{enquiryPhoneNumber}</a>
        </p>
      </div>
    </div>,
    document.body
  );
}

export default DroneOrderModal;
