import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <section id="home" className="hero py-20 md:py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="fade-in" style={{ animationDelay: '0.1s' }}>
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
                    <div className="mt-10 lg:mt-0 fade-in" style={{ animationDelay: '0.3s' }}>
                        <img
                            src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg"
                            alt="Group of diverse doctors smiling confidently with stethoscopes in a modern hospital setting"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
