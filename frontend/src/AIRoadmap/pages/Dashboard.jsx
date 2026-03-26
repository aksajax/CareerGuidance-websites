import React, { useState } from 'react';
import api from '../api/axiosConfig';
import Navbar from '../components/Navbar';
import { Wand2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize karein
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  // const generateRoadmap = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await api.post('generate-roadmap/', { topic });
      
  //     // Response se course_id nikaalein
  //     const newCourseId = response.data.course_id;
      
  //     alert("Roadmap Generated!");
      
  //     // Seedha us course ke page par le jayein
  //     navigate(`/course/${newCourseId}`); 
      
  //   } catch (err) {
  //     alert("Failed to generate roadmap.");
  //   }
  //   setLoading(false);
  // };
  const generateRoadmap = async () => {
  setLoading(true);
  try {
    const response = await api.post('generate-roadmap/', { topic });
    const matchId = response.data.course_id;
    
    // Naya data nahi bana, seedha purane data par navigation
    navigate(`/course/${matchId}`); 
  } catch (err) {
    alert("Sorry! Ye course hamare pas abhi available nahi hai.");
  }
  setLoading(false);
};

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-20 p-8 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl text-center">
        <Wand2 className="mx-auto text-blue-500 mb-6" size={60} />
        <h2 className="text-3xl font-bold mb-4">AI Roadmap Generator</h2>
        <p className="text-gray-400 mb-8">Type any topic (e.g. "React Hooks" or "Backend with Node") and let AI build your course.</p>
        <div className="flex gap-4">
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic..." 
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={generateRoadmap}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 px-8 py-4 rounded-xl font-bold transition flex items-center gap-2"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;