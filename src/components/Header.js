import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Header({ tabs, activeTab, onTabClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A0F1C] px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8 flex justify-between items-center z-50 text-white shadow-md">
      
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">&lt;/&gt;</span>
        <span
          style={{
            background:
              "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #fff, #fff, #fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Agsk.dev
        </span>
      </div>

      {/* Desktop Navigation Tabs */}
      <nav className="hidden md:flex">
        <ul className="flex gap-12 text-base font-semibold text-center">
          {tabs.map((tab) => (
            <li key={tab.id} className="relative group">
              <button
                className={`transition-colors px-2 py-1 rounded ${
                  activeTab === tab.id ? "text-white" : "text-gray-300 hover:text-white"
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

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${
            mobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-full bg-white rounded transition duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${
            mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="absolute top-full right-4 bg-[#0A0F1C] rounded-md shadow-lg py-4 px-6 w-40 flex flex-col gap-4 md:hidden z-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`text-left font-semibold px-2 py-1 rounded transition-colors ${
                activeTab === tab.id ? "text-white bg-gray-700" : "text-gray-300 hover:text-white hover:bg-gray-600"
              }`}
              onClick={() => {
                onTabClick(tab.id);
                setMobileMenuOpen(false); // close menu on click
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      )}

      {/* Social Icons - hide on mobile or move below if you want */}
      <div className="hidden md:flex gap-3">
        {[FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => {
          const urls = [
            "https://www.linkedin.com/in/your-linkedin-id",
            "https://github.com/Gunasaikrishna",
            "https://www.instagram.com/your-instagram-id",
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
