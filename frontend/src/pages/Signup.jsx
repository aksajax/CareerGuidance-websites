import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const BASE = import.meta.env.VITE_DJANGO_BASE_URL;
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch(`${BASE}/api/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Account created. Redirecting to login...");
        setTimeout(() => nav("/login"), 1200);
      } else {
        setMsg(data.username || data.password || JSON.stringify(data));
      }
    } catch (err) {
      setMsg("Signup failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl p-8 text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full bg-transparent border-b border-white/50 py-2 focus:outline-none placeholder:text-white/70"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/50 py-2 focus:outline-none placeholder:text-white/70"
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full bg-transparent border-b border-white/50 py-2 focus:outline-none placeholder:text-white/70"
          />

          <input
            name="password2"
            type="password"
            value={form.password2}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            className="w-full bg-transparent border-b border-white/50 py-2 focus:outline-none placeholder:text-white/70"
          />

          <button className="w-full mt-4 bg-slate-800 hover:bg-slate-900 transition py-2 rounded-lg font-semibold">
            Create Account
          </button>
        </form>

        {msg && (
          <p className="mt-4 text-center text-sm text-yellow-300">{msg}</p>
        )}

        <p className="mt-6 text-center text-sm text-white/80">
          Already have an account?{" "}
          <a href="/login" className="font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
