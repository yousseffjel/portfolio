import React from "react";
import ContactForm from "./ContactForm"; // Import the ContactForm component

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">I'm always open to discussing new projects and opportunities!</p>
        
        <p>Email: <a href="mailto:ibrahimichaoui@gmail.com" className="text-blue-500 dark:text-blue-400">ibrahimichaoui@gmail.com</a></p>
        
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com"
            className="text-blue-500 dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/your-profile" // Replace with your GitHub URL
            className="text-blue-500 dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </p>

        {/* Include the ContactForm component */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
