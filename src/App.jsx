import React, { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
//import Footer from "./components/Footer";
import "./index.css";

// Lazy load other components
const Home = lazy(() => import("./components/Home.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Certifications = lazy(() => import("./components/Certifications.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return (
      storedTheme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  // Save the dark mode preference in localStorage
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Toggle the theme when the button is clicked
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />  {/* Pass toggleTheme and darkMode as props */}
        
        <Suspense fallback={<div>Loading...</div>}>
          {/* Home Section */}
          <Home darkMode={darkMode} />
          
          {/* Other Sections */}
          <About />
          <Suspense fallback={<div>Loading skills...</div>}>
            <Skills />
          </Suspense>
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </Suspense>
        {/* Footer Section */}
        <Footer />  {/* Add the Footer here */}
      </div>
    </div>
  );
}

export default App;
