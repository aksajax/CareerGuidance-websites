function ExplainerContent() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-24">

      {/* Background grid */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-sm">
            Learning Resources
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best Explainer Videos
            <span className="text-lime-400"> & Smart Notes</span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            CGP provides high-quality explainer videos and structured notes to
            help students clearly understand streams, courses, colleges, and
            career paths.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 🎥 Video Section */}
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-lime-400 blur-3xl opacity-30"></div>

            <div className="relative bg-black border border-white/20 rounded-3xl overflow-hidden">
              {/* Dummy Video */}
              <video
                className="w-full h-[260px] md:h-[320px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                {/* TEMP VIDEO – tum baad me replace kar dena */}
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Overlay text */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="px-6 py-2 rounded-full bg-lime-400 text-black font-semibold">
                  AI Career Explainer
                </span>
              </div>
            </div>
          </div>

          {/* 📘 Notes Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Learn with Visuals & Structured Notes
            </h2>

            <p className="text-white/70">
              Our explainer videos simplify complex career decisions while our
              well-organized notes help students revise, compare options, and
              make confident choices.
            </p>

            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="text-lime-400">✔</span>
                Stream & career explainer videos
              </li>
              <li className="flex gap-3">
                <span className="text-lime-400">✔</span>
                College comparison notes
              </li>
              <li className="flex gap-3">
                <span className="text-lime-400">✔</span>
                Exam & placement guidance material
              </li>
              <li className="flex gap-3">
                <span className="text-lime-400">✔</span>
                Easy-to-understand language for students
              </li>
            </ul>

            <button
              className="mt-6 px-8 py-3 rounded-full bg-lime-400 text-black font-semibold
                         hover:scale-105 transition shadow-[0_0_20px_rgba(163,230,53,0.6)]"
            >
              Watch More Videos →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExplainerContent;
