import React from 'react';
import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaMobileAlt,
} from 'react-icons/fa';

const stats = [
  { value: '200+', label: 'Verified Doctors'  },
  { value: '8',    label: 'States Covered'     },
  { value: '2025', label: 'Year Founded'       },
  { value: '5K+',  label: 'Patients Helped'   },
];

const values = [
  {
    Icon:  FaShieldAlt,
    title: 'Trust & Verification',
    desc:  'Every doctor in our network is manually verified for credentials, experience, and patient feedback.',
    bg:    'bg-red-100',
    color: 'text-red-600',
  },
  {
    Icon:  FaMapMarkerAlt,
    title: 'Regional Reach',
    desc:  'We cover all eight Northeast Indian states — from Guwahati to remote hill districts of Arunachal.',
    bg:    'bg-blue-100',
    color: 'text-blue-800',
  },
  {
    Icon:  FaHandsHelping,
    title: 'Community First',
    desc:  'A registered healthcare awareness initiative — not a profit-driven platform.',
    bg:    'bg-red-100',
    color: 'text-red-600',
  },
  {
    Icon:  FaMobileAlt,
    title: 'Digital Access',
    desc:  'Bridging the gap through technology so every patient can find the right doctor instantly.',
    bg:    'bg-blue-100',
    color: 'text-blue-800',
  },
];

const About = () => (
  <>
    {/* ── Mission ─────────────────────────────────────────── */}
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — same pattern as Services / Doctors */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About North East Healthcare Network
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between healthcare providers and communities across Northeast India.
          </p>
        </div>

        {/* Mission — text left, image right */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16">
          <div className="mb-10 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              To ensure equitable access to quality healthcare services across Northeast India
              by digitally connecting patients with verified medical professionals — regardless
              of geography or socioeconomic background.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We overcome geographical barriers and streamline the healthcare-seeking process
              through technology and our ever-growing network of doctors and specialists
              spanning all eight Northeast states.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg"
              alt="Healthcare professionals collaborating"
              className="rounded-lg shadow-xl w-full object-cover h-72 lg:h-80"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 rounded-xl px-6 py-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-blue-950">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Who Are We ──────────────────────────────────────── */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Are We?</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
        </div>

        {/* Values grid — same card style as Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {values.map(({ Icon, title, desc, bg, color }) => (
            <div
              key={title}
              className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-100 transition duration-300"
            >
              <div className={`w-14 h-14 ${bg} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <Icon className={`${color} text-xl`} />
              </div>
              <h3 className="text-lg font-semibold text-center mb-3 text-gray-900">{title}</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* NEHCN description card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-1 flex-shrink-0 bg-red-600 rounded self-stretch" />
            <p className="text-gray-600 leading-relaxed text-base">
              <span className="font-semibold text-gray-900">Northeast Healthcare Network (NEHCN)</span> is
              a registered healthcare awareness initiative based in Assam, dedicated to bridging the gap
              between patients and medical professionals through digital communication. We make healthcare
              more accessible and transparent by sharing verified updates about doctors, hospitals, and health
              services across all eight states of Northeast India.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── Our Story ───────────────────────────────────────── */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">

          {/* Image — left on desktop */}
          <div className="order-last lg:order-first mb-10 lg:mb-0">
            <img
              src="https://images.pexels.com/photos/185764/pexels-photo-185764.jpeg"
              alt="Healthcare worker assisting patient"
              className="rounded-lg shadow-xl w-full object-cover h-72 lg:h-80"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
            <div className="w-12 h-1 bg-red-600 mb-6 rounded" />
            <p className="text-gray-600 mb-5 leading-relaxed">
              Founded in 2025, North East Healthcare Network began as a small initiative to help
              rural patients in Assam find specialist doctors in Guwahati. Today we've grown into
              Northeast India's most trusted healthcare connection platform.
            </p>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Our team of healthcare professionals, technologists, and local coordinators work
              tirelessly to expand access and improve healthcare outcomes across eight states.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that everyone deserves quality healthcare, regardless of their location.
              Our platform empowers patients with information and direct access to the best
              medical professionals in the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
