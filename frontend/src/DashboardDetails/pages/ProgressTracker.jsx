import { useState, useEffect } from "react";
import ProfileCompletionModal from "./ProfileCompletionModal";
import { useNavigate } from "react-router-dom";

function ProgressTracker() {

  const [progress, setProgress] = useState(20);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const stored = localStorage.getItem("profileData");

    if (stored) {
      const data = JSON.parse(stored);

      let filled = 0;
      let total = 7;

      if (data.name) filled++;
      if (data.email) filled++;
      if (data.education) filled++;
      if (data.skills) filled++;
      if (data.resume) filled++;
      if (data.github) filled++;
      if (data.linkedin) filled++;

      setProgress(Math.round((filled / total) * 100));
    }

  }, []);

  const handleClick = () => {

    const stored = localStorage.getItem("profileData");

    if (stored) {
      // profile already filled → open profile page
      navigate("/personal-info");
    } else {
      // profile not filled → open form
      setOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-black p-4 rounded-lg border border-gray-800 cursor-pointer hover:border-green-400 transition"
      >
        <h3 className="text-sm text-gray-400 mb-2">
          Profile Completion
        </h3>

        <p className="text-2xl font-bold text-green-400">
          {progress}%
        </p>

        <div className="w-full bg-gray-800 h-2 rounded mt-3">
          <div
            className="bg-green-400 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>

         {progress === 100 ? (
    <p className="text-green-400 text-xs mt-2">
      Profile Completed ✔
    </p>
  ) : (
    <p className="text-yellow-400 text-xs mt-2">
      Click to complete profile
    </p>
  )}
      </div>

      {open && (
        <ProfileCompletionModal
          setOpen={setOpen}
          setProgress={setProgress}
        />
      )}
    </>
  );
}

export default ProgressTracker;