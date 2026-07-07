import React from 'react';
import { Link } from 'react-router-dom';
import map from '../assets/Map.png';

const Hero = () => {
    return (
        <section id="home" className="hero py-20 md:py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                    
                    {/* Text Section */}
                    <div className="flex-1 fade-in" style={{ animationDelay: '0.1s' }}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Connecting Northeast India To Quality Healthcare
                        </h1>
                        <p className="text-lg mb-8">
                            Your trusted partner in accessing medical professionals across Northeast India. Real-time doctor availability at your fingertips.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/doctors"
                                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 btn-hover"
                            >
                                Find a Doctor
                            </Link>
                            <Link
                                to="/services"
                                className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg transition duration-300 btn-hover"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center fade-in" style={{ animationDelay: '0.3s' }}>
                        <img
                            src={map}
                            alt="Map of Northeast India"
                            className="w-[500px] max-w-full h-auto object-contain rounded-lg transition-opacity duration-150 bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
