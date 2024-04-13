"use client"
// components/StatisticalCalculator.js
import React, { useState,useEffect } from 'react';

const StatisticalCalculator = () => {
  const [numbers, setNumbers] = useState('');
  const [stats, setStats] = useState(null);


  const calculateStats = () => {
    const numArray = numbers.split(',').map(Number).sort((a, b) => a - b);
    const count = numArray.length;
    const sum = numArray.reduce((acc, num) => acc + num, 0);
    const mean = sum / count;
    let median, mode, range, min, max, quartiles, interQuartileRange, outliers;

    // Calculate median
    const middleIndex = Math.floor(count / 2);
    if (count % 2 === 0) {
      median = (numArray[middleIndex - 1] + numArray[middleIndex]) / 2;
    } else {
      median = numArray[middleIndex];
    }

    // Calculate mode
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];

    numArray.forEach(num => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        modes = [num];
      } else if (frequencyMap[num] === maxFrequency) {
        modes.push(num);
      }
    });
    mode = modes.join(', ');

    // Calculate range, min, max
    range = numArray[numArray.length - 1] - numArray[0];
    min = numArray[0];
    max = numArray[numArray.length - 1];

    // Calculate quartiles
    const q1Index = Math.floor(count / 4);
    const q2Index = Math.floor(count / 2);
    const q3Index = Math.floor((3 * count) / 4);

    quartiles = {
      Q1: numArray[q1Index],
      Q2: numArray[q2Index],
      Q3: numArray[q3Index]
    };

    // Calculate interquartile range
    interQuartileRange = quartiles.Q3 - quartiles.Q1;

    // Calculate outliers
    const lowerBound = quartiles.Q1 - 1.5 * interQuartileRange;
    const upperBound = quartiles.Q3 + 1.5 * interQuartileRange;
    outliers = numArray.filter(num => num < lowerBound || num > upperBound);

    setStats({ mean, median, mode, range, min, max, count, sum, quartiles, interQuartileRange, outliers });
  };

  useEffect(()=>{
    calculateStats()
    },[numbers])

  return (
    <div className="calculator bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Statistical Calculator</h2>
      <input
        type="text"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Enter numbers separated by commas"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
      />
      {/* <button onClick={calculateStats} className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600">
        Calculate Statistics
      </button> */}
      {stats && (
        <div className="mt-6 text-center w-full text-green-700">
          <p><span className="font-semibold">Mean:</span> {stats.mean.toFixed(2)}</p>
          <p><span className="font-semibold">Median:</span> {stats.median.toFixed(2)}</p>
          <p><span className="font-semibold">Mode:</span> {stats.mode}</p>
          <p><span className="font-semibold">Range:</span> {stats.range}</p>
          <p><span className="font-semibold">Minimum:</span> {stats.min}</p>
          <p><span className="font-semibold">Maximum:</span> {stats.max}</p>
          <p><span className="font-semibold">Count n:</span> {stats.count}</p>
          <p><span className="font-semibold">Sum:</span> {stats.sum}</p>
          <p className="font-semibold">Quartiles:</p>
          <ul>
            <li>Q1: {stats.quartiles.Q1}</li>
            <li>Q2: {stats.quartiles.Q2}</li>
            <li>Q3: {stats.quartiles.Q3}</li>
          </ul>
          <p><span className="font-semibold">Interquartile Range:</span> {stats.interQuartileRange}</p>
          <p><span className="font-semibold">Outliers:</span> {stats.outliers.length > 0 ? stats.outliers.join(', ') : 'none'}</p>
        </div>
      )}
    </div>
  );
};

export default StatisticalCalculator;
