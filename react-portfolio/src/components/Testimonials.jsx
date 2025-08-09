import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager, Acme Corp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Working with Subodh was a fantastic experience. He delivered our project ahead of schedule and exceeded our expectations in both design and functionality.",
  },
  {
    name: "John Smith",
    role: "CTO, Techify",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Subodh's attention to detail and commitment to quality are unmatched. The UI he built for us is modern, fast, and accessible.",
  },
  {
    name: "Emily Chen",
    role: "Founder, StartupX",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Highly recommend! Subodh is not only technically skilled but also a great communicator and collaborator.",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-20 md:py-32 relative"
  >
    <div className="absolute inset-0 pointer-events-none select-none opacity-10 dark:opacity-20 z-0">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="testimonials-bg-gradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#testimonials-bg-gradient)" />
      </svg>
    </div>
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="gradient-text">Testimonials</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full shadow-lg"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          What clients and collaborators say about working with me.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full border-4 border-primary-200 dark:border-primary-800 mb-4 object-cover"
              loading="lazy"
            />
            <blockquote className="italic text-gray-700 dark:text-gray-200 mb-4">"{t.quote}"</blockquote>
            <div className="font-bold text-primary-700 dark:text-primary-300">{t.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;