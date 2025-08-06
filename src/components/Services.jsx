import React from 'react';
import {
  FaUserMd,
  FaVideo,
  FaBullhorn,
  FaHospitalSymbol,
  FaChartLine,
  FaHandshake
} from 'react-icons/fa';

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
          {/* Doctor Availability */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaUserMd className="text-red-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Doctor Availability</h3>
            <p className="text-gray-600 text-center">
              Comprehensive database of verified doctors across specialties and locations in Northeast India.
            </p>
          </div>

          {/* Awareness Videos */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaVideo className="text-blue-800 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Awareness Videos</h3>
            <p className="text-gray-600 text-center">
              Engaging educational content to promote health awareness in the community.
            </p>
          </div>

          {/* Digital & Social Media Marketing */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaBullhorn className="text-red-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Digital & Social Media Marketing</h3>
            <p className="text-gray-600 text-center">
              Amplify healthcare visibility and reach through strategic online campaigns.
            </p>
          </div>

          {/* Medical Camp Outreach Promotion */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaHospitalSymbol className="text-blue-800 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Medical Camp Outreach</h3>
            <p className="text-gray-600 text-center">
              Promoting and organizing medical camps to serve underserved communities.
            </p>
          </div>

          {/* SEO & Online Visibility Boost */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaChartLine className="text-red-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">SEO & Online Visibility</h3>
            <p className="text-gray-600 text-center">
              Boost your clinic’s online presence and attract more patients through search optimization.
            </p>
          </div>

          {/* Consultation & Partnership Program */}
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FaHandshake className="text-blue-800 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">Consultation & Partnerships</h3>
            <p className="text-gray-600 text-center">
              Collaborate with us to bring quality healthcare services to more people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
