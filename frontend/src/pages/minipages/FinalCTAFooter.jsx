function FinalCTAFooter() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* 🌊 Decorative Divider */}
      <div className="relative h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          
        </svg>
      </div>

      {/* 🚀 CTA SECTION */}
      <div className="relative bg-lime-400 text-black py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Confused About Your <br /> Career After 12th?
          </h2>

          <p className="text-black/70 max-w-2xl mx-auto mb-10 text-lg">
            Let CGP analyze your interests, marks, and goals to generate a
            personalized college & career roadmap — absolutely free.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-8 py-4 rounded-full bg-black text-white font-semibold
                               hover:scale-105 transition shadow-lg">
              Get Your Roadmap →
            </button>

            <button className="px-8 py-4 rounded-full border border-black/30
                               hover:bg-black/10 transition">
              Explore Colleges
            </button>

          </div>
          {/* <img src="" alt="CTA Image" className="mx-auto mt-8 rounded-lg shadow-lg" /> */}
        </div>
      </div>

      {/* 🧱 FOOTER */}
      <footer className="relative bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-lime-400 text-black flex items-center justify-center font-bold">
                C
              </div>
              <span className="text-xl font-semibold">CGP</span>
            </div>

            <p className="text-white/60 text-sm">
              Career Guidance Platform helping students make smarter
              education and career decisions with AI-powered insights.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="hover:text-lime-400 cursor-pointer">About</li>
              <li className="hover:text-lime-400 cursor-pointer">Features</li>
              <li className="hover:text-lime-400 cursor-pointer">Roadmap</li>
              <li className="hover:text-lime-400 cursor-pointer">Colleges</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="hover:text-lime-400 cursor-pointer">Explainer Videos</li>
              <li className="hover:text-lime-400 cursor-pointer">Notes & PDFs</li>
              <li className="hover:text-lime-400 cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Email: support@cgp.ai</li>
              <li>India 🇮🇳</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} CGP. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

export default FinalCTAFooter;
