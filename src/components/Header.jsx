import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/k-logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses =
    'block text-base sm:text-lg tracking-wider font-semibold text-red-600 hover:text-white hover:border-b-2 hover:border-white transition-all duration-300 py-2';
  const activeClasses = 'text-white border-b-2 border-white';

  return (
    <header
       className="fixed top-0 left-0 w-full z-50 bg-white md:bg-black font-montserrat border-2 border-red-600 md:border-b md:border-red-600 md:border-x-0 md:border-t-0"
    >
      {/* Desktop: Title above nav */}
      <div className="hidden md:flex justify-center bg-white border-2 border-red-600 py-2">
        <h1 className="text-2xl font-bold text-red-600 tracking-[10px] select-none uppercase">
          Kepong Villa Garden & Suites
        </h1>
      </div>

      <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        <NavLink
          to="/"
          className="p-2 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center shrink-0" // Added shrink-0
        >
          <img
            src={logo}
            alt="Kepong Villa Garden and Suites Logo"
            className="w-10 h-10 rounded-sm"
          />
        </NavLink>

        {/* Mobile: Title between logo and hamburger */}
        <div className="flex-1 flex justify-center md:hidden px-2 min-w-0"> {/* Adjusted px-2 and added min-w-0 */}
          <span
            className="text-[13px] sm:text-[16px] tracking-wide uppercase font-extrabold text-red-600 select-none whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              letterSpacing: '0.08em', // Adjusted letter spacing for better fit
              maxWidth: '100%',       // Ensure it doesn't exceed container width
              transformOrigin: 'center',
              transform: 'scaleY(1.8)', // Slightly taller without width increase
            }}
          >
            Kepong Villa Garden & Suites
          </span>
        </div>


        {/* Hamburger Icon for Mobile */}
        <button
          id="menu-toggle"
          className="md:hidden text-yellow-100 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded shrink-0" // Added shrink-0
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // X icon
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
            // Hamburger icon
            <div className="flex flex-col justify-between w-7 h-6">
              <span className="block h-[3px] bg-red-600"></span>
              <span className="block h-[3px] bg-red-600"></span>
              <span className="block h-[3px] bg-red-600"></span>
            </div>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'flex bg-black' : 'hidden'
          } md:flex md:bg-transparent flex-col md:flex-row text-center absolute md:static top-full left-0 w-full md:w-auto space-y-4 md:space-y-0 md:space-x-20 py-4 px-6 md:p-0 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 max-h-screen'
              : 'opacity-0 max-h-0 md:opacity-100 md:max-h-full'
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
    </header>
  );
};

export default Header;
