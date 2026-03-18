function MentorshipPanel() {

  const mentors = [
    {
      name: "Rahul Sharma",
      topic: "Frontend Mentorship"
    },
    {
      name: "Anita Singh",
      topic: "Backend Career Guidance"
    }
  ];

  return (
    <div className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        Mentorship & Networking
      </h2>

      <div className="space-y-3">

        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-black p-4 rounded-lg border border-gray-800"
          >

            <p className="font-semibold">
              {mentor.name}
            </p>

            <p className="text-xs text-gray-400">
              {mentor.topic}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default MentorshipPanel;