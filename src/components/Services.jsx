import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Connecting you with the right healthcare professional when you need them most.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Doctor Directory */}
                    <div className="service-card bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg border border-gray-100">
                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Doctor Directory</h3>
                        <p className="text-gray-600 text-center">
                            Comprehensive database of verified doctors across specialties and locations in Northeast India.
                        </p>
                    </div>

                    {/* Availability Tracking */}
                    <div className="service-card bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg border border-gray-100">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Availability Tracking</h3>
                        <p className="text-gray-600 text-center">
                            Real-time updates on doctor availability in towns and cities across the region.
                        </p>
                    </div>

                    {/* Emergency Assistance */}
                    <div className="service-card bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg border border-gray-100">
                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Emergency Assistance</h3>
                        <p className="text-gray-600 text-center">
                            Quick access to emergency care professionals whenever urgent medical attention is needed.
                        </p>
                    </div>

                    {/* Health Records */}
                    <div className="service-card bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg border border-gray-100">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Health Records</h3>
                        <p className="text-gray-600 text-center">
                            Secure digital storage for your medical history accessible to authorized professionals.
                        </p>
                    </div>

                    {/* Insurance Coordination */}
                    <div className="service-card bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg border border-gray-100">
                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Insurance Coordination</h3>
                        <p className="text-gray-600 text-center">
                            Assistance navigating insurance claims and healthcare financing options.
                        </p>
                    </div>

                    {/* Telemedicine */}
                    <div className="service-card bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg border border-gray-100">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Telemedicine</h3>
                        <p className="text-gray-600 text-center">
                            Virtual consultations with healthcare professionals for remote areas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
