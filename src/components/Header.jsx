import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/company.webp';
import ReserveTableModal from '@/components/ReserveTableModal';

const promotionalTexts = [
  '24hrs Light',
  'Quick & Responsive Services',
  'Nsukka Palm Wine',
  'Special Table for Four',
  'Local & Foreign Foods',
  'Play Games',
  'Enjoy Club K',
  'Nigerian & Ghana Jollof',
  'Drone Delivery Coming Soon!',
  'Assorted Meats!',
];

const KEPONG_RED = '#D62828';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const tickerRef = useRef(null);
  const [tickerWidth, setTickerWidth] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const tickerEl = tickerRef.current;
    if (!tickerEl) return;

    const calculateWidths = () => {
      setTickerWidth(tickerEl.scrollWidth / 2);
    };

    calculateWidths();
    window.addEventListener('resize', calculateWidths);

    return () => {
      window.removeEventListener('resize', calculateWidths);
    };
  }, []);

  const openReserveModal = () => setIsReserveModalOpen(true);
  const closeReserveModal = () => setIsReserveModalOpen(false);

  const navLinkClasses =
    'block text-base sm:text-lg tracking-wider font-semibold text-red-600 hover:text-white hover:border-b-2 hover:border-white transition-all duration-300 py-2';
  const activeClasses = '!text-white border-b-2 border-white';

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 font-montserrat border-2 border-red-600 md:border-b md:border-red-600 md:border-x-0 md:border-t-0 bg-white md:bg-black"
        role="banner"
      >
        <style>
          {`
            .ticker-container {
              overflow: hidden;
              width: 100%;
            }
            .ticker-content {
              display: inline-flex;
              gap: 2.5rem;
              animation: scrollText 20s linear infinite;
              will-change: transform;
            }
            @keyframes scrollText {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-${tickerWidth}px)); }
            }
            .ticker-content.paused {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .ticker-content {
                animation: none;
                transform: translateX(0);
              }
            }
          `}
        </style>

        <div className="hidden md:flex justify-center bg-white border-2 border-red-600 py-2 select-none">
          <h1 className="text-2xl font-bold text-red-600 tracking-[10px] uppercase">
            Kepong Villa Garden & Suites
          </h1>
        </div>

        <nav
          className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6"
          role="navigation"
          aria-label="Primary Navigation"
        >
          <NavLink
            to="/"
            className="p-2 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="Kepong Villa Garden and Suites Logo"
              className="bg-white/40 w-12 h-10 rounded-sm"
            />
          </NavLink>

          {/* Modified: Added min-w-[150px] sm:min-w-[200px] */}
          <div className="flex-1 flex justify-center md:hidden px-2 min-w-[150px] sm:min-w-[200px]">
            <span
              className="text-[12.5px] sm:text-[16px] tracking-wide uppercase font-extrabold text-red-600 select-none whitespace-nowrap overflow-hidden text-ellipsis"
              style={{
                letterSpacing: '0.08em',
                maxWidth: '100%',
                transformOrigin: 'center',
                transform: 'scaleY(1.5)',
              }}
            >
              Kepong Villa Garden & Suites
            </span>
          </div>

          <button
            id="menu-toggle"
            className="md:hidden text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 rounded shrink-0"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <div className="flex flex-col justify-between w-7 h-6">
                <span className="block h-[3px] bg-red-600"></span>
                <span className="block h-[3px] bg-red-600"></span>
                <span className="block h-[3px] bg-red-600"></span>
              </div>
            )}
          </button>

          <ul
            className={`${
              isMenuOpen ? 'flex bg-black' : 'hidden'
            } md:flex md:bg-transparent flex-col md:flex-row text-center absolute md:static top-full left-0 w-full md:w-auto space-y-4 md:space-y-0 md:gap-12 md:justify-evenly py-4 px-6 md:p-0 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 md:opacity-100 md:max-h-full'
            } md:items-center shadow-lg md:shadow-none z-40`}
            aria-hidden={!isMenuOpen}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/club-k"
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Club K
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/featured-entertainers"
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookings"
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/don"
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Don Cally
              </NavLink>
            </li>
          </ul>
        </nav>

        <div
          className="bg-black border-t border-b border-red-600 select-none ticker-container"
          aria-label="Kepong facilities promotional ticker"
          role="region"
        >
          <div
            ref={tickerRef}
            className="ticker-content whitespace-nowrap flex gap-10 text-xs sm:text-sm font-semibold text-white tracking-wide py-2"
          >
            {promotionalTexts.concat(promotionalTexts).map((text, idx) => (
              <span key={idx} className="inline-block px-2">
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-black border-b border-red-600 flex justify-center gap-6 py-3 px-4 flex-wrap">
          <NavLink
            to="/bookings"
            className="max-w-[180px] flex-grow bg-white text-black font-semibold text-base sm:text-lg py-2 rounded-lg border-2 border-red-600 shadow-md text-center transition duration-300 hover:bg-red-600 hover:text-white hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            aria-label="Book your stay at Kepong Villa"
          >
            Book Hotel
          </NavLink>

          <button
            type="button"
            onClick={openReserveModal}
            className="max-w-[180px] flex-grow bg-red-600 text-white font-semibold text-base sm:text-lg py-2 rounded-lg border-2 border-red-600 shadow-md text-center transition duration-300 hover:bg-white hover:text-black hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            aria-label="Reserve a table for entertainment"
          >
            Reserve Table
          </button>
        </div>
      </header>

      <ReserveTableModal
        isOpen={isReserveModalOpen}
        setIsModalOpen={closeReserveModal}
        className="transition-opacity duration-300"
      />
    </>
  );
};

export default Header;