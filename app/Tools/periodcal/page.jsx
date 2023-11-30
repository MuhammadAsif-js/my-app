"use client";
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page

// "use client";
// import React, { useState, useEffect } from "react";

// const Page = () => {
//   const dates = [
//     "day 1",
//     "day 2",
//     "day 3",
//     "day 4",
//     "day 5",
//     "day 6",
//     "day 7",
//     "day 8",
//     "day 9",
//     "day 10",
//   ];

//   const date2 = [
//     "day 1",
//     "day 2",
//     "day 3",
//     "day 4",
//     "day 5",
//     "day 6",
//     "day 7",
//     "day 8",
//     "day 9",
//     "day 10",
//     "day 11",
//     "day 12",
//     "day 13",
//     "day 14",
//     "day 15",
//     "day 16",
//     "day 17",
//     "day 18",
//     "day 19",
//     "day 20",
//     "day 21",
//     "day 22",
//     "day 23",
//     "day 24",
//     "day 25",
//     "day 26",
//     "day 27",
//     "day 28",
//     "day 29",
//     "day 30",
//     "day 31",
//   ];

//   const [date, setDate] = useState("2023-11-01");
//   const [lastPeriod, setLastPeriod] = useState("day 6");
//   const [cycle, setCycle] = useState("day 7");
//   const [nextPeriodDate, setNextPeriodDate] = useState("");
//   const [nextPeriodEndDate, setNextPeriodEndDate] = useState("");
//   const [remainingDays, setRemainingDays] = useState("");

//   // useEffect(() => {
//   //   if (date && lastPeriod && cycle) {
//   //     const lastPeriodIndex = dates.indexOf(lastPeriod);
//   //     const cycleIndex = date2.indexOf(cycle);

//   //     if (lastPeriodIndex === -1 || cycleIndex === -1) {
//   //       console.error("Selected value not found in the array.");
//   //       return;
//   //     }

//   //     let daysToAdd = cycleIndex - lastPeriodIndex;
//   //     if (daysToAdd < 0) {
//   //       daysToAdd += date2.length;
//   //     }

//   //     const nextStartDate = new Date(date);
//   //     nextStartDate.setDate(nextStartDate.getDate() + daysToAdd);

//   //     // Format date in a human-readable form (e.g., "11 December 2023")
//   //     const options = { day: "numeric", month: "long", year: "numeric" };
//   //     const formattedNextStartDate = nextStartDate.toLocaleDateString(
//   //       undefined,
//   //       options
//   //     );

//   //     const cycleLength = date2.length;
//   //     const nextEndDate = new Date(nextStartDate);
//   //     nextEndDate.setDate(nextEndDate.getDate() + cycleLength);
//   //     const formattedNextEndDate = nextEndDate.toLocaleDateString(
//   //       undefined,
//   //       options
//   //     );

//   //     const today = new Date();
//   //     const remainingDays = Math.ceil(
//   //       (nextStartDate - today) / (1000 * 60 * 60 * 24)
//   //     );

//   //     setNextPeriodDate(formattedNextStartDate);
//   //     setNextPeriodEndDate(formattedNextEndDate);
//   //     setRemainingDays(remainingDays);
//   //   }
//   // }, [date, lastPeriod, cycle, dates, date2]);

//   useEffect(() => {
//     const lastPeriodStartDate = new Date('2023-11-01'); // Replace with the actual last period start date
//     const averageCycleLength = 28; // Replace with the actual average cycle length in days
    
//     // Calculate the estimated next period start date
//     const nextPeriodStartDate = new Date(lastPeriodStartDate);
//     nextPeriodStartDate.setDate(lastPeriodStartDate.getDate() + averageCycleLength);
    
//     // Calculate remaining days until the next period
//     const currentDate = new Date(); // Current date
//     const remainingDays = Math.ceil((nextPeriodStartDate - currentDate) / (1000 * 60 * 60 * 24));
    
//     // Calculate days between two periods (if you have two dates)
//     const olderPeriodStartDate = new Date('2023-10-01'); // Replace with the older period start date
//     const daysBetweenPeriods = Math.ceil((nextPeriodStartDate - olderPeriodStartDate) / (1000 * 60 * 60 * 24));
    
//     console.log('Next Period Start Date:', nextPeriodStartDate.toLocaleDateString());
//     console.log('Remaining Days Until Next Period:', remainingDays);
//     console.log('Days Between Two Periods:', daysBetweenPeriods);
//   }, [date, lastPeriod, cycle, dates, date2]);
  

//   return (
//     <div className="bg-white text-gray-800 h-80 flex justify-center gap-3 mt-10 w-screen sm:flex flex-wrap">
//       <div className="p-4 w-96 h-[315px] bg-gray-100 rounded-lg shadow-md">
//         <label htmlFor="" className="text-gray-800 block mb-2 font-semibold">
//           First Day of your Last period:
//         </label>
//         <input
//           type="date"
//           defaultValue={date}
//           className="border rounded p-2 mb-4 w-full"
//           onChange={(e) => setDate(e.target.value)}
//         />

//         <label htmlFor="" className="text-gray-800 block mb-2 font-semibold">
//           How long did it last?
//         </label>
//         <select
//           onChange={(e) => setLastPeriod(e.target.value)}
//           name=""
//           defaultValue={lastPeriod}
//           id=""
//           className="border rounded p-2 mb-4 w-full"
//         >
//           {dates.map((date, index) => (
//             <option key={index} value={date}>
//               {date}
//             </option>
//           ))}
//         </select>

//         <label htmlFor="" className="text-gray-800 block mb-2 font-semibold">
//           Average length of cycles:
//         </label>
//         <select
//           onChange={(e) => setCycle(e.target.value)}
//           name=""
//           id=""
//           defaultValue={cycle}
//           className="border rounded p-2 mb-4 w-full"
//         >
//           {date2.map((date, index) => (
//             <option key={index} value={date}>
//               {date}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="p-4 w-96 h-[315px] bg-gray-100 rounded-lg shadow-md text-center">
//         <h1 className="text-2xl font-bold mb-4">Result :</h1>
//         <div className="border p-3 rounded bg-white font-semibold text-xl m-2">
//           {nextPeriodDate && <p>Your Next Period Start: {nextPeriodDate}</p>}
//         </div>
//         <div className="border p-3 rounded bg-white font-semibold text-xl m-2">
//           {nextPeriodEndDate && (
//             <p>Your Next Period End Date: {nextPeriodEndDate}</p>
//           )}
//         </div>
//         <div className="border p-3 rounded bg-white font-semibold text-xl m-2">
//           {remainingDays !== "" && <p>Days Remaining: {remainingDays}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
