import React from 'react';

const ContactInfo = () => {
    return (
        <section id="contact-info" className="py-16 bg-blue-950 text-white">
            <div className="max-w-6xl mx-auto px-2 sm:px-8 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact North East Healthcare Network</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg">
                        Have questions or need assistance? Our team is here to help you connect with the right healthcare services.
                    </p>
                </div>
                {/* 2x2 grid: 2 columns on all screens, cells are wider */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-red-600 rounded-full p-3 mr-6 mt-1">
                            {/* Phone Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Phone</h4>
                            <p className="text-blue-200 break-all">+91 8638108721</p>
                            <p className="text-blue-200 mt-1 break-all">Toll Free: 1800 123 4567</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-red-600 rounded-full p-3 mr-6 mt-1">
                            {/* Email Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Email</h4>
                            <p className="text-blue-200 break-all">contact@northeasthealthcarenetwork.com</p>
                            <p className="text-blue-200 mt-1 break-all">northeasthealthcarenetwork@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-red-600 rounded-full p-3 mr-6 mt-1">
                            {/* Address Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Address</h4>
                            <p className="text-blue-200">Health Plaza, Dispur</p>
                            <p className="text-blue-200">Guwahati, Assam - 781005</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-red-600 rounded-full p-3 mr-6 mt-1">
                            {/* Office Hours Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Office Hours</h4>
                            <p className="text-blue-200">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                            <p className="text-blue-200 mt-1">Emergency Helpline: 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
