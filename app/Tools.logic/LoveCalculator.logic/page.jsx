"use client";
import React, { useState } from "react";

const LoveCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [loveScore, setLoveScore] = useState(null);
  const [loveAdvice, setLoveAdvice] = useState("");
  const [buttonVisible, setButtonVisible] = useState(true);

  const calculateLove = () => {
    if (!name1 || !name2) {
      alert("Please enter both names.");
      return;
    }

    // Generate a love score between 60 and 100
    const score = Math.floor(Math.random() * 41) + 50; // Random score between 60 and 100
    setLoveScore(score);

    // Set love advice based on score
    const advice =
      score >= 80
        ? "Your love is strong! Keep nurturing it."
        : score >= 60
        ? "You have a good foundation. Keep working on it."
        : "Your love needs more nurturing. Spend quality time together.";
    setButtonVisible(false);
    setLoveAdvice(advice);
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="text-center">
      {" "}
      <h2 className="relative bg-sky-700 pb-2 text-white font-medium text-xl border border-black rounded-md mb-2">
        {" "}
        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
          {" "}
          <span className="w-3 h-3 bg-sky-900 transform rotate-45"></span>{" "}
        </span>{" "}
        <p className=" pt-2 font-medium">As per Your Names Matching </p>
      </h2>{" "}
      <div className="form-container bg-slate-200 px-6 py-4 rounded shadow-lg flex flex-col items-center animate-fadeIn border border-black">
        {/* Start */}
        <div className="container mx-auto mt-8">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex flex-wrap justify-center items-center">
              <input
                type="text"
                placeholder="Enter Name 1"
                className="border border-gray-400 font-semibold rounded px-3 py-2 mr-2"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Name 2"
                className="border border-gray font-semibold font-400 rounded px-3 py-2"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
              />
            </div>
            {buttonVisible ? (
              <button
                className="relative bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 shadow-md transition duration-300 ease-in-out mt-2 rounded"
                onClick={calculateLove}
              >
                Calculate
                <span className="absolute top-0 left-0 -mt-1 -ml-1 w-4 h-4 bg-white rounded-xl flex justify-center items-center">
                  <span className="w-2 h-2 bg-sky-900 transform rotate-45"></span>
                </span>
              </button>
            ) : (
              <button
                className="relative bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 shadow-md transition duration-300 ease-in-out mt-2 rounded"
                onClick={refreshPage}
              >
                Refresh Page
                <span className="absolute top-0 left-0 -mt-1 -ml-1 w-4 h-4 bg-white rounded-xl flex justify-center items-center">
                  <span className="w-2 h-2 bg-sky-900 transform rotate-45"></span>
                </span>
              </button>
            )}
          </div>
          {loveScore !== null && (
            <div className="mt-8 text-center flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold mb-4">Your Love Score: </h2>
              <div
                className={`text-5xl font-bold ${
                  loveScore >= 80
                    ? "text-green-500"
                    : loveScore >= 60
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {loveScore}
              </div>
              <div className=" w-1/2 h-4 bg-gray-200 mt-4 rounded-full">
                <div
                  className={`h-full rounded-full ${
                    loveScore >= 60 ? "bg-green-500" : "bg-red-500"
                  }`}
                  style={{ width: `${loveScore}%` }}
                ></div>
              </div>
              <p className="text-lg mt-4">{loveAdvice}</p>
            </div>
          )}
        </div>
        {/* End */}{" "}
        {/* <button
          className="relative bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 shadow-md transition duration-300 ease-in-out mt-2 rounded"
          onClick={calculateRoots}
        >
          {" "}
          Calculate{" "}
          <span className="absolute top-0 left-0 -mt-1 -ml-1 w-4 h-4 bg-white rounded-xl flex justify-center items-center">
            {" "}
            <span className="w-2 h-2 bg-green-900 transform rotate-45"></span>{" "}
          </span>{" "}
        </button>{" "} */}
      </div>{" "}
    </div>
  );
};

export default LoveCalculator;
