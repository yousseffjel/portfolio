import React, { useState } from 'react';

import cert1 from '../assets/certifications/cert1.png';
import cert2 from '../assets/certifications/cert2.png';
import cert3 from '../assets/certifications/cert3.png';

// Sample certification data
const certificationsData = [
  {
    title: "Professional Digital Skills Certification by ALX",
    description: "Completed an intensive program focused on essential skills for the digital era, including digital communication, project management, team collaboration, and problem-solving techniques tailored for modern work environments.",
    image: cert1,
  },
  {
    title: "Front-End Web Development Certification by ALX",
    description: "Completed a 4-month ALX program in front-end web development, mastering HTML, CSS, JavaScript, React.js, and Tailwind to build responsive, modern interfaces.",
    image: cert2,
  },
  {
    title: "React.js Certification",
    description: "Learned React.js for building user interfaces.",
    image: cert3,
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((certification, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transform hover:scale-105 hover:shadow-xl transition duration-500 ease-in-out">
              <h3 className="text-2xl font-bold mb-2">{certification.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{certification.description}</p>
              <button
                onClick={() => openModal(certification.image)}
                className="text-blue-500 dark:text-blue-400 mt-4 inline-block"
                aria-label={`View certification for ${certification.title}`}
              >
                View Certification
              </button>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
  <div 
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={closeModal} // Close modal on clicking the background
  >
    <div
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      className="relative bg-transparent p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%] md:max-w-2xl lg:max-w-7xl xl:max-w-8xl max-h-screen mx-auto transform scale-95 transition-transform duration-300 ease-in-out"
      style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-0 right-0 text-gray-100 hover:text-gray-300 text-2xl sm:text-3xl font-bold"
        aria-label="Close certification modal"
      >
        &times;
      </button>
      
      {/* Image Display */}
      <img src={selectedImage} alt="Certification" className="max-w-full h-auto rounded-lg" />
    </div>
  </div>
)}
    </section>
  );
};

export default Certifications;
