import React from 'react';
import {
  FaHeartbeat,
  FaMapMarkerAlt,
  FaUserMd,
  FaShieldAlt,
  FaHandsHelping,
  FaLightbulb,
} from 'react-icons/fa';

const stats = [
  { value: '200+', label: 'Verified Doctors' },
  { value: '8',    label: 'States Covered'  },
  { value: '2025', label: 'Founded'          },
  { value: '5K+',  label: 'Patients Helped' },
];

const values = [
  {
    icon: FaShieldAlt,
    title: 'Trust & Verification',
    desc:  'Every doctor in our network is manually verified for credentials, experience, and patient reviews.',
    color: 'bg-blue-50 text-blue-800',
    ring:  'ring-blue-200',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Regional Reach',
    desc:  'We cover all eight Northeast Indian states — from urban Guwahati to remote hill districts.',
    color: 'bg-red-50 text-red-600',
    ring:  'ring-red-200',
  },
  {
    icon: FaHandsHelping,
    title: 'Community First',
    desc:  'We are a registered healthcare awareness initiative, not a profit-driven platform.',
    color: 'bg-green-50 text-green-700',
    ring:  'ring-green-200',
  },
  {
    icon: FaLightbulb,
    title: 'Digital Innovation',
    desc:  'Leveraging technology to bridge the gap between patients and providers in real time.',
    color: 'bg-yellow-50 text-yellow-700',
    ring:  'ring-yellow-200',
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white">

      {/* ── Hero Banner ─────────────────────────────────────── */}
      <div
        className="relative py-20 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a193b 0%, #1e3a8a 50%, #b91c1c 100%)',
        }}
      >
        {/* decorative circles */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white opacity-5" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-red-600 opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-5">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            About <span className="text-red-400">Northeast</span> Healthcare Network
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between healthcare providers and communities across all
            eight states of Northeast India — one verified connection at a time.
          </p>
        </div>

        {/* ── Stats Bar ───────────────────────────────────── */}
        <div className="relative max-w-5xl mx-auto mt-14 px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-card bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-xl px-6 py-5 text-center"
            >
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="text-blue-200 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mission + Image ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <span className="inline-block w-10 h-1 bg-red-600 mb-5 rounded" />
            <h3 className="text-3xl font-bold text-gray-900 mb-5">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              To ensure equitable access to quality healthcare services across Northeast India
              by digitally connecting patients with verified medical professionals — regardless
              of geography or socioeconomic background.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We overcome geographical barriers and streamline the healthcare-seeking process
              through technology and our ever-growing network of doctors and specialists.
            </p>

            {/* Who Are We card */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-2xl p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <FaHeartbeat className="text-white text-base" />
                </div>
                <h4 className="text-xl font-semibold">Who Are We?</h4>
              </div>
              <p className="text-blue-100 leading-relaxed text-sm">
                Northeast Healthcare Network (NEHCN) is a registered healthcare awareness initiative
                based in Assam, dedicated to bridging the gap between patients and medical professionals
                through digital communication. We make healthcare more accessible and transparent by
                sharing verified updates about doctors, hospitals, and health services across the region.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg"
                alt="Healthcare professionals collaborating with digital devices"
                className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
                loading="lazy"
                decoding="async"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
                <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FaUserMd className="text-green-600 text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Network Size</p>
                  <p className="text-gray-900 font-bold text-sm">200+ Verified Doctors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Values ─────────────────────────────────────── */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block w-10 h-1 bg-red-600 mb-5 rounded" />
            <h3 className="text-3xl font-bold text-gray-900 mb-3">What Drives Us</h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              Four principles that guide every decision at Northeast Healthcare Network.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className={`value-card bg-white rounded-2xl p-6 border-2 border-transparent ring-1 ${v.ring} shadow-sm`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                  <v.icon className="text-xl" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Story ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Image */}
          <div className="order-last lg:order-first mb-12 lg:mb-0">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/185764/pexels-photo-185764.jpeg"
                alt="Healthcare worker assisting elderly patient"
                className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
                loading="lazy"
                decoding="async"
              />
              {/* Year badge */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-red-600 text-white flex flex-col items-center justify-center shadow-lg">
                <span className="text-xs font-medium opacity-80">Since</span>
                <span className="text-lg font-bold leading-none">2025</span>
              </div>
            </div>
          </div>

          {/* Story text */}
          <div>
            <span className="inline-block w-10 h-1 bg-red-600 mb-5 rounded" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>

            {/* Timeline-style list */}
            <div className="space-y-6">
              {[
                {
                  year: '2025',
                  title: 'A Small Idea in Assam',
                  text:  'Founded as a grassroots initiative to help rural patients in Assam find specialist doctors in Guwahati.',
                },
                {
                  year: 'Today',
                  title: 'Northeast India\'s Trusted Platform',
                  text:  'Grown to cover all eight states with a network of 200+ verified doctors across every major specialty.',
                },
                {
                  year: 'Next',
                  title: 'Expanding Access Further',
                  text:  'Building technology to reach even the most remote communities — because everyone deserves quality healthcare.',
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center text-xs font-bold">
                      {item.year === 'Today' ? '→' : item.year === 'Next' ? '★' : item.year.slice(-2)}
                    </div>
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  </div>
                  <div className="pb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-1">{item.year}</p>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
