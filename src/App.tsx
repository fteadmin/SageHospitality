import React, { useState } from 'react';
import { Sun, Moon, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/Screenshot 2025-06-04 at 4.08.42 AM.png" alt="Sage Hospitality" className="h-12" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-yellow-500">Home</a>
              <a href="#about" className="hover:text-yellow-500">About</a>
              <a href="#contact" className="hover:text-yellow-500">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <a href="#home" className="block py-2 hover:text-yellow-500">Home</a>
              <a href="#about" className="block py-2 hover:text-yellow-500">About</a>
              <a href="#contact" className="block py-2 hover:text-yellow-500">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="mt-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to <span className="text-yellow-500">Sage Hospitality</span>
              </h1>
              <p className="text-lg mb-8">
                Experience luxury and comfort with our premium hospitality services. We make every stay memorable.
              </p>
              <a
                href="#contact"
                className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
              >
                Book Now
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
                alt="Luxury Hotel"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            About <span className="text-yellow-500">Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>To provide exceptional hospitality services that exceed guest expectations and create lasting memories.</p>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>To be the leading hospitality provider known for luxury, comfort, and outstanding guest experiences.</p>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p>Excellence, integrity, innovation, and dedication to guest satisfaction guide everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Contact <span className="text-yellow-500">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    className={`w-full px-4 py-2 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                    rows={4}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="text-yellow-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-yellow-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>contact@sagehospitality.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-yellow-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 Luxury Avenue, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Sage Hospitality</h4>
              <p className="text-gray-400">
                Providing exceptional hospitality services since 2010.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-500">About</a></li>
                <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-500">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Sage Hospitality. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;