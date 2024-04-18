"use client";
import React, { useState } from "react";

const ZScoreCalculator = () => {
  const [rawScore, setRawScore] = useState("");
  const [populationMean, setPopulationMean] = useState("");
  const [standardDeviation, setStandardDeviation] = useState("");
  const [zScore, setZScore] = useState("");
  const [pValue, setPValue] = useState("");
  const [error, setError] = useState("");
  const [pValuee, setPValuee] = useState("");
  const [zScoree, setZScoree] = useState(null);

  const calculateZScore = () => {
    setError("");
    try {
      const x = parseFloat(rawScore);
      const μ = parseFloat(populationMean);
      const σ = parseFloat(standardDeviation);

      if (isNaN(x) || isNaN(μ) || isNaN(σ)) {
        throw new Error("Please enter valid numerical values.");
      }

      const z = (x - μ) / σ;
      setZScore(z.toFixed(2));

      const p = calculatePValue(z);
      setPValue(p.toFixed(4));
    } catch (err) {
      setError(err.message);
    }
  };

  const calculatePValue = (z) => {
    const cumulativeProbability = cumulativeNormalDistribution(z);
    const pValue = 1 - cumulativeProbability;
    return pValue;
  };

  const cumulativeNormalDistribution = (z) => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp((-z * z) / 2);
    const p =
      d *
      t *
      (0.31938153 -
        t *
          (-0.356563782 +
            t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));

    if (z > 0) {
      return 1 - p;
    } else {
      return p;
    }
  };

  const calculateZFromP = () => {
    setError("");
    try {
      const p = parseFloat(pValue);

      if (isNaN(p) || p < 0 || p > 1) {
        throw new Error("Please enter a valid p-value between 0 and 1.");
      }

      const z = calculateZFromPValue(p);
      setZScore(z.toFixed(2));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCalculate = () => {
    if (
      isNaN(pValue) ||
      pValue === "" ||
      parseFloat(pValuee) < 0 ||
      parseFloat(pValuee) > 1
    ) {
      alert("Please enter a valid P-value between 0 and 1.");
      return;
    }

    // Calculate Z-score using the inverse cumulative distribution function (CDF) of the standard normal distribution
    const p = parseFloat(pValuee);
    const z = Math.sqrt(2) * ErfInv(2 * p - 1);

    setZScore(z.toFixed(4));
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 bg-white rounded-lg shadow-md text-black">
      {/* <h1 className="text-lg font-semibold mb-2">Z-Score Calculator</h1> */}
      <div className="mb-2">
        <label
          htmlFor="rawScore"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Raw Score (X):
        </label>
        <input
          type="number"
          id="rawScore"
          value={rawScore}
          onChange={(e) => setRawScore(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="populationMean"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Population Mean (μ):
        </label>
        <input
          type="number"
          id="populationMean"
          value={populationMean}
          onChange={(e) => setPopulationMean(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="standardDeviation"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Standard Deviation (σ):
        </label>
        <input
          type="number"
          id="standardDeviation"
          value={standardDeviation}
          onChange={(e) => setStandardDeviation(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <button
        onClick={calculateZScore}
        className="bg-blue-500 hover:bg-blue-600 text-white font-
      semibold py-1 px-2 rounded transition duration-300"
      >
        Calculate Z Score
      </button>
      {error && <p className="text-red-500 mt-1">{error}</p>}
      {zScore && <p className="mt-2">Z-Score (z): {zScore}</p>}
      {pValue && <p>p-Value (p): {pValue}</p>}
    </div>
  );
};

export default ZScoreCalculator;
