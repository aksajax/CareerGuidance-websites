import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CollegeList = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const [maxBudget, setMaxBudget] = useState(1000000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const res = await axios.get(`${BASEURL}/api/colleges/`);
      setColleges(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const filteredColleges = colleges.filter(
    (clg) =>
      clg.name.toLowerCase().includes(search.toLowerCase()) &&
      clg.fees <= maxBudget
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-lime-400 text-lg font-semibold">
        Loading Colleges...
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-black text-white pt-28 pb-24 overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-sm">
            College Finder
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="text-lime-400">Top Colleges</span>
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Discover colleges that match your career goals, preferences, and
            budget — all in one place.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-16 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl
                        border border-white/10 grid gap-8 md:grid-cols-2">

          <div>
            <label className="text-xs uppercase tracking-widest text-lime-400">
              Search College
            </label>
            <input
              type="text"
              placeholder="Search by college name"
              className="mt-2 w-full p-4 rounded-2xl bg-black/40
                         border border-white/10 outline-none
                         focus:border-lime-400 transition"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-lime-400">
              Max Fees: ₹{parseInt(maxBudget).toLocaleString()}
            </label>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="10000"
              value={maxBudget}
              className="w-full mt-6 accent-lime-400 cursor-pointer"
              onChange={(e) => setMaxBudget(e.target.value)}
            />
          </div>
        </div>

        {/* College Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college) => (
              <div
                key={college.id}
                className="group rounded-3xl overflow-hidden bg-white/5
                           border border-white/10 backdrop-blur-xl
                           hover:border-lime-400 transition-all duration-300
                           hover:shadow-[0_0_40px_rgba(163,230,53,0.15)]"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={`${BASEURL}${college.image}`}
                    alt={college.name}
                    className="w-full h-full object-cover
                               group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/70
                                  px-3 py-1 rounded-full text-lime-400 text-xs font-bold">
                    ⭐ {college.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition">
                    {college.name}
                  </h3>

                  <p className="text-white/50 text-sm mb-4">
                    📍 {college.location}
                  </p>

                  <p className="text-white/60 text-sm line-clamp-2 mb-6">
                    {college.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40">
                        Yearly Fees
                      </p>
                      <p className="text-lg font-bold text-lime-400">
                        ₹{college.fees.toLocaleString()}
                      </p>
                    </div>

                    <Link
                      to={`/college/${college.id}`}
                      className="px-6 py-3 rounded-full bg-lime-400 text-black
                                 font-semibold hover:scale-105 transition"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-white/50">
              No colleges match your filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollegeList;
