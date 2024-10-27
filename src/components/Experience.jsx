import React from 'react';

const experienceData = [
  {
    jobTitle: "Front-End Developer (React.js)",
    companyName: "ALX Morocco",
    duration: "May 2024 – Oct 2024",
    description: "Gained hands-on experience in front-end development through an intensive program, focusing on HTML, CSS, JavaScript, and React.js. Built responsive interfaces and collaborated on projects to apply skills in real-world coding scenarios, strengthening adaptability and problem-solving abilities.",
    technologies: ["React", "TailwindCSS","JavaScript", "CSS", "HTML"],
  },
  {
    jobTitle: "WordPress Developer",
    companyName: "Company X",
    duration: "Dec 2022 – Sept 2023",
    description: "Developed and maintained the store's website on WordPress, focusing on customized themes, plugin integration, and layout design. Ensured a user-friendly experience and optimized functionality to support the store’s online presence and customer engagement.",
    technologies: ["WordPress", "HTML", "CSS"],
  },
  {
    jobTitle: "Freelance WordPress Developer",
    companyName: "Freelance",
    duration: "Sept 2023 – Present",
    description: "Worked on various projects and learned web development fundamentals.",
    technologies: ["JavaScript", "WordPress", "HTML", "CSS"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transform hover:scale-105 hover:shadow-xl transition duration-500 ease-in-out"
              // Added animation on hover
              style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
            >
              <h3 className="text-2xl font-bold mb-2">{exp.jobTitle}</h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-1">{exp.companyName}</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded mr-1 mb-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
