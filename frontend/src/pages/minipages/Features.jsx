function Features() {
  const features = [
    {
      title: "AI-Based College Matching",
      desc: "Smart algorithms analyze your academic profile and preferences to suggest the best-fit colleges.",
      icon: "🤖",
    },
    {
      title: "Personalized Career Path",
      desc: "Get a customized career roadmap based on your strengths, interests, and future goals.",
      icon: "🧭",
    },
    {
      title: "Real-Time Data Insights",
      desc: "Access up-to-date college data including cutoffs, rankings, placements, and fees.",
      icon: "📊",
    },
    {
      title: "Chatbot Assistance",
      desc: "24/7 AI chatbot to answer your questions and guide you at every step.",
      icon: "💬",
    },
    {
      title: "Secure & Private",
      desc: "Your data is protected with strong security and privacy-first architecture.",
      icon: "🔒",
    },
    {
      title: "Easy & Fast",
      desc: "Simple interface designed for students — no confusion, no complexity.",
      icon: "⚡",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-sm">
            Features
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features Built for
            <span className="text-lime-400"> Students</span>
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Our platform combines AI intelligence, real data, and student-first
            design to make college selection smarter and easier.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                         hover:border-lime-400 transition"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-lime-400 opacity-0 blur-2xl group-hover:opacity-20 transition"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-5">{feature.icon}</div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button className="px-10 py-4 rounded-full bg-lime-400 text-black font-semibold
                             hover:scale-105 transition shadow-[0_0_30px_rgba(163,230,53,0.6)]">
            Try AI Recommendation →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
