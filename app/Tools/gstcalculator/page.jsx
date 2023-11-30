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
    <article className="md:p-10 sm:p-6">
    <div className="pt-3 pb-3">
        <h1 className="text-2xl font-bold">
          How to Use a Calculator for GST Calculations with Ease
        </h1>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Are you struggling with GST calculations? Don't worry, we've got you
          covered! In this article, we will show you how to use a calculator for
          GST calculations with ease. Whether you're a business owner, a tax
          professional, or an individual trying to understand your GST
          liabilities, using a calculator can simplify the process and save you
          valuable time. Our step-by-step guide will walk you through the
          necessary calculations and how to input the relevant data into your
          calculator. Discover handy tips and tricks for understanding the GST
          percentage, calculating GST exclusive and inclusive amounts, and
          determining the net price of goods or services.
        </p>
      </div>
      <section className="flex justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-lg">
          <div>
            <label className="" htmlFor="">
              Net price
            </label>
            <input
              type="number"
              defaultValue={netprice}
              onChange={(e) => setNetprice(+e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-2 mb-4 text-gray-800 focus:outline-none focus:ring focus:border-blue-500 font-semibold text-2xl sm:text-xl sm:w-[220px]"
            />
          </div>
          <div>
            <label htmlFor="">GST %</label>
            <input
              type="number"
              defaultValue={gst}
              placeholder="%"
              onChange={(e) => setGst(+e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-2 mb-4 text-gray-800 focus:outline-none focus:ring focus:border-blue-500 font-semibold text-2xl sm:text-xl sm:w-[220px]"
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
      <div className="px-10 py-4">
        <h2 className="text-2xl font-semibold">
          How to Use a Calculator for GST Calculations with Ease
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Are you struggling with GST calculations? Don't worry, we've got you
          covered! In this article, we will show you how to use a calculator for
          GST calculations with ease. Whether you're a business owner, a tax
          professional, or an individual trying to understand your GST
          liabilities, using a calculator can simplify the process and save you
          valuable time. Our step-by-step guide will walk you through the
          necessary calculations and how to input the relevant data into your
          calculator. Discover handy tips and tricks for understanding the GST
          percentage, calculating GST exclusive and inclusive amounts, and
          determining the net price of goods or services.
        </p>
        <h2 className="text-2xl font-semibold">
          Understanding the Goods and Services Tax (GST)
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          The Goods and Services Tax (GST) is a consumption-based tax levied on
          the supply of goods and services. It is an indirect tax that is
          charged at every stage of the supply chain, from the manufacturer to
          the consumer. Understanding the basics of GST is crucial for accurate
          calculations. GST is calculated as a percentage of the transaction
          value, which is the price of the goods or services before any taxes
          are added. The rate of GST can vary depending on the country or
          region. In some cases, there may be different rates for different
          types of goods or services. To calculate the GST amount, you need to
          know the GST rate and the transaction value. The GST rate is usually
          expressed as a percentage, such as 5%, 10%, or 18%. The transaction
          value is the amount on which GST is applicable. To calculate the GST
          amount, you can use the formula: GST amount = transaction value x (GST
          rate/100). This will give you the total GST amount payable.
        </p>
        <h2 className="text-2xl font-semibold">
          Importance of accurate GST calculations
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Accurate GST calculations are essential for businesses to comply with
          tax regulations and avoid penalties. Incorrect calculations can result
          in underpayment or overpayment of GST, both of which can have
          financial implications. For businesses, accurate GST calculations are
          crucial for determining the correct amount of GST liability and
          ensuring that it is included in the final price of goods or services.
          This helps maintain transparency and avoid any disputes with customers
          or tax authorities. In addition, accurate GST calculations enable
          businesses to claim input tax credits. Input tax credits allow
          businesses to recover the GST they have paid on their purchases and
          expenses. This helps reduce the overall tax burden and improve cash
          flow. For individuals, accurate GST calculations are important for
          understanding their tax liabilities and ensuring that they are paying
          the correct amount of GST on their purchases. This helps individuals
          budget effectively and avoid any surprises when it comes to their tax
          obligations.
        </p>
        <h2 className="text-2xl font-semibold">
          Tips for efficient GST calculations using a calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          To make your GST calculations even more efficient, consider the
          following tips: 1. Familiarize yourself with the calculator: Take some
          time to understand the functions and features of your calculator. This
          will help you navigate through the calculations more easily. 2. Use
          memory functions: If your calculator has memory functions, make use of
          them to store frequently used values or intermediate results. This can
          help speed up your calculations and reduce the chances of errors. 3.
          Round off decimal places: Depending on the regulations in your country
          or region, you may need to round off the GST amount or total amount to
          a specific number of decimal places. Be aware of these rounding rules
          and apply them consistently. 4. Stay up to date with changes in GST
          rates: GST rates can change over time, so it's important to stay
          informed about any updates or revisions to the rates. This will ensure
          that your calculations are accurate and up to date. 5. Double-check
          your calculations: Always double-check your calculations to ensure
          accuracy. Mistakes in GST calculations can lead to incorrect tax
          liabilities and financial implications.
        </p>
        <h2 className="text-2xl font-semibold">
          Common mistakes to avoid when using a calculator for GST calculations
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          While using a calculator can simplify GST calculations, there are some
          common mistakes that you should be aware of and avoid. These include:
          1. Inputting incorrect values: Make sure you enter the correct
          transaction value and GST rate into your calculator. Inputting
          incorrect values can result in inaccurate calculations. 2. Forgetting
          to add or subtract GST: Depending on whether you are calculating GST
          exclusive or inclusive amounts, it's important to remember to add or
          subtract the GST amount from the transaction value. Neglecting this
          step can lead to incorrect results. 3. Misinterpreting decimal places:
          Take note of the decimal places used in your calculations and ensure
          consistency. Misinterpreting decimal places can lead to significant
          errors in your GST calculations. 4. Rounding off incorrectly: If you
          need to round off the GST amount or total amount, make sure you follow
          the correct rounding rules. Rounding off incorrectly can result in
          inaccurate calculations. 5. Not verifying the result: Always
          double-check your calculations to ensure accuracy. Verifying the
          result will help you identify any mistakes or errors before finalizing
          your calculations.
        </p>
        <h2 className="text-2xl font-semibold">
          Conclusion: Simplify your GST calculations with a calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Using a calculator for GST calculations can greatly simplify the
          process and save you valuable time. By understanding the basics of
          GST, choosing the right calculator, and following a step-by-step
          approach, you can ensure accurate and efficient calculations. Remember
          to familiarize yourself with the functions and features of your
          calculator, stay up to date with changes in GST rates, and
          double-check your calculations for accuracy. By avoiding common
          mistakes and utilizing advanced features, you can further enhance your
          GST calculations. Take advantage of online resources and tools, such
          as online calculators, guides, and government websites, to supplement
          your knowledge and make your GST calculations even more efficient.
          With the right approach and the use of a calculator, you can
          confidently navigate the complexities of GST calculations and meet
          your tax obligations with ease. Simplify your GST calculations today
          and focus on what matters most – growing your business or managing
          your personal finances.
        </p>
      </div>
    </article>
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
