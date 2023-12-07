"use client";
import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

//cost calculator gas

const Page = () => {
  // const [price, setPrice] = useState(250);
  // const [tip, setTip] = useState(10);
  // const [people, setPeople] = useState(1);
  // const [total, setTotal] = useState(0);
  // const chartRef = useRef(null);
  // const chartInstance = useRef(null); // Add this line

  // useEffect(() => {
  //   const totalTip = (price * tip) / 100;
  //   const totalTipPerPerson = totalTip / people;
  //   setTotal(totalTipPerPerson.toFixed(2));

  //   const data = {
  //     labels: ["Tip", "Total"],
  //     datasets: [
  //       {
  //         label: "Tip vs Total",
  //         data: [totalTipPerPerson, price + totalTip],
  //         backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
  //         hoverOffset: 4,
  //       },
  //     ],
  //   };

  //   const options = {
  //     plugins: {
  //       legend: {
  //         position: "bottom",
  //       },
  //     },
  //   };

  //   if (chartRef && chartRef.current) {
  //     if (chartInstance.current) { // Add this block
  //       chartInstance.current.destroy();
  //     }

  //     chartInstance.current = new Chart(chartRef.current.getContext('2d'), {
  //       type: 'doughnut',
  //       data: data,
  //       options: options,
  //     });
  //   }
  // }, [price, tip, people]);
  const [tripDistance, setTripDistance] = useState(16);
  const [fuelEfficiency, setFuelEfficiency] = useState(34);
  const [fuelPrice, setFuelPrice] = useState(23);
  const [total, setTotal] = useState(0);
  const [optiondistance, setOptiondistance] = useState("Miles");
  const [optionefficiency, setOptionefficiency] = useState("Milespergallon");
  const [optionprice, setOptionprice] = useState("Pergallon");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // useEffect(()=>{

  // },[tripDistance,fuelEfficiency,fuelPrice,optiondistance,optionefficiency,optionprice])

  useEffect(() => {
    let Fuelcost = 0;
    let Distance = 0;
    let fuelunit = 0;
    let distanceunit = 0;

    //Total Fuel Cost = (Trip Distance / Fuel Efficiency) * Fuel Price
    switch (optiondistance) {
      case "Miles":
        Distance = tripDistance * 1.609;
        break;
      case "Kilometers":
        Distance = tripDistance;
        break;
      default:
        Distance = tripDistance;
    }
    console.log(Distance);

    switch (optionprice) {
      case "Pergallon":
        fuelunit = fuelPrice / 3.785;
        break;
      case "Perliter":
        fuelunit = fuelPrice;
        break;
      default:
        fuelunit = fuelPrice;
    }
    console.log(fuelunit);

    switch (optionefficiency) {
      case "Milespergallon":
        distanceunit = Distance / 1.609;
        break;
      case "Litersper100km":
        distanceunit = Distance / 100;
        break;
      case "Kilometerperliter":
        distanceunit = Distance;
        break;
      case "Literspermile":
        distanceunit = Distance * 1.609;
        break;
    }
    Fuelcost = (distanceunit / fuelEfficiency) * fuelunit;
    setTotal(Fuelcost.toFixed(2));


    const data = {
      labels: ["Fuel Cost"],
      datasets: [
        {
          label: "Fuel Cost",
          data: [Fuelcost],
          backgroundColor: ["rgb(54, 162, 235)"],
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
        type: "bar",
        data: data,
        options: options,
      });
    }
  }, [
    tripDistance,
    fuelEfficiency,
    fuelPrice,
    optiondistance,
    optionefficiency,
    optionprice,
  ]);

  return (
      <section className="flex text-black justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
<div className="shadow-md rounded px-4 sm:px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-full sm:w-96 bg-gray-100 sm:text-lg">
  <div className="mb-4">
    <label
      htmlFor="tripDistance"
      className="block text-gray-700 font-bold mb-2"
    >
      Trip Distance
    </label>
    <div className="flex items-center border border-gray-300 rounded-md">
      <input
        defaultValue={tripDistance}
        onChange={(e) => setTripDistance(+e.target.value)}
        id="tripDistance"
        type="number"
        className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      />
      <select
        className="py-2 px-3 border-l border-gray-300"
        onChange={(e) => setOptiondistance(e.target.value)}
      >
        <option value="Miles">Miles</option>
        <option value="Kilometers">Kilometers (km)</option>
      </select>
    </div>
  </div>
  <div className="mb-4">
    <label
      htmlFor="fuelEfficiency"
      className="block text-gray-700 font-bold mb-2"
    >
      Fuel Efficiency
    </label>
    <div className="flex items-center border border-gray-300 rounded-md">
      <input
        id="fuelEfficiency"
        defaultValue={fuelEfficiency}
        onChange={(e) => setFuelEfficiency(+e.target.value)}
        type="number"
        className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      />
      <select
        className="py-2 px-3 border-l border-gray-300"
        onChange={(e) => setOptionefficiency(e.target.value)}
      >
        <option value="Kilometerperliter">Km per liter</option>
        <option value="Milespergallon">Miles per gallon</option>
        <option value="Litersper100km">Litres per 100 km</option>
        <option value="Literspermile">Liters per mile</option>
      </select>
    </div>
  </div>
  <div>
    <label
      htmlFor="fuelPrice"
      className="block text-gray-700 font-bold mb-2"
    >
      Fuel Price
    </label>
    <div className="flex items-center border border-gray-300 rounded-md">
      <input
        id="fuelPrice"
        defaultValue={fuelPrice}
        onChange={(e) => setFuelPrice(+e.target.value)}
        type="number"
        className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      />
      <select
        className="py-2 px-3 border-l border-gray-300"
        onChange={(e) => setOptionprice(e.target.value)}
      >
        <option value="Pergallon">Per gallon</option>
        <option value="Perliter">Per liter</option>
      </select>
    </div>
  </div>
</div>


        <div className="shadow-md rounded px-4 pt-4 pb-4  flex flex-col my-2 h-68 bg-gray-100 w-[378px]">
          <h1 className="text-2xl font-semibold mb-4">Results: {total} $</h1>
          <div className="mt-4 flex items-center justify-center">
            <canvas
              ref={chartRef}
              style={{ maxWidth: "230px", maxHeight: "230px" }}
            ></canvas>
          </div>

          {/* <h1 classNameName="text-2xl font-bold mb-4">Results:</h1>
        <div classNameName="border p-2 font-semibold text-center text-xl rounded bg-white">{total} Your Total Tip</div>
        <div classNameName="mt-4 flex items-center justify-center">
        <canvas ref={chartRef} style={{ maxWidth:'180px',maxHeight:'180px'}}></canvas>
        </div> */}
        </div>
      </section>
  );
};

export default Page;
