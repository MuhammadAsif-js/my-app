"use client";
import React, { useState } from "react";

const TriangleCalculator = () => {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [perimeter, setPerimeter] = useState("");
  const [semiPerimeter, setSemiPerimeter] = useState("");
  const [area, setArea] = useState("");
  const [heightA, setHeightA] = useState("");
  const [heightB, setHeightB] = useState("");
  const [heightC, setHeightC] = useState("");
  const [angleA, setAngleA] = useState("");
  const [angleB, setAngleB] = useState("");
  const [angleC, setAngleC] = useState("");
  const [inradius, setInradius] = useState("");
  const [circumradius, setCircumradius] = useState("");
  const [medianA, setMedianA] = useState("");
  const [medianB, setMedianB] = useState("");
  const [medianC, setMedianC] = useState("");

  const triangleStyle = {
    width: "0",
    height: "0",
    borderLeft: `${sideB * 4}px solid transparent`,
    borderRight: `${sideC * 4}px solid transparent`,
    borderBottom: `${
      Math.sqrt(sideA ** 2 - ((sideB - sideC) / 2) ** 2) * 4
    }px solid #6B7280`, // Adjust color as neededpx solid #6B7280`, // Adjust color as needed
  };

  const calculateTriangle = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);
  
    const p = Math.round(a + b + c);
    const s = Math.round(p / 2);
    const t = Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
    const ha = Math.round((2 * t) / a);
    const hb = Math.round((2 * t) / b);
    const hc = Math.round((2 * t) / c);
    const alpha = 60; // Equilateral triangle has all angles equal to 60 degrees
    const r = (a / (2 * Math.sqrt(3))).toFixed(2); // Inradius of an equilateral triangle
    const R = (a / Math.sqrt(3)).toFixed(2); // Circumradius of an equilateral triangle
  
    setPerimeter(p);
    setSemiPerimeter(s);
    setArea(t);
    setHeightA(ha);
    setHeightB(hb);
    setHeightC(hc);
    setAngleA(alpha);
    setAngleB(alpha);
    setAngleC(alpha);
    setInradius(r);
    setCircumradius(R);
    setMedianA(ha); // Medians are equal to heights in an equilateral triangle
    setMedianB(hb);
    setMedianC(hc);
  };
  

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-sm shadow-lg">
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block mb-1">Side a:</label>
          <input
            type="number"
            value={sideA}
            onChange={(e) => setSideA(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block mb-1">Side b:</label>
          <input
            type="number"
            value={sideB}
            onChange={(e) => setSideB(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block mb-1">Side c:</label>
          <input
            type="number"
            value={sideC}
            onChange={(e) => setSideC(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <button
        onClick={calculateTriangle}
        className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-sm mt-4 md:mt-0 mx-auto block focus:outline-none focus:shadow-outline"
      >
        Calculate
      </button>
      {/* Start */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold mb-2">Triangle Shape:</h2>
        <div className="flex items-center justify-center">
          <div className="relative" style={{ width: "150px", height: "150px" }}>
            <div className="absolute top-0 left-0 text-lg text-blue-600 ">
              A
            </div>
            <div className="absolute bottom-0 left-0 text-lg text-red-600">
              B
            </div>
            <div className="absolute bottom-0 right-0 text-lg text-green-600">
              C
            </div>
            <div className="w-0 h-0" style={triangleStyle}></div>
          </div>
        </div>
      </div>
      {/* Display results */}
      <div className="mt-2 text-center">
        <h2 className="text-2xl font-bold mb-2">Results:</h2>
        <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Perimeter: {perimeter}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Semi-Perimeter: {semiPerimeter}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Area: {area}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Height a: {heightA}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Height b: {heightB}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Height c: {heightC}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Angle α: {angleA}°</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Angle β: {angleB}°</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Angle γ: {angleC}°</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Inradius: {inradius}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Circumradius: {circumradius}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Median a: {medianA}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Median b: {medianB}</p>
      <p className="text-gray-800 font-semibold transition duration-300 hover:opacity-80">Median c: {medianC}</p>
      </div>
    </div>
  );
};

export default TriangleCalculator;