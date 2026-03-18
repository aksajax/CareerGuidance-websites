import { useNavigate } from "react-router-dom";
function ResumeBuilder() {
    
    const navigate = useNavigate();
    const templates = [
      { id: 1, name: "Modern", color: "bg-blue-500" },
      { id: 2, name: "Professional", color: "bg-green-500" },
      { id: 3, name: "Minimal", color: "bg-gray-700" },
      { id: 4, name: "Creative", color: "bg-purple-500" },
      { id: 5, name: "Corporate", color: "bg-indigo-500" },
      { id: 6, name: "Simple", color: "bg-yellow-500" },
    ];
    
    const selectTemplate = (template) => {
    
      localStorage.setItem("resumeTemplate", template);
    
      navigate("/resume");
    };
  return (
    <div >

  <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 shadow-lg pt-30">

    {/* Background decoration */}

    <div className="absolute right-0 top-0 opacity-20 text-8xl font-bold">
      CV
    </div>

    <div className="flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-bold text-white mb-2">
          Create Your Professional Resume
        </h2>

        <p className="text-blue-100 max-w-md">
          Build a modern ATS-friendly resume in minutes. 
          Our smart builder helps you craft the perfect resume 
          using your profile data and career goals.
        </p>

        <ul className="mt-4 text-sm text-blue-100 space-y-1">
          <li>✔ ATS Optimized Templates</li>
          <li>✔ AI Assisted Content</li>
          <li>✔ Download as PDF</li>
          <li>✔ Recruiter Friendly Layout</li>
        </ul>

        <button
          onClick={() => navigate("/resume")}
          className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Create Resume →
        </button>

      </div>

      {/* Resume preview box */}

      <div className="hidden md:block bg-white text-black w-56 h-72 rounded-lg shadow-xl p-4">

        <div className="font-bold text-sm mb-2">
          Resume Preview
        </div>

        <div className="h-2 bg-gray-300 rounded mb-2">1</div>
        <div className="h-2 bg-gray-300 rounded mb-2">2</div>
        <div className="h-2 bg-gray-300 rounded mb-2">3</div>

        <div className="mt-4">

          <div className="h-2 bg-gray-400 rounded mb-2">1</div>
          <div className="h-2 bg-gray-300 rounded mb-2">2</div>
          <div className="h-2 bg-gray-300 rounded mb-2">3</div>

        </div>

      </div>

    </div>
    {/* Resume Templates */}

<div className="mt-12">

  <h2 className="text-2xl font-bold mb-6">
    Resume Templates
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {templates.map((template) => (

      <div
        key={template.id}
        onClick={() => selectTemplate(template.name)}
        className="cursor-pointer bg-[#0f0f0f] border border-gray-800 rounded-xl p-4 hover:border-green-400 transition"
      >

        <div className={`h-40 rounded-lg mb-4 ${template.color} flex items-center justify-center text-white font-bold`}>
          {template.name}
        </div>

        <h3 className="text-lg font-semibold">
          {template.name} Template
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          Click to use this template
        </p>

      </div>

    ))}

  </div>

</div>

  </div>

</div>
  )
}

export default ResumeBuilder