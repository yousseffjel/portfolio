import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
        Go Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
