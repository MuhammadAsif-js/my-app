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
  const [extraweight, setExtraWeight] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Add this line

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    console.log("Selected gender: ", event.target.value);
  };

  const calculateArrowPosition = (bmiValue) => {
    const minBMI = 16.5;
    const maxBMI = 29;
    const position = ((bmiValue - minBMI) / (maxBMI - minBMI)) * 100;
    return Math.min(Math.max(position, 0), 100);
  };

  useEffect(() => {
    const totalInches = Number(feet) * 12 + Number(inches);
    const heightInMeters = totalInches * 0.0254;
    let bmi = 0;
    if (gender === "male") {
      bmi = Number(weight) / (heightInMeters * heightInMeters); // BMI calculation
      setBmi(bmi.toFixed(2));
    } else if (gender === "female") {
      bmi = Number(weight) / (heightInMeters * heightInMeters * 0.98); // BMI calculation
      setBmi(bmi.toFixed(2));
    }
    let normalWeight = 0;
    let extraWeight = 0;

    if (bmi < 18.5) {
      normalWeight = 100;
      extraWeight = 0;
    } else if (bmi >= 18.5 && bmi < 25) {
      normalWeight = 80;
      extraWeight = 20;
    } else if (bmi >= 25 && bmi < 30) {
      normalWeight = 70;
      extraWeight = 30;
    } else if (bmi >= 30 && bmi < 35) {
      normalWeight = 55;
      extraWeight = 45;
    } else if (bmi >= 35 && bmi < 40) {
      normalWeight = 40;
      extraWeight = 60;
    } else if (bmi >= 40) {
      normalWeight = 30;
      extraWeight = 70;
    }

    const data = {
      labels: ["Normal Weight", "Extra Weight"],
      datasets: [
        {
          label: "BMI vs Weight Distribution",
          data: [normalWeight, extraWeight],
          backgroundColor: ["rgb(46, 204, 113)", "rgb(231, 76, 60)"], // You can change colors as desired
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
        type: "doughnut",
        data: data,
        options: options,
      });
    }
  }, [age, gender, feet, inches, weight]);

  const clearbtn = () => {
    setAge(0);
    setGender("");
    setFeet(0);
    setInches(0);
    setWeight(0);
    setBmi(0);
  };

  return (
    <article className="md:p-5 w-screen h-screen sm:p-5 ">
      <div className="px-10 pt-3 pb-3">
        <h1 className="text-2xl font-bold">NHS BMI Calculator Uk</h1>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Are you looking to achieve your health goals and maintain a healthy
          weight? Look no further than the NHS BMI Calculator & Guide in Uk. This
          comprehensive tool enables you to calculate your Body Mass Index
          (BMI), an essential indicator of your overall health and weight
          status. Using your height and weight, the calculator generates your
          BMI score and categorizes it into different ranges, such as
          underweight, normal weight, overweight, and obesity. Trust the NHS BMI
          Calculator & Guide to support you on your journey to better health and
          well-being.{" "}
        </p>
      </div>
      <section className="flex justify-center flex-wrap items-center m-10 cursor-pointer gap-3">
        <div className="shadow-md rounded px-8 pt-6 max-h-[400px] pb-8 mb-4 flex flex-col my-2 w-96 bg-gray-100 sm:text-lg">
          <div>
            <div className="flex items-center my-4">
              <label
                htmlFor=""
                className="block text-gray-700 font-bold mb-2 text-lg mr-1"
              >
                Age 
              </label>
              <input
                type="number"
                value={age}
                placeholder="Your Age"
                onChange={(e) => setAge(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-auto "
              />
              <span className="text-gray-600 p-4 font-semibold text-md">
                2-90
              </span>
            </div>
            <div className="flex items-center my-4">
              <label
                htmlFor=""
                className="text-gray-700 text-lg font-bold mr-2"
              >
                Gender 
              </label>
              <input
                type="radio"
                defaultChecked
                name="gender"
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
              <span className="text-gray-700 font-semibold text-md">
                Female
              </span>
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor=""
                className="text-gray-700 text-lg font-bold mr-2"
              >
                Height  {""}
              </label>
              <input
                type="number"
                placeholder="feet"
                value={feet}
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
              <label
                htmlFor=""
                className="block text-gray-700  font-bold mb-2 text-md mr-2"
              >
                Weight : {""}
              </label>
              <input
                type="number"
                placeholder="In Kgs"
                value={weight}
                onChange={(e) => setWeight(e.target.value)} // Change from onClick to onChange
                className="shadow appearance-none border rounded w-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-scale hover:animate-pulse"
                onClick={clearbtn}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-md p-3 my-2 h-[380px] bg-gradient-to-b from-gray-200 to-gray-300 w-96">
          <div className="shadow-md rounded px-4 pt-4 pb-4 mb-4 flex flex-col my-2 h-70 bg-gray-100 w-[348px]">
            {/* <h1 className="font-bold text-xl mb-2">Result:</h1> */}
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="border text-xl font-semibold px-2 py-2 text-center m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Your calculated BMI: {bmis}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-full mt-2 h-10 bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-sm overflow-hidden relative">
              <div
                className="h-full bg-transparent border-r-4 border-gray-700 absolute top-0 left-0"
                style={{ width: `${calculateArrowPosition(bmis)}%` }}
              ></div>
              <div className="w-0 h-0 border-t-8 border-b-8 border-transparent border-black absolute top-0 left-0 transform -translate-x-1/2 -translate-y-8"></div>
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
          Use Your NHS BMI Calculator & Guide to Achieve Your Health Goals
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Are you looking to achieve your health goals and maintain a healthy
          weight? Look no further than the NHS BMI Calculator & Guide. This
          comprehensive tool enables you to calculate your Body Mass Index
          (BMI), an essential indicator of your overall health and weight
          status. Using your height and weight, the calculator generates your
          BMI score and categorizes it into different ranges, such as
          underweight, normal weight, overweight, and obesity. By utilizing the
          NHS BMI Calculator, you gain valuable insight into your current health
          status and can take appropriate steps towards achieving your desired
          weight and overall well-being. Whether you want to lose weight, track
          your progress, or maintain a healthy lifestyle, this guide is your
          go-to resource. The calculator provides personalized recommendations
          based on your BMI score, including advice on healthy eating, physical
          activity, and medical consultations if needed. Trust the NHS BMI
          Calculator & Guide to support you on your journey to better health and
          well-being. Start using this valuable tool today and take control of
          your weight and overall health.
        </p>
        <h2 className="text-2xl font-semibold">
          How to calculate your BMI using the NHS BMI calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Calculating your BMI using the NHS BMI calculator is quick and easy.
          Here's a step-by-step guide to help you get started: Step 1: Gather
          the necessary information Before using the NHS BMI calculator, you
          will need to know your height and weight in either metric or imperial
          units. If you're unsure about your weight, you can use a bathroom
          scale to measure it accurately. For your height, stand against a wall
          and use a measuring tape to determine your height in either
          centimeters or feet and inches. Step 2: Access the NHS BMI calculator
          Once you have your height and weight measurements, visit the official
          NHS website and search for the BMI calculator. The calculator is
          usually easily accessible from the homepage or the health and
          well-being section. Step 3: Input your measurements Enter your height
          and weight into the appropriate fields on the BMI calculator. Make
          sure to select the correct unit of measurement for each category.
          Double-check your entries to ensure accuracy. Step 4: Calculate your
          BMI Click on the "Calculate" button to generate your BMI score. The
          calculator will instantly display your BMI and categorize it into
          underweight, normal weight, overweight, or obese. Step 5: Interpret
          your BMI result Once you receive your BMI score, it's important to
          understand what it means. Let's take a closer look at the different
          BMI categories and their implications for your health.
        </p>
        <h2 className="text-2xl font-semibold">
          Setting health goals based on your BMI
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Now that you have calculated your BMI and understood its implications,
          it's time to set achievable health goals based on your current weight
          status. The NHS BMI Calculator & Guide offers personalized
          recommendations to help you achieve and maintain a healthy weight.
          Here are some tips to get you started: 1. Consult with a healthcare
          professional If your BMI falls outside the normal weight range, it's
          advisable to consult with a healthcare professional. They can assess
          your overall health, identify any underlying medical conditions, and
          provide personalized guidance on weight management. 2. Set realistic
          goals When setting health goals, it's essential to be realistic and
          avoid drastic measures. Aim for gradual, sustainable weight loss or
          weight maintenance if you're already within the normal weight range.
          Small changes, such as incorporating more fruits and vegetables into
          your diet or increasing your daily physical activity, can make a
          significant impact over time. 3. Focus on overall well-being Remember
          that achieving a healthy weight is not just about the numbers on the
          scale. It's crucial to prioritize overall well-being, including mental
          health, emotional well-being, and body confidence. Cultivate a
          positive relationship with your body and celebrate non-scale
          victories, such as increased energy levels, improved fitness, and
          enhanced self-esteem.
        </p>
        <h2 className="text-2xl font-semibold">
          Creating a personalized health plan
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          To achieve your health goals, it's important to create a personalized
          health plan that encompasses various aspects of your lifestyle. Here
          are some key factors to consider when developing your plan: 1. Healthy
          eating A balanced and nutritious diet plays a significant role in
          achieving and maintaining a healthy weight. Focus on consuming a
          variety of fruits, vegetables, whole grains, lean proteins, and
          healthy fats. Limit the intake of processed foods, sugary beverages,
          and high-calorie snacks. Consider consulting a registered dietitian
          for personalized dietary recommendations based on your BMI and health
          goals. 2. Regular physical activity Engaging in regular physical
          activity is essential for weight management and overall health. Aim
          for at least 150 minutes of moderate-intensity aerobic activity or 75
          minutes of vigorous-intensity aerobic activity per week, along with
          strength training exercises at least twice a week. Find activities
          that you enjoy to make exercise a sustainable part of your routine. 3.
          Behavioral changes Changing unhealthy habits and adopting new,
          healthier behaviors is key to long-term success. Identify triggers
          that contribute to unhealthy eating or sedentary behaviors and develop
          strategies to overcome them. Seek support from friends, family, or
          support groups to stay motivated and accountable. 4. Sleep and stress
          management Adequate sleep and effective stress management are often
          overlooked but essential components of a healthy lifestyle. Aim for
          7-9 hours of quality sleep each night and find stress-reducing
          activities such as meditation, yoga, or hobbies that promote
          relaxation.
        </p>
        <h2 className="text-2xl font-semibold">
          Tracking your progress with the NHS BMI calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Tracking your progress is essential to stay motivated and assess the
          effectiveness of your health plan. The NHS BMI calculator allows you
          to monitor changes in your BMI over time, providing valuable insight
          into your weight management journey. Here's how you can use the
          calculator to track your progress: 1. Regular BMI assessments Schedule
          regular assessments using the NHS BMI calculator to monitor changes in
          your BMI. Aim for assessments every 4-6 weeks to allow enough time for
          noticeable changes to occur. 2. Celebrate milestones Celebrate
          milestones along the way, regardless of the scale. Recognize and
          celebrate non-scale victories, such as improved fitness levels,
          increased energy, or fitting into clothes more comfortably. These
          achievements are just as important as the numbers on the scale. 3.
          Adjust your plan if necessary If you're not seeing the desired
          progress or experiencing any challenges, don't be afraid to adjust
          your plan. Consult with a healthcare professional or a registered
          dietitian for guidance and support. They can help you make necessary
          modifications to your diet and exercise routine to ensure continued
          progress.
        </p>
        <h2 className="text-2xl font-semibold">
          Common misconceptions about BMI and health
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          While BMI is a useful tool for assessing weight status, there are some
          common misconceptions associated with it. It's important to address
          these misconceptions to understand the limitations of BMI: 1. Muscle
          mass BMI does not account for muscle mass, which weighs more than fat.
          Therefore, individuals with a higher muscle mass may have a higher
          BMI, even if they have a low body fat percentage. It's important to
          consider factors such as body composition when evaluating overall
          health. 2. Ethnicity and body shape BMI may not accurately reflect
          health risks for individuals from certain ethnic backgrounds.
          Different ethnic groups may have different body compositions and
          health risks associated with BMI. Additionally, body shape and fat
          distribution can also impact health risks, regardless of BMI. 3.
          Individual health factors BMI is a general guideline and does not take
          into account individual health factors such as underlying medical
          conditions, family history, or lifestyle habits. It's important to
          consider these factors alongside BMI when assessing overall health.
        </p>
        <h2 className="text-2xl font-semibold">
          Conclusion: Taking control of your health with the NHS BMI calculator
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Achieving and maintaining a healthy weight is crucial for overall
          health and well-being. The NHS BMI Calculator & Guide is a valuable
          resource that can help you assess your weight status, set achievable
          goals, and track your progress over time. By using this tool and
          incorporating healthy habits into your lifestyle, you can take control
          of your weight and improve your overall health. Remember to consult
          with healthcare professionals for personalized advice and support.
          Start your journey to better health today by utilizing the NHS BMI
          Calculator & Guide. Your body will thank you.
        </p>
      </div>
    </article>
  );
};

export default page;
