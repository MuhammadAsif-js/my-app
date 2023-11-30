import React from 'react';
import Link from 'next/link';

const FutureViewPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full p-6 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Future View</h1>

        <div className="text-gray-700">
          <p className="mb-4">
            At [Ai solutions], we are constantly evolving. While currently providing a range
            of calculators on our website, our future trajectory is directed towards a major focus
            on Artificial Intelligence (AI).
          </p>

          <p className="mb-4">
            We believe that AI represents the future, and we are committed to leveraging its power
            to enhance our services and deliver innovative solutions.
          </p>

          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded-md mb-6">
            <p className="font-semibold">
              Stay tuned as we embark on this journey towards a future driven by AI!
            </p>
            <Link className='text-red-600' href="/Navbar/contactus" >Please give your feedback here</Link>
           
          </div>

          <p>
            As we progress, we aim to integrate cutting-edge AI technologies to revolutionize our
            offerings and provide our users with smarter and more efficient solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureViewPage;
