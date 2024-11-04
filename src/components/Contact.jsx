import React from "react";
import { FaLinkedin, FaEnvelope, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import ContactForm from "./ContactForm";

const ContactLink = ({ href, icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center text-lg text-gray-700 dark:text-gray-300 hover:text-${color} dark:hover:text-${color} transition duration-300 transform hover:scale-105`}
  >
    <span className="text-3xl mr-4">{icon}</span>
    <span>{label}</span>
  </a>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 sm:px-8 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 ">
          Contact Me
        </h2>

        {/* Create a flex or grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left side: Contact Form */}
          <div className="p-6 rounded-lg">
            <ContactForm />
          </div>
          
          {/* Right side: Contact Text and Links */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-6">
            
            {/* Professional Text */}
            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4 text-center md:text-left">
              I'm always open to discussing new projects and opportunities!
            </p>

            {/* Contact Links */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
              <a
                href="mailto:contact@yousseffjel.com"
                className="flex items-center justify-center text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105"
              >
                <FaEnvelope className="text-3xl mr-4" />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/youssef-fjel/"
                className="flex items-center justify-center text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl mr-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://t.me/yousseffjel"
                className="flex items-center justify-center text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane className="text-3xl mr-4" />
                <span>Telegram</span>
              </a>

              <a
                href="https://github.com/yousseffjel" // Replace with your GitHub URL
                className="flex items-center justify-center text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl mr-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
