import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle2, ChevronRight, Award, BrainCircuit } from 'lucide-react';

const QuizEngine = ({ topic, questions, onComplete, onBack }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30); 
  const [isFinished, setIsFinished] = useState(false);
//   const [score, setScore] = useState(0);

  // Timer Logic
  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isFinished) {
      handleNext(); 
    }
  }, [timeLeft, isFinished]);

  const handleNext = () => {
  if (!selectedOption) return;

  // Sirf user answer ko store karo (ResultPage khud comparison kar lega)
  const updatedAnswers = { ...userAnswers, [currentIdx]: selectedOption };
  setUserAnswers(updatedAnswers);

  if (currentIdx + 1 < questions.length) {
    setCurrentIdx(prev => prev + 1);
    setSelectedOption(null);
    setTimeLeft(30);
  } else {
    setIsFinished(true);
    // Final object bhej rahe hain jisme saare answers hain
    onComplete(updatedAnswers);
  }
};

  const currentQ = questions[currentIdx];
  const progress = ((currentIdx + 1) / questions.length) * 100;

  if (isFinished) return null; // ResultPage handle karega display
 
  return (
    <div className="max-w-4xl mx-auto p-6 animate-in zoom-in-95 duration-500">
      {/* Top Bar: Progress & Status */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
        <div className="flex-1 w-full">
          <div className="flex justify-between mb-2 items-end">
            <span className="text-lime-500 font-bold text-xs uppercase tracking-widest">Neural Progress</span>
            <span className="text-gray-500 text-xs font-mono">{currentIdx + 1} / {questions.length}</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-lime-500 to-emerald-400 shadow-[0_0_10px_rgba(132,204,22,0.6)] transition-all duration-700 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl border backdrop-blur-md transition-colors ${
          timeLeft < 10 
          ? 'border-red-500/50 bg-red-500/10 text-red-500 animate-pulse' 
          : 'border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
        }`}>
          <Timer className="w-5 h-5" />
          <span className="font-mono text-xl font-black">{timeLeft < 10 ? `0${timeLeft}` : timeLeft}s</span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="relative group">
        {/* Decorative Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-lime-500/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
        
        <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-lime-500/10 rounded-xl border border-lime-500/20">
               <BrainCircuit className="w-6 h-6 text-lime-500" />
            </div>
            <h2 className="text-2xl text-white font-bold leading-tight tracking-tight">
              {currentQ?.question_text}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
  {['A', 'B', 'C', 'D'].map((opt) => {
    // Safety Check: Check karein ki option exist karta hai ya nahi
    const optionKey = `option_${opt.toLowerCase()}`;
    const optionText = currentQ?.[optionKey]; 

    return (
      <button
        key={opt}
        onClick={() => setSelectedOption(opt)}
        className={`p-6 rounded-[2rem] text-left transition-all duration-300 border ${
          selectedOption === opt
            ? 'bg-lime-500/20 border-lime-500 shadow-[0_0_20px_rgba(132,204,22,0.2)] text-white'
            : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
        }`}
      >
        <div className="flex items-center gap-4">
          <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black ${
            selectedOption === opt ? 'bg-lime-500 text-black' : 'bg-white/10 text-gray-500'
          }`}>
            {opt}
          </span>
          {/* Agar optionText undefined hai toh "Option not available" dikhayega */}
          <span className="font-medium">{optionText || "Option not available"}</span>
        </div>
      </button>
    );
  })}
</div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center mt-10">
        <button 
          onClick={onBack}
          className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          Abort Session
        </button>
        
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`group flex items-center gap-3 px-10 py-4 rounded-2xl font-black uppercase tracking-tighter transition-all duration-500 ${
            selectedOption 
            ? 'bg-lime-500 text-black hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] hover:-translate-y-1' 
            : 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50'
          }`}
        >
          {currentIdx + 1 === questions.length ? 'Finalize Analysis' : 'Next Question'}
          <ChevronRight className={`w-5 h-5 transition-transform ${selectedOption ? 'group-hover:translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default QuizEngine;