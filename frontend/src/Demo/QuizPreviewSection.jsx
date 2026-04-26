import React from 'react';
import { BrainCircuit, Target, Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Agar aap routing use kar rahe hain

const QuizPreviewSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-12 bg-[#050505] overflow-hidden">
      {/* Background Glows to match the theme */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter italic mb-8">Career <span className="text-lime-500">Quiz</span>Preview</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20">
              <Zap className="w-4 h-4 text-lime-500" />
              <span className="text-lime-500 text-xs font-black uppercase tracking-widest">Interactive Learning</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tighter italic">
              TEST YOUR <span className="text-lime-500">NEURAL</span> <br /> 
              CAPABILITIES.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg italic">
              Sirf seekhna kaafi nahi hai. Hamare AI-driven assessment system se apne skills ko validate karein aur real-time analysis payein.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Target className="w-6 h-6 text-lime-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Smart Analysis</h4>
                  <p className="text-gray-500 text-sm">Deep insights into your strength and weaknesses.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <BrainCircuit className="w-6 h-6 text-lime-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Dynamic Paths</h4>
                  <p className="text-gray-500 text-sm">Quizzes that adapt to your chosen career path.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/careerquiz')} // Apne route ke hisab se change karein
              className="group flex items-center gap-3 px-8 py-4 bg-lime-500 text-black font-black uppercase tracking-tighter rounded-2xl hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] transition-all"
            >
              Enter the Assessment Matrix <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side: Visual Preview (Glassmorphism Card) */}
          <div className="relative group">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-lime-500/20 to-purple-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-700"></div>
            
            <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-[3rem] shadow-2xl">
              {/* Mock Quiz UI Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-lime-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500 font-mono">SYSTEM_ACTIVE: ASSESSMENT_01</span>
                  </div>
                  <span className="text-lime-500 font-mono text-xs">00:29s</span>
                </div>

                <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                   <div className="h-full w-2/3 bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,1)]"></div>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">
                  How do you implement a "Retrieval-Augmented Generation" (RAG) pipeline?
                </h3>

                <div className="space-y-3">
                  <div className="p-4 bg-lime-500/10 border border-lime-500/30 rounded-2xl text-lime-400 text-sm flex items-center justify-between">
                    <span>Using Vector Databases & LLMs</span>
                    <div className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-500 text-sm">
                    Using simple SQL queries only
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-black border border-lime-500/50 p-6 rounded-3xl shadow-2xl animate-bounce duration-[3000ms]">
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Global Rank</p>
                  <p className="text-3xl font-black text-lime-500 italic">#12</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuizPreviewSection;