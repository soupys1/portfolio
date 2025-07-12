import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur z-50 py-4 shadow-md transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8">
        <a href="#home" className="text-xl md:text-2xl font-bold text-gray-300 hover:text-gray-100 transition-colors">Souptik Sinha</a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#home" className="text-gray-300 font-medium px-4 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors">Home</a></li>
          <li><a href="#about" className="text-gray-300 font-medium px-4 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors">About</a></li>
          <li><a href="#projects" className="text-gray-300 font-medium px-4 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-gray-300 font-medium px-4 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur border-t border-slate-700">
          <ul className="flex flex-col list-none py-4">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 font-medium px-6 py-3 hover:bg-slate-700 hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 font-medium px-6 py-3 hover:bg-slate-700 hover:text-white transition-colors">About</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 font-medium px-6 py-3 hover:bg-slate-700 hover:text-white transition-colors">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 font-medium px-6 py-3 hover:bg-slate-700 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 