"use client";
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full p-6 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <div className="text-gray-700">
          <p className="mb-4">
            [Ai solutions] is a platform that aims to provide a range of calculators to its users.
            We are committed to delivering high-quality solutions that are accurate and easy to use.

          </p>
          <p className='mb-4'>
            We are a team of 4 students from the University of Toronto, pursuing a degree in Computer Science. We are passionate about technology and are committed to leveraging it to provide innovative solutions to our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
