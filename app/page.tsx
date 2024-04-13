"use client";
import { Metadata } from "next";
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
import lovecal from "../app/Navbar/aboutus/page";

// export const metadata = {
//   title: "our calculators Home",
//   description:
//     "Our calculators provide wide range of calculators to perform your day to day tasks effeciently",
// };

export default function Home() {
  return (
    //Add filters for different calculators
    <main className="flex justify-center items-center flex-wrap bg-gray-100 py-2 min-h-screen">
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Know your BMI and get a detailed analysis of your health.
        </p>
        <Link
          href="./Tools/bmical"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Calculate your Moon Sign and get a detailed analysis of your health.
        </p>
        <Link
          href="./Tools/MoonSignCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
      </div>
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Quadratic Equation Calculator, Solve your every question
        </p>
        <Link
          href="./Tools/QuadraticFormulaCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Free Online Rounding Calculator for Users
        </p>
        <Link
          href="./Tools/RoundingCalculatorOnline"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div> */}
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Love Calculator, Calculate your love with your partner
        </p>
        <Link
          href="./Tools/LoveCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div> */}
      {/* Separate */}
      {/* <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Time Card Calculator, Calculate your time card
        </p>
        <Link
          href="./Tools/WorkHoursCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Average Calculator, Calculate your average
        </p>
        <Link
          href="./Tools/AverageCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Chronological Age Calculator, Calculate your age
        </p>
        <Link
          href="./Tools/ChronologicalAgeCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Mean,Mode and Median Calculator, Calculate
        </p>
        <Link
          href="./Tools/Mean,Median,ModeCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Z-Score Calculator, Calculate your Z-Score
        </p>
        <Link
          href="./Tools/Z_ScoreCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Annual Yield Calculator, Calculate your annual yield
        </p>
        <Link
          href="./Tools/AnnualPercentageYieldCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Triangle Calculator
        </p>
        <Link
          href="./Tools/TriangleCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Matrix Inverse Calculator
        </p>
        <Link
          href="./Tools/MatrixInverseCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Coast Fire Calculator
        </p>
        <Link
          href="./Tools/CoatFireCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Molarity Calculator
        </p>
        <Link
          href="./Tools/MolarityCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Height Calculator
        </p>
        <Link
          href="./Tools/HeightCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Numerology Calculator
        </p>
        <Link
          href="./Tools/NumerologyCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Bullet Energy Calculator
        </p>
        <Link
          href="./Tools/BulletEnergyCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-blue-200 hover:scale-105">
        <Image
          src={bmicalculator}
          alt="Picture of the author"
          className="rounded-full border-2 border-blue-500 hover:border-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
          width={80}
          height={80}
        />
        <p className="text-gray-800 font-semibold text-md mt-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          Exponent Calculator
        </p>
        <Link
          href="./Tools/ExponentCalculator"
          className="mt-4 bg-sky-500 text-white font-bold px-4 py-2 hover:bg-sky-700 scale-110 transition-colors duration-200 ease-in-out rounded-sm animate-pulse hover:shadow-lg hover:scale-105"
        >
          Calculate
        </Link>
      </div>
     */}
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
          Calculate simple interest with ease.
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
      <div className="lg:w-1/4 md:w-1/2 sm:w-full max-w-xs m-4 p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg animate-scale transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center cursor-pointer  hover:bg-purple-200 hover:scale-105">
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
      </div>
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
    
    </main>
  );
}
