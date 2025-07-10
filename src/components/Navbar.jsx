import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur z-50 py-4 shadow-md transition-all">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
      <a href="#home" className="text-2xl font-bold text-gray-300 hover:text-gray-100 transition-colors">Souptik Sinha</a>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#home" className="text-gray-300 font-medium px-4 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors">Home</a></li>
        <li><a href="#about" className="text-gray-300 font-medium px-4 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors">About</a></li>
        <li><a href="#projects" className="text-gray-300 font-medium px-4 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors">Projects</a></li>
        <li><a href="#contact" className="text-gray-300 font-medium px-4 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors">Contact</a></li>
      </ul>
      {/* Mobile menu toggle would go here if needed */}
    </div>
  </nav>
);

export default Navbar; 