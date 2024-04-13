import React from 'react'

const page = () => {
  return (
    <div className="bg-blue-100 rounded-lg p-4 shadow-lg flex flex-col items-center mt-5 mb-5 sm:ml-4 md:ml-0 lg:ml-0 xl:ml-0 h-60">
    <div className="mb-4">
      <input
        type="search"
        className="lg:w-48 sm:w-36 rounded-md px-4 py-2  border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
      <button className="bg-sky-600 text-white font-medium px-4 py-2  rounded-md ml-2 hover:bg-sky-500">
        Search
      </button>
    </div>

    <div className="text-center">
      {/* <h2 className="bg-sky-600 text-white px-4 py-2 text-lg font-semibold rounded-md mb-3">
        Explore More Calculators
      </h2> */}
      <div className="flex flex-wrap justify-center items-center mt-2">
        <button className="bg-sky-700 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-600 text-sm md:text-base lg:text-base mr-2 mb-2">
          BMI Calculator
        </button>
        <button className="bg-sky-700 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-600 text-sm md:text-base lg:text-base mr-2 mb-2">
          Pregnancy Calculator
        </button>
        <button className="bg-sky-700 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-600 text-sm md:text-base lg:text-base mb-2">
          Period Calculator
        </button>
      </div>
    </div>
  </div>

  )
}

export default page
