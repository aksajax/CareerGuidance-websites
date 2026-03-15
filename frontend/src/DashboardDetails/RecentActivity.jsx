function RecentActivity() {
  const activities = [
    "Generated Engineering Roadmap",
    "Viewed IIT Colleges",
    "Watched Career Guidance Video",
    "Downloaded Entrance Exam Notes",
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

      <ul className="space-y-3">
        {activities.map((item, i) => (
          <li
            key={i}
            className="p-3 rounded-lg bg-black/40 text-white/70
                       hover:text-lime-400 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;
