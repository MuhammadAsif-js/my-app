"use client";
import React, { useState, useEffect,useRef } from "react";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const page = () => {
  const [salaryAmount, setSalaryAmount] = useState(1200);
  const [pertime, setPertime] = useState("hour");
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [holidaysPerYear, setHolidaysPerYear] = useState(72);
  const [unpaidVacationDays, setUnpaidVacationDays] = useState(52);
  const [result, setResult] = useState(0);
  const [yearlyEarnings, setYearlyEarnings] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  // useEffect(() => {
  //   let weeklyEarnings = 0;
  //   let monthlyEarnings = 0;
  //   let yearlyEarnings = 0;

  //   // Calculate earnings based on the entered information
  //   if (pertime === "hour") {
  //     // Calculate earnings per hour
  //     weeklyEarnings =
  //       salaryAmount * daysPerWeek * (52 - holidaysPerYear / 7) -
  //       unpaidVacationDays;
  //     monthlyEarnings = weeklyEarnings * 4;
  //     yearlyEarnings = monthlyEarnings * 12;
  //   } else if (pertime === "day") {
  //     // Calculate earnings per day
  //     weeklyEarnings =
  //       salaryAmount * (52 - holidaysPerYear / 7) - unpaidVacationDays;
  //     monthlyEarnings = weeklyEarnings * 4;
  //     yearlyEarnings = monthlyEarnings * 12;
  //   } else if (pertime === "week") {
  //     weeklyEarnings =
  //       salaryAmount * (52 - holidaysPerYear / 7) - unpaidVacationDays;
  //     monthlyEarnings = weeklyEarnings * 4;
  //     yearlyEarnings = monthlyEarnings * 12;
  //   } else if (pertime === "month") {
  //     weeklyEarnings =
  //       salaryAmount * 4 * (12 - holidaysPerYear / 30) - unpaidVacationDays;
  //     monthlyEarnings = weeklyEarnings * 4;
  //     yearlyEarnings = monthlyEarnings * 12;
  //     earnings =
  //       salaryAmount * 4 * (12 - holidaysPerYear / 30) - unpaidVacationDays;
  //   } else if (pertime === "year") {
  //     weeklyEarnings =
  //       salaryAmount * 4 * (12 - holidaysPerYear / 30) - unpaidVacationDays;
  //     monthlyEarnings = weeklyEarnings * 4;
  //     yearlyEarnings = monthlyEarnings * 12;
  //   }

  //   setResult((yearlyEarnings).toFixed(2));
  // }, [
  //   salaryAmount,
  //   pertime,
  //   hoursPerWeek,
  //   daysPerWeek,
  //   holidaysPerYear,
  //   unpaidVacationDays,
  // ]);

  useEffect(() => {
    let yearlyEarn = 0;
    let weeklyEarning = 0;

    if (pertime === "hour") {
      weeklyEarning = salaryAmount * hoursPerWeek;
      yearlyEarn = weeklyEarning * 52;
    } else if (pertime === "day") {
      weeklyEarning = salaryAmount * daysPerWeek;
      yearlyEarn = weeklyEarning * 52;
    } else if (pertime === "week") {
      weeklyEarning = salaryAmount;
      yearlyEarn = weeklyEarning * 52;
    } else if (pertime === "month") {
      weeklyEarning = salaryAmount / 4;
      yearlyEarn = weeklyEarning * 12;
    } else if (pertime === "year") {
      weeklyEarning = salaryAmount / 52;
      yearlyEarn = salaryAmount;
    }
    setYearlyEarnings(yearlyEarn.toFixed(2));
    setResult(weeklyEarning.toFixed(2));

    const data = {
      labels: ["Monthly", "Yearly"],
      datasets: [
        {
          label: "Monthly vs Yearly",
          data: [yearlyEarn, weeklyEarning*4],
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
      if (chartInstance.current) { // Add this block
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current.getContext('2d'), {
        type: 'doughnut',
        data: data,
        options: options,
      });
    }

  }, [salaryAmount, pertime, hoursPerWeek, daysPerWeek, holidaysPerYear, unpaidVacationDays]);
  const clearbtn = () => {
    setSalaryAmount(0);
    setPertime("");
    setHoursPerWeek(0);
    setDaysPerWeek(0);
    setHolidaysPerYear(0);
    setUnpaidVacationDays(0);
  };

  return (
    <div className="bg-white text-gray-800 h-80 flex justify-center gap-3 mt-10 w-screen sm:flex flex-wrap">
      <div className="p-4 w-96 h-auto bg-gray-100 flex flex-col justify-center">
        <label htmlFor="" className="mb-2 text-gray-800 font-semibold">
          Salary amount :
        </label>
        <div className="flex items-center mb-2">
          <input
            type="number"
            value={salaryAmount}
            onChange={(e) => setSalaryAmount(+e.target.value)}
            className="w-20 border rounded p-1 mr-2 font-semibold"
          />
          <span className="text-gray-600 font-semibold">per</span>
          <select onChange={(e) => setPertime(e.target.value)} name="" id="">
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="" className="mb-2 text-gray-800 font-semibold">
            Hours per week :
          </label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(+e.target.value)}
            className="w-20 border rounded p-1 mb-2 font-semibold ml-2"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="" className="mb-2 text-gray-800 font-semibold">
            Days per Week :
          </label>
          <input
            type="number"
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(+e.target.value)}
            className="w-20 border rounded p-1 mb-2 font-semibold ml-2"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="" className="mb-2 text-gray-800 font-semibold">
            Holidays per year :
          </label>
          <input
            type="number"
            value={holidaysPerYear}
            onChange={(e) => setHolidaysPerYear(+e.target.value)}
            className="w-20 border rounded p-1 mb-2 font-semibold"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="" className="mb-2 text-gray-800 font-semibold">
            Unpaid vacation days :
          </label>
          <input
            type="number"
            value={unpaidVacationDays}
            onChange={(e) => setUnpaidVacationDays(+e.target.value)}
            className="w-20 border rounded p-1 mb-4 font-semibold ml-2"
          />
        </div>

        <div className="flex justify-center">
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline m-2 transition-all duration-300 ease-in-out transform hover:scale-105">
            Calculate
          </button> */}
          <button
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline m-2 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={clearbtn}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="p-4 w-96 h-[375px] bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Your Result</h1>
        <div className="border  p-1 justify-center items-center rounded bg-white flex flex-col">
        <h1 className="text-2xl text-green-600 font-semibold p-1 transition duration-500 ease-in-out transform hover:scale-110">
          {result}, Weekly Earning
        </h1>
        <h1 className="text-2xl text-purple-600 font-semibold p-1 transition duration-500 ease-in-out transform hover:scale-110">
          {yearlyEarnings}, Yearly Earning
        </h1>
          <div className="mt-4 flex items-center justify-center">
          <canvas ref={chartRef} style={{ maxWidth:'180px',maxHeight:'180px'}}></canvas>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default page;
