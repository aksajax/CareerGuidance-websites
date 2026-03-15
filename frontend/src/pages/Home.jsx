import React from 'react'

function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-32 bg-black">
  
  {/* 🌌 Background Image + Dark Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80')",
    }}
  />
  <div className="absolute inset-0 bg-black/80" />

  {/* 🌐 Subtle Grid Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

  {/* ✨ Content */}
  <div className="relative z-10 max-w-4xl text-center px-6">

    <p className="inline-block text-xs tracking-widest uppercase mb-6 px-4 py-2 rounded-full border border-lime-400 text-lime-400">
      AI BASED COLLEGE RECOMMENDATION & GUIDANCE SYSTEM
    </p>

    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Choose the Right College
      <br />
      <span className="text-lime-400 drop-shadow-[0_0_12px_rgba(163,230,53,0.6)]">
        Powered by AI Guidance
      </span>
    </h1>

    <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg">
      Our intelligent platform helps students after 12th grade to select the most suitable
      college and stream based on their marks, interests, budget, and location.
      With AI-powered recommendations, chatbot support, and a complete 4-year
      academic roadmap, students can plan their future with confidence.
    </p>

    {/* 🚀 Buttons */}
    <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
      <button className="px-8 py-3 rounded-full bg-lime-400 text-black font-semibold 
                         hover:scale-105 transition shadow-[0_0_20px_rgba(163,230,53,0.6)]">
        Find Colleges →
      </button>

      <button className="px-8 py-3 rounded-full border border-white/30 
                         hover:bg-white/10 transition">
        Chat with AI Guide
      </button>
    </div>

  </div>

  {/* 🏷 Bottom Badge */}
  <div className="absolute bottom-6 left-6 text-xs bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
    Simplifying the School-to-College Journey
  </div>

</section>
    </>
  )
}

export default Home
