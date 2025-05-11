import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/company.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-800 text-white sticky top-0 z-20 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-2">
        <Link to="/" className="bg-gray-100 p-2 rounded-lg">
          <img
            src={logo}
            alt="Kepong Villa Garden and Suites Logo"
            style={{ width: '30px', height: '30px' }}
          />
        </Link>
        {/* Hamburger Icon for Mobile */}
        <button
          id="menu-toggle"
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Single Menu for Desktop and Mobile */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-green-800 md:bg-transparent text-white space-y-4 md:space-y-0 md:space-x-6 py-4 px-6 md:p-0 transition-all duration-300 ease-in-out z-10 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 md:translate-y-0 md:opacity-100'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <li>
            <Link to="/" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/club-k" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
              Club-K
            </Link>
          </li>
          <li>
            <Link
              to="/featured-entertainers"
              className="hover:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Entertainment
            </Link>
          </li>
          <li>
            <Link to="/bookings" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
              Bookings
            </Link>
          </li>
          <li>
            <Link
              to="/treasure-hunt"
              className="hover:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Treasure-Hunt
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;