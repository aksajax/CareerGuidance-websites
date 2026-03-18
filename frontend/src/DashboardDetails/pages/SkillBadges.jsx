import { useEffect, useState } from "react";

function SkillBadges() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {

    const stored = localStorage.getItem("profileData");

    if (stored) {
      const data = JSON.parse(stored);

      if (data.skills) {
        setSkills(data.skills.split(","));
      }
    }

  }, []);

  return (

    <div className="bg-black p-4 rounded-lg border border-gray-800">

      <h3 className="text-sm text-gray-400 mb-3">
        Verified Skills
      </h3>

      <div className="flex flex-wrap gap-2">

        {skills.length === 0 && (
          <p className="text-gray-500 text-sm">
            No skills added
          </p>
        )}

        {skills.map((skill, index) => (

          <span
            key={index}
            className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}

export default SkillBadges;