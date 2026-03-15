function StatsCards() {
  const stats = [
    { title: "Roadmaps Generated", value: "12" },
    { title: "Saved Colleges", value: "5" },
    { title: "Videos Watched", value: "18" },
    { title: "Notes Downloaded", value: "9" },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-white/5 border border-white/10
                     hover:border-lime-400 transition"
        >
          <p className="text-white/60 text-sm">{stat.title}</p>
          <h2 className="text-3xl font-bold mt-2 text-lime-400">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
