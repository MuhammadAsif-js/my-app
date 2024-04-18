import React from "react";
import Coastlogic from "../../Tools.logic/Coast.logic/page";
import Related from "../../Tools.logic/RelatedCalculators/page";

const Page = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <div className="flex-1 lg:px-12 md:px-6 sm:px-3 py-3">
            <h1 className="font-bold text-xl lg:text-xl xl:text-2xl pb-3 text-blue-900">
              Coast Fire Calculator
            </h1>
            <p className="font-medium text-base lg:text-base xl:text-lg pb-2 text-black">
              Are you dreaming of early retirement but want to take it slow?
              Coast FIRE might be the strategy for you. This calculator helps
              you map out your Coast FIRE journey, making your financial dreams
              more attainable.
            </p>
            {/* Moon Sign Calculator Component */}
            <Coastlogic />
            {/* Article */}
            <article className="shadow-lg lg:p-3 mt-7">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                Understanding Coast FIRE
              </h2>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="">
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Coast FIRE stands for "Coasting Financial Independence,
                    Retire Early." Unlike traditional FIRE (Financial
                    Independence, Retire Early), where you aim to accumulate
                    enough savings to retire early completely, Coast FIRE takes
                    a different approach. It involves reaching a point where
                    your investments can grow to cover your retirement expenses
                    without further contributions.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    How Does FIRE Work?*
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Before delving into Coast FIRE, let's grasp the basics of
                    the broader FIRE movement. FIRE involves aggressive saving
                    and investing early in life to achieve financial
                    independence and retire early. The typical FIRE strategy
                    involves saving a significant portion of your income, often
                    50% or more, and investing it in assets like stocks, real
                    estate, or businesses that generate passive income.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    Coast FIRE Goal vs. Full Retirement Goal
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    The Coast FIRE goal is to reach a stage where your
                    investments can grow to cover your retirement expenses
                    without additional contributions. This means you can "coast"
                    towards retirement without saving more, though you can
                    continue to work or save at a reduced rate. In contrast, the
                    Full Retirement Goal in traditional FIRE is to accumulate
                    enough savings to retire early completely, usually in your
                    30s or 40s, and rely solely on your investments for income.
                  </p>

                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    About the Coast FIRE Calculator
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    This Coast FIRE Calculator is designed to assist you in
                    planning and tracking your Coast FIRE progress. By inputting
                    your current situation and retirement expectations, you can
                    visualize how close you are to reaching Coast FIRE and
                    adjust your strategies accordingly.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    Using the Coast FIRE Calculator
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    **Step 1: Input Your Current Situation** <br />
                    a. **Current Age in Years** <br />
                    Enter your current age to gauge where you are on your Coast
                    FIRE journey. The younger you start, the more time your
                    investments have to grow. <br />
                    b. **Current Net Worth** <br />
                    Input your current net worth, including assets like savings,
                    investments, and property minus any debts or liabilities.
                    This helps determine your starting point towards Coast FIRE.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    Your Retirement Expectation
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Specify the age at which you aim to achieve Coast FIRE and
                    the amount of income you'll need annually during retirement.
                    This could include expenses like housing, food, healthcare,
                    and leisure activities. <br />
                    **Setting Investment Parameters** <br />
                    **Investment Growth Rate** <br />
                    Estimate the average annual growth rate of your investments.
                    This rate accounts for the potential increase in the value
                    of your investments over time.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    Inflation Rate
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700 font-semibold">
                    Consider the average annual inflation rate, which affects
                    the purchasing power of your money. Factoring in inflation
                    helps you plan for future expenses accurately.
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    Tracking Your FIRE
                  </h3>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Don't let time slip away! Start tracking your Coast FIRE
                    progress now with Portseido. Our platform provides tools and
                    insights to monitor your investments, adjust your strategy,
                    and stay on course towards financial independence.
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    Conclusion
                  </h3>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Coast FIRE offers a more relaxed approach to early
                    retirement, allowing you to enjoy life while still working
                    towards financial independence.
                  </p>
                </div>
              </div>
            </article>
          </div>
          {/* Relevant calculators side */}
          <div className="w-full md:w-1/3 lg:px-12 md:px-6 sm:px-3 py-3">
            <Related />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

export function generateMetadata({ params }) {
  return {
    title: "Coast Fire Calculator",
    description:
      "Are you dreaming of early retirement but want to take it slow? Coast FIRE might be the strategy for you.",
    keywords:
      "Coast Fire Calculator, Coast Fire, Coast Fire Calculator, Coast Fire Calculator Portseido, Coast Fire Portseido, Coast Fire Calculator tool, Coast Fire tool, Coast Fire Portseido tool.",
  };
}
