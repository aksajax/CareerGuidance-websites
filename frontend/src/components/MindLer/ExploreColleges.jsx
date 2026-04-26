import React, { useState } from 'react';

// Reusable Card Component for Colleges
const CollegeCard = ({ name, location, fees, rating, tags }) => (
  <div className="group relative bg-zinc-900/40 border border-white/5 p-6 rounded-[2.5rem] hover:border-[#AEE91A]/50 transition-all duration-500 overflow-hidden">
    {/* Hover Glow Effect */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#AEE91A]/5 blur-[80px] group-hover:bg-[#AEE91A]/10 transition-all"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-zinc-800 rounded-2xl border border-white/10 flex items-center justify-center text-[#AEE91A] font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full border border-white/5">
          <span className="text-[#AEE91A]">★</span>
          <span className="text-white text-sm">{rating}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-zinc-500 text-sm flex items-center gap-1 mb-4">
        📍 {location}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/5 text-zinc-400 px-3 py-1 rounded-md border border-white/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div>
          <p className="text-zinc-500 text-xs">Avg. Fees</p>
          <p className="text-white font-semibold">{fees}</p>
        </div>
        <button className="bg-[#AEE91A] text-black p-3 rounded-xl hover:scale-105 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>
);

const ExploreColleges = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6 md:px-16">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#AEE91A]/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find your <span className="text-[#AEE91A]">Perfect</span> College
            </h1>
            <p className="text-zinc-400 max-w-xl">
              Browse through top-rated engineering institutions tailored to your career goals and budget.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative group w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search colleges, cities..." 
              className="w-full bg-zinc-900/50 border border-white/10 py-4 px-6 rounded-2xl focus:outline-none focus:border-[#AEE91A]/50 transition-all text-white"
            />
            <div className="absolute right-4 top-4 text-zinc-500">
              🔍
            </div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {['All', 'IITs', 'NITs', 'Private', 'Top Placements', 'Low Fees'].map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 border ${
                activeFilter === filter 
                ? 'bg-[#AEE91A] text-black border-[#AEE91A]' 
                : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CollegeCard 
            name="SGSITS Indore" 
            location="Indore, MP" 
            fees="₹75k - 1.2L" 
            rating="4.2" 
            tags={['Government', 'High Placement', 'Oldest']}
          />
          <CollegeCard 
            name="IIT Bombay" 
            location="Mumbai, MH" 
            fees="₹2.2L - 3L" 
            rating="4.9" 
            tags={['Top Tier', 'Research', 'Elite']}
          />
          <CollegeCard 
            name="VIT Vellore" 
            location="Vellore, TN" 
            fees="₹1.9L - 4L" 
            rating="4.5" 
            tags={['Private', 'Modern Infrastructure']}
          />
          {/* More cards can be added here or mapped from an array */}
        </div>
      </div>
    </div>
  );
};

export default ExploreColleges;