import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileCompletionModal({ setOpen, setProgress }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
    resume: null,
    github: "",
    linkedin: "",
    goal: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const calculateProgress = () => {

    let total = 7;
    let filled = 0;

    if (form.name) filled++;
    if (form.email) filled++;
    if (form.education) filled++;
    if (form.skills) filled++;
    if (form.resume) filled++;
    if (form.github) filled++;
    if (form.linkedin) filled++;

    return Math.round((filled / total) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const progress = calculateProgress();

    setProgress(progress);

    localStorage.setItem("profileData", JSON.stringify(form));

    setOpen(false);

    navigate("/personal-info");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">

      <div className="bg-[#0f0f0f] p-6 rounded-xl w-[600px] border border-gray-800">

        <h2 className="text-xl font-semibold mb-4">
          Complete Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 bg-black border border-gray-700"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 bg-black border border-gray-700"
            onChange={handleChange}
          />

          <input
            type="text"
            name="education"
            placeholder="Education"
            className="w-full p-2 bg-black border border-gray-700"
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (React, Python)"
            className="w-full p-2 bg-black border border-gray-700"
            onChange={handleChange}
          />

          <input
            type="file"
            name="resume"
            className="w-full p-2 bg-black border border-gray-700"
            onChange={(e) =>
              setForm({ ...form, resume: e.target.files[0] })
            }
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Profile Link"
            className="w-full p-2 bg-black border border-gray-700"
            onChange={handleChange}
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile Link"
            className="w-full p-2 bg-black border border-gray-700"
            onChange={handleChange}
          />

          <input
            type="text"
            name="goal"
            placeholder="Career Goal"
            className="w-full p-2 bg-black border border-gray-700"
            onChange={handleChange}
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 border border-gray-700 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-green-500 px-4 py-2 rounded"
            >
              Save Profile
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ProfileCompletionModal;