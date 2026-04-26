import React from 'react';
import { Play, CheckCircle2 } from 'lucide-react'; // Optional: Use Lucide for icons

const CareerLanding = () => {
  return (
    <div className="bg-darkBg text-white min-h-screen font-sans">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-black font-bold shadow-glow">C</div>
          <span className="text-xl font-bold tracking-tight">CGP</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition">Product ▾</a>
          <a href="#" className="hover:text-white transition">CollegeList</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-sm font-medium hover:text-brand transition">Login</button>
          <button className="bg-[#5a32ea] hover:bg-[#4a29c4] px-5 py-2 rounded-lg text-sm font-semibold transition">
            Start for free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Best Explainer Videos <span className="text-brand">& Smart Notes</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          CGP provides high-quality explainer videos and structured notes to help students clearly 
          understand streams, courses, colleges, and career paths.
        </p>
      </header>

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Video Placeholder with Glow */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-brand/20 rounded-3xl blur-xl transition group-hover:bg-brand/30"></div>
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden border border-white/10 aspect-video flex items-center justify-center">
             <img 
               src="https://via.placeholder.com/800x450" 
               alt="Video Preview" 
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute bottom-6 left-6 bg-brand text-black px-4 py-2 rounded-full font-bold text-sm">
               AI Career Explainer
             </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold leading-tight">
            Learn with Visuals & <br /> Structured Notes
          </h2>
          <p className="text-gray-400">
            Our explainer videos simplify complex career decisions while our well-organized 
            notes help students revise, compare options, and make confident choices.
          </p>

          <ul className="space-y-4">
            {[
              "Stream & career explainer videos",
              "College comparison notes",
              "Exam & placement guidance material",
              "Easy-to-understand language for students"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-gray-300">
                <CheckCircle2 className="text-brand w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-brand text-black font-bold px-8 py-4 rounded-full flex items-center space-x-2 shadow-glow hover:scale-105 transition-transform">
            <span>Watch More Videos</span>
            <span>→</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default CareerLanding;