// About.jsx
// This component displays information about North East Healthcare Network.
// It uses Tailwind CSS for styling and is structured into two main sections: "Our Mission" and "Our Story".

const About = () => {
    return (
        <>
            {/* Main About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            About North East Healthcare Network
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Bridging the gap between healthcare providers and communities across Northeast India
                        </p>
                    </div>
                    
                    {/* Our Mission Section */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16">
                        {/* Mission Text and Stats */}
                        <div className="mb-10 lg:mb-0">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                            <p className="text-gray-600 mb-6">
                                To ensure equitable access to quality healthcare services across Northeast India by digitally connecting patients with verified medical professionals.
                            </p>
                            <p className="text-gray-600 mb-6">
                                We work to overcome geographical barriers and streamline the healthcare seeking process through technology and our extensive network.
                            </p>
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-2">2500+</h4>
                                    <p className="text-gray-600 text-sm">Verified Doctors</p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-600 mb-2">120+</h4>
                                    <p className="text-gray-600 text-sm">Towns & Cities</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-2">35+</h4>
                                    <p className="text-gray-600 text-sm">Specializations</p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-600 mb-2">50k+</h4>
                                    <p className="text-gray-600 text-sm">Patients Served</p>
                                </div>
                            </div>
                        </div>
                        {/* Mission Image */}
                        <div>
                            <img
                                src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg"
                                alt="Team of healthcare professionals in discussion with digital devices showing medical information"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                    
                    {/* Our Story Section */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                        {/* Story Image */}
                        <div className="order-last lg:order-first mb-10 lg:mb-0">
                            <img
                                src="https://images.pexels.com/photos/185764/pexels-photo-185764.jpeg"
                                alt="NEHN healthcare worker assisting elderly patient with tablet showing available doctors"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        {/* Story Text and Button */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Story</h3>
                            <p className="text-gray-600 mb-6">
                                Founded in 2025, North East Healthcare Network began as a small initiative to help rural patients in Assam find specialist doctors in Guwahati. Today, we've grown into Northeast India's most trusted healthcare connection platform.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Our team of healthcare professionals, technologists, and local coordinators work tirelessly to expand access and improve healthcare outcomes across eight states.
                            </p>
                            <p className="text-gray-600 mb-6">
                                We believe that everyone deserves quality healthcare, regardless of their location. Our platform is designed to empower patients with information and access to the best medical professionals.
                                </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;