import React from "react";
import PropTypes from "prop-types";

/**
 * ProjectCard - A modern, reusable card for portfolio projects.
 */
const ProjectCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  type,
  techStack,
  features,
  links,
  reverse = false,
  aos = "fade-up",
}) => (
  <article
    data-aos={aos}
    className={`project-card bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-transform duration-500 hover:scale-105 hover:shadow-primary-200/40 dark:hover:shadow-primary-900/40 group ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
    tabIndex={0}
    aria-labelledby={`project-title-${title.replace(/\s+/g, "-")}`}
  >
    <div className="md:flex">
      <div className="md:w-1/3 relative">
        <img
          className="h-64 md:h-full w-full object-cover object-top rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none transition-transform duration-500 group-hover:scale-105"
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"></div>
      </div>
      <div className="p-8 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="uppercase tracking-widest text-xs text-primary-600 dark:text-primary-400 font-bold mb-2">
            {type}
          </div>
          <h3
            id={`project-title-${title.replace(/\s+/g, "-")}`}
            className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 gradient-text"
          >
            {title}
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-200 mb-5 leading-relaxed">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech, idx) => (
              <li key={tech + idx}>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-semibold rounded-full shadow-sm border border-primary-200 dark:border-primary-800 transition-all duration-300 tech-icon">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-base">
              Key Features:
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 pl-2">
              {features.map((feature, idx) => (
                <li key={feature + idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          
          {links.github && (
            <a
              href={links.github}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-xl transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository of ${title}`}
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
);

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.shape({
    liveDemo: PropTypes.string,
    caseStudy: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
  reverse: PropTypes.bool,
  aos: PropTypes.string,
};

const projects = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt: "Healix AI Health Assistant",
    title: "Healix - AI Health Assistant",
    description:
      "Healix is a comprehensive AI-powered health assistant web application designed to help users manage their health proactively. The platform leverages advanced AI (GPT-4) to provide symptom analysis, personalized health plans, and actionable recommendations. Users can interact with the assistant via text or voice, receive tailored advice, and securely store their health data.\n\nKey Responsibilities & Achievements:\n- Architected a full-stack solution using React for the frontend and Django for the backend\n- Integrated GPT-4 API for advanced symptom checking and health recommendations\n- Developed secure authentication and user management\n- Designed a responsive, accessible UI with Tailwind CSS\n- Implemented voice input for hands-free interaction\n- Ensured HIPAA-compliant data storage and privacy\n- Deployed the application for public use with robust CI/CD\n",
    type: "Full-Stack Project",
    techStack: ["React", "Django", "Tailwind CSS", "GPT-4 API"],
    features: [
      "AI-powered symptom checker with GPT-4 integration",
      "Personalized health plans and actionable recommendations",
      "Voice and text input for flexible interaction",
      "Secure user authentication and encrypted data storage",
      "Responsive and accessible user interface",
      "Health history tracking and analytics dashboard",
      "HIPAA-compliant privacy and security measures",
      "Continuous deployment and public demo access",
    ],
    links: {
      
      github: "https://github.com/Subodh0008/Healix",
    
    },
    reverse: false,
    aos: "fade-up",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Advertisement Platform Backend",
    title: "Advertisement Platform",
    description:
      "I designed and developed the backend of a fully functional advertisement platform using the Django framework, handling everything from project architecture to deployment. The platform allows users to create, manage, and interact with advertisements, including features such as authentication, user roles, ad approval workflows, and proof submission mechanisms.\n\nKey Responsibilities & Achievements:\n- Modular Django project with multiple apps (login, create, landingpage)\n- Token-based authentication with DRF\n- Custom models for Advertisement, AdminAdvertisement, ProofSubmission\n- RESTful APIs for CRUD, admin approval, activation timing, filtering/sorting\n- Media uploads for proof submission\n- Referral system and real-time notifications\n- Git/GitHub for version control\n- Deployed with Gunicorn, Nginx, SQLite\n- Security best practices and performance optimizations\n",
    type: "Backend Project",
    techStack: ["Django", "Django REST Framework", "SQLite", "Gunicorn", "Nginx"],
    features: [
      "User registration and login with token-based authentication",
      "Admin approval workflow for advertisements",
      "Proof submission with media uploads",
      "Referral system and real-time notifications",
      "RESTful APIs for CRUD and filtering",
      "Production deployment with Gunicorn and Nginx",
      "Security best practices and rate limiting",
    ],
    links: {
      github: "https://github.com/Asim-XXIV/Advertisementhub_backend.git",
    },
    reverse: true,
    aos: "fade-up",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    imageAlt: "CollegeFinder AI Recommendation Platform",
    title: "CollegeAI – CollegeFinder Platform",
    description:
      "I co-developed CollegeFinder, a smart platform designed to help students find the best colleges tailored to their academic profile, preferences, and career goals. The project aims to simplify the complex college selection process by using intelligent filters, predictive analytics, and personalized recommendations — all within a unified platform.\n\nKey Highlights:\n- Modular Django backend with DRF\n- Relational models for StudentProfile, College, ApplicationHistory, etc.\n- RESTful APIs for search, filtering, bookmarking, applying\n- Admin dashboard with role-based access\n- AI-driven recommendation engine (in progress)\n- Weighted scoring and smart filters\n- Planned chatbot guidance system\n- Team collaboration and agile management\n- Deployed with PostgreSQL, Render/Heroku, S3\n- Security with environment variables and HTTPS\n",
    type: "Full-Stack Project",
    techStack: ["Django", "Django REST Framework", "PostgreSQL", "React", "Amazon S3"],
    features: [
      "Personalized college recommendations",
      "Advanced search and filtering",
      "Admin dashboard and role-based access",
      "AI-driven recommendation engine (in progress)",
      "Bookmarking and application tracking",
      "Secure deployment and cloud storage",
    ],
    links: {
      github: "https://github.com/CollegeFinderSystem/backendcollegefinder.git",
      
    },
    reverse: false,
    aos: "fade-up",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="py-20 md:py-32 relative"
  >
    <div className="absolute inset-0 pointer-events-none select-none opacity-10 dark:opacity-20 z-0">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="bg-gradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-gradient)" />
      </svg>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="text-center mb-20" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full shadow-lg"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore some of my most impactful and innovative projects, blending modern technology, beautiful design, and real-world problem solving.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title + idx} {...project} />
        ))}
      </div>
      <div className="text-center mt-16" data-aos="fade-up">
        <a
          href="https://github.com/yourusername?tab=repositories"
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-700 dark:text-primary-300 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 font-bold rounded-2xl transition-all duration-300 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-archive mr-2"></i> View All Projects
        </a>
      </div>
    </div>
  </section>
);

export default Projects;