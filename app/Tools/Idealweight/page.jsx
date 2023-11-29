"use client"
import React, { useState ,useEffect} from "react";

const Page = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(5);
  const [idealweight , setIdealweight] = useState(0);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    console.log("Selected gender: ", event.target.value);
  };

  useEffect(()=>{
  let heightInInches = Number(feet) * 12 + Number(inches); // Convert height to inches
    console.log("Height in inches:", heightInInches);

    let youridealweight = 0;
  
    if (gender === "male") {
       youridealweight = (56.7 + 1.41 * (heightInInches - 60)).toFixed(2);
    } else if (gender === "female") {
       youridealweight = (53.1 + 1.36 * (heightInInches - 60)).toFixed(2);
    }
    setIdealweight(youridealweight);
  },[age,gender,feet,inches])

    const calculateBarColor = () => {
    if (idealweight >= 18.5 && idealweight <= 24.9) {
      return "bg-green-500"; // Green color for healthy weight range
    } else if (idealweight >= 25 && idealweight <= 29.9) {
      return "bg-green-500"; // Yellow color for overweight range
    } else {
      return "bg-green-500"; // Red color for underweight or obese range
    }
  };

  const clearbtn = () => {
    setAge(0);
    setGender("");
    setFeet(0);
    setInches(0);
    setIdealweight(0);
  };

  return (
    <div className="bg-white flex justify-center items-center text-gray-800 gap-3 mt-10 w-screen h-auto flex-wrap sm:flex-wrap">
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[308px] my-2 w-96 bg-gray-100">
        <h1 className="font-bold text-xl text-red-600 mb-2">
          IDEAL WEIGHT CHECK
        </h1>
        <div>
          <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
            Age:
          </label>
          <input
            type="number"
            value={age}
            placeholder="Your Age"
            onChange={(e) => setAge(e.target.value)}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-auto"
          />
          <span className="pl-3 font-semibold">From 2-90</span>
          <div className="flex items-center mb-2 my-1 py-2">
            <label
              htmlFor="gender"
              className="text-gray-700 text-lg font-bold mr-2"
            >
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
              placeholder="feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2 w-28"
            />
            <input
              type="number"
              placeholder="inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none animate-pulse focus:shadow-outline m-2"
              onClick={idealWeightCalculate}
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
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2 w-[378px] h-[300px] bg-slate-100 text-xl font-semibold">
        <h1 className="font-bold text-xl mb-2">Result:</h1>
        <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`${calculateBarColor()} h-full`}
            style={{ width: `${(idealweight / 300) * 220}%` }} // Adjust the width based on the ideal weight
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm">Underweight</span>
          <span className="text-sm">Normal</span>
          <span className="text-sm">Overweight</span>
        </div>
        <h1 className="mt-3">Your ideal weight: {idealweight}</h1>
      </div>
    </div>
  );
};

export default Page;

