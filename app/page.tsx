"use client";
import Link from "next/link";
import Image from "next/image";
import idealweight from "../Image/weightmeasure.jpg";
import bmicalculator from "../Image/bmical.jpg";
import clockimage from "../Image/clock.jpg";
import passwordimage from "../Image/password.png";
import percentage from "../Image/Percentage.png";
import scientificCal from "../Image/scientificcalculator.jpg";
import weightloss from "../Image/weightmeasure.jpg";
import caloriecounter from "../Image/calorie_cals.jpg";
import interestcal from "../Image/intrest_cal.jpg";
import salarycal from "../Image/salary.png";
import periodcal from "../Image/periods.jpg";
import speedtest from "../Image/wifi.jpg";
import fuelcalculator from "../Image/fuel_cal.jpg";
import puppyweightcal from "../Image/puppy_cal.jpg";

export default function Home() {
  return (
    //Add filters for different calculators
    <main className="flex justify-center items-center flex-wrap bg-blue-100 py-2
     h-auto">
      <h1>vercel production is working</h1>
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={idealweight}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Find your ideal weight based on your height and weight.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/Idealweight">Calculate</Link>
        </button>
      </div> */}
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Know your BMI and get a detailed analysis of your health.
        </p>
        <Link
          href="./Tools/bmical"
          className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
        {/* <button >
          <Link href="">Calculate</Link>
        </button> */}
      </div>
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={clockimage}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Calculate your precious time and make the most of it.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/Timecal">Calculate</Link>
        </button>
      </div> */}
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={passwordimage}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Generate a strong password and keep your account safe.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/passwordcal">Generate</Link>
        </button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={percentage}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Percentages will make your life easier, so do it.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/percentagecal">Calculate</Link>
        </button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={scientificCal}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          General sales tax is calculated with ease.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/gstcalculator">Calculate</Link>
        </button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={caloriecounter}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Calculate your daily calorie intake and stay fit.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/calcounter">Calculate</Link>
        </button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={interestcal}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Calculate simple and compound interest.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/Interestcal">Calculate</Link>
        </button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={interestcal}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Calculate Compound Interest with ease.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/cominterest">Calculate</Link>
        </button>
      </div>
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={salarycal}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Calculate your all type of salary with ease.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/Salarycal">Calculate</Link>
        </button>
      </div> */}
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={periodcal}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Girls can calculate period cycle and ovulation period.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/periodcal">Calculate</Link>
        </button>
      </div> */}
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={speedtest}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Check your Internet speed with our speed test.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/speedtest">Check</Link>
        </button>
      </div> */}
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={fuelcalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          All type of fuel calculator in one place.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/fuelcal">Calculate</Link>
        </button>
      </div>
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
        <Image
          src={puppyweightcal}
          alt="Picture of the author"
          className="rounded-full border-2 border-pink-500 hover:border-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Calculate your puppy weight with ease.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-bold px-4 py-2 hover:bg-pink-700 scale-110 transition-colors duration-200 ease-in-out rounded animate-pulse hover:shadow-lg hover:scale-105">
          <Link href="./Tools/puppyweightcal">Calculate</Link>
        </button>
      </div> */}
    </main>
  );
}
