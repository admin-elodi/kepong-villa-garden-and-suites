import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import droneImage from '@/assets/images/homepage/drone.webp'; // Change path as needed

const enquiryPhoneNumber = '0916 283 6505';

function DroneOrderModal({ isOpen, setIsModalOpen }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) modalRef.current.focus();
  }, [isOpen]);

  const handleClose = () => setIsModalOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) handleClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOutsideClick}
      role="dialog"
      aria-labelledby="announcement-title"
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
          aria-label="DJI FlyCart 30 drone"
        />
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-amber-400 focus:ring-2 focus:ring-amber-500 focus:outline-none text-2xl"
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>
        <h2 id="announcement-title" className="text-2xl font-bold text-white mb-2 text-center">
          Drone Delivery Coming Soon!
        </h2>
        <div className="text-center text-gray-200 mb-6 animate-fadeInUp">
          <p className="text-lg leading-relaxed">
            Kepong Villa Garden & Suites is thrilled to announce that our{' '}
            <span className="font-semibold text-amber-400">DJI FlyCart 30</span> drone delivery
            service will be deployed with fanfare! Get ready for fast, innovative aerial deliveries to
            elevate your experience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://kepongvilla.com/drone-delivery"
            className="bg-amber-500 text-emerald-900 font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            aria-label="Learn more about DJI FlyCart 30 drone delivery"
          >
            Learn More
          </a>
          <button
            onClick={handleClose}
            className="bg-gray-700 text-gray-100 font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
            aria-label="Close announcement modal"
          >
            Close
          </button>
        </div>
        <p className="text-gray-400 text-center text-xs mt-4">
          Need help? Call{' '}
          <a
            href={`tel:${enquiryPhoneNumber}`}
            className="text-amber-400 font-semibold hover:underline"
          >
            {enquiryPhoneNumber}
          </a>
        </p>
      </div>
    </div>,
    document.body
  );
}

export default DroneOrderModal;