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
  const [extraweight, setExtraWeight] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Add this line
  

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

  useEffect(() => {
    const totalInches = Number(feet) * 12 + Number(inches);
    const heightInMeters = totalInches * 0.0254;
    let bmi = 0;
    if (gender === "male") {
      bmi = Number(weight) / (heightInMeters * heightInMeters); // BMI calculation
      setBmi(bmi.toFixed(2));
    } else if (gender === "female") {
      bmi = Number(weight) / (heightInMeters * heightInMeters * 0.98); // BMI calculation
      setBmi(bmi.toFixed(2));
    }
    let normalWeight = 0;
    let extraWeight = 0;

    if (bmi < 18.5) {
      normalWeight = 100;
      extraWeight = 0;
    } else if (bmi >= 18.5 && bmi < 25) {
      normalWeight = 80;
      extraWeight = 20;
    } else if (bmi >= 25 && bmi < 30) {
      normalWeight = 70;
      extraWeight = 30;
    } else if (bmi >= 30 && bmi < 35) {
      normalWeight = 55;
      extraWeight = 45;
    } else if (bmi >= 35 && bmi < 40) {
      normalWeight = 40;
      extraWeight = 60;
    } else if (bmi >= 40) {
      normalWeight = 30;
      extraWeight = 70;
    }

    const data = {
      // labels: ["Normal Weight", "Extra Weight"],
      datasets: [
        {
          label: "Extra Weight vs Normal Weight",
          data: [normalWeight, extraWeight],
          backgroundColor: ["rgb(46, 204, 113)", "rgb(231, 76, 60)"], // You can change colors as desired
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
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current.getContext("2d"), {
        type: "doughnut",
        data: data,
        options: options,
      });
    }
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
      <section className="flex justify-center flex-wrap items-center m-6 cursor-pointer gap-3">
        <div className="shadow-md rounded px-5 pt-6 max-h-[320px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-sm">
          <div>
            <div className="flex items-center my-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-semibold mb-2 text-lg mr-1"
              >
                Age
              </label>
              <input
                type="number"
                value={age}
                placeholder="Your Age"
                onChange={(e) => setAge(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-auto "
              />
              <span className="text-gray-600 p-4 font-semibold text-md">
                2-90
              </span>
            </div>
            <div className="flex items-center my-4">
              <label
                htmlFor=""
                className="text-gray-700 text-lg font-semibold mr-2"
              >
                Gender
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
              <span className="text-gray-700 font-semibold text-md">
                Female
              </span>
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor=""
                className="text-gray-700 text-lg font-semibold mr-2"
              >
                Height {""}
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
                className="block text-gray-700  font-semibold mb-2 text-md mr-2"
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
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-scale hover:animate-pulse"
                onClick={clearbtn}
              >
                Clear
              </button> */}
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-md p-3 my-2 h-[310px] bg-gradient-to-b from-gray-200 
        to-gray-300 w-96 sm:text-sm sm:w-76">
          <div className="shadow-md rounded px-4 pt-4 pb-4 mb-4 flex flex-col my-2 h-70 bg-gray-100 w-[348px]">
            {/* <h1 className="font-bold text-xl mb-2">Result:</h1> */}
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="border text-xl font-semibold px-2 py-2 text-center m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Your calculated BMI: {bmis}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-full mt-2 h-8 bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-sm overflow-hidden relative">
              <div
                className="h-full bg-transparent border-r-4 border-gray-700 absolute top-0 left-0"
                style={{ width: `${calculateArrowPosition(bmis)}%` }}
              ></div>
              <div className="w-0 h-0 border-t-8 border-b-8 border-transparent border-black absolute top-0 left-0 transform -translate-x-1/2 -translate-y-8"></div>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <canvas
                ref={chartRef}
                style={{ maxWidth: "140px", maxHeight: "140px" }}
              ></canvas>
            </div>
          </div>
        </div>
      </section>

  );
};

export default page;


// export function generateMetadata (){
//   return {
//     title: "BMI Calculator",
//     description: "BMI Calculator",
//     keywords: "BMI Calculator",
//   }
// }