"use client";
import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const page = () => {
  const [netprice, setNetprice] = useState(1200);
  const [gst, setGst] = useState(7);
  const [grossprice, setGrossprice] = useState(0);
  const [tax, setTax] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Add this line

  useEffect(() => {
    let gprice = netprice + (netprice * gst) / 100;
    let tprice = (netprice * gst) / 100;
    setGrossprice(gprice);
    setTax(tprice);

    const data = {
      labels: ["Gross", "Tax"],
      datasets: [
        {
          label: "Gross vs Tax",
          data: [netprice, tax],
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
  }, [netprice, gst, grossprice, tax]);

  return (
      <section className="flex justify-center flex-wrap items-center m-4 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[300px] pb-8 mb-4 flex flex-col my-2 w-60 bg-gray-100 sm:text-lg">
          <div>
            <label className="" htmlFor="">
              Net price
            </label>
            <input
              type="number"
              defaultValue={netprice}
              onChange={(e) => setNetprice(+e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-2 mb-4 text-gray-800 focus:outline-none focus:ring
               focus:border-blue-500 font-semibold text-2xl 
               sm:text-xl sm:w-[180px] md:w-[170px] lg:[240px]"
            />
          </div>
          <div>
            <label htmlFor="">GST %</label>
            <input
              type="number"
              defaultValue={gst}
              placeholder="%"
              onChange={(e) => setGst(+e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-2 mb-4 text-gray-800 focus:outline-none focus:ring
               focus:border-blue-500 font-semibold text-2xl 
               sm:text-xl sm:w-[180px] md:w-[170px] lg:[240px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-[400px] items-center m-3 cursor-pointer sm:w-[280px] sm:text-xl">
          <div className="shadow-md rounded px-4 pt-4 pb-4 mb-4 flex flex-col my-2 h-60 bg-gray-100 w-[378px]">
            <div className="border text-xl font-semibold px-2 py-2 text-center m-1 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              G price : {grossprice} tax : {tax}
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

// "use client";
// "use strict";
// import React, { useState } from "react";

// const Calculator = () => {
//   const [currentInput, setCurrentInput] = useState("");
//   const [previousInput, setPreviousInput] = useState(null);
//   const [operation, setOperation] = useState(null);

//   const handleNumberInput = (num) => {
//     setCurrentInput(currentInput + num);
//   };

//   const handleOperation = (op) => {
//     if (op === "sin" || op === "cos" || op === "tan" || op === "log") {
//       let result;
//       const input = parseFloat(currentInput);

//       switch (op) {
//         case "sin":
//           result = Math.sin(input);
//           break;
//         case "cos":
//           result = Math.cos(input);
//           break;
//         case "tan":
//           result = Math.tan(input);
//           break;
//         case "log":
//           result = Math.log(input);
//           break;
//         default:
//           return;
//       }
//       setCurrentInput(String(result));
//       return;
//     }

//     if (currentInput !== "") {
//       if (previousInput !== null) {
//         // Calculate the result if an operation is already present
//         calculate();
//         setOperation(op);
//       } else {
//         // Set the operation for the first time
//         setPreviousInput(parseFloat(currentInput));
//         setCurrentInput("");
//         setOperation(op);
//       }
//     } else if (previousInput !== null) {
//       // If no new number input, update the operation
//       setOperation(op);
//     }
//   };

//   const calculate = () => {
//     if (!operation || previousInput === null || currentInput === "") return;

//     const num1 = previousInput;
//     const num2 = parseFloat(currentInput);
//     let result;

//     switch (operation) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num1 / num2;
//         break;
//       default:
//         return;
//     }

//     setCurrentInput(String(result));
//     setPreviousInput(null);
//     setOperation(null);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-sm p-4 w-96">
//         <input
//           type="text"
//           value={currentInput}
//           readOnly
//           className="w-full bg-gray-100 border border-gray-300 rounded-sm px-3 py-2 mb-4 text-gray-800 focus:outline-none focus:ring focus:border-blue-500 font-semibold text-2xl"
//         />
//         <div className="grid grid-cols-4 gap-3 mb-4">
//           {[...Array(10).keys()].map((num) => (
//             <button
//               key={num}
//               onClick={() => handleNumberInput(num)}
//               className="bg-blue-500 text-white rounded-sm py-2 hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:bg-blue-600 font-semibold text-xl"
//             >
//               {num}
//             </button>
//           ))}
//           <span>        <button
//           onClick={calculate}
//           className="w-40 text-3xl font-bold bg-red-500 text-white rounded-sm py-1 pb-2 hover:bg-black transition duration-300 focus:outline-none focus:ring focus:bg-black"
//         >
//           =
//         </button></span>
//         </div>
//         <div className="grid grid-cols-4 gap-3 mb-4">
//           {['+', '-', '*', '/', 'sin', 'cos', 'tan', 'log'].map((op) => (
//             <button
//               key={op}
//               onClick={() => handleOperation(op)}
//               className="bg-blue-300 text-gray-800 text-xl font-semibold rounded-sm py-2 hover:bg-blue-400 transition duration-300 focus:outline-none focus:ring focus:bg-blue-400"
//             >
//               {op}
//             </button>
//           ))}
//         </div>

//       </div>
//     </div>

//   );
// };

// export default Calculator;
