import React from 'react';

const BookingDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_-10px_rgba(174,233,26,0.2)]">
        
        {/* Top Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-transparent via-[#AEE91A] to-transparent"></div>

        <div className="p-8 md:p-12">
          {/* Success Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#AEE91A]/20 text-[#AEE91A] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#AEE91A]/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Payment Successful!</h2>
            <p className="text-zinc-400 mt-2">Ab apni details bharein taaki hum meeting schedule kar sakein.</p>
          </div>

          {/* Details Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">Student Name</label>
                <input 
                  type="text" 
                  placeholder="Rahul Kumar" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#AEE91A] transition-all"
                />
              </div>

              {/* 12th Percentage */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">12th Percentage / CGPA</label>
                <input 
                  type="text" 
                  placeholder="e.g. 85%" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#AEE91A] transition-all"
                />
              </div>

              {/* Preferred Branch */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">Preferred Branch</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#AEE91A] transition-all appearance-none">
                  <option>CS / IT Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Electronics (EC)</option>
                  <option>Civil Engineering</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">Annual Budget (Fees)</label>
                <input 
                  type="text" 
                  placeholder="e.g. 2-4 Lakhs" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#AEE91A] transition-all"
                />
              </div>
            </div>

            {/* Questions for Counsellor */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300 ml-1">Anything specific you want to ask?</label>
              <textarea 
                rows="3" 
                placeholder="Write your doubts here..." 
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#AEE91A] transition-all resize-none"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col gap-3">
              <button 
                type="button"
                className="w-full py-4 bg-[#AEE91A] text-black font-bold rounded-2xl hover:shadow-[0_0_25px_rgba(174,233,26,0.4)] transition-all active:scale-95"
              >
                Confirm & Schedule Meeting
              </button>
              <p className="text-center text-zinc-500 text-xs">
                Hamari team aapko 24 hours ke andar call karegi.
              </p>
            </div>
          </form>

        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
  );
};

export default BookingDetailsModal;