"use client";
import { useState } from 'react';

const VolumeCalculator = () => {
  const [mass, setMass] = useState('');
  const [unit, setUnit] = useState('grams');
  const [formulaWeight, setFormulaWeight] = useState('');
  const [concentration, setConcentration] = useState('');
  const [concentrationUnit, setConcentrationUnit] = useState('millimolar');
  const [volume, setVolume] = useState('');

  const handleCalculate = () => {
    // Convert mass to grams based on selected unit
    let massInGrams = parseFloat(mass);
    switch (unit) {
      case 'micrograms':
        massInGrams /= 1000000;
        break;
      case 'milligrams':
        massInGrams /= 1000;
        break;
      case 'kilograms':
        massInGrams *= 1000;
        break;
      default:
        break;
    }

    // Convert concentration to molar based on selected unit
    let concentrationInMolar = parseFloat(concentration);
    switch (concentrationUnit) {
      case 'femtomolar':
        concentrationInMolar *= 1e-15;
        break;
      case 'picomolar':
        concentrationInMolar *= 1e-12;
        break;
      case 'nanomolar':
        concentrationInMolar *= 1e-9;
        break;
      case 'micromolar':
        concentrationInMolar *= 1e-6;
        break;
      case 'millimolar':
        concentrationInMolar *= 1e-3;
        break;
      case 'molar':
        break;
      default:
        break;
    }

    // Calculate volume
    const formulaWeightInDaltons = parseFloat(formulaWeight);
    const volumeInLiters = massInGrams / (concentrationInMolar * formulaWeightInDaltons);

    setVolume(volumeInLiters.toFixed(2));
  };

  return (
    <div>
      <h1>Volume Calculator</h1>
      <div>
        <label>
          Mass:
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
          />
        </label>
        <select onChange={(e) => setUnit(e.target.value)}>
          <option value="micrograms">Micrograms</option>
          <option value="milligrams">Milligrams</option>
          <option value="grams">Grams</option>
          <option value="kilograms">Kilograms</option>
        </select>
      </div>
      <div>
        <label>
          Formula Weight (Daltons):
          <input
            type="number"
            value={formulaWeight}
            onChange={(e) => setFormulaWeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Concentration:
          <input
            type="number"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
          />
        </label>
        <select onChange={(e) => setConcentrationUnit(e.target.value)}>
          <option value="femtomolar">Femtomolar</option>
          <option value="picomolar">Picomolar</option>
          <option value="nanomolar">Nanomolar</option>
          <option value="micromolar">Micromolar</option>
          <option value="millimolar">Millimolar</option>
          <option value="molar">Molar</option>
        </select>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {volume && <p>Volume: {volume} Liters</p>}
    </div>
  );
};

export default VolumeCalculator;

