import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaHeartbeat } from 'react-icons/fa';

const navLinks = [
  { label: 'Home',         to: '/'        },
  { label: 'Services',     to: '/services' },
  { label: 'Find Doctors', to: '/doctors'  },
  { label: 'About Us',     to: '/about'    },
  { label: 'Contact',      to: '/contact'  },
];

const socials = [
  { Icon: FaFacebook,  href: '#', label: 'Facebook'  },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaYoutube,   href: '#', label: 'YouTube'   },
  { Icon: FaWhatsapp,  href: '#', label: 'WhatsApp'  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaHeartbeat className="text-red-500 text-2xl flex-shrink-0" />
              <span className="font-bold text-base leading-tight">
                <span className="text-white">NORTHEAST </span>
                <span className="text-red-400">HEALTHCARE </span>
                <span className="text-white">NETWORK</span>
              </span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed max-w-xs">
              Connecting patients across Northeast India with verified medical professionals since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-300">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-red-400 transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Get In Touch</h4>
            <p className="text-blue-300 text-sm mb-1">📞 +91 8638108721</p>
            <p className="text-blue-300 text-sm mb-1 break-all">✉️ contact@northeasthealthcarenetwork.com</p>
            <p className="text-blue-300 text-sm mb-4">📍 Bongaigaon, Assam — 783380</p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-blue-900 hover:bg-red-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-blue-900 pt-6 text-center text-blue-400 text-xs">
          © {year} North East Healthcare Network. All rights reserved. | Made with ❤️ for Northeast India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
