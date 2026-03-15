function Slider() {
  const techs = [
    { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-black via-zinc-900 to-black py-8">
      
      {/* ✅ Animation defined INSIDE component */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 22s linear infinite;
          }
        `}
      </style>

      <div className="flex w-max animate-marquee gap-16 px-10">
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="group flex flex-col items-center">
            
            <div
              className="w-20 h-20 flex items-center justify-center rounded-2xl
                         bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl
                         transition-all duration-300
                         group-hover:scale-125 group-hover:shadow-2xl"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 transition-transform duration-300"
              />
            </div>

            <span className="mt-3 text-base font-semibold text-white/80 group-hover:text-white transition">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
