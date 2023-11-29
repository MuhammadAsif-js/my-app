"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(5);
  const [weight, setWeight] = useState(60);
  const [bmis, setBmi] = useState(0);
  const [activity, setActivity] = useState("Sedentary");
  const [result, setResult] = useState(0);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    console.log("Selected gender: ", event.target.value);
  };

  const handleActivityChange = (e) => {
    const selectedActivity = e.target.value;
    setActivity(selectedActivity);
    console.log(selectedActivity);
  };

  const clearbtn = () => {
    setAge(0);
    setGender("");
    setFeet(0);
    setInches(0);
    setWeight(0);
    setBmi(0);
  };

  useEffect(() => {
    const totalInches = Number(feet) * 12 + Number(inches);
    const kgs = Number(weight) * 2;
    let bmrRate;

    if (gender === "male") {
      bmrRate = 10 * kgs + 6.25 * totalInches - 5 * age + 5;
    } else if (gender === "female") {
      bmrRate = 10 * kgs + 6.25 * totalInches - 5 * age - 161;
    }

    let calculatedResult = "";

    if (activity === "Sedentary") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.2
      ).toFixed(1)} calories.`;
    } else if (activity === "LightlyActive") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.375
      ).toFixed(1)} calories.`;
    } else if (activity === "ModeratelyActive") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.55
      ).toFixed(1)} calories.`;
    } else if (activity === "VeryActive") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.725
      ).toFixed(1)} calories.`;
    } else if (activity === "ExtremelyActive") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.9
      ).toFixed(1)} calories.`;
    } else {
      calculatedResult =
        "Please select your Activity level or fill all fields.";
    }

    setResult(calculatedResult);
  }, [age, feet, inches, gender, weight, activity]);

  return (
    <div className="flex justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100">
        <h1 className="font-bold text-xl text-red-600">Calorie Counter</h1>
        <div className="flex items-center ">
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
          <span className="text-gray-600 p-4 font-semibold text-md">2-90</span>
        </div>
        <div className="flex items-center mb-2 my-1">
          <label htmlFor="" className="text-gray-700 text-lg font-bold mr-2">
            Gender :
          </label>
          <input
            type="radio"
            name="gender"
            defaultChecked
            value="male"
            className="mr-2 leading-tight"
            onChange={handleGenderChange}
          />
          <span className="text-gray-700 font-semibold text-md mr-6">Male</span>
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
            Height :
          </label>
          <input
            type="number"
            value={feet}
            placeholder="feet"
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
          <label htmlFor="" className="text-gray-700 text-lg font-bold mr-2">
            Weight :
          </label>
          <input
            type="number"
            placeholder="In Kgs"
            value={weight}
            onChange={(e) => setWeight(e.target.value)} // Change from onClick to onChange
            className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <label
          htmlFor=""
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Your Activity Level:
        </label>
        <select
          className="block appearance-none w-full mt-2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={activity}
          value={activity}
          onChange={handleActivityChange}
        >
          <option value="Sedentary">Sedentary</option>
          <option value="LightlyActive">Lightly Active</option>
          <option value="ModeratelyActive">Moderately Active</option>
          <option value="VeryActive">Very Active</option>
          <option value="ExtremelyActive">Extremely Active</option>
        </select>
        <div className="flex items-center justify-center mt-4">
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none animate-pulse focus:shadow-outline m-2"
            onClick={calculatebtn}
          >
            Calculate
          </button> */}
          <button
            className="bg-red-500 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
         animate-scale hover:animate-pulse"
            onClick={clearbtn}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="shadow-lg rounded-md p-3 my-2 h-[428px] bg-gradient-to-b from-gray-200 to-gray-300 w-96">
        <h1 className="font-bold text-2xl mb-4 text-center">Result</h1>
        <div className="overflow-y-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-300"></tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
                <td className="border py-3 px-4 text-gray-800 font-medium rounded-md shadow-md text-xl text-center">
                  {result}
                </td>
                {/* <td className="border py-3 px-4 text-gray-800 font-medium rounded-md shadow-md text-xl">
                  {result}
                </td> */}

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
