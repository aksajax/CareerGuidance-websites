import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function PersonalInfo() {

  const [data, setData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [progress, setProgress] = useState(0);

  const [goal, setGoal] = useState("");
const [goalInput, setGoalInput] = useState("");



  useEffect(() => {

    const stored = localStorage.getItem("profileData");
   

    if (stored) {

      const profile = JSON.parse(stored);

      setData(profile);

      if (profile.skills) {
        setSkills(profile.skills.split(","));
      }
       if (profile.goal) {
  setGoal(profile.goal);
}

      calculateProgress(profile);
    }
    

  }, []);

  const saveGoal = () => {

  const stored = JSON.parse(localStorage.getItem("profileData"));

  stored.goal = goalInput;

  localStorage.setItem("profileData", JSON.stringify(stored));

  setGoal(goalInput);

  calculateProgress(stored);   // ← add this

  setGoalInput("");
};
const deleteGoal = () => {

  const stored = JSON.parse(localStorage.getItem("profileData"));

  delete stored.goal;

  localStorage.setItem("profileData", JSON.stringify(stored));

  setGoal("");
  calculateProgress(stored);
};


  const calculateProgress = (profile) => {

    let filled = 0;
    const total = 8;

    if (profile.name) filled++;
    if (profile.email) filled++;
    if (profile.education) filled++;
    if (profile.skills) filled++;
    if (profile.resume) filled++;
    if (profile.github) filled++;
    if (profile.linkedin) filled++;
    if (profile.goal) filled++;

    setProgress(Math.round((filled / total) * 100));
  };


  const updateStorage = (updatedSkills) => {

    const stored = JSON.parse(localStorage.getItem("profileData"));

    stored.skills = updatedSkills.join(",");

    localStorage.setItem("profileData", JSON.stringify(stored));

    setData(stored);

    calculateProgress(stored);
  };


  const addSkill = () => {

    if (!skillInput.trim()) return;

    const updated = [...skills, skillInput];

    setSkills(updated);

    updateStorage(updated);

    setSkillInput("");
  };


  const deleteSkill = (index) => {

    const updated = skills.filter((_, i) => i !== index);

    setSkills(updated);

    updateStorage(updated);
  };


  if (!data) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        No Profile Data Found
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-black text-white p-10 pt-30">

      {/* Profile Header */}

      <div className="flex items-center gap-6 mb-10">

        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold">
          {data.name?.charAt(0)}
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            {data.name}
          </h1>

          <p className="text-gray-400">
            Target: {data.goal}
          </p>

        </div>

      </div>


      {/* Profile Completion */}

      <div className="mb-8">

        <h3 className="text-sm text-gray-400 mb-2">
          Profile Completion
        </h3>

        <div className="w-full bg-gray-800 h-3 rounded">

          <div
            className="bg-green-400 h-3 rounded"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p className="text-sm mt-2 text-green-400">
          {progress}% Completed
        </p>

      </div>


      {/* Personal Details */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

          <h2 className="text-lg font-semibold mb-4">
            Personal Information
          </h2>

          <p><b>Email:</b> {data.email}</p>
          <p><b>Education:</b> {data.education}</p>

        </div>


        <div className="mt-8 bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

  <h2 className="text-lg font-semibold mb-4">
    Dream Career Goal
  </h2>

  {goal ? (

    <div className="flex items-center gap-4">

      <p className="text-green-400 font-semibold">
        {goal}
      </p>

      <button
        onClick={deleteGoal}
        className="text-red-400 text-sm"
      >
        Delete
      </button>

    </div>

  ) : (

    <div className="flex gap-3">

      <input
        value={goalInput}
        onChange={(e) => setGoalInput(e.target.value)}
        placeholder="Enter your dream role (ex: Full Stack Developer)"
        className="bg-black border border-gray-700 px-3 py-2 rounded text-sm"
      />

      <button
        onClick={saveGoal}
        className="bg-green-500 text-black px-4 py-2 rounded"
      >
        Save
      </button>

    </div>

  )}

</div>

      </div>


      {/* Skills Manager */}

      <div className="mt-8 bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

        <h2 className="text-lg font-semibold mb-4">
          Manage Skills
        </h2>

        <div className="flex gap-3 mb-4">

          <input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Add Skill"
            className="bg-black border border-gray-700 px-3 py-2 rounded text-sm"
          />

          <button
            onClick={addSkill}
            className="bg-green-500 text-black px-4 py-2 rounded"
          >
            Add
          </button>

        </div>

        <div className="flex flex-wrap gap-3">

          {skills.map((skill, index) => (

            <span
              key={index}
              className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm flex items-center gap-2"
            >

              {skill}

              <button
                onClick={() => deleteSkill(index)}
                className="text-red-400"
              >
                ✕
              </button>

            </span>

          ))}

        </div>

      </div>


      {/* Links */}

      <div className="mt-8 grid md:grid-cols-2 gap-6">

        <div className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

          <h2 className="font-semibold mb-2">
            GitHub
          </h2>

          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:underline"
          >
            {data.github}
          </a>

        </div>


        <div className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

          <h2 className="font-semibold mb-2">
            LinkedIn
          </h2>

          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:underline"
          >
            {data.linkedin}
          </a>

        </div>

      </div>


     {/* Resume */}

{data.resume && (

<div className="mt-8 bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

<h2 className="font-semibold mb-3">
Resume
</h2>

<a
href="/resumes"
className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold"
>
Download Resume
</a>

</div>

)}

    </div>
  );
}

export default PersonalInfo;