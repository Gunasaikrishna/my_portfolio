import React from 'react';

function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-900">
      <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
      <p className="text-center text-gray-400 mb-4">Feel free to reach out via email or social media.</p>
      <div className="text-center">
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
