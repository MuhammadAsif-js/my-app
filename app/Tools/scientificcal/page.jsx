"use client";
"use strict";
import React, { useState } from "react";

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberInput = (num) => {
    setCurrentInput(currentInput + num);
  };

  const handleOperation = (op) => {
    if (op === "sin" || op === "cos" || op === "tan" || op === "log") {
      let result;
      const input = parseFloat(currentInput);

      switch (op) {
        case "sin":
          result = Math.sin(input);
          break;
        case "cos":
          result = Math.cos(input);
          break;
        case "tan":
          result = Math.tan(input);
          break;
        case "log":
          result = Math.log(input);
          break;
        default:
          return;
      }
      setCurrentInput(String(result));
      return;
    }

    if (currentInput !== "") {
      if (previousInput !== null) {
        // Calculate the result if an operation is already present
        calculate();
        setOperation(op);
      } else {
        // Set the operation for the first time
        setPreviousInput(parseFloat(currentInput));
        setCurrentInput("");
        setOperation(op);
      }
    } else if (previousInput !== null) {
      // If no new number input, update the operation
      setOperation(op);
    }
  };

  const calculate = () => {
    if (!operation || previousInput === null || currentInput === "") return;

    const num1 = previousInput;
    const num2 = parseFloat(currentInput);
    let result;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return;
    }

    setCurrentInput(String(result));
    setPreviousInput(null);
    setOperation(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-sm p-4 w-96">
        <input
          type="text"
          value={currentInput}
          readOnly
          className="w-full bg-gray-100 border border-gray-300 rounded-sm px-3 py-2 mb-4 text-gray-800 focus:outline-none focus:ring focus:border-blue-500 font-semibold text-2xl"
        />
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[...Array(10).keys()].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberInput(num)}
              className="bg-blue-500 text-white rounded-sm py-2 hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:bg-blue-600 font-semibold text-xl"
            >
              {num}
            </button>
          ))}
          <span>        <button
          onClick={calculate}
          className="w-40 text-3xl font-bold bg-red-500 text-white rounded-sm py-1 pb-2 hover:bg-black transition duration-300 focus:outline-none focus:ring focus:bg-black"
        >
          =
        </button></span>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-4">
          {['+', '-', '*', '/', 'sin', 'cos', 'tan', 'log'].map((op) => (
            <button
              key={op}
              onClick={() => handleOperation(op)}
              className="bg-blue-300 text-gray-800 text-xl font-semibold rounded-sm py-2 hover:bg-blue-400 transition duration-300 focus:outline-none focus:ring focus:bg-blue-400"
            >
              {op}
            </button>
          ))}
        </div>

      </div>
    </div>

  );
};

export default Calculator;
