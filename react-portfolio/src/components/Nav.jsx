import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    // On mount, check localStorage
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
    if (saved === "light") setDarkMode(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md transition">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="text-2xl font-extrabold gradient-text tracking-tight">
          Subodh Poudel
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#testimonials" className="nav-link">
            Testimonials
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <button
            className="ml-4 p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 focus:outline-none"
            onClick={() => setDarkMode((d) => !d)}
            aria-label="Toggle dark mode"
          >
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"} text-xl`}></i>
          </button>
        </div>
        <button
          className="md:hidden p-2 rounded-lg text-primary-700 dark:text-primary-300 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden flex flex-col items-center gap-6 py-8 transition z-50">
            <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#blog" className="nav-link" onClick={() => setMenuOpen(false)}>
              Blog
            </a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <button
              className="mt-4 p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 focus:outline-none"
              onClick={() => setDarkMode((d) => !d)}
              aria-label="Toggle dark mode"
            >
              <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"} text-xl`}></i>
            </button>
          </div>
        )}
      </nav>
      <style>{`
        .gradient-text {
          background: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-link {
          position: relative;
          font-weight: 500;
          color: #334155;
          transition: color 0.2s;
        }
        .dark .nav-link {
          color: #e0e7ef;
        }
        .nav-link:after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%);
          transition: width 0.3s;
          border-radius: 2px;
        }
        .nav-link:hover:after,
        .nav-link:focus:after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Navbar;