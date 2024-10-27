import React, { useState, useEffect, useMemo } from "react";

const Home = ({ darkMode }) => {
  const roles = useMemo(
    () => [
      "Front-End Developer",
      "WordPress Developer",
      "GNU/Linux Enthusiast",
    ],
    [],
  );
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[roleIndex];
  
      if (isDeleting) {
        // When deleting, reduce `currentRole` by one character
        setCurrentRole((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
  
        // If finished deleting, move to the next role
        if (currentRole === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      } else {
        // When typing, increase `currentRole` by one character
        setCurrentRole((prev) => fullRole.slice(0, prev.length + 1));
  
        // If finished typing the full role, start deleting after a pause
        if (fullRole === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };
  
    // Start the typing effect with a timeout
    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [roleIndex, isDeleting, typingSpeed, roles, currentRole]);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center items-center px-4 text-center transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-100 to-gray-50 text-gray-900"
      }`}
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
        Hi, I’m <span className="text-blue-500" spellCheck="false">Yusuf Fjel</span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl">
        I’m a <span className="text-blue-500">{currentRole}</span>
        <span className="blinking-cursor">|</span>{" "}
        {/* Blinking cursor effect */}
      </p>

      <a
        href="#contact"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg sm:text-xl md:text-2xl font-medium hover:bg-blue-600 hover:shadow-lg transition duration-300"
      >
        Let’s Collaborate
      </a>

      <div className="mt-8 flex space-x-6">
        <a
          href="https://github.com/your-profile"
          className="text-gray-400 hover:text-white text-2xl transition duration-300"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          className="text-gray-400 hover:text-white text-2xl transition duration-300"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:you@example.com"
          className="text-gray-400 hover:text-white text-2xl transition duration-300"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
