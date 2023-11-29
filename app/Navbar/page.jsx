"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex justify-between items-center p-4">
      <h1 className="text-4xl font-extrabold">Lets Find</h1>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl focus:outline-none"
        >
          &#8801;
        </button>
      </div>

      <ul className={`lg:flex ${showMenu ? 'flex' : 'hidden'} flex-col lg:flex-row gap-4`}>
        <li>
          <Link href="/" className="transition-all duration-500 ease-in-out transform hover:scale-110 text-lg font-bold p-2 rounded">Home</Link>
        </li>

        <li>
          <Link href="/" className="transition-all duration-500 ease-in-out transform hover:scale-110 text-lg font-bold p-2 rounded">Calculators</Link>
        </li>

        <li>
          <Link href="/" className="transition-all duration-500 ease-in-out transform hover:scale-110 text-lg font-bold p-2 rounded">Future View</Link>
        </li>

        {/* <li className="lg:hidden">
          <Link href="/" className="transition-all duration-500 ease-in-out transform hover:scale-110 text-lg font-bold p-2 rounded">Contact us</Link>
        </li>

        <li className="lg:hidden">
          <Link href="/" className="transition-all duration-500 ease-in-out transform hover:scale-110 text-lg font-bold p-2 rounded">Privacy policy</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
