import { useState, useEffect, useRef } from 'react'; 
import { createPortal } from 'react-dom';

function DroneOrderModal({ isOpen, setIsModalOpen }) {
  const [orderStatus, setOrderStatus] = useState('');
  const [userCoords, setUserCoords] = useState(null);
  const modalRef = useRef(null);

  const handleClose = () => setIsModalOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) handleClose();
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setOrderStatus('Fetching your location...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserCoords(coords);
          setOrderStatus('Device location captured! Please stand where you want the drone to deliver (e.g., balcony or front of house).');
        },
        (error) => {
          console.error('Geolocation error:', error);
          setOrderStatus('Failed to get device location. Please try again.');
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

    const address = e.target.address.value || 'No additional address provided';
    setOrderStatus('Processing order...');

    const kepongCoords = { lat: 6.4385, lng: 7.4951 };
    const deliveryCoords = userCoords;

    const distance = calculateDistance(kepongCoords, deliveryCoords);
    if (distance <= 5) {
      setOrderStatus(`Order confirmed! Drone launching to your device location. Additional info: ${address}`);
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
        console.log(`DJI FlyCart 30 launched to: Lat ${coords.lat}, Lng ${coords.lng}`);
        setOrderStatus('Drone en route to your device location!');
        resolve();
      }, 2000);
    });
  }

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
        if (e.key === 'Escape') handleClose();
      };

      modalRef.current.addEventListener('keydown', handleKeyDown);
      return () => modalRef.current?.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Geolocation cleanup
  useEffect(() => {
    let watchId;
    if (isOpen && navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserCoords(coords);
          setOrderStatus('Device location captured! Please stand where you want the drone to deliver (e.g., balcony or front of house).');
        },
        (error) => {
          console.error('Geolocation error:', error);
          setOrderStatus('Failed to get device location. Please try again.');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [isOpen]);

  // Only render modal if isOpen is true
  if (!isOpen) return null;

  return createPortal(
    <div
      id="order-modal"
      className={`modal fixed inset-0 flex items-center justify-center transition-opacity duration-300 z-[1000] ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleOutsideClick}
      role="dialog"
      aria-labelledby="order-title"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="modal-content bg-black rounded-lg p-6 max-w-md w-full shadow-lg relative"
        tabIndex="-1"
      >
        <button
          className="modal-close absolute top-4 right-4 bg-white text-[#FF5733] hover:bg-[#FF5733] hover:text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
          aria-label="Close modal"
          onClick={handleClose}
        >
          ×
        </button>
        <h2 id="order-title" className="text-2xl font-semibold text-white mb-4">
          Order by Drone
        </h2>
        <form id="drone-order-form" onSubmit={handleSubmit}>
          <label htmlFor="item" className="block text-white font-medium mb-2">
            Select Item:
          </label>
          <select
            id="item"
            name="item"
            required
            className="text-gray-800 w-full border-2 border-[#333333] rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#FF5733] bg-white"
          >
            <option value="palm-wine">Palm Wine - ₦500</option>
            <option value="suya">Suya - ₦1000</option>
            <option value="isi-ewu">IsiEwu - ₦4000</option>
            <option value="fish">Suya - ₦4500</option>
          </select>
          <label htmlFor="address" className="block text-white font-medium mb-2">
            Delivery Address (Optional):
          </label>
          <div className="flex flex-col sm:flex-row gap-2 items-center mb-4">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="e.g., Apartment 3B, 2nd floor"
              className="flex-1 border-2 border-[#333333] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5733] bg-white w-full"
            />
            <button
              type="button"
              className="bg-[#FF5733] text-white font-semibold px-3 py-2 rounded-full hover:bg-[#e64e2e] transition focus:outline-none focus:ring-2 focus:ring-[#FF5733] text-xs sm:text-sm w-full sm:w-auto whitespace-nowrap"
              onClick={handleGetLocation}
              aria-label="Capture device location for drone delivery"
            >
              📍 Use Device Location
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF5733] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#e64e2e] transition focus:outline-none focus:ring-2 focus:ring-[#FF5733] disabled:bg-gray-400 disabled:cursor-not-allowed"
            aria-label="Confirm drone order"
            disabled={!userCoords}
          >
            Confirm Order
          </button>
        </form>
        <p id="order-status" className="text-white mt-4 text-center" aria-live="polite">
          {orderStatus}
        </p>
        <p className="text-gray-400 text-center text-xs mt-3">
          Need help? Call <span className="text-white font-semibold">0916 283 6505</span>
        </p>
      </div>
    </div>,
    document.body
  );
}

export default DroneOrderModal;
