import React from 'react';

const Hero = () => (
  <section
    id="home"
    className="relative flex items-center justify-center min-h-screen overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
  >
    {/* Decorative background gradient */}
    <div className="absolute inset-0 pointer-events-none select-none opacity-20 z-0">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="hero-bg-gradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-bg-gradient)" />
      </svg>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div
          data-aos="fade-right"
          className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-10 md:p-14 border border-gray-100 dark:border-gray-800 backdrop-blur-lg"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">
            Hi, I'm Subodh Poudel
          </h1>
          {/* Animated subtitle */}
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-4 min-h-[2.5rem]">
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              <span id="typewriter"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg leading-relaxed">
             Frontend Developer specializing in React, Tailwind, and modern web technologies. I create delightful, performant, and accessible digital experiences that solve real-world problems.
          </p>
          {/* Tech stack icons */}
          <div className="flex items-center gap-4 mb-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 hover:scale-110 transition-transform" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 hover:scale-110 transition-transform" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8 hover:scale-110 transition-transform" />
            <img src="/TailwindCSS.png" alt="Tailwind" className="w-8 h-8 hover:scale-110 transition-transform" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8 hover:scale-110 transition-transform" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8 hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 hover:scale-105 hover:shadow-2xl text-white font-bold rounded-xl shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-700 dark:text-primary-300 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 hover:scale-105 font-bold rounded-xl transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              Hire Me
            </a>
          </div>
          {/* Typewriter effect script */}
          <script dangerouslySetInnerHTML={{__html:`
            const words = [
              'React Specialist',
              'UI/UX Enthusiast',
              'Performance Advocate',
              'Tailwind Expert',
              'Open Source Contributor',
              'Problem Solver'
            ];
            let i = 0, j = 0, isDeleting = false, current = '';
            function type() {
              const el = document.getElementById('typewriter');
              if (!el) return;
              if (!isDeleting && j <= words[i].length) {
                current = words[i].substring(0, j++);
                el.textContent = current;
                setTimeout(type, 80);
              } else if (isDeleting && j >= 0) {
                current = words[i].substring(0, j--);
                el.textContent = current;
                setTimeout(type, 40);
              } else {
                isDeleting = !isDeleting;
                if (!isDeleting) i = (i + 1) % words.length;
                setTimeout(type, isDeleting ? 1000 : 500);
              }
            }
            setTimeout(type, 500);
          `}} />
        </div>
        {/* Right: Avatar */}
        <div data-aos="fade-left" className="flex justify-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center mt-6">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-30 blur-2xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/Portfolio.png"
                alt="Subodh Poudel"
                className="w-full h-full rounded-full object-cover object-top border-4 border-primary-500 shadow-2xl animate-float"
                style={{ objectPosition: '80% top' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* Gradient text style and typewriter animation */}
    <style>{`
      .gradient-text {
        background: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @keyframes float {
        0% { transform: translateY(0px);}
        50% { transform: translateY(-16px);}
        100% { transform: translateY(0px);}
      }
      .animate-float {
        animation: float 3.5s ease-in-out infinite;
      }
    `}</style>
  </section>
);

export default Hero;