function Sidebar({ activeSection, setActiveSection }) {
  const item = (key) =>
    `block px-4 py-3 rounded-lg cursor-pointer transition
     ${
       activeSection === key
         ? "bg-lime-400 text-black font-semibold"
         : "text-white/70 hover:bg-white/10 hover:text-lime-400"
     }`;

  return (
    <aside className="w-64 bg-black border-r border-white/10 hidden md:block mt-20">
      
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-1">Welcome, Student!</h2>
        <p className="text-sm text-white/70">Here's your dashboard</p>
      </div>

      <nav className="px-4 space-y-2">
        <div onClick={() => setActiveSection("dashboard")} className={item("dashboard")}>
          Dashboard
        </div>

        <div onClick={() => setActiveSection("student")} className={item("student")}>
          Student Details
        </div>

        <div onClick={() => setActiveSection("roadmap")} className={item("roadmap")}>
          Roadmap
        </div>

        <div onClick={() => setActiveSection("colleges")} className={item("colleges")}>
          Colleges
        </div>

        <div onClick={() => setActiveSection("profile")} className={item("profile")}>
          Profile
        </div>

        <div onClick={() => setActiveSection("settings")} className={item("settings")}>
          Settings
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;