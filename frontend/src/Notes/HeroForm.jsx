import React, { useState } from 'react';
import { generateRoadmap } from './services/api';

const HeroForm = ({ onRoadmapGenerated }) => {
    const [formData, setFormData] = useState({ target_role: '', current_skills: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await generateRoadmap(formData);
            onRoadmapGenerated(data);
        } catch (error) {
            alert("Bhiya, roadmap generate nahi ho paya. Check console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-20 px-6 text-center bg-[#050505]">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                LEVEL UP YOUR <span className="text-[#a3ff12]">CAREER.</span>
            </h1>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                AI-driven personalized roadmaps to take you from beginner to industry-ready. 
                Enter your target role and let the Groq engine work.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                <input 
                    type="text"
                    placeholder="Target Role (e.g. Full Stack Developer)"
                    className="w-full bg-[#111] border border-white/10 p-4 rounded-xl text-white focus:border-[#a3ff12] outline-none transition-all"
                    onChange={(e) => setFormData({...formData, target_role: e.target.value})}
                    required
                />
                <textarea 
                    placeholder="Your Current Skills (e.g. HTML, CSS, Basics of JS)"
                    className="w-full bg-[#111] border border-white/10 p-4 rounded-xl text-white focus:border-[#a3ff12] outline-none transition-all h-32"
                    onChange={(e) => setFormData({...formData, current_skills: e.target.value})}
                    required
                />
                <button 
                    disabled={loading}
                    className="w-full bg-[#a3ff12] text-black font-bold py-4 rounded-xl hover:shadow-[0_0_30px_#a3ff12] transition-all disabled:opacity-50"
                >
                    {loading ? "GENERATING NEURAL ROADMAP..." : "GENERATE MY PATH"}
                </button>
            </form>
        </div>
    );
};

export default HeroForm;