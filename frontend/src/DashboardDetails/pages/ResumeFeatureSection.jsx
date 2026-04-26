import React from 'react';
import { FileText, Wand2, Download, CheckCircle, ArrowRight } from 'lucide-react';

const ResumeFeatureSection = () => {
  return (
    <div className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Interactive Mockup (Updated with Dummy Text) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-lime-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden min-h-[450px]">
                
                {/* Resume Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-tight">John Doe</h4>
                    <p className="text-blue-500 text-xs font-mono uppercase tracking-widest">Full Stack Developer</p>
                  </div>
                </div>

                {/* Profile Summary Section */}
                <div className="mb-8">
                  <h5 className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-3">Profile Summary</h5>
                  <p className="text-[11px] text-gray-400 leading-relaxed italic">
                    "Innovative developer with 3+ years of experience in building scalable web applications. 
                    Specialized in MERN stack and AI integration..."
                  </p>
                </div>

                {/* Experience Mockup */}
                <div className="space-y-6 mb-8">
                  <h5 className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Work Experience</h5>
                  <div className="border-l border-white/10 ml-1 pl-4 space-y-4">
                    <div>
                      <div className="text-[12px] text-white font-bold">Senior Architect @ TechFlow</div>
                      <div className="text-[10px] text-gray-600 mb-2">2024 - Present</div>
                      <p className="text-[10px] text-gray-500 leading-snug">Optimized backend latency by 40% using Redis and Go.</p>
                    </div>
                  </div>
                </div>
                
                {/* Dynamic Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Node.js', 'Python', 'AWS'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-gray-400 font-bold uppercase">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* AI Optimization Banner */}
                <div className="p-4 bg-lime-500/10 border border-lime-500/20 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wand2 className="w-4 h-4 text-lime-400 animate-pulse" />
                    <span className="text-[10px] text-lime-400 font-bold uppercase tracking-widest">ATS Optimization Active</span>
                  </div>
                  <div className="text-[10px] font-black text-white bg-lime-600 px-2 py-0.5 rounded">98% SCORE</div>
                </div>

                {/* Floating "ATS Ready" Badge */}
                <div className="absolute top-12 -right-6 bg-blue-600 p-4 rounded-2xl shadow-xl rotate-12 flex items-center gap-2 border border-blue-400/50">
                  <Download className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Download PDF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content (Wahi rahega) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
            <div className="inline-block">
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.3em] bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20">
                Career Architect
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter italic">
              BUILD A <span className="text-blue-500">RESUME</span> THAT <br />
              GETS YOU HIRED.
            </h2>

            <p className="text-gray-400 text-lg italic leading-relaxed">
              Standard templates se kaam nahi chalega. Hamare ATS-friendly builder se waisa resume banayein jo recruiter ke screen par stand out kare.
            </p>

            <ul className="space-y-4">
              {[
                "ATS-Friendly Smart Layouts",
                "Real-time Neural Preview",
                "Professional PDF Export",
                "Industry-Standard Sections"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300 font-medium">
                  <CheckCircle className="w-5 h-5 text-lime-500" /> {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-tighter rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-500">
                <span>Start Building Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeFeatureSection;