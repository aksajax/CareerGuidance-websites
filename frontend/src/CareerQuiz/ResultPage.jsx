import React from 'react';
import { RefreshCcw, LayoutDashboard, CheckCircle2, XCircle, Info, Award, Target } from 'lucide-react';

const ResultPage = ({ questions, userAnswers, onRetake, onDashboard }) => {
  
  // 1. Unified Score Calculation (Fixes 'q' reference error)
  const calculateScore = () => {
    if (!questions || !userAnswers) return 0;
    return questions.reduce((acc, currentQ, idx) => {
      const dbCorrect = currentQ.correct_option?.toString().trim().toUpperCase();
      const userAns = userAnswers[idx]?.toString().trim().toUpperCase();
      return dbCorrect === userAns ? acc + 1 : acc;
    }, 0);
  };

  const score = calculateScore();
  const totalQuestions = questions?.length || 0;
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 text-white animate-in fade-in zoom-in-95 duration-700">
      
      {/* Hero Score Section */}
      <div className="relative mb-12 p-1 bg-gradient-to-b from-lime-500/20 to-transparent rounded-[3rem]">
        <div className="bg-black/60 backdrop-blur-3xl p-12 rounded-[2.8rem] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-lime-500/20 blur-[100px] rounded-full"></div>
          
          <Award className="w-16 h-16 text-lime-500 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(132,204,22,0.6)]" />
          <h1 className="text-sm uppercase tracking-[0.3em] text-lime-500 font-black mb-2">Assessment Protocol Complete</h1>
          
          <div className="relative inline-block">
            <span className="text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              {percentage.toFixed(0)}%
            </span>
            <div className="absolute -right-8 -top-2 h-4 w-4 bg-lime-500 rounded-full animate-ping"></div>
          </div>

          <p className="text-gray-400 mt-6 max-w-xs mx-auto leading-relaxed italic">
            You successfully analyzed <span className="text-white font-bold">{score}</span> out of <span className="text-white font-bold">{totalQuestions}</span> core modules.
          </p>
        </div>
      </div>

      {/* Analysis Grid */}
      <div className="space-y-8 mb-16">
        <div className="flex items-center gap-3 px-2">
          <Target className="text-lime-500 w-6 h-6" />
          <h2 className="text-2xl font-black uppercase tracking-tight">Detailed <span className="text-lime-500">Analysis</span></h2>
        </div>
        
        {questions.map((q, idx) => {
          // 2. Safe Comparison for each card
          const dbCorrect = q.correct_option?.toString().trim().toUpperCase();
          const userAns = userAnswers[idx]?.toString().trim().toUpperCase();
          const isCorrect = dbCorrect === userAns;

          return (
            <div key={idx} className="group relative">
              <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${isCorrect ? 'bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.5)]' : 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]'}`}></div>
              
              <div className="ml-4 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/5 transition-all duration-300 group-hover:bg-white/10">
                <div className="flex justify-between items-start gap-6 mb-6">
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    <span className="text-gray-600 mr-2 font-mono">0{idx + 1}.</span> {q.question_text}
                  </h3>
                  {isCorrect ? 
                    <div className="p-2 bg-lime-500/20 rounded-lg border border-lime-500/30"><CheckCircle2 className="text-lime-500 w-6 h-6" /></div> : 
                    <div className="p-2 bg-red-500/20 rounded-lg border border-red-500/30"><XCircle className="text-red-500 w-6 h-6" /></div>
                  }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {['A', 'B', 'C', 'D'].map(opt => {
                    const isOptionCorrect = dbCorrect === opt;
                    const isOptionSelected = userAns === opt;

                    return (
                      <div key={opt} className={`p-4 rounded-xl text-sm font-medium border transition-all ${
                        isOptionCorrect 
                          ? 'bg-lime-500/20 text-lime-300 border-lime-500/40 shadow-[0_0_15px_rgba(132,204,22,0.1)]' : 
                        isOptionSelected 
                          ? 'bg-red-500/20 text-red-300 border-red-500/40' : 
                        'bg-black/20 text-gray-500 border-white/5'
                      }`}>
                        <span className="opacity-50 mr-2 font-black">{opt}</span> {q[`option_${opt.toLowerCase()}`]}
                      </div>
                    );
                  })}
                </div>

                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10"><Info className="w-12 h-12" /></div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <span className="text-lime-500 font-black text-[10px] uppercase tracking-widest block mb-2 underline underline-offset-4 decoration-lime-500/30">
                      Core Logic & Explanation
                    </span>
                    {q.explanation || "System logs do not contain further data for this module."}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Matrix */}
      <div className="flex flex-col md:flex-row gap-6 justify-center pb-24 px-4">
        <button 
          onClick={onRetake} 
          className="group flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all font-black uppercase tracking-tighter text-sm"
        >
          <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" /> Re-Initialize
        </button>
        
        <button 
          onClick={onDashboard} 
          className="group flex items-center justify-center gap-3 px-12 py-5 bg-lime-500 text-black hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] hover:-translate-y-1 rounded-2xl transition-all font-black uppercase tracking-tighter text-sm"
        >
          <LayoutDashboard className="w-5 h-5" /> Back to Matrix
        </button>
      </div>
    </div>
  );
};

export default ResultPage;