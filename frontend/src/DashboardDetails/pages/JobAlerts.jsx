function JobAlerts() {

  const jobs = [
    {
      role: "Frontend Developer",
      company: "Google",
      match: "90%"
    },
    {
      role: "React Developer",
      company: "Amazon",
      match: "85%"
    },
    {
      role: "Full Stack Developer",
      company: "Startup Inc.",
      match: "80%"
    }
  ];

  return (
    <div className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        Job & Internship Alerts
      </h2>

      <div className="space-y-3">

        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-black p-4 rounded-lg border border-gray-800 flex justify-between items-center"
          >

            <div>
              <p className="font-semibold">
                {job.role}
              </p>

              <p className="text-xs text-gray-400">
                {job.company}
              </p>
            </div>

            <span className="text-green-400 text-sm">
              {job.match} Match
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default JobAlerts;