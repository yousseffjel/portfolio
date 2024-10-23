import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 mt-8">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm">
          Developed by{' '}
          <a
            href="https://www.linkedin.com/in/yousseffjel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Youssef Fjel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
