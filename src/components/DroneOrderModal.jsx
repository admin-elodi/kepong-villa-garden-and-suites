import { useState } from 'react';

function DroneOrderModal({ isOpen, setIsModalOpen }) {
  const [orderStatus, setOrderStatus] = useState('');
  const [userCoords, setUserCoords] = useState(null);

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
          setOrderStatus('Location captured!');
        },
        (error) => {
          console.error('Geolocation error:', error);
          setOrderStatus('Failed to get location. Use address.');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setOrderStatus('Geolocation not supported.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const address = e.target.address.value;
    setOrderStatus('Processing...');

    const kepongCoords = { lat: 6.4385, lng: 7.4951 };
    let deliveryCoords;
    if (userCoords) {
      deliveryCoords = userCoords;
      setOrderStatus('Using device location...');
    } else {
      setOrderStatus('Checking address...');
      deliveryCoords = await fakeGeocode(address);
    }

    const distance = calculateDistance(kepongCoords, deliveryCoords);
    if (distance <= 5) {
      setOrderStatus('Order confirmed! Drone launching...');
      await launchDrone(deliveryCoords);
    } else {
      setOrderStatus('Sorry, beyond 5km.');
    }
  };

  async function fakeGeocode() {
    return { lat: 6.4450, lng: 7.4980 };
  }

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
        setOrderStatus('Drone en route!');
        resolve();
      }, 2000);
    });
  }

  return (
    <div
      id="order-modal"
      className={`modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleOutsideClick}
    >
      <div className="modal-content bg-gray rounded-lg p-6 max-w-md w-full shadow-lg">
        <button
          className="modal-close absolute top-2 right-2 text-dark-gray hover:text-primary-red text-2xl"
          aria-label="Close"
          onClick={handleClose}
        >
          ×
        </button>
        <h2 id="order-title" className="text-2xl font-semibold text-primary-red mb-4">
          Order by Drone
        </h2>
        <form id="drone-order-form" onSubmit={handleSubmit}>
          <label htmlFor="item" className="block text-dark-gray font-medium mb-2">
            Select Item:
          </label>
          <select
            id="item"
            name="item"
            required
            className="text-black w-full border-dark-gray rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-red"
          >
            <option value="palm-wine">Palm Wine - ₦500</option>
            <option value="suya">Suya - ₦1000</option>
            <option value="isi-ewu">IsiEwu - ₦4000</option>
            <option value="fish">Suya - ₦4500</option>
          </select>
          <label htmlFor="address" className="block text-dark-gray font-medium mb-2">
            Delivery Address:
          </label>
          <div className="flex gap-2 items-center mb-4">
            <input
              type="text"
              id="address"
              name="address"
              required={!userCoords}
              disabled={!!userCoords}
              className="flex-1 border-dark-gray rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-red"
            />
            <button
              type="button"
              className="bg-dark-gray text-pure-white px-4 py-2 rounded-full hover:bg-dark-gray/90 transition"
              onClick={handleGetLocation}
              aria-label="Use current location"
            >
              Use Device Location
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-red text-pure-white px-4 py-2 rounded-full hover:bg-primary-red/90 transition"
            aria-label="Confirm drone order"
          >
            Confirm Order
          </button>
        </form>
        <p id="order-status" className="text-dark-gray mt-4 text-center" aria-live="polite">
          {orderStatus}
        </p>
      </div>
    </div>
  );
}

export default DroneOrderModal;