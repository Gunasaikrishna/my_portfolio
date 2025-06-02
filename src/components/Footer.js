// src/components/Footer.js
import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer({ tabs, activeTab, onTabClick }) {
  return (
    <footer className="bg-[#0A0F1C] px-10 py-8 flex flex-col md:flex-row justify-between items-center text-white border-t border-gray-700">
      
      {/* Left side - copyright */}
      <p className="text-sm text-gray-400 mb-4 md:mb-0">
        © {new Date().getFullYear()} Agsk.dev. All rights reserved.
      </p>
      <nav>
        {/* <ul className="flex gap-20 text-5sm font-bold">
          {tabs.map(tab => (
            <li key={tab.id} className="relative group">
              <button
                className={`transition-colors ${
                  activeTab === tab.id ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => onTabClick(tab.id)}
              >
                {tab.label}
              </button>
              {activeTab === tab.id && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded"></span>
              )}
            </li>
          ))}
        </ul> */}
      </nav>
      {/* Right side - social links */}
      <div className="flex gap-3">
        {[FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="bg-gray-100 text-black rounded-full p-2 w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
