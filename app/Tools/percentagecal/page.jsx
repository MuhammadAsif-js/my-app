"use client";
import React, { useState,useEffect } from "react";

const page = () => {
  const [percentone, setPercentone] = useState(0);
  const [percentthree, setPercentthree] = useState(0);
  const [valueone, setValueone] = useState(0);
  const [valuetwo, setValuetwo] = useState(0);
  const [valuetwoone, setValuetwotwo] = useState(0);
  const [valuethree, setValuethree] = useState(0);
  const [resultone, setResultone] = useState(0);
  const [resulttwo, setResulttwo] = useState(0);
  const [resultthree, setResultthree] = useState(0);

  const calcone = () => {
    if (percentone === 0 || valueone === 0) {
      setResultone("Please enter your values");
    } else {
      setResultone(((valueone * percentone) / 100).toFixed(2));
    }
  };
  const calctwo = () => {
    if (valuetwo === 0 || valuetwoone === 0) {
      setResulttwo("Please enter your values");
    } else if (valuetwoone <= valuetwo) {
      setResulttwo("Second value should be less than first value");
    } else {
      setResulttwo(((valuetwo / valuetwoone) * 100).toFixed(2));
    }
  };
  const calcthree = () => {
    if (valuethree === 0 || percentthree === 0) {
      setResultthree("Please enter your values");
    } else {
      setResultthree(((valuethree / percentthree) * 100).toFixed(2));
    }
  };

  return (
    <div className="flex flex-wrap justify-center mt-10 h-auto gap-3">
      <div className="p-4 w-[450px] h-[200px] bg-gray-100 rounded-lg shadow-md">
        <div>
          <span className="text-gray-700 font-semibold text-lg">
            What is{" "}
            <span>
              <input
                type="number"
                placeholder="%"
                className="border border-gray-300 rounded-md px-2 py-1 m-1 w-[60px] focus:outline-none focus:ring-2 focus:ring-blue-200"
                onChange={(e) => setPercentone(e.target.value)}
              />
            </span>{" "}
            of{" "}
            <span>
              <input
                type="number"
                placeholder="value"
                className="border border-gray-300 rounded-md px-2 py-1 m-1 w-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200"
                onChange={(e) => setValueone(e.target.value)}
              />
            </span>{" "}
            <span>
              {" "}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold
               py-1 px-2 rounded-sm focus:outline-none animate-pulse focus:ring-4 focus:ring-blue-300 m-2"
                onClick={calcone}
              >
                Calculate
              </button>
            </span>
          </span>
        </div>
        <div>
          <span className="text-gray-700 font-semibold text-lg">
            <input
              type="number"
              placeholder="value"
              onChange={(e) => setValuetwo(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 m-1 w-[80px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <span>is what % of</span>
            <input
              type="number"
              placeholder="value"
              onChange={(e) => setValuetwotwo(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 m-1 w-[80px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded-sm focus:outline-none animate-pulse focus:ring-4 focus:ring-blue-300 m-2 px-2"
              onClick={calctwo}
            >
              Calculate
            </button>
          </span>
        </div>
        <div>
          <span className="text-gray-700 font-semibold text-lg">
            <input
              type="number"
              placeholder="value"
              onChange={(e) => setValuethree(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 m-1 w-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <span className=" px-1">is</span>
            <input
              type="number"
              onChange={(e) => setPercentthree(e.target.value)}
              placeholder="%"
              className="border border-gray-300 rounded-md px-2 py-1 m-1 w-[70px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <span className="px-1">of what</span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold
             py-1 rounded-sm focus:outline-none animate-pulse focus:ring-4 focus:ring-blue-300 m-2 px-2"
              onClick={calcthree}
            >
              Calculate
            </button>
          </span>
        </div>
      </div>
      {/* result */}
      <div className="px-3  h-[200px] w-[280px] bg-gray-100 pt-5 pb-5 rounded-lg shadow-md">
        <div className="bg-white p-2 font-semibold m-1 text-xl">{resultone}</div>
        <div className="bg-white p-2 font-semibold m-1 text-xl">{resulttwo}</div>
        <div className="bg-white p-2 font-semibold m-1 text-xl">{resultthree}</div>
      </div>
    </div>
  );
};

export default page;
