"use client";
import React, { useState } from "react";

const WorkHoursCalculator = () => {
  const [workHours, setWorkHours] = useState([
    { day: "Monday", start: "", end: "", lunch: "" },
    { day: "Tuesday", start: "", end: "", lunch: "" },
    { day: "Wednesday", start: "", end: "", lunch: "" },
    { day: "Thursday", start: "", end: "", lunch: "" },
    { day: "Friday", start: "", end: "", lunch: "" },
    { day: "Saturday", start: "", end: "", lunch: "" },
    { day: "Sunday", start: "", end: "", lunch: "" },
  ]);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [totalHours, setTotalHours] = useState("");

  const calculateTotalHours = () => {
    let totalMinutes = 0;

    workHours.forEach((day) => {
      const startMinutes = convertToMinutes(day.start);
      const endMinutes = convertToMinutes(day.end);
      const lunchMinutes = parseInt(day.lunch || 0); // Convert lunch break to minutes, handle empty string

      if (!isNaN(startMinutes) && !isNaN(endMinutes) && !isNaN(lunchMinutes)) {
        // Check for valid inputs
        let dayMinutes = endMinutes - startMinutes - lunchMinutes;
        if (dayMinutes < 0) {
          dayMinutes += 24 * 60;
        }

        totalMinutes += dayMinutes;
      }
    });

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const decimalHours = totalMinutes / 60;

    setTotalHours(
      `${hours}:${String(minutes).padStart(2, "0")} (${decimalHours.toFixed(
        2
      )} hours)`
    );
  };

  const convertToMinutes = (timeString) => {
    if (!timeString) return 0;

    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const handleTimeChange = (index, field, value) => {
    const updatedWorkHours = [...workHours];
    updatedWorkHours[index][field] = value;
    setWorkHours(updatedWorkHours);
  };

  const handleLunchChange = (index, value) => {
    const updatedWorkHours = [...workHours];
    updatedWorkHours[index].lunch = value;
    setWorkHours(updatedWorkHours);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl text-center text-black">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {workHours.map((day, index) => (
          <div key={index} className="bg-white rounded-lg p-2 md:p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{day.day}</h3>
            <div className="flex flex-col mb-2">
              <label htmlFor={`start-${index}`} className="mb-1">
                Start Time:
              </label>
              <input
                type="time"
                value={day.start}
                onChange={(e) =>
                  handleTimeChange(index, "start", e.target.value)
                }
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor={`end-${index}`} className="mb-1">
                End Time:
              </label>
              <input
                type="time"
                value={day.end}
                onChange={(e) => handleTimeChange(index, "end", e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor={`lunch-${index}`} className="mb-1">
                Lunch Break:
              </label>
              <select
                value={day.lunch}
                onChange={(e) => handleLunchChange(index, e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1"
              >
                {[...Array(12).keys()].map((i) => (
                  <option key={i} value={(i + 1) * 10}>
                    {(i + 1) * 10} minutes
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-4">Total Work Hours for the Week: {totalHours}</div> */}
      <div
        className="mt-8 bg-white shadow-md overflow-hidden"
        id="printable-section"
      >
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold mb-4">
            Total Work Hours for the Week
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Start Time</th>
                  <th className="px-4 py-2">End Time</th>
                  <th className="px-4 py-2">Lunch Break</th>
                </tr>
              </thead>
              <tbody>
                {workHours.map((day, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="border px-4 py-2">{day.day}</td>
                    <td className="border px-4 py-2">{day.start}</td>
                    <td className="border px-4 py-2">{day.end}</td>
                    <td className="border px-4 py-2">{day.lunch} minutes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total hours display */}
        <div className="px-6 py-4 bg-gray-200 flex justify-between items-center">
          <span className="text-lg font-semibold">
            Total Work Hours for the Week:
          </span>
          <span className="text-lg font-semibold">{totalHours}</span>
        </div>
      </div>

      {/* Print button */}

      <button
        onClick={calculateTotalHours}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-sm mr-2"
      >
        Calculate Total Hours
      </button>
      <button
        onClick={() => window.print()}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-sm"
      >
        Print
      </button>
    </div>
  );
};

export default WorkHoursCalculator;

// "use client";
// import React, { useState } from 'react';

// function PartialDerivativeCalculator() {
//   const [expression, setExpression] = useState('');
//   const [variable, setVariable] = useState('');
//   const [order, setOrder] = useState(1);
//   const [result, setResult] = useState('');

//   const calculateDerivative = () => {
//     try {
//       const expr = expression.trim();
//       const varName = variable.trim();
//       const result = evaluateDerivative(expr, varName, order);
//       setResult(result);
//     } catch (error) {
//       setResult('Error: Invalid expression');
//     }
//   };

//   const evaluateDerivative = (expr, varName, order) => {
//     // Parse the expression
//     const parsedExpr = parseExpression(expr);

//     // Compute the derivative
//     let derivative = diff(parsedExpr, varName, order);

//     return derivative;
//   };

//   const parseExpression = (expr) => {
//     // Parse the expression into tokens
//     // Here we just split by '+', '-', '*', '/', and the variable name
//     return expr.split(/([\+\-\*\/])/).map(token => token.trim());
//   };

//   const diff = (expr, varName, order) => {
//     let derivative = '';
//     for (let i = 0; i < expr.length; i++) {
//       const token = expr[i];
//       if (token === varName) {
//         // Differentiate the variable
//         derivative += differentiateVariable(expr, i, varName, order);
//       } else {
//         // If it's not the variable, simply append
//         derivative += token;
//       }
//     }
//     return derivative;
//   };

//   const differentiateVariable = (expr, index, varName, order) => {
//     let derivative = '';
//     const powerIndex = expr[index + 2] === '^' ? index + 3 : index + 1;
//     const coefficient = expr.slice(0, index).join('');
//     const power = parseInt(expr.slice(powerIndex).join(''), 10);

//     if (order === 1) {
//       // First order derivative
//       const newCoefficient = coefficient * power;
//       const newPower = power - 1;
//       derivative += `${newCoefficient}${varName}^${newPower}`;
//     } else if (order === 2) {
//       // Second order derivative
//       if (power === 1) {
//         derivative += '0'; // Derivative of a linear term is always zero
//       } else {
//         const newCoefficient = coefficient * power * (power - 1);
//         const newPower = power - 2;
//         derivative += `${newCoefficient}${varName}^${newPower}`;
//       }
//     } else {
//       derivative += '0'; // Higher-order derivatives not supported in this implementation
//     }
//     return derivative;
//   };

//   return (
//     <div>
//       <h1>Partial Derivative Calculator</h1>
//       <input
//         type="text"
//         value={expression}
//         placeholder="Enter expression"
//         onChange={(e) => setExpression(e.target.value)}
//       />
//       <input
//         type="text"
//         value={variable}
//         placeholder="Enter variable"
//         onChange={(e) => setVariable(e.target.value)}
//       />
//       <input
//         type="number"
//         value={order}
//         placeholder="Order"
//         onChange={(e) => setOrder(e.target.value)}
//       />
//       <button onClick={calculateDerivative}>Calculate</button>
//       <div>
//         {result && (
//           <div>
//             <h2>Result:</h2>
//             <p>{result}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PartialDerivativeCalculator;

// "use client";
// import React, { useState } from "react";

// const DerivativeCalculator = () => {

//   return (
//     <div className="text-center">
//       {" "}
//       <h2 className="relative bg-sky-700 pb-2 text-white font-medium text-xl border border-black rounded-md mb-4">
//         {" "}
//         <span className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
//           {" "}
//           <span className="w-3 h-3 bg-sky-900 transform rotate-45"></span>{" "}
//         </span>{" "}
//         Partial Derivative Calculator{" "}
//       </h2>{" "}
//       <div className="form-container bg-slate-200 px-6 py-4 rounded shadow-lg flex flex-col items-center animate-fadeIn border border-black">
//         {/* Start */}

//         {/* End */}{" "}
//       </div>{" "}
//     </div>
//   );
// };

// export default DerivativeCalculator;
