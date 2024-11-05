import React, { useState, useEffect, useRef } from 'react';

// Importing icons
import htmlIcon from '../assets/icons/html-icon.svg';
import cssIcon from '../assets/icons/css-icon.svg';
import javascriptIcon from '../assets/icons/javascript-icon.svg';
import reactIcon from '../assets/icons/react-icon.svg';
import nodejsIcon from '../assets/icons/nodejs-icon.svg';
import dockerIcon from '../assets/icons/docker-icon.svg';
import linuxIcon from '../assets/icons/linux-icon.svg';
import figmaIcon from '../assets/icons/figma-icon.svg';
import photoshopIcon from '../assets/icons/photoshop-icon.svg';
import tailwindIcon from '../assets/icons/tailwind-icon.svg';

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", icon: htmlIcon, percentage: 90, description: "Markup language for web pages" },
      { name: "CSS", icon: cssIcon, percentage: 85, description: "Style sheet language for designing" },
      { name: "JavaScript", icon: javascriptIcon, percentage: 90, description: "Programming language for web development" },
      { name: "ReactJS", icon: reactIcon, percentage: 85, description: "JavaScript library for building UIs" },
      { name: "Tailwind", icon: tailwindIcon, percentage: 90, description: "Utility-first CSS framework" },
    ],
  },
  {
    category: "Backend & DevOps",
    skills: [
      { name: "NodeJS", icon: nodejsIcon, percentage: 80, description: "JavaScript runtime for server-side programming" },
      { name: "Docker", icon: dockerIcon, percentage: 75, description: "Platform for containerized applications" },
      { name: "Linux", icon: linuxIcon, percentage: 85, description: "Open-source operating system" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: figmaIcon, percentage: 80, description: "Collaborative interface design tool" },
      { name: "Photoshop", icon: photoshopIcon, percentage: 75, description: "Image editing and design software" },
    ],
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const skillsSectionRef = useRef(null);

  // Trigger animation when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsSectionRef}
      className="py-12 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        {skillsData.map((category) => (
          <div key={category.category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onFocus={() => setHoveredSkill(skill.name)}
                  onBlur={() => setHoveredSkill(null)}
                  tabIndex="0"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-12 h-12 mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-center">{skill.name}</h4>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                      <div
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${skill.percentage}%` : '0%' }} // Trigger animation on visibility
                      ></div>
                    </div>
                    <p className="text-right text-sm">{skill.percentage}%</p>
                  </div>

                  {/* Tooltip */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded px-2 py-1">
                      {skill.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
