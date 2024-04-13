"use client";
import React, { useState } from 'react';

const unitsOptions = [
  { value: 'micrograms', label: 'Micrograms' },
  { value: 'milligrams', label: 'Milligrams' },
  { value: 'grams', label: 'Grams' },
  { value: 'grains', label: 'Grains' },
  { value: 'drachms', label: 'Drachms' },
  { value: 'ounces', label: 'Ounces' },
  { value: 'pounds', label: 'Pounds' },
];

const velocityOptions = [
  { value: 'metersPerSecond', label: 'Meters per Second' },
  { value: 'kilometersPerHour', label: 'Kilometers per Hour' },
  { value: 'feetPerSecond', label: 'Feet per Second' },
  { value: 'milesPerHour', label: 'Miles per Hour' },
  { value: 'feetPerMinute', label: 'Feet per Minute' },
];

const BulletEnergyCalculator = () => {
  const [bulletMass, setBulletMass] = useState('');
  const [bulletMassUnit, setBulletMassUnit] = useState(unitsOptions[0]);
  const [bulletVelocity, setBulletVelocity] = useState('');
  const [bulletVelocityUnit, setBulletVelocityUnit] = useState(velocityOptions[0]);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    // Convert bullet mass to grams
    let massInGrams = parseFloat(bulletMass);
    switch (bulletMassUnit.value) {
      case 'micrograms':
        massInGrams /= 1000000;
        break;
      case 'milligrams':
        massInGrams /= 1000;
        break;
      case 'grains':
        massInGrams *= 0.06479891;
        break;
      case 'drachms':
        massInGrams *= 1.771845195;
        break;
      case 'ounces':
        massInGrams *= 28.34952;
        break;
      case 'pounds':
        massInGrams *= 453.5924;
        break;
      default:
        break;
    }

    // Convert bullet velocity to meters per second
    let velocityInMetersPerSecond = parseFloat(bulletVelocity);
    switch (bulletVelocityUnit.value) {
      case 'kilometersPerHour':
        velocityInMetersPerSecond *= 0.277778;
        break;
      case 'feetPerSecond':
        velocityInMetersPerSecond *= 0.3048;
        break;
      case 'milesPerHour':
        velocityInMetersPerSecond *= 0.44704;
        break;
      case 'feetPerMinute':
        velocityInMetersPerSecond *= 0.00508;
        break;
      default:
        break;
    }

    // Calculate energy in joules and foot-pounds
    const joules = 0.5 * massInGrams * velocityInMetersPerSecond ** 2;
    const footPounds = joules * 0.737562149;

    setResult({ joules, footPounds });
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 space-y-4">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="flex-grow mr-4">
        <label className="block mb-1">Bullet Mass:</label>
        <div className="flex items-center">
          <input
            type="number"
            className="w-1/2 mr-2 py-1 px-2 border rounded-md"
            value={bulletMass}
            onChange={(e) => setBulletMass(e.target.value)}
            step="0.001"
          />
          <select
            className="py-1 px-2 border rounded-md w-36 sm:w-1/2"
            value={bulletMassUnit.value}
            onChange={(e) =>
              setBulletMassUnit(
                unitsOptions.find((option) => option.value === e.target.value)
              )
            }
          >
            {unitsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-grow">
        <label className="block mb-1">Bullet Velocity:</label>
        <div className="flex items-center">
          <input
            type="number"
            className="w-1/2 mr-2 py-1 px-2 border rounded-md"
            value={bulletVelocity}
            onChange={(e) => setBulletVelocity(e.target.value)}
            step="0.001"
          />
          <select
            className="w-1/2 py-1 px-2 border rounded-md"
            value={bulletVelocityUnit.value}
            onChange={(e) =>
              setBulletVelocityUnit(
                velocityOptions.find((option) => option.value === e.target.value)
              )
            }
          >
            {velocityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleCalculate}>
      Calculate
    </button>
    {result && (
      <div className="bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-bold mb-2">Result:</h2>
        <p className="mb-2">Joules: {result.joules.toFixed(2)}</p>
        <p>Foot-Pounds: {result.footPounds.toFixed(2)}</p>
      </div>
    )}
  </div>
  
  );
};

export default BulletEnergyCalculator;