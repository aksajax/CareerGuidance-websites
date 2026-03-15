function SectionDivider() {
  return (
    // <div className="relative bg-black py-3 overflow-hidden">
      
    //   {/* Glow Line */}
    //   <div className="absolute inset-x-0 top-1/2 h-px bg-lime-400/60
    //                   shadow-[0_0_25px_rgba(163,230,53,0.8)]" />

    //   {/* Text */}
    //   <div className="relative z-10 text-center">
    //     <span className="px-6 py-2 bg-black border border-lime-400
    //                      text-lime-400 text-sm tracking-widest rounded-full">
    //       {text}
    //     </span>
    //   </div>
    // </div>
     <div className="relative w-full bg-black overflow-hidden">
      
      {/* WAVE SVG */}
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-[120px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,20 480,100 720,60 960,20 1200,100 1440,60 L1440,0 L0,0 Z"
          fill="#a3e635"
        />
        {/* <path
          d="M0,80 C240,120 480,40 720,80 960,120 1200,40 1440,80 L1440,120 L0,120 Z"
          fill="#86efac"
          opacity="0.9"
        /> */}
      </svg>

      {/* ICON STRIP */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-10 text-black text-xl font-bold opacity-80">
          <span>🎮</span>
          <span>🎧</span>
          <span>🎥</span>
          <span>📚</span>
          <span>🧠</span>
          <span>🎮</span>
          <span>🎧</span>
          <span>🎥</span>
          <span>📚</span>
        </div>
      </div> */}
    </div>
  );
}

export default SectionDivider;
