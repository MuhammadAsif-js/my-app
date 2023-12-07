"use client";
import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const page = () => {
  const [initialLumpSum, setInitialLumpSum] = useState(12000);
  const [extraAddedEveryYear, setExtraAddedEveryYear] = useState(1500);
  const [numberOfYears, setNumberOfYears] = useState(16);
  const [interestRate, setInterestRate] = useState(5);
  const [addInterest, setAddInterest] = useState(2);
  const [total, setTotal] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Add this line

  useEffect(() => {
    const initialLumpSumNumber = parseInt(initialLumpSum);
    const extraAddedEveryYearNumber = parseInt(extraAddedEveryYear);
    const numberOfYearsNumber = parseInt(numberOfYears);
    const interestRateNumber = parseInt(interestRate);
    const addInterestNumber = parseInt(addInterest);

    let total = initialLumpSumNumber;
    for (let i = 0; i < numberOfYearsNumber; i++) {
      total += extraAddedEveryYearNumber;
      total *= 1 + interestRateNumber / 100;
    }
    total = total.toFixed(2);
    setTotal(total);

    const data = {
      labels: ["Initial Principal", "Future Value"],
      datasets: [
        {
          label: "Initial Principal vs Future Value",
          data: [initialLumpSumNumber, total],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
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
  }, [
    initialLumpSum,
    extraAddedEveryYear,
    numberOfYears,
    interestRate,
    addInterest,
  ]);
  return (
      <section className="flex justify-center flex-wrap items-center m-6 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-lg">
          <div className="flex flex-wrap items-center justify-between mb-3">
            <label
              htmlFor="initialLumpSum"
              className="text-gray-800 font-medium w-1/3"
            >
              Lump Sum
            </label>
            <input
              id="initialLumpSum"
              type="number"
              defaultValue={initialLumpSum}
              onChange={(e) => setInitialLumpSum(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-2/3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between mb-3">
            <label
              htmlFor="extraAdded"
              className="text-gray-800 font-semibold w-1/3"
            >
              Added Every Year
            </label>
            <input
              id="extraAdded"
              type="number"
              defaultValue={extraAddedEveryYear}
              onChange={(e) => setExtraAddedEveryYear(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-2/3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between mb-3">
            <label
              htmlFor="numberOfYears"
              className="text-gray-800 font-semibold w-1/3"
            >
              No of Years
            </label>
            <input
              id="numberOfYears"
              type="number"
              defaultValue={numberOfYears}
              onChange={(e) => setNumberOfYears(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-2/3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between mb-3">
            <label
              htmlFor="interestRate"
              className="text-gray-800 font-semibold w-1/3"
            >
              Interest Rate
            </label>
            <input
              id="interestRate"
              defaultValue={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              type="number"
              className="border border-gray-300 rounded px-3 py-2 w-2/3 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-[300px] items-center m-3 cursor-pointer sm:w-[230px] sm:text-base">
          <div className="shadow-md rounded px-4 pt-4 pb-4 mb-4 flex flex-col my-2 h-[270px] bg-gray-100 w-[300px]">
            <p className="text-center font-semibold text-2xl">
              Future Value : {""}
              {total}
            </p>
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
