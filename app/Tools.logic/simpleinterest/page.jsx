"use client";
import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Page = () => {
  const [simpleInterest, setSimpleInterest] = useState("SimpleInterest");
  const [principalAmount, setPrincipalAmount] = useState(4500);
  const [interestRate, setInterestRate] = useState(6);
  const [periodUnit, setPeriodUnit] = useState("years");
  const [result, setResult] = useState(0);
  const [compoundFrequency, setCompoundFrequency] = useState("daily");
  const [periods, setPeriods] = useState(1);
  const [compoundPrincipalAmount, setCompoundPrincipalAmount] = useState(4500);
  const [compoundInterestRate, setCompoundInterestRate] = useState(6);
  const [compoundPeriodUnit, setCompoundPeriodUnit] = useState("years");
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Add this line

  useEffect(() => {
    let interest = 0;
    if (simpleInterest === "SimpleInterest") {
      if (periodUnit === "years") {
        interest = (principalAmount * interestRate * 1) / 100;
      } else if (periodUnit === "quarter") {
        interest = (principalAmount * interestRate * 4) / 100;
      } else if (periodUnit === "months") {
        interest = (principalAmount * interestRate * 12) / 100;
      } else if (periodUnit === "weeks") {
        interest = (principalAmount * interestRate * 52) / 100;
      } else if (periodUnit === "days") {
        interest = (principalAmount * interestRate * 365) / 100;
      }
      setResult(interest);
    } else if (simpleInterest === "CompoundInterest") {
      let totalAmount = compoundPrincipalAmount;
      let rate = compoundInterestRate / 100;

      if (compoundPeriodUnit === "Years") {
        let n = 1;
        if (compoundFrequency === "Daily") {
          n = 365;
        } else if (compoundFrequency === "Weekly") {
          n = 52;
        } else if (compoundFrequency === "Monthly") {
          n = 12;
        } else if (compoundFrequency === "Quarterly") {
          n = 4;
        } else if (compoundFrequency === "Yearly") {
          n = 1;
        }

        if (periodUnit === "YEARS") {
          n = n * 1;
        } else if (periodUnit === "QUARTER") {
          n = n * 4;
        } else if (periodUnit === "MONTHS") {
          n = n * 12;
        } else if (periodUnit === "WEEKS") {
          n = n * 52;
        } else if (periodUnit === "DAYS") {
          n = n * 365;
        }
        totalAmount =
          compoundPrincipalAmount * Math.pow(1 + rate / n, n * periods);
        interest = totalAmount - compoundPrincipalAmount;
        setResult(interest);
      }
    }
    const data = {
      labels: ["Principal", "Interest"],
      datasets: [
        {
          label: "Principal vs Interest",
          data: [principalAmount, interest],
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
    simpleInterest,
    principalAmount,
    interestRate,
    periodUnit,
    compoundPrincipalAmount,
    compoundInterestRate,
    compoundFrequency,
    periods,
    compoundPeriodUnit,
  ]);
  return (
      <section className="flex text-black justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-72 bg-gray-100 sm:text-lg">
          {/* <p className="text-xl font-semibold mb-4">Interest Calculator</p> */}
          <label className="font-semibold" htmlFor="">
            Interest Type :{" "}
          </label>
          <select
            onChange={(e) => setSimpleInterest(e.target.value)}
            name=""
            id=""
            className="border rounded p-2 mb-2 appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[230px]"
          >
            <option value="SimpleInterest">Simple Interest</option>
            <option value="CompoundInterest">Compound Interest</option>
          </select>{" "}
          <br />
          {simpleInterest === "SimpleInterest" ? (
            <div>
              <label htmlFor="principalAmount" className="mr-2 font-semibold">
                Principal Amount:
              </label>
              <input
                type="number"
                value={principalAmount}
                id="principalAmount"
                onChange={(e) => setPrincipalAmount(e.target.value)}
                className="border p-2 rounded mb-2"
              />{" "}
              <br />
              <label htmlFor="interestRate" className="mr-2 font-semibold">
                Interest Rate:
              </label>
              <input
                type="number"
                value={interestRate}
                id="interestRate"
                onChange={(e) => setInterestRate(e.target.value)}
                className="border p-2 rounded mb-2"
              />{" "}
              <br />
              <label htmlFor="periodUnit" className="mr-2 font-semibold">
                Period Unit:
              </label>
              <select
                id="periodUnit"
                className="border p-2 rounded mb-2 font-semibold"
                onChange={(e) => setPeriodUnit(e.target.value)}
              >
                <option value="years">Years</option>
                <option value="quarter">Quarter</option>
                <option value="months">Months</option>
                <option value="weeks">Weeks</option>
                <option value="days">Days</option>
              </select>{" "}
              <br />
            </div>
          ) : (
            // <div>
            //   <label htmlFor="" className=" font-semibold">
            //     Compound Frequency :{" "}
            //   </label>
            //   <select
            //     name=""
            //     id=""
            //     onChange={(e) => setCompoundFrequency(e.target.value)}
            //     className="border p-2 rounded mb-2"
            //   >
            //     <option value="Days">daily</option>
            //     <option value="Weeks">weekly</option>
            //     <option value="Months">Monthly</option>
            //     <option value="Quarter">Quarterly</option>
            //     <option value="Years">Yearly</option>
            //     {/* <option value="halfyear">Half Yearly</option> */}
            //     <option value="years">Yearly</option>
            //   </select>{" "}
            //   <br />
            //   <label htmlFor="" className=" font-semibold">
            //     Principal Amount :{" "}
            //   </label>
            //   <input
            //     type="number"
            //     onChange={(e) => setCompoundPrincipalAmount(e.target.value)}
            //     className="border p-2 rounded mb-2"
            //   />{" "}
            //   <br />
            //   <label htmlFor="" className=" font-semibold">
            //     Annual Rate :{" "}
            //   </label>
            //   <input
            //     type="number"
            //     value={compoundInterestRate}
            //     onChange={(e) => setCompoundInterestRate(e.target.value)}
            //     className="border p-2 rounded mb-2"
            //   />{" "}
            //   <br />
            //   <label htmlFor="" className=" font-semibold">
            //     period unit :{" "}
            //   </label>
            //   <select
            //     name=""
            //     onChange={(e) => setCompoundPeriodUnit(e.target.value)}
            //     id=""
            //     className="border p-2 rounded mb-2 font-semibold"
            //   >
            //     <option value="YEARS">Years</option>
            //     <option value="QUARTER">quarter</option>
            //     <option value="MONTHS">Months</option>
            //     <option value="WEEKS">Weeks</option>
            //     <option value="DAYS">Days</option>
            //   </select>{" "}
            //   <br />
            // </div>
            <div>
              <h1 className=" text-red-500 font-semibold text-xl">Technical Work is Going on</h1>
            </div>
          )}
        </div>
        <div className="p-4 w-96 h-[295px] bg-gray-100 rounded-lg shadow-md sm:w-64 sm:text-sm">
          {/* <p className="text-2xl font-bold mb-4">Your Result</p> */}
          <div className="border text-center rounded bg-white ">
            <p className="text-xl font-semibold p-1">
              {result} Interest , {principalAmount} principal
            </p>
            <br />
            <div className="mt-4 flex items-center justify-center h-[140px]">
              <canvas
                ref={chartRef}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              ></canvas>
            </div>
          </div>
        </div> <br />
      </section>
  );
};

export default Page;
