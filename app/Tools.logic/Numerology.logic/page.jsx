"use client";
import { useState } from "react";

const NumerologyCalculator = () => {
  const [name, setName] = useState("");
  const [numerologySum, setNumerologySum] = useState(0);
  const [astrologicalSum, setAstrologicalSum] = useState(0);
  const [letterValues, setLetterValues] = useState({});

  const calculateNumbers = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const numbers = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 8,
      g: 3,
      h: 5,
      i: 1,
      j: 1,
      k: 2,
      l: 3,
      m: 4,
      n: 5,
      o: 7,
      p: 8,
      q: 1,
      r: 2,
      s: 3,
      t: 4,
      u: 6,
      v: 6,
      w: 6,
      x: 5,
      y: 1,
      z: 7,
    };

    let numerologyTotal = 0;
    let astrologicalTotal = 0;
    let letterValuesTemp = {};

    for (let i = 0; i < name.length; i++) {
      const letter = name[i].toLowerCase();
      if (alphabet.includes(letter)) {
        const value = numbers[letter];
        numerologyTotal += value;
        astrologicalTotal += value;
        letterValuesTemp[letter] = value;
      }
    }

    // Reduce astrologicalTotal to a single digit
    while (astrologicalTotal > 9) {
      astrologicalTotal =
        Math.floor(astrologicalTotal / 10) + (astrologicalTotal % 10);
    }

    setNumerologySum(numerologyTotal);
    setAstrologicalSum(astrologicalTotal);
    setLetterValues(letterValuesTemp);
  };

  return (
  
    <div className="flex flex-col items-center justify-center py-4 bg-gray-100">
    <label htmlFor="nameInput" className="mb-2 text-lg font-semibold text-gray-800">Enter your name:</label>
    <input
      id="nameInput"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="p-2 text-lg border border-gray-300 rounded mb-4 w-full max-w-md focus:outline-none focus:border-blue-500"
    />
    <button onClick={calculateNumbers} className="p-2 bg-blue-500 text-white 
    rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Calculate</button>
    <div className="mb-4">
      {name.split("").map((letter, index) => (
        <span key={index} className="mr-2 text-sm font-medium text-gray-700">
          {letter.toLowerCase()} ({letterValues[letter.toLowerCase()]})
        </span>
      ))}
    </div>
    <p className="mb-2 text-lg font-semibold text-gray-800">Name: {name}</p>
    <p className="mb-2 text-lg font-semibold text-gray-800">Numerology Number: {numerologySum}</p>
    <p className="text-lg font-semibold text-gray-800">Astrological Number: {astrologicalSum}</p>
  </div>
  

  );
};

export default NumerologyCalculator;