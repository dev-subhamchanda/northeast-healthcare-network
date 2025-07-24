import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <h1 className="text-xl sm:text-2xl font-bold">
                            <span className="text-blue-950">NORTH EAST</span>{' '}
                            <span className="text-red-600">HEALTH CARE </span>
                            <span className="text-gray-700">NETWORK</span>
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">
                            Home
                        </Link>
                        <Link to="/services" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">
                            Services
                        </Link>
                        <Link to="/doctors" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">
                            Find Doctors
                        </Link>
                        <Link to="/about" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">
                            About Us
                        </Link>
                        <Link to="/contact" className="text-gray-900 hover:text-red-700 transition duration-300 font-medium">
                            Contact
                        </Link>
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
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white`}>
                <div className="px-4 pt-2 pb-3 space-y-2">
                    <Link to="/" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">
                        Home
                    </Link>
                    <Link to="/services" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">
                        Services
                    </Link>
                    <Link to="/doctors" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">
                        Find Doctors
                    </Link>
                    <Link to="/about" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">
                        About Us
                    </Link>
                    <Link to="/contact" onClick={handleNavClick} className="block text-gray-900 hover:text-red-700 font-medium">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
