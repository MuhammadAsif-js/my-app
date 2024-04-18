"use client";
// components/ChronologicalAgeCalculator.js
import React, { useState } from 'react';

const ChronologicalAgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = endDate ? new Date(endDate) : new Date();
    const birthDate = new Date(birthdate);
    const diffInMilliseconds = Math.abs(today - birthDate);

    const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    let remainingMilliseconds = diffInMilliseconds - (years * 1000 * 60 * 60 * 24 * 365.25);

    const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30.4375));
    remainingMilliseconds -= months * 1000 * 60 * 60 * 24 * 30.4375;

    const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));
    remainingMilliseconds -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
    remainingMilliseconds -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(remainingMilliseconds / (1000 * 60));

    setAge({
      years,
      months,
      days,
      hours,
      minutes
    });
  };

  return (
    <div className="flex flex-col items-center justify-center text-black">
      {/* <h1 className="text-3xl font-bold mb-6">Chronological Age Calculator</h1> */}
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md mb-4 w-full max-w-md"
      />
      <label className="block mb-2">Optional End Date (for precise calculation, if applicable)</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md mb-4 w-full max-w-md"
      />
      <button
        onClick={calculateAge}
        className="px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600"
      >
        Calculate Age
      </button>
      {age && (
        <div className="mt-4 text-center">
          <p>Your age is:</p>
          <p className="font-bold">{age.years} years, {age.months} months, {age.days} days, {age.hours} hours, and {age.minutes} minutes</p>
        </div>
      )}
    </div>
  );
};

export default ChronologicalAgeCalculator;
