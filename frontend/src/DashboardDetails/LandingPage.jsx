import React from 'react';
// Icons ke liye: npm install lucide-react
import { CheckCircle2, Trophy, Users, School, GraduationCap, Play } from 'lucide-react';
import Image1 from '../assets/image.png'; // Aapki professionals wali image

const LandingPage = () => {
  // Stats Data
  const stats = [
    { label: 'Students Impacted', value: '3 Million', icon: <Users className="text-[#9eff00]" /> },
    { label: 'Educators Certified', value: '70,000', icon: <Trophy className="text-[#9eff00]" /> },
    { label: 'Partner Schools', value: '250+', icon: <School className="text-[#9eff00]" /> },
    { label: 'University Partners', value: '50+', icon: <GraduationCap className="text-[#9eff00]" /> },
  ];

  // Awards Data
  const awards = [
    "Department of Science & Technology",
    "Minister of State, UAE Govt",
    "Ministry of Commerce, DPIIT",
    "ISB Hyderabad & US Consulate",
    "Economic Times IIM-A, CIIE",
    "HolonIQ Top 100 Ed-Tech"
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans antialiased selection:bg-[#9eff00] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <header className="relative pt-20 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter leading-tight">
            Best Explainer Videos <br />
            <span className="text-[#9eff00] [text-shadow:0_0_30px_rgba(158,255,0,0.3)]">& Smart Notes</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Helping students navigate their future with AI-driven roadmaps, 
            expert career videos, and structured learning material.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#9eff00] text-black font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(158,255,0,0.4)] hover:scale-105 transition-all">
              Start Free Roadmap
            </button>
            <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-full font-bold transition-all">
              Browse Courses
            </button>
          </div>
        </div>

        {/* Professionals Illustration with Glow */}
        <div className="mt-16 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 h-20 bottom-0"></div>
          {/* <img 
            src = 'https://i.pinimg.com/1200x/74/23/27/74232771b55c88d2776efb0e86b35db1.jpg' 
            alt="Professionals" 
            className="max-w-5xl w-full h-auto px-6 opacity-90 ]"
          /> */}
        </div>
      </header>

      {/* 2. STATS SECTION (Dark Glassmorphism) */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <div className="mb-2 p-2 bg-white/5 rounded-lg border border-white/10">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-gray-500 text-sm font-semibold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURE SECTION (Video & Features) */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Video Card */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#9eff00]/5 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
            <div className="aspect-video bg-zinc-900 flex items-center justify-center relative">
              <div className="w-20 h-20 bg-[#9eff00] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition shadow-[0_0_30px_rgba(158,255,0,0.5)]">
                <Play fill="black" size={32} className="ml-1" />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md border border-white/10">
                Sample Explainer
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Visual Learning meets <br />
            <span className="text-[#9eff00]">Expert Career Advice</span>
          </h2>
          <ul className="space-y-4">
            {[
              "Personalized AI Career Roadmaps",
              "In-depth Stream & College Guides",
              "Placement & Exam Strategy Notes",
              "Multi-language Explainer Content"
            ].map((text, i) => (
              <li key={i} className="flex items-center space-x-3 text-gray-300">
                <CheckCircle2 size={20} className="text-[#9eff00]" />
                <span className="text-lg font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. AWARDS SECTION (Minimalist Grid) */}
      {/* <section className="py-20 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <div className="inline-block px-4 py-1 rounded-full border border-white/5 bg-white/5 mb-10">
       <h3 className="text-gray-400 uppercase tracking-[0.2em] text-[9px] font-bold">Partnerships</h3>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {awards.map((award, index) => (
        <div key={index} className="group relative">
          
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9eff00]/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative p-4 bg-[#0a0a0a] border border-white/10 rounded-xl h-full flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-[#9eff00] transition-colors">
            {award}
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}
{/* <section className="relative py-24 overflow-hidden">
  
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9eff00]/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
  <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
    <h3 className="text-gray-400 uppercase tracking-[0.4em] text-[10px] font-black mb-12 opacity-70">
      Recognized By Top Institutions
    </h3>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {awards.map((award, index) => (
        <div 
          key={index} 
          className="p-5 bg-white/[0.05] border border-white/10 rounded-2xl flex items-center justify-center text-[11px] font-bold text-gray-300 text-center backdrop-blur-md hover:bg-white/[0.08] hover:border-[#9eff00]/40 hover:text-white transition-all duration-300 cursor-default leading-tight shadow-xl"
        >
          {award}
        </div>
      ))}
    </div>
  </div>
</section> */}
{/* 
      <footer className="py-10 text-center border-t border-white/5 text-gray-600 text-sm">
        © 2026 CGP - Career Guidance Platform. Built with passion for students.
      </footer> */}
    </div>
  );
};

export default LandingPage;