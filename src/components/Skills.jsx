import React, { useState, useEffect, useRef } from 'react';

// Importing icons
import { CodeIcon, SparklesIcon, TerminalIcon, LightningBoltIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import { ServerIcon, CubeIcon, DatabaseIcon } from '@heroicons/react/solid';
import { PencilAltIcon, ColorSwatchIcon } from '@heroicons/react/solid';

const skillsData = [
  {
    category: "Front-End Development",
    skills: [
      { name: "HTML", icon: <CodeIcon className="w-12 h-12 text-red-500" />, percentage: 95, description: "Markup language for structuring web content" },
      { name: "CSS", icon: <SparklesIcon className="w-12 h-12 text-blue-500" />, percentage: 90, description: "Styles web pages with various layouts and animations" },
      { name: "JavaScript", icon: <TerminalIcon className="w-12 h-12 text-yellow-500" />, percentage: 90, description: "Enables interactive behavior on web pages" },
      { name: "ReactJS", icon: <LightningBoltIcon className="w-12 h-12 text-blue-400" />, percentage: 85, description: "JavaScript library for building user interfaces" },
      { name: "Tailwind", icon: <AdjustmentsIcon className="w-12 h-12 text-teal-400" />, percentage: 90, description: "Utility-first CSS framework for styling" },
    ],
  },
  {
    category: "WordPress",
    skills: [
      //{ name: "WordPress CMS", icon: wordpressIcon, percentage: 80, description: "Platform for content management and websites" },
      //{ name: "Elementor", icon: elementorIcon, percentage: 75, description: "Page builder plugin for WordPress" },
      //{ name: "WooCommerce", icon: woocommerceIcon, percentage: 70, description: "E-commerce plugin for WordPress" },
    ],
  },
  {
    category: "Linux & DevOps",
    skills: [
      { name: "NodeJS", icon: <DatabaseIcon className="w-12 h-12 text-green-500" />, percentage: 80, description: "JavaScript runtime for server-side programming" },
      { name: "Linux", icon: <ServerIcon className="w-12 h-12 text-gray-500" />, percentage: 85, description: "Open-source operating system for development and deployment" },
      { name: "Docker", icon: <CubeIcon className="w-12 h-12 text-blue-500" />, percentage: 80, description: "Container platform for DevOps workflows" },
      //{ name: "CI/CD", icon: cicdIcon, percentage: 75, description: "Continuous integration and delivery pipelines" },
      //{ name: "Nginx", icon: nginxIcon, percentage: 70, description: "Web server for hosting applications" },
    ],
  },
  {
    category: "Design (UX & UI)",
    skills: [
      { name: "Figma", icon: <PencilAltIcon className="w-12 h-12 text-purple-500" />, percentage: 85, description: "Collaborative design and prototyping tool" },
      { name: "Adobe Photoshop", icon: <ColorSwatchIcon className="w-12 h-12 text-indigo-500" />, percentage: 75, description: "Graphic design and image editing software" },
      //{ name: "User Research", icon: researchIcon, percentage: 70, description: "Conducting research to understand user needs" },
      //{ name: "Prototyping", icon: prototypingIcon, percentage: 80, description: "Building and testing UI prototypes" },
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
                    aria-label={skill.name}
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
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded px-2 py-1 opacity-90 transition-opacity duration-300">
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
