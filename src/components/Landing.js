// src/components/Landing.js
import React from 'react';
import profilePic from '../assets/360_F_951647114_gnrQY6QuFd8y9ay4W8xhP6Vxqa415IgL.jpg'; // place the image you uploaded in src/assets/

function Landing() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-24 text-white gap-10">
    {/* Text Section */}
    <div className="w-full md:w-1/2 z-10 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Hello, I'm Fabio J.R,
        </span>
        <br />
        Frontend Developer
      </h1>
      <p className="text-gray-300 text-sm md:text-base">
        Turning Ideas into Digital Reality: Fabio J.R, a Frontend Developer passionate about
        crafting elegant and functional interfaces to deliver exceptional user experiences.
      </p>
    </div>
  
    {/* Image + Circles */}
    <div className="w-full md:w-1/2 flex justify-center relative">
      <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
        <img
          src={profilePic}
          alt="Fabio J.R"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Decorative Circles */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-sm opacity-70"></div>
      <div className="absolute -top-8 -left-8 w-64 h-64 border border-purple-500 rounded-full opacity-40"></div>
    </div>
  </section>
  
  );
}

export default Landing;
