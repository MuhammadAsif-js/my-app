"use client";
import React, { useState } from "react";

const IndexPage = () => {
  const [concentration, setConcentration] = useState("");
  const [concentrationUnit, setConcentrationUnit] = useState("molar");
  const [formulaWeight, setFormulaWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [volumeUnit, setVolumeUnit] = useState("liter");
  const [mass, setMass] = useState("");

  const concentrationOptions = [
    "molar",
    "milimolar",
    "micromolar",
    "nanomolar",
    "picomolar",
    "femtomolar",
  ];
  const volumeOptions = ["liter", "mililiter", "microliter"];

  const calculateMass = () => {
    const conc = parseFloat(concentration);
    const weight = parseFloat(formulaWeight);
    const vol = parseFloat(volume);

    if (!isNaN(conc) && !isNaN(weight) && !isNaN(vol)) {
      let massInGrams = 0;
      switch (concentrationUnit) {
        case "molar":
          massInGrams = conc * weight * vol;
          break;
        case "milimolar":
          massInGrams = (conc * weight * vol) / 1000;
          break;
        case "micromolar":
          massInGrams = (conc * weight * vol) / 1000000;
          break;
        case "nanomolar":
          massInGrams = (conc * weight * vol) / 1000000000;
          break;
        case "picomolar":
          massInGrams = (conc * weight * vol) / 1000000000000;
          break;
        case "femtomolar":
          massInGrams = (conc * weight * vol) / 1000000000000000;
          break;
        default:
          massInGrams = 0;
      }
      setMass(massInGrams.toFixed(2)); // Round to 2 decimal places
    } else {
      alert(
        "Please enter valid numbers for concentration, formula weight, and volume."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Concentration:
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            className="border border-gray-300 rounded-md px-3 w-32 focus:outline-none focus:ring focus:border-blue-500"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded px-3 w-32 focus:outline-none focus:ring focus:border-blue-500"
            value={concentrationUnit}
            onChange={(e) => setConcentrationUnit(e.target.value)}
          >
            {concentrationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Formula Weight (Daltons):
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
          value={formulaWeight}
          onChange={(e) => setFormulaWeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Volume:
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            className="border border-gray-300 rounded-md px-3 w-32 focus:outline-none focus:ring focus:border-blue-500"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded-md px-3 w-32 focus:outline-none focus:ring focus:border-blue-500"
            value={volumeUnit}
            onChange={(e) => setVolumeUnit(e.target.value)}
          >
            {volumeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={calculateMass}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2
rounded transition duration-300"
      >
        Calculate Mass
      </button>
      {mass && (
        <div className="mt-4">
          <h2 className="text-xs font-medium mb-2">Result:</h2>
          <p className="text-gray-800">Mass: {mass} grams</p>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
