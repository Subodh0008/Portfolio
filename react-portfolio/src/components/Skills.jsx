import React from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "fab fa-react" },
      { name: "Next.js", icon: "fab fa-js" },
      { name: "Tailwind CSS", icon: "fas fa-wind" },
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express", icon: "fas fa-server" },
      { name: "Django", icon: "fas fa-leaf" },
      { name: "Firebase", icon: "fas fa-fire" },
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "PostgreSQL", icon: "fas fa-database" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "Figma", icon: "fab fa-figma" },
      { name: "Framer Motion", icon: "fas fa-bolt" },
      { name: "Jest", icon: "fas fa-vial" },
      { name: "Linux", icon: "fab fa-linux" },
    ],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="py-20 md:py-32 relative"
  >
    <div className="absolute inset-0 pointer-events-none select-none opacity-10 dark:opacity-20 z-0">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="skills-bg-gradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-bg-gradient)" />
      </svg>
    </div>
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full shadow-lg"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My technical toolbox spans the full stack, from beautiful UIs to robust backends and everything in between.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold mb-6 text-primary-700 dark:text-primary-300">
              {group.category}
            </h3>
            <ul className="space-y-4">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200"
                >
                  <i className={`${skill.icon} text-2xl text-primary-500`}></i>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;