import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track the active section

  const handleMenuToggle = () => {
    setIsOpen(!isOpen); // Toggle menu open/close
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  // Handle scroll effect to make the navbar sticky and change its background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true); // Apply background change when scrolling
      } else {
        setScrolling(false); // Reset background when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track the current section in view
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections with an id

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the section id as the active section
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section)); // Observe each section

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup the observer on unmount
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 p-4 transition-all duration-300 ${
        scrolling
          ? darkMode
            ? "bg-gray-900 bg-opacity-90 shadow-lg"
            : "bg-white bg-opacity-90 shadow-lg"
          : darkMode
          ? "bg-gray-900"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-2xl font-bold">
          <a
            href="#home"
            className={`hover:text-blue-500 transition duration-300 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            YuSuFjL
          </a>
        </div>

        {/* Hamburger Menu (Visible on Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="focus:outline-none transition-transform duration-300"
          >
            {isOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className={`text-2xl ${darkMode ? "text-white" : "text-gray-900"}`}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className={`text-2xl ${darkMode ? "text-white" : "text-gray-900"}`}
              />
            )}
          </button>
        </div>

        {/* Full-screen Mobile Menu with Fade-In/Slide-In Effect */}
        <div
          className={`${
            isOpen
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-full"
          } fixed inset-0 bg-gray-900 bg-opacity-90 z-10 lg:hidden transition-all duration-500 ease-in-out`}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none z-20"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="relative flex flex-col items-center justify-center h-screen space-y-8 z-10">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="text-white text-2xl hover:text-blue-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="text-white text-2xl hover:text-blue-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="text-white text-2xl hover:text-blue-500 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="text-white text-2xl hover:text-blue-500 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={closeMenu}
                className="text-white text-2xl hover:text-blue-500 transition duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-white text-2xl hover:text-blue-500 transition duration-300"
              >
                Contact
              </a>
            </li>

            {/* Dark Mode Toggle */}
            <li className="mt-4">
              <button
                onClick={() => {
                  toggleTheme();
                  closeMenu(); // Close the menu after toggling
                }}
                className={`${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                } px-6 py-3 rounded-lg transition duration-300 flex items-center`}
              >
                {darkMode ? (
                  <FontAwesomeIcon
                    icon={faSun}
                    className="text-yellow-500 mr-2"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="text-gray-400 mr-2"
                  />
                )}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:space-x-6 items-center">
          <li>
            <a
              href="#home"
              className={`block py-2 px-4 hover:text-blue-500 transition duration-300 ${
                activeSection === "home"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`block py-2 px-4 hover:text-blue-500 transition duration-300 ${
                activeSection === "about"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`block py-2 px-4 hover:text-blue-500 transition duration-300 ${
                activeSection === "skills"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`block py-2 px-4 hover:text-blue-500 transition duration-300 ${
                activeSection === "projects"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`block py-2 px-4 hover:text-blue-500 transition duration-300 ${
                activeSection === "experience"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`block py-2 px-4 hover:text-blue-500 transition duration-300 ${
                activeSection === "contact"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Contact
            </a>
          </li>

          {/* Dark Mode Toggle */}
          <li className="mt-2 lg:mt-0">
            <button
              onClick={toggleTheme}
              className={`${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-900"
              } px-4 py-2 rounded-lg transition duration-300 flex items-center`}
            >
              {darkMode ? (
                <FontAwesomeIcon icon={faSun} className="text-yellow-500 mr-2" />
              ) : (
                <FontAwesomeIcon icon={faMoon} className="text-gray-400 mr-2" />
              )}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
