import React from "react";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    desc: "Responsive, performant, and scalable web applications using the latest technologies.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    desc: "Modern, accessible, and beautiful interfaces focused on user experience.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Friendly",
    desc: "Mobile-first design ensures your site looks great on any device.",
  },
  {
    icon: "fas fa-robot",
    title: "AI Integration",
    desc: "Smart features powered by AI, from chatbots to intelligent automation.",
  },
];

const Services = () => (
  <section
    id="services"
    className="py-20 md:py-32 relative"
  >
    <div className="absolute inset-0 pointer-events-none select-none opacity-10 dark:opacity-20 z-0">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="services-bg-gradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#services-bg-gradient)" />
      </svg>
    </div>
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="gradient-text">Services</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full shadow-lg"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I offer a range of services to help you succeed in the digital world.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-10">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center hover:scale-105 hover:shadow-primary-200/40 dark:hover:shadow-primary-900/40 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="mb-4">
              <i className={`${service.icon} text-4xl text-primary-500`}></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-300">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-200">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;