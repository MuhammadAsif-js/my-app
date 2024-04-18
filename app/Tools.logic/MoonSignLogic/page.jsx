"use client";
import React, { useState } from "react";

function getMoonSign(birthDate, birthTime) {
  // Convert birth date and time to UTC
  const utcDate = new Date(birthDate + "T" + birthTime + "Z");
  const year = utcDate.getUTCFullYear();
  const month = utcDate.getUTCMonth() + 1; // Month is zero-based
  const day = utcDate.getUTCDate();

  // Calculate Julian Day
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  const jd =
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;

  // Calculate Moon's position in its orbit
  const t = (jd - 2451545.0) / 36525;
  const t2 = t * t;
  const t3 = t2 * t;
  const t4 = t3 * t;
  const t5 = t4 * t;
  const L0 =
    218.3164477 +
    481267.88123421 * t -
    0.0015786 * t2 +
    t3 / 538841 -
    t4 / 65194000 +
    (t5 / 538841) * 709.2;
  const D =
    297.8501921 +
    445267.1114034 * t -
    0.0018819 * t2 +
    t3 / 545868 -
    t4 / 113065000;
  const M = 357.5291092 + 35999.0502909 * t - 0.0001536 * t2 + t3 / 24490000;
  const M1 =
    134.9633964 +
    477198.8675055 * t +
    0.0087414 * t2 +
    t3 / 69699 -
    t4 / 14712000;
  const F =
    93.272095 +
    483202.0175233 * t -
    0.0036539 * t2 -
    t3 / 3526000 +
    t4 / 863310000;

  // Calculate the Moon's longitude
  let L =
    L0 +
    6.288774 * Math.sin(toRadians(M1)) +
    1.274027 * Math.sin(toRadians(2 * D - M1)) +
    0.658314 * Math.sin(toRadians(2 * D)) +
    0.213618 * Math.sin(toRadians(2 * M1)) -
    0.185116 * Math.sin(toRadians(M)) -
    0.114332 * Math.sin(toRadians(2 * F));
  L = L % 360;

  // Calculate Moon sign based on longitude
  let moonSign = "";
  let strength = "";

  if ((0 <= L && L < 30) || (330 <= L && L < 360)) {
    moonSign = "Aries";
    strength = "Courageous, determined, confident";
  } else if (30 <= L && L < 60) {
    moonSign = "Taurus";
    strength = "Practical, reliable, patient";
  } else if (60 <= L && L < 90) {
    moonSign = "Gemini";
    strength = "Adaptable, curious, witty";
  } else if (90 <= L && L < 120) {
    moonSign = "Cancer";
    strength = "Intuitive, caring, protective";
  } else if (120 <= L && L < 150) {
    moonSign = "Leo";
    strength = "Confident, generous, loyal";
  } else if (150 <= L && L < 180) {
    moonSign = "Virgo";
    strength = "Practical, analytical, responsible";
  } else if (180 <= L && L < 210) {
    moonSign = "Libra";
    strength = "Diplomatic, fair-minded, social";
  } else if (210 <= L && L < 240) {
    moonSign = "Scorpio";
    strength = "Passionate, resourceful, brave";
  } else if (240 <= L && L < 270) {
    moonSign = "Sagittarius";
    strength = "Optimistic, adventurous, humorous";
  } else if (270 <= L && L < 300) {
    moonSign = "Capricorn";
    strength = "Disciplined, responsible, ambitious";
  } else if (300 <= L && L < 330) {
    moonSign = "Aquarius";
    strength = "Independent, intellectual, humanitarian";
  } else {
    moonSign = "Pisces";
    strength = "Compassionate, artistic, intuitive";
  }

  return { moonSign, strength };
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [moonSignData, setMoonSignData] = useState({
    moonSign: "",
    strength: "",
  });

  const handleCalculate = () => {
    if (birthDate && birthTime) {
      const { moonSign, strength } = getMoonSign(birthDate, birthTime);
      setMoonSignData({ moonSign, strength });
    } else {
      alert("Please enter your birth date and time.");
    }
  };

  return (
    <div className="text-center">
      <h2 className="relative bg-sky-700 pb-2 text-white font-medium text-xl border border-black rounded-md mb-4">
        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
          <span className="w-3 h-3 bg-sky-900 transform rotate-45"></span>
        </span>
        Moon Sign Calculator
      </h2>

      <div className="form-container bg-slate-200 px-6 py-4 rounded shadow-lg flex flex-col items-center animate-fadeIn border border-black">
        {/* Start */}
        <div>
          <div>
            <label className=" pr-2 font-semibold text-black">Birth Date:</label>
            <input
              type="date"
              className="appearance-none text-black bg-transparent border-b-2 border-gray-300 w-auto mb-2 py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 pr-2 font-semibold text-black">Birth Time:</label>
            <input
              type="time"
              className="appearance-none bg-transparent border-b-2 text-black border-gray-300 w-auto py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
            />
          </div>
          <div className="mt-2 bg-gray-100 px-2  py-1 rounded-lg shadow-md border-l-4 border-purple-500">
            <h2 className=" text-lg font-semibold text-sky-900">
              Your Moon Sign is : {moonSignData.moonSign}
            </h2>
            <p className="text-lg font-medium text-gray-700">
              Strengths: {moonSignData.strength}
            </p>
          </div>
        </div>
        {/* End */}
        <button
          className="relative bg-green-700 hover:bg-green-600 text-lg
           text-white font-semibold py-1 px-3 shadow-md transition duration-300 ease-in-out mt-2 rounded"
          onClick={handleCalculate}
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

export default App;
