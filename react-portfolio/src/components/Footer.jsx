import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (subStatus) {
      const timer = setTimeout(() => setSubStatus("") , 2000);
      return () => clearTimeout(timer);
    }
  }, [subStatus]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubStatus("");
    setLoading(true);
    // Use your EmailJS service/template/public key or replace with your own backend/api
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { email, message: "Newsletter subscription" },
        publicKey
      );
      setSubStatus("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      setSubStatus("Subscription failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 mt-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 z-0">
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="footer-bg-gradient" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-bg-gradient)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand & Newsletter */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-extrabold gradient-text">Subodh Poudel</span>
              <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full ml-2">
                Portfolio
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xs">
              Building modern, accessible, and beautiful web experiences. Let's connect and create something amazing!
            </p>
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubscribe}
              aria-label="Subscribe to newsletter"
            >
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-400 outline-none transition w-48"
                  aria-label="Email address"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-white font-semibold rounded-lg shadow transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {subStatus && (
                <div className={`text-sm font-medium ${subStatus.includes("success") ? "text-green-600" : "text-red-600"}`}>{subStatus}</div>
              )}
            </form>
          </div>
          {/* Quick Links */}
          <div className="flex-1 mb-8 md:mb-0">
            <h4 className="text-lg font-bold text-primary-700 dark:text-primary-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Socials */}
          <div className="flex-1">
            <h4 className="text-lg font-bold text-primary-700 dark:text-primary-300 mb-4">Connect</h4>
            <div className="flex gap-6 mb-6">
              <a
                href="mailto:your.email@example.com"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-2xl transition"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/yourusername"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-2xl transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-2xl transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              {/* Add more social links as needed */}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              Kathmandu, Nepal <br />
              <span className="inline-block mt-1">
                <i className="fas fa-phone-alt mr-1"></i> +977-9821433583
              </span>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} Subodh Poudel. All rights reserved.
          </span>
          <span>
            Made with <span className="text-primary-600 dark:text-primary-400">♥</span> using React &amp; Tailwind CSS.
          </span>
        </div>
      </div>
      {/* Gradient text style */}
      <style>{`
        .gradient-text {
          background: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
