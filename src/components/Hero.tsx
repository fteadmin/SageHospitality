import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          <span className="text-brand">Sage Hospitality</span> & Lifestyle Concierge
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Integrated real estate advisory, financial stewardship, and white-glove experiences tailored for every stage of your portfolio.
        </p>
        <a
          href="#about"
          className="inline-block bg-brand text-white px-8 py-3 rounded-full hover:bg-brand-dark transition duration-300 text-lg font-semibold"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
