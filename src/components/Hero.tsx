import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Welcome to <span className="text-yellow-500">Sage Hospitality</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Experience luxury and comfort with our premium hospitality services. We make every stay memorable.
        </p>
        <a
          href="#about"
          className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300 text-lg font-semibold"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
