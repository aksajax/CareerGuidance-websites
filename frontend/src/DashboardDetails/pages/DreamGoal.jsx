import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DreamGoal() {

  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    const stored = localStorage.getItem("profileData");

    if (stored) {

      const data = JSON.parse(stored);

      if (data.goal) {
        setGoal(data.goal);
      }

    }

  }, []);

  return (

    <div
      onClick={() => navigate("/")}
      className="bg-black p-4 rounded-lg border border-gray-800 cursor-pointer hover:border-green-400 transition"
    >

      <h3 className="text-sm text-gray-400 mb-3">
        Dream Goal
      </h3>

      {goal ? (

        <p className="text-lg font-semibold text-green-400">
          {goal}
        </p>

      ) : (

        <p className="text-yellow-400 text-sm">
          Click to add your dream career goal
        </p>

      )}

    </div>

  );
}

export default DreamGoal;