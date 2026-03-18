function RecommendedActions() {

  const actions = [
    {
      title: "Complete React Hooks Course",
      type: "Course"
    },
    {
      title: "Read Article: Docker for Developers",
      type: "Article"
    },
    {
      title: "Daily Coding Challenge",
      type: "Practice"
    }
  ];

  return (
    <div className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        Recommended For You
      </h2>

      <div className="space-y-3">

        {actions.map((item, index) => (
          <div
            key={index}
            className="bg-black p-3 rounded-lg border border-gray-800 flex justify-between"
          >
            <p className="text-sm">
              {item.title}
            </p>

            <span className="text-xs text-green-400">
              {item.type}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RecommendedActions;