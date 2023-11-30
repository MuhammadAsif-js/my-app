"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex justify-between items-center p-4">
      <h1 className="text-4xl font-extrabold">Lets Find</h1>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          &#8801;
        </button>
      </div>

      <ul
        ref={menuRef}
        className={`lg:flex ${
          showMenu ? "flex" : "hidden"
        } flex-col lg:flex-row gap-4`}
        style={{ listStyle: "none" }}
      >
        <li>
          <Link
            href="/"
            className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block"
          >
            Home
          </Link>
        </li> 

        <li>
          <Link
            href="/Navbar/contactus"
            className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block"
          >
            Contact Us
          </Link>
        </li>

        <li>
          <Link
            href="/Navbar/privacypolicy"
            className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block"
          >
            Privacy Policy
          </Link>
        </li>

        <li>
          <Link
            href="/Navbar/Futureview"
            className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block"
          >
            Future View
          </Link>
        </li>

        <li>
          <Link
            href="/Navbar/aboutus"
            className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block"
          >
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// "use client";
// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex justify-between items-center p-4">
//       <h1 className="text-4xl font-extrabold">Lets Find</h1>

//       <div className="lg:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-3xl focus:outline-none"
//         >
//           &#8801;
//         </button>
//       </div>

//       <ul className={`lg:flex ${showMenu ? 'flex' : 'hidden'} flex-col lg:flex-row gap-4`} style={{ listStyle: 'none' }}>
//   <li>
//     <Link href="/" className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block">Home</Link>
//   </li>

//   {/* <li>
//     <Link href="/" className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block">Calculators</Link>
//   </li> */}

//   <li>
//     <Link href="/Navbar/contactus" className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block">Contact Us</Link>
//   </li>

//   <li>
//     <Link href="/Navbar/privacypolicy" className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block">Privacy Policy</Link>
//   </li>

//   <li>
//     <Link href="/Navbar/Futureview" className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block">Future View</Link>
//   </li>

//   <li>
//     <Link href="/Navbar/aboutus" className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block">About us</Link>
//   </li>
// </ul>

//     </nav>
//   );
// };

// export default Navbar;
