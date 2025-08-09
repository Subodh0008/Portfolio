import React, { useEffect, useState, useRef } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (btnRef.current) {
      btnRef.current.blur();
    }
  };

  // Keyboard accessibility: allow Enter/Space to trigger scroll
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <button
      ref={btnRef}
      type="button"
      className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-full shadow-2xl border-4 border-white dark:border-gray-900 flex items-center justify-center transition-all duration-300 z-50
        ${visible ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"}
        hover:shadow-primary-200/40 dark:hover:shadow-primary-900/40 focus:outline-none focus:ring-4 focus:ring-primary-300`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      style={{
        boxShadow: "0 8px 32px 0 rgba(56,189,248,0.15)",
        backdropFilter: "blur(4px)",
      }}
    >
      <span className="sr-only">Back to top</span>
      <i className="fas fa-arrow-up text-2xl animate-bounce" aria-hidden="true"></i>
    </button>
  );
};

export default BackToTop;