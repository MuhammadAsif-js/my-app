"use client";
import React, { useState } from "react";

const RoundOffCalculator = () => {
  const [number, setNumber] = useState("");
  const [roundingOption, setRoundingOption] = useState("nearest");
  const [roundedResult, setRoundedResult] = useState("");

  const roundNumber = () => {
    if (!number) {
      alert("Please enter a number.");
      return;
    }

    const parsedNumber = parseFloat(number);
    if (isNaN(parsedNumber)) {
      alert("Please enter a valid number.");
      return;
    }

    let rounded;
    switch (roundingOption) {
      case "nearest":
        rounded = Math.round(parsedNumber);
        break;
      case "tenth":
        rounded = Math.round(parsedNumber * 10) / 10;
        break;
      case "hundredth":
        rounded = Math.round(parsedNumber * 100) / 100;
        break;
      case "whole":
        rounded = Math.trunc(parsedNumber);
        break;
      case "fraction":
        rounded = Math.round(parsedNumber);
        break;
      case "thousandth":
        rounded = Math.round(parsedNumber * 1000) / 1000;
        break;
      case "millionth":
        rounded = Math.round(parsedNumber * 1000000) / 1000000;
        break;
      case "billionth":
        rounded = Math.round(parsedNumber * 1000000000) / 1000000000;
        break;
      case "trillionth":
        rounded = Math.round(parsedNumber * 1000000000000) / 1000000000000;
        break;
      case "quadrillionth":
        rounded =
          Math.round(parsedNumber * 1000000000000000) / 1000000000000000;
        break;
      case "1/2":
        rounded = Math.round(parsedNumber * 2) / 2;
        break;
      case "1/4":
        rounded = Math.round(parsedNumber * 4) / 4;
        break;
      case "1/8":
        rounded = Math.round(parsedNumber * 8) / 8;
        break;
      case "1/16":
        rounded = Math.round(parsedNumber * 16) / 16;
        break;
      case "1/32":
        rounded = Math.round(parsedNumber * 32) / 32;
        break;
      case "1/64":
        rounded = Math.round(parsedNumber * 64) / 64;
        break;
      case "thousand":
        rounded = Math.round(parsedNumber / 1000) * 1000;
        break;
      case "ten_thousand":
        rounded = Math.round(parsedNumber / 10000) * 10000;
        break;
      case "hundred_thousand":
        rounded = Math.round(parsedNumber / 100000) * 100000;
        break;
      case "million":
        rounded = Math.round(parsedNumber / 1000000) * 1000000;
        break;
      case "billion":
        rounded = Math.round(parsedNumber / 1000000000) * 1000000000;
        break;
      case "trillion":
        rounded = Math.round(parsedNumber / 1000000000000) * 1000000000000;
        break;
      case "quadrillion":
        rounded =
          Math.round(parsedNumber / 1000000000000000) * 1000000000000000;
        break;
      default:
        rounded = parsedNumber;
    }

    setRoundedResult(rounded);
  };

  return (
    <div className="text-center">
      <h2 className="relative bg-sky-700 pb-2 text-white font-medium text-xl border border-black rounded-md mb-4">
        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
          <span className="w-3 h-3 bg-sky-900 transform rotate-45"></span>
        </span>
        Rounding Calculator
      </h2>

      <div className="form-container bg-slate-200 px-6 py-4 rounded shadow-lg flex flex-col items-center animate-fadeIn border border-black">
        {/* Start */}
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full px-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Number:
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter a number"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Rounding Option:
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={roundingOption}
                  onChange={(e) => setRoundingOption(e.target.value)}
                >
                  <option value="nearest">Nearest Whole Number</option>
                  <option value="tenth">Nearest Tenth</option>
                  <option value="hundredth">Nearest Hundredth</option>
                  <option value="whole">Whole Number</option>
                  <option value="fraction">Fraction</option>
                  <option value="thousandth">Nearest Thousandth</option>
                  <option value="millionth">Nearest Millionth</option>
                  <option value="billionth">Nearest Billionth</option>
                  <option value="trillionth">Nearest Trillionth</option>
                  <option value="quadrillionth">Nearest Quadrillionth</option>
                  <option value="1/2">Nearest 1/2</option>
                  <option value="1/4">Nearest 1/4</option>
                  <option value="1/8">Nearest 1/8</option>
                  <option value="1/16">Nearest 1/16</option>
                  <option value="1/32">Nearest 1/32</option>
                  <option value="1/64">Nearest 1/64</option>
                  <option value="thousand">Nearest Thousand</option>
                  <option value="ten_thousand">Nearest Ten Thousand</option>
                  <option value="hundred_thousand">
                    Nearest Hundred Thousand
                  </option>
                  <option value="million">Nearest Million</option>
                  <option value="billion">Nearest Billion</option>
                  <option value="trillion">Nearest Trillion</option>
                  <option value="quadrillion">Nearest Quadrillion</option>
                </select>
              </label>
            </div>
            <div className="mb-4"></div>
            {roundedResult !== "" && (
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">Rounded Result:</h3>
                <p className="text-xl">{roundedResult}</p>
              </div>
            )}
          </div>
        </div>

        {/* End */}
        <button
          className="relative bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 shadow-md transition duration-300 ease-in-out mt-2 rounded"
          onClick={roundNumber}
        >
          Calculate
          <span className="absolute top-0 left-0 -mt-1 -ml-1 w-4 h-4 bg-white rounded-xl flex justify-center items-center">
            <span className="w-2 h-2 bg-green-900 transform rotate-45"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default RoundOffCalculator;

{
  /* <div className="text-center">
<h2 className="relative bg-sky-700 pb-2 text-white font-medium text-xl border border-black rounded-md mb-4">
  <span className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
    <span className="w-3 h-3 bg-sky-900 transform rotate-45"></span>
  </span>
  Quadratic Formula Calculator
</h2>

<div className="form-container bg-slate-200 px-6 py-4 rounded shadow-lg flex flex-col items-center animate-fadeIn border border-black">
// Start

// End
//   <button
//     className="relative bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 shadow-md transition duration-300 ease-in-out mt-2 rounded"
//     onClick={calculateRoots}
//   >
//     Calculate
//     <span className="absolute top-0 left-0 -mt-1 -ml-1 w-4 h-4 bg-white rounded-xl flex justify-center items-center">
//       <span className="w-2 h-2 bg-green-900 transform rotate-45"></span>
//     </span>
//   </button>
// </div>
// </div> */
}
