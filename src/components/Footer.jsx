import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} North East Healthcare Network. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
