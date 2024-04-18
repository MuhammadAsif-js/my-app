import React from "react";
import Agelogic from "../../Tools.logic/ChronologicalAge.logic/page";
import Related from "../../Tools.logic/RelatedCalculators/page";

const Page = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <div className="flex-1 lg:px-12 md:px-6 sm:px-3 py-3">
            <h1 className="font-bold text-xl lg:text-xl xl:text-2xl pb-3 text-blue-900">
              Chronological Age Calculator
            </h1>
            <p className="font-medium text-black text-base lg:text-base xl:text-lg pb-2">
              The Chronological Age Calculator instantly computes your age based
              on your birthdate. It's a useful tool for medical assessments,
              eligibility checks, and personal curiosity. Get accurate age
              results in seconds with this efficient calculator.
            </p>
            {/* Moon Sign Calculator Component */}
            <Agelogic />
            {/* Article */}
            <article className="shadow-lg lg:p-3 mt-7">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 text-center">
                Simple Age Calculator
              </h2>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="">
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    Free Age Calculator
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Our Free Age Calculator offers convenience and
                    accessibility, allowing users to calculate ages with ease.
                    What sets our age calculator apart is its simplicity and
                    reliability, making age calculations hassle-free.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    But what makes our age calculator truly exceptional?
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    ### But what makes our age calculator truly exceptional? -
                    **Accuracy:** Our age calculator ensures precise age
                    calculations based on date inputs. - **Versatility:** From
                    calculating individual ages to comparing multiple ages, our
                    calculator adapts to various needs. - **User-Friendly
                    Interface:** Intuitive design and straightforward input
                    fields enhance user experience.
                  </p>

                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    What is chronological age
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Chronological age refers to the actual number of years a
                    person has lived from birth to a specific date. It serves as
                    a fundamental metric in assessing developmental stages,
                    health milestones, and life expectancy.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    How to calculate chronological age
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Calculating chronological age involves subtracting the birth
                    date from the current date. The resulting number represents
                    the individual's chronological age in years.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    Using our chronological age calculator
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Our Chronological Age Calculator simplifies age calculations
                    by automatically subtracting the birth date from the current
                    date, providing accurate chronological age results
                    instantly.
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">
                    A Comprehensive Toolset
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-gray-700 font-semibold">
                    The Age Calculator offers a comprehensive suite of features,
                    including: - **Developmental Milestones:** Explore key
                    developmental stages based on chronological age. <br />
                    - **How old was I on this date?:** Determine age at specific
                    points in time with ease. <br />
                    - **This is your time!:** Discover your life stage and
                    milestones based on chronological age. <br />- **Average
                    life expectancy:** Gain insights into average life
                    expectancy based on demographic factors.
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    Age and Growth
                  </h3>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Understanding developmental milestones is crucial in
                    assessing age-related progress and achievements. Our Age
                    Calculator incorporates developmental milestones to provide
                    a holistic view of age-related milestones and
                    accomplishments.
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    How to calculate chronological age
                  </h3>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Our Chronological Age Calculator simplifies age calculations
                    by automatically subtracting the birth date from the current
                    date, providing accurate chronological age results
                    instantly.
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    How old was I on this date?
                  </h3>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Easily determine your age at specific dates with our Age
                    Calculator's precise date calculations. <br />
                    Explore your life stage, achievements, and milestones based
                    on chronological age, offering insights into personal growth
                    and development.
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    Explore your life stage
                  </h3>
                  <p className="text-base leading-relaxed mb-6 text-gray-700">
                    Gain valuable insights into average life expectancy based on
                    demographic factors, aiding in long-term planning and goal
                    setting. --- The Age Calculator Suite combines accuracy,
                    convenience, and insightful data to empower individuals and
                    professionals in understanding age-related metrics,
                    developmental milestones, and life expectancy
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
    title: "Chronological Age Calculator",
    description:
      "The Chronological Age Calculator instantly computes your age based on your birthdate. It's a useful tool for medical assessments. Get accurate age results.",
    keywords:
      "Chronological Age Calculator, Age Calculator, Calculate Age, Age Calculation, Age, Chronological Age, Age Calculation Tool, Age Calculation Online, Age Calculation Formula, Age Calculation Method, Age Calculation App, Age Calculation Website, Age Calculation Software, Age Calculation Online Tool, Age Calculation Online Free, Age Calculation Online App, ",
  };
}
