"use client";
import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const page = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(5);
  const [weight, setWeight] = useState(60);
  const [bmis, setBmi] = useState(0);
  const [activity, setActivity] = useState("Sedentary");
  const [result, setResult] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Add this line

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
    let Fruits = 20;
    let Meal = 30;
    let Milk = 10;
    let Carbs = 40;

    const data = {
      labels: ["Fruits", "Meal", "Milk", "Carbs"],
      datasets: [
        {
          label: "Calorie Counter",
          // data: [totalTipPerPerson, price + totalTip],
          data: [Fruits, Meal, Milk, Carbs],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)", // Red shade
            "rgba(54, 162, 235, 0.7)", // Blue shade
            "rgba(255, 206, 86, 0.7)", // Yellow shade
            "rgba(75, 192, 192, 0.7)", // Green shade
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)", // Red border
            "rgba(54, 162, 235, 1)", // Blue border
            "rgba(255, 206, 86, 1)", // Yellow border
            "rgba(75, 192, 192, 1)", // Green border
          ],
          hoverOffset: 4,
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    };

    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        // Add this block
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current.getContext("2d"), {
        type: "doughnut",
        data: data,
        options: options,
      });
    }
  }, [age, feet, inches, gender, weight, activity]);

  return (
      <section className="flex justify-center flex-wrap items-center m-7 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-lg">
          <p className="font-bold text-xl text-red-600">Calorie Counter</p>
          <div className="flex items-center ">
            <label
              htmlFor=""
              className="block text-gray-700 font-bold mb-2 text-lg mr-1 sm:text-base"
            >
              Age 
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
            Select Your Activity Level:
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
              className="bg-red-500 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
         animate-scale hover:animate-pulse sm:hidden"
              onClick={clearbtn}
            >
              Clear
            </button> */}
          </div>
        </div>
        <div className="shadow-lg rounded-md p-3 my-2 h-[400px] bg-gradient-to-b from-gray-200 to-gray-300 w-96">
          <p className="font-bold text-2xl mb-4 text-center">Result</p>
          <div className="overflow-y-auto bg-white rounded-sm">
            <div className="w-full table-fixed rounded-sm">
              <div className="border py-3 px-4 text-gray-800 font-medium rounded-md shadow-md text-xl text-center">
                {result}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <canvas
                ref={chartRef}
                style={{ maxWidth: "180px", maxHeight: "180px" }}
              ></canvas>
            </div>
          </div>
        </div>
      </section>
  );
};

export default page;
