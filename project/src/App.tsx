import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X, Camera, Mail, Phone, Instagram } from 'lucide-react';
// import restAll from "../../KFxHS_B2-17.jpg";
import cover from "../../Credits@baricci_MP-8229.jpg";
import Cp from "../../cpg.jpg";
import CP2 from "../../credits@Baricci_SA (1).jpg";
import dvlm from "../../MAP05446.jpg";
import kailash from "../../ka.jpg";
import HKA from "../../Diljit.jpg";
import Jasleen from "../../credits@baricci_mp--7.jpg";

import Work from './Work';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-2">
                <Camera className="w-8 h-8" />
                <span className="text-2xl font-bold">ECHO FILMERS</span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="hover:text-gray-300 transition">Home</Link>
                <Link to="/work" className="hover:text-gray-300 transition">Work</Link>
                <a href="#about" className="hover:text-gray-300 transition">About</a>
                <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Home</Link>
                <Link to="/work" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Work</Link>
                <a href="#about" className="block px-3 py-2 hover:bg-gray-800 rounded-md">About</a>
                <a href="#contact" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Contact</a>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              {/* Home Page */}
              <section id="home" className="relative h-screen">
                <div className="absolute inset-0">
                  <img 
                    src={cover}
                    alt="Concert stage with fireworks"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">Capturing Live Moments</h1>
                    <p className="text-xl md:text-2xl mb-8">Professional event & concert photography</p>
                    <a 
                      href="#contact"
                      className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </section>

              {/* Portfolio Section */}
              <section id="portfolio" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12">Work</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      kailash,
                      // restAll,
                      CP2,
                      dvlm,
                      HKA,
                      Jasleen,
                    ].map((url, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={url}
                          alt={`Event Photography ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="py-20 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <img 
                        src={Cp}
                        alt="Concert stage with pyrotechnics"
                        className="rounded-lg shadow-xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold mb-6">About Us</h2>
                      <p className="text-lg text-gray-300 mb-6">
                        Specializing in concert and event photography, we bring years of experience capturing 
                        the energy and excitement of live performances. From intimate venues to stadium shows, 
                        we focus on immortalizing those epic moments that define live entertainment.
                      </p>
                      <p className="text-lg text-gray-300">
                        Using state-of-the-art equipment and techniques, we ensure every shot tells the story 
                        of your event. Whether it's the intensity of the performers, the scale of the production, 
                        or the energy of the crowd, we capture it all in stunning detail.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                  <div className="flex justify-center">
                    <div className="space-y-8 max-w-md w-full">
                      <div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 justify-center">
                            <Phone className="w-6 h-6" />
                            <span>+91 8121021037</span>
                          </div>
                          <div className="flex items-center space-x-4 justify-center">
                            <Mail className="w-6 h-6" />
                            <span>manishpurohit4321@gmail.com</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Follow Us</h3>
                        <div className="flex justify-center space-x-4">
                          <a href="https://www.instagram.com/echofilmerss/" className="hover:text-gray-300">
                            <Instagram className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/work" element={<Work />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 ECHO FILMERS. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;