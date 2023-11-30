"use client";
import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const page = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(5);
  const [weight, setWeight] = useState(60);
  const [bmis, setBmi] = useState(0);
  const [activity, setActivity] = useState("Sedentary");
  const [result, setResult] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Add this line

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    console.log("Selected gender: ", event.target.value);
  };

  const handleActivityChange = (e) => {
    const selectedActivity = e.target.value;
    setActivity(selectedActivity);
    console.log(selectedActivity);
  };

  const clearbtn = () => {
    setAge(0);
    setGender("");
    setFeet(0);
    setInches(0);
    setWeight(0);
    setBmi(0);
  };

  useEffect(() => {
    const totalInches = Number(feet) * 12 + Number(inches);
    const kgs = Number(weight) * 2;
    let bmrRate;

    if (gender === "male") {
      bmrRate = 10 * kgs + 6.25 * totalInches - 5 * age + 5;
    } else if (gender === "female") {
      bmrRate = 10 * kgs + 6.25 * totalInches - 5 * age - 161;
    }

    let calculatedResult = "";

    if (activity === "Sedentary") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.2
      ).toFixed(1)} calories.`;
    } else if (activity === "LightlyActive") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.375
      ).toFixed(1)} calories.`;
    } else if (activity === "ModeratelyActive") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.55
      ).toFixed(1)} calories.`;
    } else if (activity === "VeryActive") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.725
      ).toFixed(1)} calories.`;
    } else if (activity === "ExtremelyActive") {
      calculatedResult = `Your ideal calorie intake is ${(
        bmrRate * 1.9
      ).toFixed(1)} calories.`;
    } else {
      calculatedResult =
        "Please select your Activity level or fill all fields.";
    }

    setResult(calculatedResult);
    let Fruits = 20;
    let Meal = 30;
    let Milk = 10;
    let Carbs = 40;

    const data = {
      labels: ["Fruits", "Meal", "Milk", "Carbs"],
      datasets: [
        {
          label: "Calorie Counter",
          // data: [totalTipPerPerson, price + totalTip],
          data: [Fruits, Meal, Milk, Carbs],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)", // Red shade
            "rgba(54, 162, 235, 0.7)", // Blue shade
            "rgba(255, 206, 86, 0.7)", // Yellow shade
            "rgba(75, 192, 192, 0.7)", // Green shade
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)", // Red border
            "rgba(54, 162, 235, 1)", // Blue border
            "rgba(255, 206, 86, 1)", // Yellow border
            "rgba(75, 192, 192, 1)", // Green border
          ],
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
  }, [age, feet, inches, gender, weight, activity]);

  return (
    <article className="p-8">
      <div className="pt-3 pb-3">
        <h1 className="text-2xl font-bold">
          How to Use a Calorie Calculator to Make Healthier Sub Choices at
          Subway
        </h1>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Looking to make healthier sub choices at Subway? Using a calorie
          calculator can be your best ally. With a plethora of options to choose
          from, it can be challenging to navigate the menu and make smart
          choices that align with your health goals. But fear not! A calorie
          calculator can help you make informed decisions about what to order.
          By plugging in the ingredients and toppings that you want to include
          in your Subway sub, a calorie calculator gives you a breakdown of the
          nutritional content and calorie count. This tool empowers you to
          customize your sub to fit your dietary needs and preferences. Whether
          you're counting calories, watching your sodium intake, or looking for
          low-carb options, a calorie calculator can be a valuable resource.
        </p>
      </div>
      <section className="flex justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-lg">
          <p className="font-bold text-xl text-red-600">Calorie Counter</p>
          <div className="flex items-center ">
            <label
              htmlFor=""
              className="block text-gray-700 font-bold mb-2 text-lg mr-1 sm:text-base"
            >
              Age 
            </label>
            <input
              type="number"
              value={age}
              placeholder="Your Age"
              onChange={(e) => setAge(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-auto"
            />
            <span className="text-gray-600 p-4 font-semibold text-md">
              2-90
            </span>
          </div>
          <div className="flex items-center mb-2 my-1">
            <label htmlFor="" className="text-gray-700 text-lg font-bold mr-2">
              Gender :
            </label>
            <input
              type="radio"
              name="gender"
              defaultChecked
              value="male"
              className="mr-2 leading-tight"
              onChange={handleGenderChange}
            />
            <span className="text-gray-700 font-semibold text-md mr-6">
              Male
            </span>
            <input
              type="radio"
              name="gender"
              value="female"
              className="mr-2 leading-tight"
              onChange={handleGenderChange}
            />
            <span className="text-gray-700 font-semibold text-md">Female</span>
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="" className="text-gray-700 text-lg font-bold mr-2">
              Height :
            </label>
            <input
              type="number"
              value={feet}
              placeholder="feet"
              onChange={(e) => setFeet(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2 w-28"
            />
            <input
              type="number"
              value={inches}
              placeholder="inches"
              onChange={(e) => setInches(e.target.value)}
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="" className="text-gray-700 text-lg font-bold mr-2">
              Weight :
            </label>
            <input
              type="number"
              placeholder="In Kgs"
              value={weight}
              onChange={(e) => setWeight(e.target.value)} // Change from onClick to onChange
              className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <label
            htmlFor=""
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Select Your Activity Level:
          </label>
          <select
            className="block appearance-none w-full mt-2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={activity}
            value={activity}
            onChange={handleActivityChange}
          >
            <option value="Sedentary">Sedentary</option>
            <option value="LightlyActive">Lightly Active</option>
            <option value="ModeratelyActive">Moderately Active</option>
            <option value="VeryActive">Very Active</option>
            <option value="ExtremelyActive">Extremely Active</option>
          </select>
          <div className="flex items-center justify-center mt-4">
            {/* <button
              className="bg-red-500 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
         animate-scale hover:animate-pulse sm:hidden"
              onClick={clearbtn}
            >
              Clear
            </button> */}
          </div>
        </div>
        <div className="shadow-lg rounded-md p-3 my-2 h-[400px] bg-gradient-to-b from-gray-200 to-gray-300 w-96">
          <p className="font-bold text-2xl mb-4 text-center">Result</p>
          <div className="overflow-y-auto bg-white rounded-sm">
            <div className="w-full table-fixed rounded-sm">
              <div className="border py-3 px-4 text-gray-800 font-medium rounded-md shadow-md text-xl text-center">
                {result}
              </div>
            </div>
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
          How to Use a Calorie Calculator to Make Healthier Sub Choices at
          Subway
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Are you a Subway sandwich lover looking to make healthier choices? If
          so, using a calorie calculator can be a game-changer. In this article,
          we will show you how to utilize a calorie calculator to make smarter
          sub choices at Subway. By knowing the exact calorie content of
          different ingredients, you can create a customized sandwich that fits
          your health goals. With the brand's commitment to fresh and delicious
          ingredients, Subway offers numerous options to satisfy your taste buds
          while keeping your calorie intake in check. By using a calorie
          calculator, you can explore different combinations and find the
          perfect balance of flavors without compromising on nutrition. Whether
          you are counting calories to manage your weight or simply want to make
          informed choices, a calorie calculator is an invaluable tool. From
          selecting the bread to adding condiments, our guide will walk you
          through the process of using a calorie calculator effectively. Start
          your journey towards a healthier Subway experience today and enjoy
          your favorite subs guilt-free with the help of a calorie calculator.
        </p>
        <h2 className="text-2xl font-semibold">
          Understanding calorie counting
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Before we dive into the world of calorie calculators, it's important
          to understand the basics of calorie counting. Calories are a unit of
          measurement used to quantify the energy content of food and beverages.
          Knowing how many calories you consume can help you maintain a healthy
          weight or reach your weight loss goals. It's crucial to strike a
          balance between consuming enough calories to fuel your body's needs
          and avoiding excessive calorie intake. To effectively use a calorie
          calculator, you need to have a general idea of your daily calorie
          needs. This can vary depending on factors such as age, gender, weight,
          height, and activity level. Online resources and health professionals
          can help you determine your ideal calorie intake. Once you have this
          information, you can use a calorie calculator to make informed choices
          when ordering Subway subs.
        </p>
        <h2 className="text-2xl font-semibold">
          Why use a calorie calculator at Subway
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Subway is known for its wide range of sandwich options, but not all of
          them are created equal when it comes to calorie content. By using a
          calorie calculator, you can gain insight into the nutritional value of
          each ingredient and make smarter choices. This is especially useful if
          you're on a specific diet plan or have dietary restrictions. A calorie
          calculator allows you to see the calorie content of individual
          ingredients and visualize the impact of different combinations. It
          gives you the power to create a customized sub that suits your taste
          preferences and aligns with your health goals. By using a calorie
          calculator, you can take control of your Subway experience and make
          choices that support your well-being.
        </p>
        <h2 className="text-2xl font-semibold">
          Using a calorie calculator to make healthier sub choices
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          To achieve your health goals, it's important to create a personalized
          Now that you have a calorie calculator at your disposal, it's time to
          put it to use. Here's a step-by-step guide on how to use a calorie
          calculator effectively when ordering Subway subs: 1. Choose your
          bread: Start by selecting the bread for your sub. Different types of
          bread have varying calorie contents, so it's important to make an
          informed choice. Use the calorie calculator to compare the calorie
          content of different bread options and choose the one that best fits
          your dietary needs. 2. Select your protein: Next, choose your protein
          source. Subway offers a variety of protein options, including turkey,
          chicken, beef, and veggie patties. Use the calorie calculator to
          determine the calorie content of each protein choice and select the
          one that appeals to you. 3. Add vegetables: Load up on fresh
          vegetables to add flavor, texture, and nutrients to your sub. From
          lettuce and tomatoes to cucumbers and peppers, Subway offers a wide
          range of vegetable options. Use the calorie calculator to see the
          calorie content of each vegetable and add them to your sub
          accordingly. 4. Choose your cheese: If you're a cheese lover, Subway
          has you covered. From American and cheddar to Swiss and pepper jack,
          there's a cheese to suit every taste. Use the calorie calculator to
          compare the calorie content of different cheese options and choose the
          one that fits your dietary goals. 5. Pick your condiments: Condiments
          can add flavor and moisture to your sub, but they can also contribute
          to its calorie content. Use the calorie calculator to check the
          calorie content of condiments like mayonnaise, mustard, ketchup, and
          sauces. Opt for lighter options or use them sparingly to keep your
          sub's calorie count in check. By following these steps and utilizing
          the calorie calculator, you can create a customized Subway sub that
          aligns with your health goals. Whether you're looking to lose weight,
          maintain a healthy lifestyle, or simply make smarter choices, the
          calorie calculator can be your secret weapon.
        </p>
        <h2 className="text-2xl font-semibold">
          Exploring Subway's menu and nutrition information
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          To make the most informed choices at Subway, it's essential to
          familiarize yourself with their menu and nutrition information. Subway
          provides detailed nutrition information for all their menu items,
          making it easier for customers to make educated decisions. Take the
          time to explore the menu and nutrition information on the Subway
          website or mobile app. Familiarize yourself with the calorie content
          of different ingredients and menu items to make informed choices when
          using the calorie calculator. This knowledge will help you create a
          customized sub that meets your nutritional needs and preferences.
        </p>
        <h2 className="text-2xl font-semibold">
          Lower calorie options at Subway
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Subway offers several lower calorie options for those looking to watch
          their calorie intake. These options can help you enjoy a delicious sub
          without guilt. Here are some lower calorie choices to consider: 1.
          Choose a 6-inch sub: Opting for a 6-inch sub instead of a footlong can
          significantly reduce your calorie intake. Pair it with a side salad or
          a cup of soup for a satisfying and balanced meal. 2. Go for lean
          proteins: Selecting lean proteins like turkey, chicken breast, or
          veggie patties can help keep the calorie count in check while still
          providing ample protein. 3. Load up on vegetables: Adding a variety of
          fresh vegetables to your sub not only enhances the flavor but also
          adds essential vitamins and minerals. Vegetables are generally low in
          calories, so feel free to pile them on. 4. Use light or no cheese: If
          you're looking to reduce your calorie intake even further, consider
          skipping the cheese or opting for lighter options like shredded
          mozzarella or feta. 5. Choose lighter dressings: Subway offers a range
          of dressings, including lighter options like vinegar or low-fat
          mayonnaise. These choices can add flavor without significantly
          increasing the calorie content. By choosing these lower calorie
          options and using the calorie calculator, you can enjoy a delicious
          Subway sub while staying on track with your health goals.
        </p>
        <h2 className="text-2xl font-semibold">Conclusion:</h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Using a calorie calculator can be a powerful tool for making healthier
          sub choices at Subway. By understanding calorie counting, finding a
          calorie calculator, and effectively using it to customize your order,
          you can create a delicious sub that aligns with your health goals.
          Remember to explore Subway's menu and nutrition information, opt for
          lower calorie options, and customize your order based on your dietary
          needs and preferences. With the help of a calorie calculator, you can
          enjoy your favorite Subway subs guilt-free while maintaining a healthy
          lifestyle. Start using a calorie calculator today and embark on a
          journey towards a healthier Subway experience.
        </p>
      </div>
    </article>
  );
};

export default page;
