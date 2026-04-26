import React, { useState, useEffect } from 'react';
import { ChevronRight, BrainCircuit, Sparkles, Search, X } from 'lucide-react';
import { fetchPaths, fetchTopics, fetchQuiz } from '../utils/auth.js';
import QuizEngine from './QuizEngine'; 
import ResultPage from './ResultPage'; 

const LearningCenter = () => {
  const [view, setView] = useState('PATHS');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search State
  const [selection, setSelection] = useState({ path: null, topic: null });
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    if (view === 'PATHS') {
      setLoading(true);
      fetchPaths().then(res => {
        setData(res);
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, [view]);

  // --- Search Logic ---
  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handlePathSelect = (path) => {
    setLoading(true);
    setSearchTerm(""); // Clear search on select
    setSelection({ ...selection, path });
    fetchTopics(path.id).then(res => {
      setData(res);
      setView('TOPICS');
      setLoading(false);
    });
  };

  const handleTopicSelect = (topic) => {
    setLoading(true);
    setSelection({ ...selection, topic });
    fetchQuiz(topic.id).then(res => {
      setQuizQuestions(res);
      setView('QUIZ');
      setLoading(false);
    });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden text-white pt-20">
      
      {/* Background Glows (Same as before) */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 pb-20">
        
        {/* View 1: PATHS with Search Bar */}
        {view === 'PATHS' && (
            <div className="max-w-7xl mx-auto p-8 animate-in fade-in duration-1000">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-1.5 bg-lime-500 rounded-full shadow-[0_0_20px_rgba(132,204,22,0.8)]"></div>
                        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">
                            Career <span className="text-lime-500">Quiz</span>
                        </h2>
                    </div>

                    {/* --- FUTURISTIC SEARCH BAR --- */}
                    <div className="relative group w-full md:w-96">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                        <div className="relative flex items-center bg-black/60 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-xl">
                            <Search className="w-5 h-5 text-lime-500 mr-3" />
                            <input 
                                type="text"
                                placeholder="Search Quiz or Path..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-600 font-medium"
                            />
                            {searchTerm && (
                                <button onClick={() => setSearchTerm("")}>
                                    <X className="w-4 h-4 text-gray-500 hover:text-white" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-32"><div className="h-12 w-12 border-t-2 border-lime-500 rounded-full animate-spin"></div></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {filteredData.length > 0 ? (
                            filteredData.map(path => (
                                <div key={path.id} 
                                     onClick={() => handlePathSelect(path)}
                                     className="group relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-2 rounded-[2.5rem] hover:border-lime-500/40 transition-all duration-500 cursor-pointer shadow-2xl overflow-hidden">
                                    <div className="p-6">
                                        <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-black/40">
                                            <img src={path.thumbnail} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-400">{path.title}</h3>
                                        <p className="text-gray-500 text-sm line-clamp-2 mb-6 italic">{path.description}</p>
                                        <div className="flex items-center gap-2 text-lime-500 font-black text-[10px] tracking-[0.2em] uppercase">
                                            Initialize <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-gray-500 italic text-xl">No quiz found matching "{searchTerm}"</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )}

        {/* --- TOPICS VIEW WITH SEARCH --- */}
        {view === 'TOPICS' && (
            <div className="max-w-4xl mx-auto p-8 animate-in slide-in-from-bottom-10 duration-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <button onClick={() => {setView('PATHS'); setSearchTerm("");}} className="flex items-center gap-2 text-gray-500 hover:text-lime-500 font-bold uppercase text-[10px] tracking-widest transition-all">
                        <ChevronRight className="rotate-180 w-3 h-3" /> Return
                    </button>

                    {/* Topic Search */}
                    <div className="relative flex items-center bg-white/5 border border-white/5 rounded-xl px-4 py-2 w-full md:w-64">
                        <Search className="w-4 h-4 text-gray-600 mr-2" />
                        <input 
                            type="text"
                            placeholder="Filter topics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent border-none outline-none text-white text-xs w-full"
                        />
                    </div>
                </div>
                
                <h2 className="text-5xl font-black text-white mb-12 tracking-tighter italic">
                    {selection.path?.title} <span className="text-lime-500">.</span>
                </h2>

                <div className="grid gap-6">
                    {filteredData.map(topic => (
                        <div key={topic.id} 
                             onClick={() => handleTopicSelect(topic)}
                             className="group flex items-center justify-between p-8 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2rem] hover:bg-lime-500/5 hover:border-lime-500/20 transition-all cursor-pointer">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-black/60 rounded-2xl border border-white/10 group-hover:border-lime-500/40">
                                    <BrainCircuit className="w-8 h-8 text-lime-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-white">{topic.title}</h4>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-lime-500 group-hover:translate-x-2 transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* QUIZ & RESULT components same as before */}
        {view === 'QUIZ' && <QuizEngine topic={selection.topic} questions={quizQuestions} onComplete={(ans) => { setUserAnswers(ans); setView('RESULT'); }} onBack={() => setView('TOPICS')} />}
        {view === 'RESULT' && <ResultPage questions={quizQuestions} userAnswers={userAnswers} onRetake={() => setView('QUIZ')} onDashboard={() => setView('PATHS')} />}
      </div>
    </div>
  );
};

export default LearningCenter;