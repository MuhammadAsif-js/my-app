"use client";
import React, { useState } from "react";

const AverageCalculator = () => {
  const [values, setValues] = useState([]);
  const [average, setAverage] = useState(null);
  const [count, setCount] = useState(0);
  const [median, setMedian] = useState(null);
  const [geometricMean, setGeometricMean] = useState(null);
  const [largest, setLargest] = useState(null);
  const [smallest, setSmallest] = useState(null);
  const [range, setRange] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const newValues = value.split(",").map(parseFloat);
    setValues(newValues);
    setCount(newValues.length);
  };

  const calculateStatistics = () => {
    const sum = values.reduce((acc, val) => acc + val, 0);
    const sortedValues = values.slice().sort((a, b) => a - b);
    const mid = Math.floor(count / 2);

    setAverage(Math.round(sum / count));
    setMedian(
      count % 2 === 0
        ? (sortedValues[mid - 1] + sortedValues[mid]) / 2
        : sortedValues[mid]
    );
    setGeometricMean(
      Math.pow(
        values.reduce((acc, val) => acc * val, 1),
        1 / count
      ).toFixed(3)
    );
    setLargest(sortedValues[count - 1]);
    setSmallest(sortedValues[0]);
    setRange(sortedValues[count - 1] - sortedValues[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center text-black">
      <input
        type="text"
        placeholder="Enter values separated by commas"
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded-md mb-4 w-full max-w-md"
      />
      <button
        onClick={calculateStatistics}
        className="px-3 py-2 bg-blue-500 text-white font-semibold rounded transition duration-300 hover:bg-blue-600"
      >
        Calculate Statistics
      </button>
      {average !== null && (
        <div className="statistics-container mt-4 flex flex-col justify-center items-center">
          <p className="animated-stat font-medium text-lg">
            The average is: {average}
          </p>
          <p className="animated-stat font-medium text-lg">
            The median is: {median}
          </p>
          <p className="animated-stat font-medium text-lg">
            The geometric mean is: {geometricMean}
          </p>
          <p className="animated-stat font-medium text-lg">
            The largest value is: {largest}
          </p>
          <p className="animated-stat font-medium text-lg">
            The smallest value is: {smallest}
          </p>
          <p className="animated-stat font-medium text-lg">
            The range is: {range}
          </p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
