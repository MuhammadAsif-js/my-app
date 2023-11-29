// "use client";
// import React from "react";
// import { useState, useEffect, useRef } from "react";

// const page = () => {
//   const [password, setPassword] = useState("");
//   const [length, setLength] = useState(6);
//   const [includeLowercase, setIncludeLowercase] = useState(false);
//   const [includeUppercase, setIncludeUppercase] = useState(false);
//   const [includeNumbers, setIncludeNumbers] = useState(false);
//   const [includeSymbols, setIncludeSymbols] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState("");
//   const [passwordStrengthColor, setPasswordStrengthColor] = useState("");

//   const passwordRef = useRef(null);

//   const copyfun = () => {
//     passwordRef.current.select();
//     document.execCommand("copy");
//   };

//   useEffect(() => {
//     let lowercase = "abcdefghijklmnopqrstuvwxyz";
//     let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let numbers = "1234567890";
//     let symbols = "!@#$%^&*()_+";

//     let character = "";
//     if (includeLowercase) character += lowercase;
//     if (includeUppercase) character += uppercase;
//     if (includeNumbers) character += numbers;
//     if (includeSymbols) character += symbols;

//     let passwords = "";

//     for (let i = 0; i < length; i++) {
//       passwords += character.charAt(
//         Math.floor(Math.random() * character.length)
//       );
//     }
//     setPassword(passwords);
//   }, [
//     includeLowercase,
//     includeUppercase,
//     includeNumbers,
//     includeSymbols,
//     length,
//   ]);

//   return (
//     <div className="bg-white text-gray-800 h-80 flex justify-center gap-3 mt-10 w-screen sm:flex flex-wrap">
//       <div className="p-4 w-96 h-[340px] bg-gray-100 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           Password Generator
//         </h1>
//         <div className="flex items-center mb-6 space-x-4">
//           <input
//             type="number"
//             className="border text-xl p-2 font-semibold rounded w-60 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={password}
//             ref={passwordRef}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             readOnly
//           />
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//             onClick={copyfun}
//           >
//             Copy
//           </button>
//         </div>
//         <input
//           type="range"
//           min={6}
//           max={30}
//           className="border rounded w-60"
//           defaultValue={6}
//           onChange={(e) => setLength(e.target.value)}
//         />{" "}
//         <span className=" font-normal text-sm px-2">Length : {length}</span>
//         <div className="flex flex-col gap-2 mb-6">
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={includeLowercase}
//               onChange={(e) => setIncludeLowercase(e.target.checked)}
//               className="mr-2 border rounded focus:ring-blue-500"
//             />
//             <span className="text-lg font-semibold">Include Lowercase</span>
//           </label>
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={includeUppercase}
//               onChange={(e) => setIncludeUppercase(e.target.checked)}
//               className="mr-2 border rounded focus:ring-blue-500"
//             />
//             <span className="text-lg font-semibold">Include Uppercase</span>
//           </label>
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={includeNumbers}
//               onChange={(e) => setIncludeNumbers(e.target.checked)}
//               className="mr-2 border rounded focus:ring-blue-500"
//             />
//             <span className="text-lg font-semibold">Include Numbers</span>
//           </label>
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={includeSymbols}
//               onChange={(e) => setIncludeSymbols(e.target.checked)}
//               className="mr-2 border rounded focus:ring-blue-500"
//             />
//             <span className="text-lg font-semibold">Include Symbols</span>
//           </label>
//         </div>
//       </div>
//       <div className="p-4 w-96 h-[340px] bg-gray-100 rounded-lg shadow-md flex justify-center">
//         <h1 className=" text-2xl font-bold">Qr code</h1>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useState, useEffect, useRef } from "react";

const Page = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordStrengthColor, setPasswordStrengthColor] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = () => {
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let symbols = "!@#$%^&*()_+";

    let characters = "";
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );

      if (generatedPassword.length < 6) {
        setPasswordStrength("Weak");
        setPasswordStrengthColor("red");
      } else if (generatedPassword.length < 9) {
        setPasswordStrength("Medium");
        setPasswordStrengthColor("yellow");
      } else if (generatedPassword.length < 12) {
        setPasswordStrength("Strong");
        setPasswordStrengthColor("green");
      }
    }

    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    passwordRef.current.select();
    document.execCommand("copy");
  };

  useEffect(() => {
    generatePassword();
  }, [
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
    length,
  ]);

  return (
    <div className="bg-white text-gray-800 h-80 flex justify-center gap-3 mt-10 w-screen sm:flex flex-wrap">
      <div className="p-4 w-96 h-[340px] bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Password Generator
        </h1>
        <div className="flex items-center mb-6 space-x-4">
          <input
            type="text"
            className="border text-xl p-2 font-semibold rounded w-60 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <input
          type="range"
          min={6}
          max={30}
          className="border rounded w-60"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <span className="font-normal text-sm px-2">Length : {length}</span>
        {/* Checkboxes for character inclusion */}
        <div className="flex flex-col gap-2 mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="mr-2 border rounded focus:ring-blue-500"
            />
            <span className="text-lg font-semibold">Include Lowercase</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2 border rounded focus:ring-blue-500"
            />
            <span className="text-lg font-semibold">Include Uppercase</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2 border rounded focus:ring-blue-500"
            />
            <span className="text-lg font-semibold">Include Numbers</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2 border rounded focus:ring-blue-500"
            />
            <span className="text-lg font-semibold">Include Symbols</span>
          </label>
        </div>
      </div>
      <div className="p-4 w-96 h-[340px] bg-gray-100 rounded-lg shadow-md flex justify-center">
          <h1 className=" text-2xl font-bold">Qr code</h1> <br />
          {/* <h3>{passwordStrength}</h3> */}
        {/* <QRCode value={password} /> */}
      </div>
    </div>
  );
};

export default Page;
