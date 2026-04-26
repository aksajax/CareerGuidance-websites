import React, { useEffect, useState } from 'react';
import { fetchRoadmaps } from './services/api';

const Dashboard = ({ onSelectRoadmap }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchRoadmaps().then(setHistory);
    }, []);

    return (
        <div className="p-8 bg-[#0a0a0a] min-h-screen text-white">
            <h2 className="text-2xl font-black mb-8 border-l-4 border-[#a3ff12] pl-4 uppercase">My Roadmaps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {history.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => onSelectRoadmap(item)}
                        className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#a3ff12] transition-all cursor-pointer group"
                    >
                        <h3 className="text-xl font-bold group-hover:text-[#a3ff12] transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-2">Target: {item.target_role}</p>
                        <div className="mt-4 text-[10px] text-gray-600 font-mono">
                            CREATED ON: {new Date(item.created_at).toLocaleDateString()}
                        </div>
                    </div>
                ))}
                {history.length === 0 && <p className="text-gray-600">No roadmaps generated yet. Bhiya, ek generate karo!</p>}
            </div>
        </div>
    );
};

export default Dashboard;