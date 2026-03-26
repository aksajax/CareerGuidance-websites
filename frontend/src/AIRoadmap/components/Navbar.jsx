import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#0b0f1a]/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <GraduationCap className="text-white" size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            COURSE<span className="text-blue-500">AI</span>
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => navigate('/roadmaphome')} 
            className="text-gray-400 hover:text-white font-medium text-sm transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => navigate('/roadmapdashboard')} 
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20"
          >
            Create Roadmap
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0f1a] border-b border-gray-800 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          <button 
            onClick={() => { navigate('/roadmaphome'); setIsMenuOpen(false); }} 
            className="block w-full text-left text-gray-400 py-2 hover:text-white"
          >
            Home
          </button>
          <button 
            onClick={() => { navigate('/roadmapdashboard'); setIsMenuOpen(false); }} 
            className="block w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-center"
          >
            Create Roadmap
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;