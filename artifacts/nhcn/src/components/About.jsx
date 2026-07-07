import React from 'react';
import { FaShieldAlt, FaMapMarkerAlt, FaHandsHelping, FaMobileAlt } from 'react-icons/fa';

const stats = [
  { value: '200+',  label: 'Verified Doctors'  },
  { value: '8',     label: 'States Covered'     },
  { value: '2025',  label: 'Year Founded'       },
  { value: '5,000+',label: 'Patients Helped'    },
];

const values = [
  { Icon: FaShieldAlt,    title: 'Trust & Verification', desc: 'Every doctor manually verified for credentials and patient feedback before listing.'     },
  { Icon: FaMapMarkerAlt, title: 'Regional Reach',        desc: 'All eight Northeast states — from Guwahati to remote Arunachal Pradesh districts.'       },
  { Icon: FaHandsHelping, title: 'Community First',       desc: 'A registered awareness initiative, not a profit-driven platform.'                        },
  { Icon: FaMobileAlt,    title: 'Digital Access',        desc: 'Real-time technology instantly bridging patients with the right healthcare provider.'     },
];

const About = () => (
  <section id="about">

    {/* ── PANEL: split navy | content ──────────────────────────────────── */}
    <div className="flex flex-col lg:flex-row" style={{ minHeight: '560px' }}>

      {/* LEFT — navy identity panel (same blue-950 as Doctors sidebar & Contact) */}
      <div className="bg-blue-950 lg:w-5/12 px-10 py-16 lg:px-14 lg:py-20 flex flex-col justify-center">
        <span className="text-red-500 text-xs font-bold uppercase tracking-widest mb-5">
          About Us
        </span>
        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-snug mb-5">
          Northeast<br />Healthcare<br />Network
        </h2>
        <div className="w-12 h-1 bg-red-600 mb-10" />

        {/* 2 × 2 stat grid */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-white leading-none">{value}</p>
              <p className="text-blue-300 text-sm mt-2 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — stacked: text on top, photo flush at bottom */}
      <div className="lg:w-7/12 flex flex-col">

        {/* Text block */}
        <div className="bg-white flex-1 px-10 py-16 lg:px-14 lg:py-20 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Our Mission</h3>
          <div className="w-10 h-0.5 bg-red-600 mb-5" />
          <p className="text-gray-600 leading-relaxed mb-7">
            To ensure equitable access to quality healthcare across Northeast India by
            digitally connecting patients with verified medical professionals — regardless
            of geography or socioeconomic background.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-1">Who Are We</h3>
          <div className="w-10 h-0.5 bg-red-600 mb-5" />
          <p className="text-gray-600 leading-relaxed">
            NEHCN is a registered healthcare awareness initiative based in Assam, dedicated
            to making healthcare more accessible and transparent — sharing verified updates
            about doctors, hospitals, and health services across all eight Northeast states.
          </p>
        </div>

        {/* Photo flush to the bottom of the panel */}
        <div className="h-56 lg:h-64 overflow-hidden flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg"
            alt="Healthcare professionals collaborating"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>

    {/* ── STORY + VALUES ────────────────────── bg-gray-50 ── */}
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Our Story */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Our Story</h3>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <img
              src="https://images.pexels.com/photos/185764/pexels-photo-185764.jpeg"
              alt="Healthcare worker assisting patient"
              className="rounded-lg shadow-lg w-full object-cover mb-7"
              style={{ height: '220px' }}
              loading="lazy"
              decoding="async"
            />
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2025, we began as a grassroots initiative helping rural patients
              in Assam find specialist doctors in Guwahati. Today we are Northeast India's
              most trusted healthcare connection platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of healthcare professionals, technologists, and local coordinators
              work tirelessly to expand access — because everyone deserves quality care
              regardless of where they live.
            </p>
          </div>

          {/* Values — feature list, not another card grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">What We Stand For</h3>
            <div className="w-10 h-0.5 bg-red-600 mb-8" />
            <div className="space-y-7">
              {values.map(({ Icon, title, desc }, i) => (
                <div key={title} className="flex items-start gap-5">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0
                    ${i % 2 === 0 ? 'bg-red-100' : 'bg-blue-100'}`}>
                    <Icon className={`text-base ${i % 2 === 0 ? 'text-red-600' : 'text-blue-800'}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">{title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
);

export default About;
