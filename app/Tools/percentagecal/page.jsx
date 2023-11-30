"use client";
import React, { useState, useEffect } from "react";

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
    <article className="w-full h-auto bg-gray-100 p-4 sm:p-6 md:p-5 lg:p-6 xl:p-10">
      <div className="pt-3 pb-3">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4">
          Ultimate Percentage Increase Calculator: Simplifying Complex Math
          Equations
        </h1>
        <p className="text-base sm:text-lg mb-8 text-justify">
          Are you tired of struggling with complex math equations to calculate
          percentage increase? Look no further! Introducing the Ultimate
          Percentage Increase Calculator, the tool that simplifies even the most
          intricate calculations with ease. Whether you're a student studying
          for exams or a professional needing accurate figures for your
          business, this calculator is your go-to solution. Our brand new
          calculator combines simplicity and efficiency to save you time and
          frustration. With just a few clicks, you can accurately determine the
          percentage increase without having to worry about the math behind it.
        </p>
      </div>
      <section className="flex flex-col sm:flex-row justify-start items-center mx-auto max-w-7xl mt-8 sm:items-center">
      <div className="shadow-md rounded p-4 mb-8 sm:mb-0 sm:mr-8 bg-white w-full sm:w-[400px] md:w-[450px] lg:w-[500px]">
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
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none animate-pulse focus:ring-4 focus:ring-blue-300 m-2"
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded-sm focus:outline-none animate-pulse focus:ring-4 focus:ring-blue-300 m-2 px-2"
                onClick={calcthree}
              >
                Calculate
              </button>
            </span>
          </div>
        </div>
        {/* result */}
        <div className="px-3  md:w-[280px] bg-gray-100 pt-5 pb-5 rounded-sm shadow-md">
          <div className="bg-white p-2 font-semibold m-1 text-xl overflow-x-auto">
            {resultone}
          </div>
          <div className="bg-white p-2 font-semibold m-1 text-xl overflow-x-auto">
            {resulttwo}
          </div>
          <div className="bg-white p-2 font-semibold m-1 text-xl overflow-x-auto">
            {resultthree}
          </div>
        </div>
      </section>
      <h2 className="text-2xl font-semibold px-10 pt-5">
        Empowering Financial Decision-Making
      </h2>
      <p className="py-2 text-justify w-[1100px] font-normal px-10 pt-5">
        In the realm of finance, understanding percentage increase is
        fundamental. Whether evaluating investment growth, analyzing profit
        margins, or computing compound interest, accurate calculations are
        pivotal for informed decision-making. The Ultimate Percentage Increase
        Calculator acts as a financial ally, empowering individuals and
        businesses to make well-informed choices swiftly. By providing instant
        and precise percentage increase results, this calculator assists in
        predicting future outcomes, aiding in budget planning, and fostering a
        deeper comprehension of financial data. It becomes an indispensable tool
        for investors, financial analysts, and individuals navigating the
        complexities of monetary growth.
      </p>
      <h2 className="text-2xl font-semibold  px-10 pt-5">
        Aiding Academic Pursuits
      </h2>
      <p className="py-2 text-justify w-[1100px] font-normal px-10 pt-5">
        Education forms the bedrock of society, and mathematical concepts,
        including percentage increase, are fundamental in academic curricula.
        However, students often encounter difficulties grasping these concepts
        due to their intricacy. The Ultimate Percentage Increase Calculator
        serves as an educational aid, simplifying mathematical calculations and
        nurturing a better understanding of percentages among students. By
        presenting real-time results and step-by-step explanations, it becomes a
        valuable learning companion, fostering confidence and proficiency in
        mathematical skills.
      </p>
      <h2 className="text-2xl font-semibold px-10 pt-5">
        Facilitating Business Operations
      </h2>
      <p className="py-2 text-justify w-[1100px] font-normal px-10 pt-5">
        In the corporate world, analyzing sales growth, market trends, and
        performance metrics involves constant calculation of percentage
        increases. Business professionals juggle multiple responsibilities, and
        the need for swift and accurate computations is paramount. The
        calculator becomes an indispensable asset, facilitating streamlined
        operations by providing quick insights into growth patterns, allowing
        for informed strategic planning, and aiding in the assessment of
        marketing strategies' effectiveness. Its efficiency saves valuable time,
        enabling professionals to focus on devising impactful business
        strategies.
      </p>
      <h2 className="text-2xl font-semibold px-10 pt-5">
        Personal Development and Goal Tracking
      </h2>
      <p className="py-2 text-justify w-[1100px] font-normal px-10 pt-5">
        Beyond professional realms, personal growth and goal tracking often
        involve monitoring progress through percentage increases. Be it fitness
        goals, weight loss targets, or skill development, having a tool that
        simplifies progress evaluation is invaluable. The Ultimate Percentage
        Increase Calculator extends its utility to personal spheres, allowing
        individuals to track their advancements effortlessly. By inputting
        initial and current values, it delivers a clear understanding of
        progress, motivating and guiding individuals on their personal journeys.
      </p>
      <h2 className="text-2xl font-semibold px-10 pt-5">Conclusion</h2>
      <p className="py-2 text-justify w-[1100px] font-normal px-10 pt-5">
        The Ultimate Percentage Increase Calculator stands as a testament to
        innovation in simplifying complex math equations. By transforming
        daunting calculations into effortless processes, it empowers individuals
        in various domains, from academics to finance, from business to personal
        growth. This innovative tool doesn't just calculate percentages; it
        fosters understanding, boosts confidence, and catalyzes efficiency. With
        its human touch and user-centric approach, it redefines the way we
        perceive and engage with mathematical concepts, making percentage
        increase calculations an accessible and empowering experience for all.
      </p>
    </article>
  );
};

export default page;
