import React from 'react';

const CounsellorCard = ({ name, expertise, experience, language, image }) => (
  <div className="relative group bg-zinc-900/50 border border-white/10 p-8 rounded-[2.5rem] hover:border-[#AEE91A]/50 transition-all duration-500">
    {/* Decorative Glow */}
    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#AEE91A]/5 blur-[60px] group-hover:bg-[#AEE91A]/10 transition-all"></div>

    <div className="flex flex-col items-center text-center">
      {/* Profile Image with Ring Effect */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#AEE91A]/30 p-1 group-hover:border-[#AEE91A] transition-all">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-black rounded-full"></div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
      <p className="text-[#AEE91A] text-sm font-medium mb-4">{expertise}</p>
      
      <div className="grid grid-cols-2 gap-4 w-full mb-6 py-4 border-y border-white/5">
        <div className="text-center">
          <p className="text-zinc-500 text-xs uppercase">Exp.</p>
          <p className="text-white font-semibold">{experience}+ Years</p>
        </div>
        <div className="text-center border-l border-white/5">
          <p className="text-zinc-500 text-xs uppercase">Language</p>
          <p className="text-white font-semibold">{language}</p>
        </div>
      </div>

      <ul className="text-zinc-400 text-sm space-y-2 mb-8 text-left w-full">
        <li className="flex items-center gap-2">✅ Personalized College List</li>
        <li className="flex items-center gap-2">✅ Admission Strategy</li>
        <li className="flex items-center gap-2">✅ Document Checklist</li>
      </ul>

      {/* Payment Button */}
      <button className="w-full py-4 bg-[#AEE91A] text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(174,233,26,0.4)] transition-all active:scale-95">
        Book Session • ₹199
      </button>
      <p className="text-zinc-600 text-[10px] mt-3 uppercase tracking-widest">Instant Meeting Fix</p>
    </div>
  </div>
);

const CounsellorList = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">
            Expert <span className="text-[#AEE91A]">Face-to-Face</span> Guidance
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Hamare experts aapki profile analyze karke aapko best engineering college suggest karenge. 
            Sirf ₹199 mein apni 1:1 meeting fix karein.
          </p>
        </div>

        {/* Counsellors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CounsellorCard 
            name="Rahul Sharma"
            expertise="IIT & NIT Specialist"
            experience="8"
            language="Hindi/English"
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <CounsellorCard 
            name="Priya Verma"
            expertise="Private University Expert"
            experience="5"
            language="Hindi/English"
          />
          <CounsellorCard 
            name="Amit Patel"
            expertise="Scholarship & Fees Consultant"
            experience="10"
            language="Hindi/Gujarati"
          />
        </div>

        {/* Process Steps */}
        <div className="mt-24 p-12 rounded-[3rem] bg-zinc-900/30 border border-white/5">
          <h2 className="text-3xl font-bold mb-10 text-center">How it <span className="text-[#AEE91A]">Works</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-zinc-800 mb-4">01</div>
              <h4 className="text-xl font-bold mb-2">Select Expert</h4>
              <p className="text-zinc-500">Apne preference ke hisaab se counsellor chunein.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-800 mb-4">02</div>
              <h4 className="text-xl font-bold mb-2">Pay ₹199</h4>
              <p className="text-zinc-500">Secure payment karein Razorpay ke through.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-800 mb-4">03</div>
              <h4 className="text-xl font-bold mb-2">Fix Meeting</h4>
              <p className="text-zinc-500">Expert aapko call ya Google Meet par connect karega.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CounsellorList;