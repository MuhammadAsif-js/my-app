"use client";
import { useState } from "react";

export default function QuadraticCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState([]);

  const calculateRoots = () => {
    let steps = [];

    if (a === 0) {
      setResult(['Coefficient "a" must not be zero']);
      return;
    }

    steps.push(`Equation: ${a}x^2 + ${b}x + ${c} = 0`);
    steps.push(`Solution: x =`);

    const discriminant = b * b - 4 * a * c;

    if (discriminant >= 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

      steps.push(`-b ± √(b^2 - 4ac) / 2a`);
      steps.push(`= ${-b} ± √(${b}^2 - 4 × ${a} × ${c}) / 2 × ${a}`);
      steps.push(`= ${-b} ± √(${b * b} - ${4 * a * c}) / ${2 * a}`);
      steps.push(`= ${-b} ± √(${discriminant}) / ${2 * a}`);

      if (discriminant === 0) {
        steps.push(`= ${-b} ± √(0) / ${2 * a}`);
        steps.push(`= ${-b} / ${2 * a}`);
        steps.push(`= ${root1}`);
      } else {
        steps.push(`= (${root1}), (${root2})`);
      }
    } else {
      const realPart = (-b / (2 * a)).toFixed(2);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      steps.push(`-b ± √(b^2 - 4ac) / 2a`);
      steps.push(`= ${-b} ± √(${b}^2 - 4 × ${a} × ${c}) / 2 × ${a}`);
      steps.push(`= ${-b} ± √(${b * b} - ${4 * a * c}) / ${2 * a}`);
      steps.push(`= ${-b} ± √(${discriminant}) / ${2 * a}`);
      steps.push(
        `= (${realPart} + ${imaginaryPart}i), (${realPart} - ${imaginaryPart}i)`
      );
    }

    setResult(steps);
  };

  return (
    <div className="text-center">
      <h2 className="relative bg-sky-700 pb-2 text-white font-medium text-xl border border-black rounded-md mb-4">
        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
          <span className="w-3 h-3 bg-sky-900 transform rotate-45"></span>
        </span>
        Quadratic Formula Calculator
      </h2>

      <div className="form-container bg-slate-200 px-6 py-4 rounded shadow-lg flex flex-col items-center animate-fadeIn border border-black">
        {/* Start */}
        <div class="max-w-lg mx-auto mt-2 px-4 flex justify-between">
          <div class="mb-6 mr-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
              for="coefficient-a"
            >
              coefficient a:
              <input
                id="coefficient-a"
                type="number"
                class="form-input mt-1 block w-24  border-2 border-gray-300 rounded-md py-1 px-3 leading-tight focus:outline-none focus:border-blue-500"
                value={a}
                onChange={(e) => setA(parseFloat(e.target.value))}
              />
            </label>
          </div>
          <div class="mb-6 mr-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
              for="coefficient-b"
            >
              coefficient b:
              <input
                id="coefficient-b"
                type="number"
                class="form-input mt-1 block w-24  border-2 border-gray-300 rounded-md py-1 px-3 leading-tight focus:outline-none focus:border-blue-500"
                value={b}
                onChange={(e) => setB(parseFloat(e.target.value))}
              />
            </label>
          </div>
          <div class="mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
              for="coefficient-c"
            >
              coefficient c:
              <input
                id="coefficient-c"
                type="number"
                class="form-input mt-1 block w-24  border-2 border-gray-300 rounded-md py-1 px-3 leading-tight focus:outline-none focus:border-blue-500"
                value={c}
                onChange={(e) => setC(parseFloat(e.target.value))}
              />
            </label>
          </div>
        </div>
        <div>
          {/* start */}
          <div className="space-y-4">
          {result.map((step, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded p-4 shadow-md transform transition-transform hover:scale-105"
            >
              <p className="text-green-700 text-lg font-semibold">{step}</p>
            </div>
          ))}
          </div>
          {/* end */}
        </div>
        {/* End */}
        <button
          className="relative bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 shadow-md transition duration-300 ease-in-out mt-2 rounded"
          onClick={calculateRoots}
        >
          Calculate
          <span className="absolute top-0 left-0 -mt-1 -ml-1 w-4 h-4 bg-white rounded-xl flex justify-center items-center">
            <span className="w-2 h-2 bg-green-900 transform rotate-45"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
