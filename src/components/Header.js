// src/components/Header.js
import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

function Header({ tabs, activeTab, onTabClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A0F1C] px-10 py-10 flex justify-between items-center z-50 text-white shadow-md">
      
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">&lt;/&gt;</span>
        <span
  style={{
    background: "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold"
  }}
>
  Agsk.dev
</span>


      </div>

      {/* Navigation Tabs */}
      <nav>
        <ul className="flex gap-20 text-5sm font-bold">
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
        </ul>
      </nav>

      
      <div className="flex gap-3">
  {[FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => {
    const urls = [
      "https://www.linkedin.com/in/your-linkedin-id", // Replace with your LinkedIn URL
      "https://github.com/Gunasaikrishna",             // GitHub URL
      "https://www.instagram.com/your-instagram-id"    // Replace with your Instagram URL
    ];

    return (
      <a
        key={i}
        href={urls[i]}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 text-black rounded-full p-2 w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <Icon size={16} />
      </a>
    );
  })}
</div>

    </header>
  );
}

export default Header;
