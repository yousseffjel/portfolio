import React from "react";
import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4"
    >
      {/* Heading at the Top */}
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h2>
      </div>

      {/* Two-column layout for larger screens */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Section (Left on large screens) */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 lg:space-y-8 animate-slideInLeft">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I’m <span className="text-blue-500 font-bold">Youssef Fjel</span>,
            an IT professional from Casablanca, Morocco. With over a year of
            experience as a freelance WordPress developer and front-end
            specialist, I focus on creating dynamic, responsive websites using
            HTML, CSS, JavaScript, and ReactJS.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I also have expertise in configuring Linux systems, automating
            workflows, and managing servers. I combine front-end creativity with
            strong system administration skills to deliver seamless digital
            experiences.
          </p>

          {/* Call to Action */}
          <a
            href="#projects"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg sm:text-xl md:text-2xl font-medium hover:bg-blue-600 transition duration-300 transform hover:scale-105 animate-bounce"
          >
            Check out my projects
          </a>
        </div>

        {/* Profile Image Section (Right on large screens) */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fadeIn">
          <img
            src={profilePic}
            alt="Profile of Youssef Fjel"
            className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full shadow-xl object-cover transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
