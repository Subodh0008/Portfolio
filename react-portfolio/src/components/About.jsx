import React from "react";

const About = () => (
  <section
    id="about"
    className="py-20 md:py-32 relative"
  >
    <div className="absolute inset-0 pointer-events-none select-none opacity-10 dark:opacity-20 z-0">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="about-bg-gradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-bg-gradient)" />
      </svg>
    </div>
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/00000000?v=4"
            alt="Your Name"
            className="w-40 h-40 rounded-full shadow-xl border-4 border-primary-200 dark:border-primary-800 object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            Hi! I'm <span className="font-bold text-primary-600 dark:text-primary-400">Your Name</span>, a passionate full-stack developer with a love for building beautiful, performant, and accessible web applications. I specialize in React, Node.js, and modern UI/UX design. My mission is to create digital experiences that delight users and solve real-world problems.
          </p>
          <ul className="flex flex-wrap gap-4 mb-6">
            <li>
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full shadow border border-primary-200 dark:border-primary-800">
                <i className="fas fa-code mr-2"></i> Full-Stack Development
              </span>
            </li>
            <li>
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full shadow border border-primary-200 dark:border-primary-800">
                <i className="fas fa-paint-brush mr-2"></i> UI/UX Design
              </span>
            </li>
            <li>
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-semibold rounded-full shadow border border-primary-200 dark:border-primary-800">
                <i className="fas fa-robot mr-2"></i> AI Integration
              </span>
            </li>
          </ul>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              <i className="fas fa-envelope mr-2"></i> Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center px-6 py-2 border border-primary-600 text-primary-700 dark:text-primary-300 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 font-semibold rounded-xl transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-alt mr-2"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;