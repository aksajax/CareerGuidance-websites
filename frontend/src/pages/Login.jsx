import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTokens } from "../utils/auth";

function Login() {
  const BASE = import.meta.env.VITE_DJANGO_BASE_URL;
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch(`${BASE}/api/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        saveTokens(data);
        setMsg("Login successful!");
        setTimeout(() => nav("/"), 800);
      } else {
        setMsg(data.detail || "Invalid credentials");
      }
    } catch (err) {
      setMsg("Login failed");
    }
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl p-8 text-white">
        {/* Close button */}
        <button className="absolute top-4 right-4 text-xl opacity-80 hover:opacity-100">
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-transparent border-b border-white/50 py-2 focus:outline-none placeholder:text-white/70"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full bg-transparent border-b border-white/50 py-2 focus:outline-none placeholder:text-white/70"
            />
          </div>

          <div className="flex justify-between text-sm text-white/80">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="w-full mt-4 bg-slate-800 hover:bg-slate-900 transition py-2 rounded-lg font-semibold">
            Login
          </button>
        </form>

        {msg && (
          <p className="mt-4 text-center text-sm text-yellow-300">{msg}</p>
        )}

        <p className="mt-6 text-center text-sm text-white/80">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
