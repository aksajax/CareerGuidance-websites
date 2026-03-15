function NearbyColleges() {
  const colleges = [
    {
      name: "ABC Engineering College",
      location: "Bangalore",
      distance: "5 km",
      fees: "₹1.2 L / year",
      rating: "4.5",
    },
    {
      name: "XYZ Institute of Technology",
      location: "Bangalore",
      distance: "8 km",
      fees: "₹95 K / year",
      rating: "4.2",
    },
    {
      name: "National College of Science",
      location: "Bangalore",
      distance: "12 km",
      fees: "₹1.5 L / year",
      rating: "4.0",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-24">

      {/* Background Grid */}
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
            Nearby Colleges
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Colleges Near
            <span className="text-lime-400"> Your Location</span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Based on your preferred location, here are some nearby colleges
            that best match your profile.
          </p>
        </div>

        {/* College Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-md border border-white/10
                         rounded-2xl p-6 hover:border-lime-400 transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-lime-400 blur-2xl opacity-0 group-hover:opacity-20 transition"></div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-semibold">
                  {college.name}
                </h3>

                <p className="text-white/70 text-sm">
                  📍 {college.location}
                </p>

                <p className="text-white/70 text-sm">
                  📏 Distance: {college.distance}
                </p>

                <p className="text-white/70 text-sm">
                  💰 Fees: {college.fees}
                </p>

                <p className="text-white/70 text-sm">
                  ⭐ Rating: {college.rating}
                </p>

                <button
                  className="mt-4 w-full py-2 rounded-full bg-lime-400 text-black font-semibold
                             hover:scale-105 transition shadow-[0_0_15px_rgba(163,230,53,0.6)]"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NearbyColleges;
