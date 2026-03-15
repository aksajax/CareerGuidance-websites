function About() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🌐 Background grid */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-sm">
            About CGP
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            AI Based College Recommendation <br />
            <span className="text-lime-400">
              & Student Guidance Platform
            </span>
          </h1>

          <p className="text-white/70 max-w-xl mb-6">
            CGP (College Guidance Platform) is an intelligent system designed to
            help students after 12th grade choose the most suitable college and
            career path using Artificial Intelligence.
          </p>

          <p className="text-white/70 max-w-xl mb-8">
            By analysing academic marks, interests, location preferences and
            budget, CGP provides personalised college recommendations along with
            AI chatbot support and a complete academic roadmap.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition">
              Explore Colleges
            </button>
            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              Talk to AI Guide
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Green glow blob */}
          <div className="absolute w-[420px] h-[420px] bg-lime-400 rounded-full blur-2xl opacity-90"></div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            alt="Students Guidance"
            className="relative z-10 w-70 rounded-3xl object-cover"
          />

          {/* Floating tags */}
          <span className="absolute top-10 right-10 px-4 py-1 bg-white text-black rounded-full text-sm shadow">
            AI Recommendation
          </span>

          <span className="absolute bottom-16 left-6 px-4 py-1 bg-lime-400 text-black rounded-full text-sm shadow">
            Career Guidance
          </span>
        </div>
      </div>

      {/* FEATURES STRIP */}
      <div className="relative bg-lime-400 text-black py-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-center font-semibold text-sm">
          <span>College Prediction</span>
          <span>AI Chatbot</span>
          <span>Career Roadmap</span>
          <span>Course Guidance</span>
          <span>Student Support</span>
        </div>
      </div>

    </section>
  );
}

export default About;
