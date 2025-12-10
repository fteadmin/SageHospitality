import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-br from-[#050505] to-[#0f0f14]"
      ref={ref}
    >
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-3xl font-bold mb-12 text-center">
          Contact <span className="text-brand">Us</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#0a0a0a] border border-gray-800 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#0a0a0a] border border-gray-800 text-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-[#0a0a0a] border border-gray-800 text-white"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-brand text-white px-8 py-3 rounded-full hover:bg-brand-dark transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="text-brand mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-brand mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">contact@sagehospitality.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-brand mr-4" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-400">123 Luxury Avenue, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
