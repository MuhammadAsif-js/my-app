"use client";
import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode.react";

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
      <section className="flex flex-wrap  items-center gap-3 mx-10 cursor-pointer sm:flex justify-center py-7">
        <div className=" shadow-md rounded px-3 pt-4 pb-3 mb-3 flex flex-col my-2 w-[388px] bg-gray-100 sm:w-auto sm:">
          <p className="text-xl font-semibold mb-4 text-center">
            Password Generator
          </p>
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
          <span className="font-normal text-sm py-1">Length : {length}</span>
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
            <label className="flex  items-center">
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
        <div className="shadow-md rounded px-4 pt-4 pb-4 mb-4 flex flex-col my-2 h-80 bg-gray-100 w-[378px]">
          <h1 className=" text-xl font-semibold text-center">QR CODE</h1> <br />
          <div className="bg-white p-4 w-full h-full flex justify-center items-center">
            <QRCode value={password} size={140} />
          </div>
        </div>
      </section>
  );
};

export default Page;
