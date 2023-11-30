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
    <article className="h-screen">
      <div className="p-5 pt-5 pb-1">
        <h1 className="text-2xl font-bold pb-1">
          Gas Cost Calculators: The Ultimate Tool for Budget-Conscious Drivers
        </h1>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Are you tired of constantly guessing how much you're spending on gas?
          Say hello to gas cost calculators, the ultimate tool for
          budget-conscious drivers. With these handy online calculators, you can
          now accurately estimate your fuel expenses and plan your budget
          accordingly. Gas cost calculators take various factors into account,
          such as your vehicle's make and model, fuel efficiency, and current
          gas prices in your area. By simply entering this information, you'll
          get an instant estimate of your gas costs for any trip. Start using
          these tools today and experience the freedom of knowing exactly how
          much you're spending on gas.
        </p>
      </div>
      <section className="flex justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-lg">
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
                <option value="Milespergallon">Miles per gallon</option>
                <option value="Litersper100km">Litres per 100 km</option>
                <option value="Kilometerperliter">Kilometer per liter</option>
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

          {/* <label classNameName="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price:
        </label>
        <input
          classNameName="shadow appearance-none border rounded w-full font-semibold py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={price}
          onChange={(e) => setPrice(+e.target.value)}
          type="number"
          id="price"
        />

        <label
          classNameName="block text-gray-700 text-sm font-bold mb-2 mt-4"
          htmlFor="tip"
        >
          Tip %:
        </label>
        <input
          classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-semibold"
          defaultValue={tip}
          onChange={(e) => setTip(+e.target.value)}
          type="number"
          id="tip"
        />

        <label
          classNameName="block text-gray-700 text-sm font-bold mb-2 mt-4"
          htmlFor="people"
        >
          Number of people:
        </label>
        <input
          classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={people}
          onChange={(e) => setPeople(+e.target.value)}
          type="number"
          id="people"
        /> */}
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
      </section> <br />
      <div className=" w-screen h-screen p-5">
        <h2 className="text-2xl px-10 font-semibold">
          Gas Cost Calculators: The Ultimate Tool for Budget-Conscious Drivers
        </h2>
        <p className="py-2 px-10 text-justify w-[1100px] font-normal">
          Are you tired of constantly guessing how much you're spending on gas?
          Say hello to gas cost calculators, the ultimate tool for
          budget-conscious drivers. With these handy online calculators, you can
          now accurately estimate your fuel expenses and plan your budget
          accordingly. Gas cost calculators take various factors into account,
          such as your vehicle's make and model, fuel efficiency, and current
          gas prices in your area. By simply entering this information, you'll
          get an instant estimate of your gas costs for any trip. Start using
          these tools today and experience the freedom of knowing exactly how
          much you're spending on gas.
        </p>
        <h2 className="text-2xl px-10 font-semibold">
          Gas Cost Calculators: The Ultimate Tool for Budget-Conscious Drivers
        </h2>
        <p className="py-2 px-10 text-justify w-[1100px] font-normal">
          Using gas cost calculators offers numerous benefits for
          budget-conscious drivers. Let's explore some of the key advantages: 1.
          Accurate Estimates: One of the primary benefits of gas cost
          calculators is their ability to provide accurate estimates of your
          fuel expenses. By considering factors such as your vehicle's make and
          model, fuel efficiency, and current gas prices, these calculators can
          give you a precise idea of how much you'll be spending on gas for a
          specific trip. 2. Budget Planning: Gas expenses can be a significant
          part of your monthly budget. Gas cost calculators help you plan your
          budget more effectively by allowing you to estimate your fuel costs in
          advance. This enables you to allocate funds accordingly and avoid any
          surprises when it comes to your transportation expenses. 3. Comparison
          Shopping: Gas cost calculators also enable you to compare gas prices
          in different areas. By entering your location, you can see the current
          gas prices in various gas stations nearby. This information can help
          you identify the most cost-effective options and save money on fuel.
          4. Environmental Awareness: For environmentally conscious drivers, gas
          cost calculators can provide insights into the environmental impact of
          their driving habits. By estimating your gas consumption and
          emissions, these calculators allow you to make more informed decisions
          and potentially reduce your carbon footprint. 5. Time Savings:
          Calculating your gas costs manually can be time-consuming and prone to
          errors. Gas cost calculators automate the process, saving you valuable
          time and effort. With just a few clicks, you can obtain accurate
          estimates and focus on other aspects of your trip planning.
        </p>
        <h2 className="text-2xl px-10 font-semibold">
          How gas cost calculators work
        </h2>
        <p className="py-2 px-10 text-justify w-[1100px] font-normal">
          Gas cost calculators utilize a combination of data inputs and
          algorithms to estimate your fuel expenses. Here's a general overview
          of how these calculators work: 1. Vehicle Information: Gas cost
          calculators typically require you to input information about your
          vehicle, such as its make and model. This helps the calculator
          determine the specific fuel efficiency of your vehicle, as different
          models have varying levels of fuel consumption. 2. Fuel Efficiency:
          Once you've provided your vehicle information, the calculator uses the
          data to estimate your vehicle's fuel efficiency. This is often
          measured in miles per gallon (MPG) or liters per kilometer (L/100km).
          The calculator considers factors such as engine type, weight,
          aerodynamics, and other relevant specifications to determine the fuel
          efficiency. 3. Gas Prices: Gas cost calculators also take into account
          the current gas prices in your area. Some calculators automatically
          retrieve this data from reliable sources, while others may require you
          to input the gas prices manually. The accuracy of the estimate depends
          on the reliability and timeliness of the gas price data used by the
          calculator. 4. Trip Distance: To calculate your gas costs for a
          specific trip, gas cost calculators require you to input the distance
          you'll be traveling. This can be in miles or kilometers, depending on
          the calculator's settings. The calculator then uses your vehicle's
          fuel efficiency and the distance traveled to estimate the amount of
          fuel you'll need. 5. Cost Calculation: Once all the necessary inputs
          are provided, the gas cost calculator uses the fuel efficiency, trip
          distance, and current gas prices to calculate your estimated fuel
          expenses. The result is usually displayed as the total cost in your
          local currency.
        </p>
        <h2 className="text-2xl px-10 font-semibold">
          Tips for using gas cost calculators effectively
        </h2>
        <p className="py-2 px-10 text-justify w-[1100px] font-normal">
          To make the most out of gas cost calculators, consider the following
          tips: 1. Update Your Vehicle Information: Ensure that you input
          accurate and up-to-date information about your vehicle when using gas
          cost calculators. This includes the make and model, fuel efficiency,
          and any relevant specifications. This will help the calculator provide
          more accurate estimates tailored to your specific vehicle. 2. Research
          Local Gas Prices: Gas prices can vary significantly between different
          areas and gas stations. Before using a gas cost calculator, research
          the current gas prices in your locality. This will ensure that the
          estimates generated by the calculator align with the actual prices
          you'll encounter when refueling. 3. Consider Different Scenarios: Gas
          cost calculators allow you to experiment with different scenarios. For
          example, you can compare the fuel expenses of different vehicles to
          help you make an informed decision when purchasing a new car. You can
          also explore the impact of alternative routes or driving habits on
          your fuel costs. 4. Track Your Fuel Consumption: If you want to have a
          more accurate understanding of your fuel expenses, consider tracking
          your fuel consumption over time. Gas cost calculator apps often offer
          features that allow you to record your fuel purchases and calculate
          your average fuel efficiency. This can help you identify trends and
          optimize your driving habits for better fuel economy. 5. Stay Informed
          About Maintenance: Regular vehicle maintenance can significantly
          impact fuel efficiency. Ensure that your vehicle is properly
          maintained by following the manufacturer's recommendations for
          servicing, tire pressure, and other maintenance tasks. This will help
          ensure that your fuel efficiency remains optimal and that the
          estimates provided by gas cost calculators are accurate. By following
          these tips, you can maximize the benefits of using gas cost
          calculators and enhance your overall budget-conscious driving
          experience.
        </p>
        <h2 className="text-2xl px-10 font-semibold">
          Gas cost calculators for different types of vehicles
        </h2>
        <p className="py-2 px-10 text-justify w-[1100px] font-normal">
          Gas cost calculators cater to various types of vehicles, from compact
          cars to SUVs and electric vehicles (EVs). Here's how gas cost
          calculators can be useful for different types of vehicles: 1. Compact
          Cars: Gas cost calculators can help compact car owners estimate their
          fuel expenses with precision. These calculators consider factors such
          as the car's fuel efficiency, gas prices, and trip distance to provide
          accurate estimates. Compact cars are generally known for their fuel
          efficiency, making gas cost calculators valuable tools for
          budget-conscious drivers. 2. SUVs and Trucks: SUVs and trucks are
          typically less fuel-efficient than smaller vehicles due to their size
          and weight. Gas cost calculators can help SUV and truck owners plan
          their trips and estimate their fuel expenses more accurately. By
          considering the vehicle's lower fuel efficiency, these calculators can
          provide estimates that align with the specific needs of SUV and truck
          drivers. 3. Electric Vehicles (EVs): Gas cost calculators are not
          limited to traditional gasoline-powered vehicles. They can also be
          valuable tools for EV owners. EV-specific calculators take into
          account factors such as the vehicle's range, electricity prices, and
          charging times to estimate the cost of driving an electric vehicle.
          This allows EV owners to compare the costs of traditional
          gasoline-powered vehicles with their electric counterparts. Gas cost
          calculators cater to a wide range of vehicles, ensuring that all
          drivers can benefit from accurate fuel expense estimates, regardless
          of the type of vehicle they own.
        </p>
        <h2 className="text-2xl px-10 font-semibold">
          Conclusion: The value of gas cost calculators for budget-conscious
          drivers
        </h2>
        <p className="py-2 px-10 text-justify w-[1100px] font-normal">
          Gas cost calculators have become indispensable tools for
          budget-conscious drivers who want to accurately estimate their fuel
          expenses. By considering factors such as your vehicle's make and
          model, fuel efficiency, and current gas prices, these calculators
          provide reliable estimates that help you plan your budget more
          effectively. Whether you're driving a compact car, an SUV, or an
          electric vehicle, gas cost calculators cater to various types of
          vehicles, ensuring accurate estimates tailored to your needs. They are
          particularly useful for road
        </p>
      </div>
    </article>
  );
};

export default Page;
