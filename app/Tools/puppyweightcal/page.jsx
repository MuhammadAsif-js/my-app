"use client";
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page

// import React, { useState, useEffect, useRef } from "react";
// import { Chart, registerables } from "chart.js";

// Chart.register(...registerables);

// const page = () => {
//   const [ageNumber, setAgeNumber] = useState(6);
//   const [ageUnit, setAgeUnit] = useState("days");
//   const [weightNumber, setWeightNumber] = useState(5);
//   const [weightUnit, setWeightUnit] = useState("kg");
//   const [breed, setBreed] = useState("LabradorRetriever");
//   const [adultEstimatedWeight, setAdultEstimatedWeight] = useState(null);
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null); // Add this line

//   const top10DogBreeds = [
//     "LabradorRetriever",
//     "FrenchBulldog",
//     "GermanShepherd",
//     "GoldenRetriever",
//     "Bulldog",
//     "Poodle",
//     "Beagle",
//     "Rottweiler",
//     "GermanShorthairedPointer",
//     "Dachshund",
//   ];

//   const breedGrowthRates = {
//     "LabradorRetriever": 2,
//     "FrenchBulldog": 1.5,
//     "GermanShepherd": 2.3,
//     "GoldenRetriever": 2,
//     "Bulldog": 1.5,
//     "Poodle ": 1.5,
//     "Beagle": 1.5,
//     "Rottweiler ": 2.3,
//     "GermanShorthairedPointer": 2.3,
//     "Dachshund": 1.5,
//   };

//   //   <code>Adult weight = (Puppy weight / Puppy age in weeks) × 52.</code>
//   const calculateEstimatedAdultWeight = () => {
//     let idealweight = 0;

//     switch (ageUnit) {
//       case "Days":
//         if (weightUnit === "kg") {
//           idealweight =
//             (weightNumber / (ageNumber / 7)) * 52 * breedGrowthRates[breed];
//         } else if (weightUnit === "lbs") {
//           idealweight =
//             ((weightNumber * 2.204) / (ageNumber / 7)) *
//             52 *
//             breedGrowthRates[breed];
//         } else if (weightUnit === "g") {
//           idealweight =
//             (weightNumber * 1000 / (ageNumber / 7)) *
//             52 *
//             breedGrowthRates[breed];
//         }
//         break; // Added break statement to exit the 'Days' case

//       case "Weeks":
//         if (weightUnit === "kg") {
//           idealweight =
//             (weightNumber / ageNumber) * 52 * breedGrowthRates[breed];
//         } else if (weightUnit === "lbs") {
//           idealweight =
//             ((weightNumber * 2.204) / ageNumber) * 52 * breedGrowthRates[breed];
//         } else if (weightUnit === "g") {
//           idealweight =
//             (weightNumber * 1000 / ageNumber) * 52 * breedGrowthRates[breed];
//         }
//         break;

//       case "Months":
//         if (weightUnit === "kg") {
//           idealweight =
//             (weightNumber / (ageNumber * 4)) * 52 * breedGrowthRates[breed];
//         } else if (weightUnit === "lbs") {
//           idealweight =
//             ((weightNumber * 2.204) / (ageNumber * 4)) *
//             52 *
//             breedGrowthRates[breed];
//         } else if (weightUnit === "g") {
//           idealweight =
//             (weightNumber * 1000 / (ageNumber * 4)) *
//             52 *
//             breedGrowthRates[breed];
//         }
//         break;

//       default:
//         idealweight = "Invalid inputs";
//         break;
//     }

//     setAdultEstimatedWeight(idealweight);
//   };

//   useEffect(() => {
//     calculateEstimatedAdultWeight();
//     const data = {
//       labels: ["Current Weight", "Adult Weight"],
//       datasets: [
//         {
//           label: "Current Weight vs Adult Weight",
//           // data: [weightNumber, adultEstimatedWeight],
//           backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
//           hoverOffset: 4,
//         },
//       ],
//     };

//     const options = {
//       plugins: {
//         legend: {
//           position: "bottom",
//         },
//       },
//     };

//     if (chartRef && chartRef.current) {
//       if (chartInstance.current) {
//         // Add this block
//         chartInstance.current.destroy();
//       }

//       chartInstance.current = new Chart(chartRef.current.getContext("2d"), {
//         type: "doughnut",
//         data: data,
//         options: options,
//       });
//     }
//   }, [ageNumber, ageUnit, weightNumber, weightUnit, breed]);

//   return (
//     <div className="bg-white flex justify-center items-center text-gray-800 gap-3 mt-10 w-screen h-auto flex-wrap sm:flex-wrap">
//       <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[218px] my-2 w-96 bg-gray-100">
//         <label htmlFor="" className="font-semibold text-lg">
//           Current Age :{" "}
//         </label>
//         <input
//           type="number"
//           onChange={(e) => setAgeNumber(e.target.value)}
//           defaultValue={ageNumber}
//           placeholder="Age"
//           className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-20"
//         />
//         <span>
//           <select
//             onChange={(e) => setAgeUnit(e.target.value)}
//             defaultValue={ageUnit}
//             className="shadow mx-2  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-22"
//           >
//             <option value="Days">Days</option>
//             <option value="Weeks">Weeks</option>
//             <option value="Months">Months</option>
//           </select>
//         </span>
//         <div className="py-3">
//           <label htmlFor="" className="font-semibold text-base">
//             Current Weight :{" "}
//           </label>
//           <input
//             type="number"
//             onChange={(e) => setWeightNumber(e.target.value)}
//             defaultValue={weightNumber}
//             placeholder="weight"
//             className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-24"
//           />
//           <span>
//             <select
//               onChange={(e) => setWeightUnit(e.target.value)}
//               defaultValue={weightUnit}
//               className="shadow mx-2  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-18"
//             >
//               <option value="kg">Kg</option>
//               <option value="lbs">lbs</option>
//               <option value="g">g</option>
//             </select>
//           </span>
//         </div>
//         <div className="py-3 text-center">
//           <label htmlFor="" className="font-semibold text-lg">
//             Breed :{" "}
//           </label>
//           <span>
//             <select
//               onChange={(e) => setBreed(e.target.value)}
//               className="shadow mx-2  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[200px]"
//             >
//               {top10DogBreeds.map((breed) => (
//                 <option value={breed}>{breed}</option>
//               ))}
//             </select>
//           </span>
//         </div>
//       </div>
//       <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2 w-[378px] h-[218px] bg-slate-100 text-center text-xl font-semibold">
//         <h1 className="mt-3 font-semibold text-2xl">
//           Adult Weight : {adultEstimatedWeight}{" "}
//         </h1>
//         <div className="flex justify-center p-3">
//           <canvas
//             ref={chartRef}
//             style={{ maxWidth: "120px", maxHeight: "120px" }}
//           ></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

