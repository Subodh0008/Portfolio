import React, { useEffect } from 'react';
import AOS from 'aos';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-gray-200 font-sans">
      {/* Navigation */}
      <Nav />
      {/* Other sections will be added here as components */}
      <main>
        {/* Hero, About, Skills, Projects, Services, Testimonials, Contact, Blog, Footer, BackToTop */}
     <Hero/>
     <About />
     <Skills />
     <Projects />
     <Services />
    <Contact />
     <Footer />
     <BackToTop />
      </main>
    </div>
  );
}

export default App;
