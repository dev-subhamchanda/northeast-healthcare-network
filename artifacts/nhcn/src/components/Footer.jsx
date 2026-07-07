import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaHeartbeat } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaHeartbeat className="text-red-500 text-2xl" />
              <span className="font-bold text-lg leading-tight">
                <span className="text-white">NORTHEAST</span>{' '}
                <span className="text-red-400">HEALTHCARE</span>{' '}
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
              {['Home', 'Services', 'Find Doctors', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-red-400 transition-colors duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Get In Touch</h4>
            <p className="text-blue-300 text-sm mb-1">📞 +91 8638108721</p>
            <p className="text-blue-300 text-sm mb-1">✉️ contact@northeasthealthcarenetwork.com</p>
            <p className="text-blue-300 text-sm mb-4">📍 Bongaigaon, Assam — 783380</p>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebook,  href: '#', label: 'Facebook'  },
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
                { Icon: FaYoutube,   href: '#', label: 'YouTube'   },
                { Icon: FaWhatsapp,  href: '#', label: 'WhatsApp'  },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-blue-900 hover:bg-red-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="text-sm" />
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
