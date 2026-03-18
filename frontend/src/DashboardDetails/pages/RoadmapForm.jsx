import { useState } from "react";

function RoadmapForm({ setRoadmapData }) {

  const [form, setForm] = useState({
    interest: "",
    level: "",
    goal: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const roadmap = generateRoadmap(form);

    setRoadmapData(roadmap);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <select
        className="w-full p-2 bg-black border border-gray-700"
        onChange={(e) =>
          setForm({ ...form, interest: e.target.value })
        }
      >
        <option>Select Interest</option>
        <option>Web Development</option>
        <option>Data Science</option>
        <option>Cyber Security</option>
      </select>

      <select
        className="w-full p-2 bg-black border border-gray-700"
        onChange={(e) =>
          setForm({ ...form, level: e.target.value })
        }
      >
        <option>Skill Level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
      </select>

      <input
        type="text"
        placeholder="Target Role"
        className="w-full p-2 bg-black border border-gray-700"
        onChange={(e) =>
          setForm({ ...form, goal: e.target.value })
        }
      />

      <button
        className="bg-green-500 px-4 py-2 rounded"
      >
        Generate Roadmap
      </button>

    </form>
  );
}

export default RoadmapForm;