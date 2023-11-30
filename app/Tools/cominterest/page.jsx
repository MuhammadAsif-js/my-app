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
    <article>
      <div className="px-10 pt-3 pb-3">
        <h1 className="text-2xl font-bold">
          {" "}
          Calculate Compound Interest Using a UK Calculator
        </h1>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Are you looking to calculate compound interest using a UK calculator?
          Look no further! Our comprehensive guide will walk you through the
          process step by step, ensuring accurate results every time. Whether
          you're saving for a long-term goal or want to see the growth potential
          of an investment, calculating compound interest is essential. With our
          user-friendly UK calculator, you'll have all the tools you need at
          your fingertips. Our calculator takes into account the interest rate,
          the frequency of compounding, and the initial principal to provide you
          with an accurate estimate of the future value of your investment.
        </p>
      </div>
      <section className="flex justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-lg">
          <div className="flex flex-wrap items-center justify-between mb-3">
            <label
              htmlFor="initialLumpSum"
              className="text-gray-800 font-semibold w-1/3"
            >
              Initial lump sum
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
              Extra Added every year
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
              Number of Years
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
        <div className="flex flex-wrap justify-center w-[400px] items-center m-3 cursor-pointer sm:w-[230px] sm:text-base">
          <div className="shadow-md rounded px-4 pt-4 pb-4 mb-4 flex flex-col my-2 h-[270px] bg-gray-100 w-[378px]">
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
      <div className="px-10 py-4">
        <h2 className="text-2xl font-semibold">
          Understanding compound interest
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Compound interest is a powerful concept that allows your money to grow
          exponentially over time. Unlike simple interest, which is calculated
          only on the initial principal, compound interest takes into account
          both the principal and the accumulated interest. This means that as
          interest is added to your investment, it starts earning interest as
          well. The longer the investment is held, the greater the impact of
          compound interest. In the UK, compound interest is commonly used in
          various financial products, such as savings accounts, loans,
          mortgages, and investments. Understanding how compound interest works
          is crucial for making informed financial decisions and maximizing your
          returns.
        </p>
        <h2 className="text-2xl font-semibold">
          How compound interest works in the UK
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          In the UK, compound interest is typically calculated using the
          Compound Annual Growth Rate (CAGR) formula. This formula takes into
          account the interest rate, the frequency of compounding, and the
          initial principal to provide you with an accurate estimate of the
          future value of your investment. The interest rate represents the
          percentage at which your investment grows annually. The compounding
          frequency determines how often the interest is added to the principal
          and starts earning interest itself. Common compounding frequencies in
          the UK include daily, monthly, quarterly, semi-annually, and annually.
          To calculate compound interest, you need to input the principal
          amount, interest rate, and compounding frequency into a reliable UK
          calculator. This ensures that the calculations are tailored to the
          specific context of the UK financial system.
        </p>
        <h2 className="text-2xl font-semibold">
          Overview of the UK compound interest calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Our user-friendly UK compound interest calculator simplifies the
          process of calculating compound interest. It provides an intuitive
          interface that allows you to input the necessary information and
          receive accurate estimates of your investment's future value. The
          calculator takes into account the principal amount, interest rate, and
          compounding frequency to provide you with a clear breakdown of the
          growth over a specific period. It also includes additional features,
          such as the ability to factor in regular contributions or withdrawals,
          to give you a more comprehensive view of your investment's potential.
        </p>
        <h2 className="text-2xl font-semibold">
          Factors to consider when using a UK calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          While a UK calculator provides accurate estimates, it's important to
          consider other factors that may affect the actual growth of your
          investment. Economic conditions, inflation rates, and any fees or
          charges associated with the investment can impact the final value of
          your investment. Additionally, the UK calculator assumes a constant
          interest rate and compounding frequency for the entire duration of the
          investment. In reality, these factors may change over time. It's
          essential to monitor the performance of your investment and make
          adjustments if necessary.
        </p>
        <h2 className="text-2xl font-semibold">
          Benefits of using a UK calculator for compound interest
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Using a UK calculator for compound interest offers several benefits.
          Firstly, it provides accurate estimates that align with the UK
          financial regulations and context. This ensures that your calculations
          are reliable and reflect the true growth potential of your investment.
          Secondly, a UK calculator simplifies the process of calculating
          compound interest, saving you time and effort. It eliminates the need
          for manual calculations and reduces the risk of errors or
          miscalculations. Lastly, a UK calculator allows you to explore
          different scenarios and make informed decisions about your investment.
          By inputting different principal amounts, interest rates, and
          compounding frequencies, you can compare the potential returns of
          various investment options and choose the one that aligns with your
          financial goals.
        </p>
        <h2 className="text-2xl font-semibold">
          Conclusion and final thoughts
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Calculating compound interest using a UK calculator is a valuable tool
          for understanding the growth potential of your investment. By
          considering the principal amount, interest rate, and compounding
          frequency, you can obtain accurate estimates of your investment's
          future value. Remember to choose a UK calculator that takes into
          account the specific context of the UK financial system. This ensures
          that your calculations align with the UK regulations and provide
          reliable results. While a UK calculator provides accurate estimates,
          it's important to consider other factors that may affect the actual
          growth of your investment. Economic conditions, inflation rates, and
          any fees or charges associated with the investment should be
          considered to make informed decisions. With our user-friendly UK
          compound interest calculator, you can confidently plan for your
          financial future and make informed investment decisions. Start
          exploring the growth potential of your investment today!
        </p>
      </div>
    </article>
  );
};

export default page;
