"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [motherHeight, setMotherHeight] = useState(0);
  const [fatherHeight, setFatherHeight] = useState(0);
  const [childHeight, setChildHeight] = useState(0);
  const [childGender, setChildGender] = useState("male"); // Default to male
  const [childAge, setChildAge] = useState(0);
  const [childWeight, setChildWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    // Calculate child's predicted height when inputs change
    const calculateHeight = () => {
      if (
        motherHeight === 0 ||
        fatherHeight === 0 ||
        childHeight === 0 ||
        childAge === 0 ||
        childWeight === 0
      ) {
        setError("Please fill in all fields.");
        setResult(0);
        return;
      }

      let midParentalHeight;
      let predictedHeight;

      // Convert all heights to centimeters
      const motherHeightCm = motherHeight;
      const fatherHeightCm = fatherHeight;
      const childHeightCm = childHeight;

      // Calculate mid-parental height based on child's gender
      if (childGender === "male") {
        midParentalHeight = (fatherHeightCm + motherHeightCm + 13) / 2;
      } else {
        midParentalHeight = (fatherHeightCm + motherHeightCm - 13) / 2;
      }

      // Adjust predicted height based on child's weight and age
      const weightFactor = childWeight >= 30 ? 0.05 : -0.05; // Adjust based on weight
      const ageFactor = childAge >= 13 ? 0.1 : -0.1; // Adjust based on age

      predictedHeight =
        midParentalHeight + weightFactor * childWeight + ageFactor * childAge;

      // Set the result and clear error
      setResult(predictedHeight);
      setError("");
    };

    calculateHeight();
  }, [
    motherHeight,
    fatherHeight,
    childHeight,
    childGender,
    childWeight,
    childAge,
  ]);

  const handleCalculate = () => {
    // Reset error message
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="motherHeight">
          Mother Height (in cm)
        </label>
        <input
          id="motherHeight"
          type="number"
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="Enter Mother's Height"
          value={motherHeight}
          onChange={(e) => setMotherHeight(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="fatherHeight">
          Father Height (in cm)
        </label>
        <input
          id="fatherHeight"
          type="number"
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="Enter Father's Height"
          value={fatherHeight}
          onChange={(e) => setFatherHeight(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="childHeight">
          Child Height (in cm)
        </label>
        <input
          id="childHeight"
          type="number"
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="Enter Child's Height"
          value={childHeight}
          onChange={(e) => setChildHeight(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="childGender">
          Children Gender
        </label>
        <select
          id="childGender"
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:border-blue-500"
          value={childGender}
          onChange={(e) => setChildGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="childAge">
          Children Age (in years)
        </label>
        <input
          id="childAge"
          type="number"
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="Enter Child's Age"
          value={childAge}
          onChange={(e) => setChildAge(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="childWeight">
          Children Weight (in kg)
        </label>
        <input
          id="childWeight"
          type="number"
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="Enter Child's Weight"
          value={childWeight}
          onChange={(e) => setChildWeight(parseFloat(e.target.value))}
        />
      </div>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-4">
        <h2 className="text-xl font-bold">{result.toFixed(2)} cm</h2>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
    </div>
  </div>
  );
};

export default Page;
