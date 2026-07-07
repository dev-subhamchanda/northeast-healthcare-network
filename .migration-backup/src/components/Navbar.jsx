import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Adjust the path as necessary

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl lg:xl font-bold">
              <span className="text-blue-950">NORTHEAST</span>{' '}
              <span className="text-red-600">HEALTHCARE </span>
              <span className="text-blue-950">NETWORK</span>
            </h1>
            {/* Uncomment if you want logo image instead of text */}
            {/* <img src={logo} className='h-[60px] w-auto rounded-sm' /> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">Home</Link>
            <Link to="/services" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">Services</Link>
            <Link to="/doctors" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">Find Doctors</Link>
            <Link to="/about" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-700 focus:outline-none"
              onClick={handleToggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 border-t border-gray-200">
          <Link to="/" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">Home</Link>
          <Link to="/services" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">Services</Link>
          <Link to="/doctors" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">Find Doctors</Link>
          <Link to="/about" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">About Us</Link>
          <Link to="/contact" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
