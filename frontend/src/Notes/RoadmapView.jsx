import React from 'react';
import { updateMilestone } from './services/api';

const RoadmapView = ({ roadmap }) => {
    const handleToggle = async (id, currentStatus) => {
        await updateMilestone(id, !currentStatus);
        window.location.reload(); // Quick refresh to show progress
    };

    return (
        <div className="max-w-4xl mx-auto p-8 text-white">
            <div className="mb-12 border-b border-white/10 pb-6 text-center">
                <h2 className="text-4xl font-black text-[#a3ff12]">{roadmap.title}</h2>
                <p className="text-gray-500 mt-2 italic">Based on your skills: {roadmap.current_skills}</p>
            </div>

            <div className="relative border-l-2 border-[#a3ff12]/30 ml-4">
                {roadmap.milestones?.map((step, index) => (
                    <div key={index} className="mb-12 ml-8 relative">
                        {/* Dot */}
                        <div className={`absolute -left-[41px] mt-1.5 w-4 h-4 rounded-full ${step.is_completed ? 'bg-[#a3ff12]' : 'bg-gray-800'} border-2 border-[#a3ff12]`} />
                        
                        <div className={`bg-[#111] p-6 rounded-2xl border transition-all ${step.is_completed ? 'border-[#a3ff12]/50 opacity-70' : 'border-white/10'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[#a3ff12] font-mono text-xs font-bold uppercase tracking-widest">WEEK {step.week_number}</span>
                                <input 
                                    type="checkbox" 
                                    checked={step.is_completed}
                                    className="accent-[#a3ff12] w-5 h-5 cursor-pointer"
                                    onChange={() => handleToggle(step.id, step.is_completed)}
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{step.topic}</h3>
                            <p className="text-gray-400 mb-4 leading-relaxed">{step.description}</p>
                            
                            <div className="flex gap-3">
                                {step.resources?.split(',').map((link, i) => (
                                    <a key={i} href={link.trim()} target="_blank" rel="noreferrer" className="text-xs text-[#a3ff12] underline hover:text-white transition-colors">
                                        Source {i+1}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadmapView;