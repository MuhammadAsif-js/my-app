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
    <article className="p-7 h-auto sm:p-10">
      <div className="px-10 pt-3 pb-3">
        <h1 className="text-2xl font-bold">Simple Interest Only Calculator</h1>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Looking for a quick and straightforward way to calculate the interest
          on your loan? Look no further! Our simple interest-only calculator is
          here to help you. Whether you're planning to buy a car, invest in real
          estate, or even pay off your credit card debt, this calculator will
          give you the answers you need in just a few clicks. With our
          user-friendly interface, you can input the loan amount, interest rate,
          and loan term, and our calculator will instantly generate the amount
          of interest you'll be paying. No need for complex formulas or manual
          calculations anymore – our tool does all the work for you.
        </p>
      </div>
      <section className="flex justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-lg">
          <p className="text-xl font-semibold mb-4">Interest Calculator</p>
          <label className="font-semibold" htmlFor="">
            Interest Type :{" "}
          </label>
          <select
            onChange={(e) => setSimpleInterest(e.target.value)}
            name=""
            id=""
            className="border rounded p-2 mb-2 appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                style={{ maxWidth: "160px", maxHeight: "160px" }}
              ></canvas>
            </div>
          </div>
        </div> <br />
      </section> <br />
      <div className="px-10 py-4">
        <h2 className="text-2xl font-semibold">
          How does simple interest work?
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Simple interest is a basic method of calculating interest that is
          commonly used for loans, mortgages, and other financial transactions.
          Unlike compound interest, which takes into account the accumulated
          interest over time, simple interest is calculated based only on the
          original principal amount. In simple terms, simple interest is the
          interest charged or earned on the principal amount of a loan or
          investment. It is calculated as a percentage of the principal and does
          not take into account any additional interest that may have been
          accumulated over time. For example, if you borrow $10,000 at a simple
          interest rate of 5% per year for a period of 5 years, you would pay
          $500 in interest each year, for a total of $2,500 in interest over the
          5-year period. Simple interest is commonly used in situations where
          the interest is paid or earned at regular intervals, such as monthly
          or annually. It provides a straightforward way to calculate the cost
          of borrowing or the return on investment.
        </p>
        <h2 className="text-2xl font-semibold">
          Formula for calculating simple interest
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Simple interest is calculated by multiplying the principal amount by
          the interest rate and the time period for which the interest is
          calculated. The formula for calculating simple interest is: Simple
          Interest = Principal x Interest Rate x Time Where: - Principal: The
          initial amount of money borrowed or invested. - Interest Rate: The
          percentage rate at which interest is charged or earned. - Time: The
          period for which the interest is calculated, usually expressed in
          years. For example, let's say you borrow $5,000 at a simple interest
          rate of 6% per year for a period of 3 years. Using the formula, the
          calculation would be: Simple Interest = $5,000 x 0.06 x 3 = $900 This
          means that you would pay $900 in interest over the 3-year period.
        </p>
        <h2 className="text-2xl font-semibold">
          Step-by-step guide on using a simple interest calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          While a simple interest calculator can be a valuable tool, it's
          important to consider some factors to ensure accurate results. Here
          are a few things to keep in mind: 1. Interest Rate: Make sure you
          enter the correct interest rate in the calculator. Even a small
          difference in the interest rate can significantly impact the
          calculated interest amount. 2. Time Period: Double-check the time
          period for which the interest is calculated. Whether it's in months or
          years, ensure that you input the correct value to avoid any
          discrepancies. 3. Additional Fees: Some loans or investments may
          include additional fees or charges that are not covered by the simple
          interest calculator. Take these into account to get a more accurate
          estimate of the total cost. 4. Currency: Be mindful of the currency in
          which the calculator is operating. Ensure that you input the principal
          amount and interest rate in the correct currency to avoid any
          confusion. By considering these factors, you can ensure that the
          results provided by the simple interest calculator align with your
          specific financial situation.
        </p>
        <h2 className="text-2xl font-semibold">
          Examples of calculating simple interest using a calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Using our simple interest calculator is a breeze. Just follow these
          simple steps: 1. Input the Loan Amount: Enter the principal amount of
          the loan or investment in the designated field. This is the initial
          amount of money you borrowed or invested. 2. Enter the Interest Rate:
          Input the interest rate as a percentage. Ensure that you enter the
          correct rate to get accurate results. 3. Specify the Loan Term: Enter
          the time period for which the interest is calculated. This can be in
          months or years, depending on your specific needs. 4. Click Calculate:
          Once you've entered all the required information, click the calculate
          button. Our simple interest calculator will instantly generate the
          amount of interest you'll be paying. 5. Review the Results: Take a
          look at the calculated interest amount and the total amount, which
          includes the principal and interest. Use these figures to make
          informed financial decisions. By following these steps, you can
          effortlessly calculate the interest on your loan or investment using
          our simple interest calculator.
        </p>
        <h2 className="text-2xl font-semibold">
          Simple interest vs. compound interest
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          If you're looking for additional simple interest calculators or want
          to explore different options, here are a few online resources to
          consider: 1. Bank Websites: Many banks provide online calculators on
          their websites to help customers calculate simple interest for loans
          and investments. 2. Financial Planning Websites: Websites dedicated to
          financial planning and personal finance often offer free calculators,
          including simple interest calculators. 3. Mobile Applications: There
          are numerous mobile applications available for both iOS and Android
          that provide simple interest calculators, making it convenient to
          calculate interest on the go. 4. Online Search: Simply conducting an
          online search for "simple interest calculator" will yield a variety of
          options to choose from. By utilizing these resources, you can find the
          simple interest calculator that best suits your needs.
        </p>
        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          While simple interest is a straightforward method of calculating
          interest, it's important to understand the key differences between
          simple interest and compound interest. Simple interest is calculated
          solely based on the principal amount, interest rate, and time period.
          The interest does not accumulate over time, and the total amount
          remains constant throughout the loan or investment term. On the other
          hand, compound interest takes into account the accumulated interest
          over time. The interest is added to the principal amount, and
          subsequent interest is calculated based on the new total. This results
          in a compounding effect, where the interest grows over time. Compound
          interest can be more favorable for long-term investments, as the
          interest compounds and generates additional returns. However, for
          short-term loans or investments, simple interest may be more suitable
          due to its simplicity and ease of calculation. When choosing between
          simple interest and compound interest, consider the specific financial
          situation, time period, and desired outcome to make an informed
          decision.
        </p>
      </div>
    </article>
  );
};

export default Page;
