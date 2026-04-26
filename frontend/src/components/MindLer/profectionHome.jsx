import React from 'react';
import IMAGE from "../../assets/Mindler/image1.png"; // Replace with actual image path
// Reusable Components to maintain consistency
const PrimaryButton = ({ text, icon = null }) => (
  <button className="bg-[#AEE91A] text-black font-semibold py-3 px-6 rounded-full text-lg hover:brightness-110 transition-all duration-200 flex items-center gap-2">
    {icon && icon}
    {text}
  </button>
);

const ProfectionHome = () => {
  return (
    // Main Container matching the dark background and overall structure of your CGP template
    <div className="bg-black text-white min-h-screen font-sans antialiased relative overflow-hidden">
      
      {/* 1. Global Navigation (Identical to previous page for flow) */}
      {/* <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#AEE91A] rounded-full flex items-center justify-center font-bold text-black text-2xl">
              C
            </div>
            <span className="text-2xl font-semibold tracking-wide">CGP</span>
          </div>
          
          <div className="flex items-center gap-10 text-zinc-300">
            {['About', 'Product', 'Solutions', 'Resources', 'Pricing'].map(item => (
              <a href="#" key={item} className="hover:text-white transition-colors">
                {item} <span className="text-zinc-600">▼</span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-zinc-300 hover:text-white">Login</button>
            <button className="bg-[#6D39FA] text-white px-6 py-2 rounded-full font-medium text-lg hover:brightness-110 transition-all">
              Join Us for Free
            </button>
          </div>
        </div>
      </nav> */}

      {/* 2. Page Specific Content: Re-skinning the Partner Hero */}
      <main className="pt-32 pb-24 px-6 md:px-16 max-w-[1500px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Re-skinned Text Content */}
        <div className="space-y-8 z-10">
          
          {/* Tagline reused for consistency (can be adjusted) */}
          <span className="inline-block border border-[#AEE91A]/30 text-[#AEE91A] text-sm px-4 py-1.5 rounded-full font-medium">
            Partner Program
          </span>

          {/* New Content Headline matching previous page style */}
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.15] text-white">
            Leverage an advanced <br /> platform to boost <span className="text-[#AEE91A]">your career counselling</span> practice
          </h1>

          {/* New Body Content */}
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Become a partner counsellor to expand your reach, enhance your methodology, and grow your established practice.
          </p>

          {/* New Re-themed Button Group */}
          <div className="flex items-center gap-4 pt-4">
            {/* The new "Start Free Trial" re-skinned in green */}
            <PrimaryButton text="Start Free Trial" />
            
            {/* Optional second button for balance (like "Talk to Expert") */}
            <button className="bg-zinc-900 text-zinc-300 font-semibold py-3 px-6 rounded-full text-lg border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all">
              Talk to a Partner Expert
            </button>
          </div>
        </div>

        {/* Right Column: Re-integrated Counselor Image */}
        <div className="relative z-10">
          
          {/* That essential Green Glow is now positioned behind this new image */}
          <div className="absolute -inset-20 bg-[#AEE91A]/20 rounded-full blur-[100px] -z-10"></div>
          
          {/* New Counselor image, placed inside the same rounded-corner structure */}
          <div className="rounded-[40px] overflow-hidden shadow-[0_0_60px_-15px_rgba(174,233,26,0.3)]">
            <img 
              src={IMAGE} // Replace this with the actual image asset path
              alt="Professional Career Counselor" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </main>

      {/* Optional: Subtle background lines or grid to match original UI vibe */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#222" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

    </div>
  );
};

export default ProfectionHome;