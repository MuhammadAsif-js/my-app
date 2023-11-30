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
    <article className="p-6 sm:w-screen md:w-screen w-screen h-screen sm:p-5">
      <div className="px-10 pt-3 pb-3">
        <h1 className="text-2xl font-bold">
          Password Generator Words with Qr code
        </h1>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Welcome to the world of password generation! In our interconnected
          digital age, it has become more important than ever to have strong,
          secure passwords to protect our personal information. But coming up
          with a unique and secure password can be challenging. That's where
          password generator words with QR codes come in. With the help of these
          innovative tools, you can easily create strong passwords that are
          virtually impossible to crack. The QR code adds an extra layer of
          security by allowing you to generate the password directly on your
          device, without the need to transmit it over the internet.
        </p>
      </div>
      <section className="flex flex-wrap  items-center gap-3 mx-10 my-1 cursor-pointer sm:flex justify-center ">
        <div className=" shadow-md rounded px-6 pt-4 pb-6 mb-6 flex flex-col my-2 w-[388px] bg-gray-100 sm:w-auto sm:">
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
          <h1 className=" text-2xl font-bold text-center">QR CODE</h1> <br />
          <div className="bg-white p-4 w-full h-full flex justify-center items-center">
            <QRCode value={password} size={140} />
          </div>
        </div>
      </section> <br />
      <div className="px-10 py-4">
        <h2 className="text-2xl font-semibold">
          Importance of strong passwords
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          In today's digital landscape, where cyber threats are constantly
          evolving, having strong passwords is crucial. Weak passwords can be
          easily cracked by hackers, leaving your personal information and
          online accounts vulnerable to unauthorized access. Strong passwords,
          on the other hand, provide a formidable barrier against such attacks.
          Strong passwords are typically long, complex, and unique. They are a
          combination of uppercase and lowercase letters, numbers, and special
          characters. Creating such passwords manually can be a daunting task,
          especially when you have multiple online accounts to manage. This is
          where password generators come in handy.
        </p>
        <h2 className="text-2xl font-semibold">How password generators work</h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Password generators are software tools that automatically generate
          random, strong passwords for you. These tools use complex algorithms
          to create passwords that are highly secure and difficult to guess. By
          taking the burden of password creation off your shoulders, password
          generators ensure that you have strong passwords for all your online
          accounts. The algorithms used by password generators take into account
          various factors such as password length, character types, and
          randomness. They generate passwords that are statistically unlikely to
          be replicated or guessed by hackers. This significantly enhances the
          security of your online presence.
        </p>
        <h2 className="text-2xl font-semibold">
          Advantages of using password generators
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Using password generators offers several advantages over manually
          creating passwords. Firstly, password generators save you time and
          effort. Instead of racking your brain to come up with unique passwords
          for each account, you can simply generate them with a few clicks. This
          allows you to create strong passwords quickly and efficiently.
          Secondly, password generators eliminate the human bias in password
          creation. Many people tend to use easily guessable passwords such as
          their birthdates, pet names, or simple sequential patterns. These
          types of passwords are highly vulnerable to brute-force attacks.
          Password generators, on the other hand, create completely random
          passwords that are not influenced by personal biases. Lastly, password
          generators ensure that you have unique passwords for each of your
          online accounts. Reusing passwords across multiple accounts is a
          common but dangerous practice. If one account gets compromised, all
          your other accounts become vulnerable. Password generators generate
          unique passwords for each account, minimizing the risk of unauthorized
          access.
        </p>
        <h2 className="text-2xl font-semibold">
          QR codes and their role in password generation
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          QR codes, short for Quick Response codes, are two-dimensional barcodes
          that can be scanned using a smartphone or a QR code reader. They are
          widely used for various purposes, including marketing, ticketing, and
          inventory management. In the context of password generation, QR codes
          offer a convenient and secure method to generate and store passwords.
          By incorporating QR codes into password generators, users can generate
          passwords directly on their devices without the need to transmit them
          over the internet. This adds an extra layer of security, as the
          passwords are not exposed to potential interception during the
          transmission process. QR codes also eliminate the need to remember or
          write down the passwords, as they can be easily scanned whenever
          required.
        </p>
        <h2 className="text-2xl font-semibold">
          How to generate passwords with QR codes
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          Generating passwords with QR codes is a simple and straightforward
          process. First, you need to find a reliable password generator tool
          that supports QR code functionality. Many password manager
          applications or online services offer this feature. Once you have the
          password generator tool, you can customize the password settings
          according to your preferences. This may include selecting the desired
          password length, character types, and any other specific requirements.
          Once you are satisfied with the settings, you can generate the
          password. The password generator will then display the generated
          password as a QR code. You can scan this QR code using your
          smartphone's camera or a QR code reader app. The password will be
          decrypted and displayed on your device, ready for use. You can then
          copy and paste the password into the desired website or application
          without the need to manually enter it.
        </p>
        <h2 className="text-2xl font-semibold">
          Best practices for using password generator words with QR codes
        </h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          While password generator words with QR codes offer enhanced security
          and convenience, it's important to follow some best practices to
          maximize their effectiveness. Firstly, make sure you choose a reliable
          and reputable password generator tool. This ensures that the generated
          passwords are truly random and secure. Secondly, always store the
          generated passwords securely. Consider using a password manager
          application or an encrypted database to store your passwords. This
          adds an extra layer of protection and ensures that your passwords are
          easily accessible only to you. It's also crucial to regularly update
          your passwords. As technology advances, so do hacking techniques. By
          changing your passwords periodically, you minimize the risk of
          unauthorized access. Additionally, avoid reusing passwords across
          multiple accounts, as this increases the vulnerability of all your
          accounts in case of a breach. Lastly, be cautious when generating and
          using passwords on public or shared devices. Make sure to clear the
          cache and browsing history after using password generator tools, and
          always log out from your accounts when finished. This prevents anyone
          else from accessing your passwords or personal information.
        </p>
        <h2 className="text-2xl font-semibold">Conclusion:</h2>
        <p className="py-2 text-justify w-[1100px] font-normal">
          In conclusion, password generator words with QR codes are powerful
          tools that help you create strong and secure passwords in an efficient
          and convenient manner. With the ever-increasing threat of cyber
          attacks, it's crucial to have strong passwords for all your online
          accounts. Password generators automate the process of password
          creation, saving you time and effort while ensuring the highest level
          of security. By incorporating QR codes into password generation, you
          can further enhance the security of the process. QR codes allow you to
          generate and store passwords directly on your device, eliminating the
          need to transmit them over the internet. This not only provides an
          additional layer of protection but also offers a user-friendly and
          seamless experience. Remember to follow best practices such as using
          reliable password generator tools, storing passwords securely, and
          regularly updating them. By adopting these practices, you can ensure
          that your online presence remains highly secure and protected from
          unauthorized access. So, embrace the power of password generator words
          with QR codes and take control of your online security today!
        </p>
      </div>
    </article>
  );
};

export default Page;
