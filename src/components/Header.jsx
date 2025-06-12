import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/company.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses =
    'block text-base sm:text-lg font-semibold text-emerald-900 hover:text-amber-500 hover:border-b-2 hover:border-amber-300 transition-all duration-300 py-2';
  const activeClasses = 'text-emerald-900 border-b-2 border-amber-300';

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white font-montserrat shadow-md"
      style={{
        borderBottom: 'double 8px black'
      }}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        <NavLink
          to="/"
          className="p-2 rounded-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={logo}
            alt="Kepong Villa Garden and Suites Logo"
            className="w-10 h-10 rounded-full border-2 border-black"
          />
        </NavLink>

        {/* Hamburger Icon for Mobile */}
        <button
          id="menu-toggle"
          className="md:hidden text-black focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <div className="flex flex-col justify-between w-7 h-6">
            <span className="block h-[3px] bg-black rounded"></span>
            <span className="block h-[3px] bg-black rounded"></span>
            <span className="block h-[3px] bg-black rounded"></span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'flex bg-white' : 'hidden'
          } md:flex md:bg-transparent flex-col md:flex-row text-center absolute md:static top-full left-0 w-full md:w-auto space-y-4 md:space-y-0 md:space-x-20 py-4 px-6 md:p-0 transition-all duration-300 ease-in-out ${
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
              Club-K
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
              to="/contacts"
              className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;