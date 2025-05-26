import React from 'react';

function Work() {
  return (
    <section id="work" className="min-h-screen p-10">
      <h3 className="text-3xl font-bold mb-8 text-center">My Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample Project */}
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Project Title</h4>
          <p className="text-gray-400">Description of the project. What it does, tech stack, etc.</p>
        </div>
      </div>
    </section>
  );
}

export default Work;
