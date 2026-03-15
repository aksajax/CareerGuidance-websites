function Roadmap() {
  const roadmap = [
    {
      year: "Year 1",
      title: "Foundation Building",
      points: [
        "Core subjects understanding",
        "Basic programming & logical thinking",
        "Communication skills",
      ],
    },
    {
      year: "Year 2",
      title: "Skill Development",
      points: [
        "Advanced subject knowledge",
        "Projects & mini internships",
        "Industry-relevant tools & technologies",
      ],
    },
    {
      year: "Year 3",
      title: "Industry Exposure",
      points: [
        "Real-world projects",
        "Internships & certifications",
        "AI-guided career specialization",
      ],
    },
    {
      year: "Year 4",
      title: "Career Launch",
      points: [
        "Final year project",
        "Placement preparation",
        "Job / Higher studies guidance",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-24">

      {/* Background Grid */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-sm">
            AI Roadmap
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Personalized 4-Year
            <span className="text-lime-400"> Student Roadmap</span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Based on your academic profile and career goals, CGP provides a
            complete year-by-year roadmap to help you grow from student to
            industry-ready professional.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/20 pl-8 space-y-16">
          {roadmap.map((item, index) => (
            <div key={index} className="relative">

              {/* Dot */}
              <div className="absolute -left-[38px] top-2 w-5 h-5 rounded-full 
                              bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.7)]"></div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10
                              rounded-2xl p-8 hover:border-lime-400 transition">
                <h3 className="text-lime-400 font-bold text-lg mb-1">
                  {item.year}
                </h3>
                <h4 className="text-xl font-semibold mb-4">
                  {item.title}
                </h4>

                <ul className="space-y-2 text-white/70">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-lime-400">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button className="px-10 py-4 rounded-full bg-lime-400 text-black font-semibold
                             hover:scale-105 transition shadow-[0_0_30px_rgba(163,230,53,0.6)]">
            Generate My AI Roadmap →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Roadmap;
