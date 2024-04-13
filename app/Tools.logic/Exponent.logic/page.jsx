"use client";
import React, { useState } from "react";

const ExponentCalculator = () => {
  const [base, setBase] = useState("");
  const [exponent, setExponent] = useState("");
  const [result, setResult] = useState("");
  const [showSteps, setShowSteps] = useState(false);

  const handleCalculate = () => {
    const baseValue = parseFloat(base);
    const exponentValue = parseFloat(exponent);

    if (!isNaN(baseValue) && !isNaN(exponentValue)) {
      setResult(Math.pow(baseValue, exponentValue).toString());
      setShowSteps(exponentValue <= 10); // Show steps if exponent is less than or equal to 10
    } else {
      setResult("Invalid input");
    }
  };

  const renderSteps = () => {
    const baseValue = parseFloat(base);
    const exponentValue = parseFloat(exponent);
    const steps = [];

    for (let i = 1; i <= exponentValue; i++) {
      steps.push(`${baseValue}^${i} = ${Math.pow(baseValue, i)}`);
    }

    return steps.join(" * ");
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* <h1 className="text-3xl font-semibold text-center mb-6">Exponent Calculator</h1> */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="Enter base"
            className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            value={exponent}
            onChange={(e) => setExponent(e.target.value)}
            placeholder="Enter exponent"
            className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4 text-center">
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-center my-3 text-white px-3 py-1 mt-4 rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-lg"
        >
          Calculate
        </button>
          <div className="font-semibold">Result: {result}</div>
          {showSteps && exponent <= 6 && (
            <div className="mt-4 font-semibold">Process: {renderSteps()}</div>
          )}
          {exponent > 6 && (
            <div className="mt-4 text-red-500 font-semibold">Exponent is too large to show process.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExponentCalculator;
