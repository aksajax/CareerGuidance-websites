import React, { useState,useRef } from 'react';
import HeroForm from './HeroForm';
import RoadmapView from './RoadmapView';
import Dashboard from './Dashboard';
import BuilderArea from '../ResumeApp/Pages/BuilderArea'; // Aapka Resume Builder


function Demo() {
  const [currentRoadmap, setCurrentRoadmap] = useState(null);
  const [activeTab, setActiveTab] = useState('roadmap');
  const [view, setView] = useState('dashboard'); // 'main' or 'dashboard'
  
  // Sections ke liye Refs (Scrolling ke liye)
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  const neonGreen = "#a3ff12";

  return (
    <div className="bg-[#050505] min-h-screen font-sans text-white selection:bg-[#a3ff12] selection:text-black">
      
      {/* --- NAVIGATION --- */}
      <nav className="flex justify-between items-center p-6 border-b border-white/5 bg-black/80 backdrop-blur-xl sticky top-0 z-[100]">
        <div className="text-[#a3ff12] font-black text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          CAREER.AI
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <button onClick={() => scrollTo(aboutRef)} className="hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo(toolsRef)} className="hover:text-white transition-colors">Tools</button>
          <button onClick={() => setActiveTab('roadmap')} className={activeTab === 'roadmap' ? 'text-[#a3ff12]' : ''}>Roadmap</button>
          <button onClick={() => setActiveTab('resume')} className={activeTab === 'resume' ? 'text-[#a3ff12]' : ''}>Resume</button>
        </div>

                <button onClick={() => setView('dashboard')} className="text-white text-sm font-bold border-b-2 border-[#a3ff12]">MY DASHBOARD</button>

      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden border-b border-white/5">
        <HeroForm onRoadmapGenerated={(data) => {
          setCurrentRoadmap(data);
          setActiveTab('roadmap');
        }} />
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a3ff12]/10 blur-[120px] rounded-full -z-10" />
      </section>

      {/* --- TOOLS SECTION (The Interactive Part) --- */}
      <section ref={toolsRef} className="py-20 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 mb-10 justify-center">
            <button 
              onClick={() => setActiveTab('roadmap')}
              className={`px-8 py-3 rounded-full text-sm font-bold border transition-all ${activeTab === 'roadmap' ? 'bg-[#a3ff12] text-black border-[#a3ff12]' : 'border-white/10 text-gray-500'}`}
            >
              AI ROADMAP
            </button>
            <button 
              onClick={() => setActiveTab('resume')}
              className={`px-8 py-3 rounded-full text-sm font-bold border transition-all ${activeTab === 'resume' ? 'bg-[#a3ff12] text-black border-[#a3ff12]' : 'border-white/10 text-gray-500'}`}
            >
              PRO RESUME
            </button>
          </div>

          <div className="min-h-[600px] bg-[#111] rounded-[40px] border border-white/5 overflow-hidden shadow-2xl">
            {activeTab === 'roadmap' ? (
              currentRoadmap ? <RoadmapView roadmap={currentRoadmap} /> : <div className="h-full flex items-center justify-center text-gray-600 italic px-10 text-center">Generate a roadmap above to see the neural timeline.</div>
            ) : (
              <BuilderArea />
            )}
          </div>
        </div>
      </section>

      {/* --- ABOUT & GOALS SECTION --- */}
      <section ref={aboutRef} className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-6">OUR <span className="text-[#a3ff12]">VISION.</span></h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Career.ai is designed for the next generation of developers. We bridge the gap between "knowing code" and "getting hired" by using Groq's ultra-fast Llama3 models to map out your future.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-[#a3ff12] text-2xl font-black mb-2">01.</div>
              <div className="font-bold mb-1">Precision Data</div>
              <div className="text-xs text-gray-500 font-medium">Real-time industry skill mapping.</div>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-[#a3ff12] text-2xl font-black mb-2">02.</div>
              <div className="font-bold mb-1">Indore First</div>
              <div className="text-xs text-gray-500 font-medium">Tailored for local tech ecosystems.</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black text-white">CAREER<span className="text-[#a3ff12]">.AI</span></div>
            <p className="text-gray-600 text-xs mt-2 uppercase tracking-[4px]">Architecting Futures.</p>
          </div>
          
          <div className="flex gap-10 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-[#a3ff12]">GitHub</a>
            <a href="#" className="hover:text-[#a3ff12]">LinkedIn</a>
            <a href="#" className="hover:text-[#a3ff12]">Indore Tech</a>
          </div>

          <div className="text-gray-600 text-[10px] font-mono">
            © 2026 BUILT BY DEVS FOR DEVS.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Demo;