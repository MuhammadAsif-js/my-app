"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(5);
  const [weight, setWeight] = useState(60);
  const [bmis, setBmi] = useState(0);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    console.log("Selected gender: ", event.target.value);
  };

  const calculateArrowPosition = (bmiValue) => {
    const minBMI = 16.5;
    const maxBMI = 29;
    const position = ((bmiValue - minBMI) / (maxBMI - minBMI)) * 100;
    return Math.min(Math.max(position, 0), 100);
  };

  // const bmicalculate = () => {
  //   const totalInches = Number(feet) * 12 + Number(inches);
  //   const heightInMeters = totalInches * 0.0254; // Convert height to meters
  //   const bmi = Number(weight) / (heightInMeters * heightInMeters); // BMI calculation
  //   setBmi(bmi.toFixed(2));
  //   console.log(bmi);
  // };

  useEffect(() => {
    const totalInches = Number(feet) * 12 + Number(inches);
    const heightInMeters = totalInches * 0.0254;
    let bmi = 0;
    if (gender === "male") {
      bmi = Number(weight) / (heightInMeters * heightInMeters); // BMI calculation
      setBmi(bmi.toFixed(2));
      console.log(bmi);
    } else if (gender === "female") {
      bmi = Number(weight) / ((heightInMeters * heightInMeters) * 0.98); // BMI calculation
      setBmi(bmi.toFixed(2));
      console.log(bmi);
    }
    // const bmi = Number(weight) / (heightInMeters * heightInMeters); // BMI calculation
    setBmi(bmi.toFixed(2));
    console.log(bmi);
  }, [age, gender, feet, inches, weight]);

  const clearbtn = () => {
    setAge(0);
    setGender("");
    setFeet(0);
    setInches(0);
    setWeight(0);
    setBmi(0);
  };

  return (
    <div className="flex flex-wrap justify-center items-center m-10 cursor-pointer">
      <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-[388px] bg-gray-100">
        <h1 className="font-bold text-xl text-red-600">BMI CALCULATOR</h1>
        <div>
          <div className="flex items-center my-4">
            <label
              htmlFor=""
              className="block text-gray-700 font-bold mb-2 text-lg mr-1"
            >
              Age :
            </label>
            <input
              type="number"
              value={age}
              placeholder="Your Age"
              onChange={(e) => setAge(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-auto"
            />
            <span className="text-gray-600 p-4 font-semibold text-md">
              2-90
            </span>
          </div>
          <div className="flex items-center my-4">
            <label htmlFor="" className="text-gray-700 text-lg font-bold mr-2">
              Gender :
            </label>
            <input
              type="radio"
              defaultChecked
              name="gender"
              value="male"
              className="mr-2 leading-tight"
              onChange={handleGenderChange}
            />
            <span className="text-gray-700 font-semibold text-md mr-6">
              Male
            </span>
            <input
              type="radio"
              name="gender"
              value="female"
              className="mr-2 leading-tight"
              onChange={handleGenderChange}
            />
            <span className="text-gray-700 font-semibold text-md">Female</span>
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="" className="text-gray-700 text-lg font-bold mr-2">
              Height : {""}
            </label>
            <input
              type="number"
              placeholder="feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2 w-28"
            />
            <input
              type="number"
              value={inches}
              placeholder="inches"
              onChange={(e) => setInches(e.target.value)}
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor=""
              className="block text-gray-700  font-bold mb-2 text-md mr-2"
            >
              Weight : {""}
            </label>
            <input
              type="number"
              placeholder="In Kgs"
              value={weight}
              onChange={(e) => setWeight(e.target.value)} // Change from onClick to onChange
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none animate-pulse focus:shadow-outline m-2"
              onClick={bmicalculate}
            >
              Calculate
            </button> */}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-scale hover:animate-pulse"
              onClick={clearbtn}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-[388px] items-center m-10 cursor-pointer">
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-80 bg-gray-100 w-[378px]">
          <h1 className="font-bold text-xl mb-2">Result:</h1>
          <table className="table-auto">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-xl font-semibold px-7 py-7 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Your calculated BMI: {bmis}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full mt-2 h-10 bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-lg overflow-hidden relative">
            <div
              className="h-full bg-transparent border-r-4 border-gray-700 absolute top-0 left-0"
              style={{ width: `${calculateArrowPosition(bmis)}%` }}
            ></div>
            <div className="w-0 h-0 border-t-8 border-b-8 border-transparent border-black absolute top-0 left-0 transform -translate-x-1/2 -translate-y-8"></div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default page;
