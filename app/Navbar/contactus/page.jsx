import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>
        <form action="https://formspree.io/f/mleyyone" method='POST' className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
