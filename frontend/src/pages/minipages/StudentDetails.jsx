import { useState } from "react";

function StudentDetails() {
  const [form, setForm] = useState({
    name: "",
    marks: "",
    stream: "",
    budget: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // yahin se baad me AI recommendation API call hogi
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-24">

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-sm">
            Student Details
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tell Us About
            <span className="text-lime-400"> Yourself</span>
          </h2>

          <p className="text-white/70 text-lg">
            Fill in your details and let our AI guide you to the best colleges and career path.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white/5 backdrop-blur-md border border-white/10
                     rounded-3xl p-8 space-y-6"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-lime-400 blur-2xl opacity-20"></div>

          <div className="relative z-10 grid gap-6">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-black/60 border border-white/20
                         focus:border-lime-400 outline-none"
            />

            {/* Marks */}
            <input
              type="number"
              name="marks"
              placeholder="12th Marks (%)"
              value={form.marks}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-black/60 border border-white/20
                         focus:border-lime-400 outline-none"
            />

            {/* Stream */}
            <select
              name="stream"
              value={form.stream}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-black/60 border border-white/20
                         focus:border-lime-400 outline-none"
            >
              <option value="">Select Stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>

            {/* Budget */}
            <input
              type="number"
              name="budget"
              placeholder="Budget (per year ₹)"
              value={form.budget}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-black/60 border border-white/20
                         focus:border-lime-400 outline-none"
            />

            {/* Location */}
            <input
              type="text"
              name="location"
              placeholder="Preferred Location"
              value={form.location}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-black/60 border border-white/20
                         focus:border-lime-400 outline-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full py-3 rounded-full bg-lime-400 text-black font-semibold
                         hover:scale-105 transition shadow-[0_0_20px_rgba(163,230,53,0.6)]"
            >
              Get AI Recommendation →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default StudentDetails;
