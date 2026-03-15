function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Enter Your Details",
      desc: "Provide your academic scores, preferred stream, budget, and career interests to get started.",
      icon: "📝",
    },
    {
      step: "02",
      title: "AI Analysis",
      desc: "Our AI engine analyzes your data using smart algorithms and real college datasets.",
      icon: "🧠",
    },
    {
      step: "03",
      title: "College Recommendations",
      desc: "Get a ranked list of best-fit colleges tailored specifically to your profile.",
      icon: "🎓",
    },
    {
      step: "04",
      title: "Career Guidance",
      desc: "Receive a personalized roadmap, insights, and chatbot-based guidance.",
      icon: "🚀",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-sm">
            How It Works
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple Steps to Your
            <span className="text-lime-400"> Dream College</span>
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Our AI-powered system makes college selection effortless, accurate,
            and personalized — all in just a few steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                         hover:border-lime-400 transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-lime-400 opacity-0 blur-2xl group-hover:opacity-20 transition"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{item.icon}</div>

                <span className="text-sm text-lime-400 font-semibold">
                  STEP {item.step}
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button className="px-10 py-4 rounded-full bg-lime-400 text-black font-semibold
                             hover:scale-105 transition shadow-[0_0_30px_rgba(163,230,53,0.6)]">
            Start Your Journey →
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
