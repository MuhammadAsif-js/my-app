"use client";
import navfont from "../Tools.logic/Style/fonts.css";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

import Head from "next/head";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav
        style={{
          minWidth: "100%",
          // fontFamily: "Roboto, sans-serif",
        }}
        className="h-16 bg-blue-900 flex justify-between lg:px-11 sm:px-6 items-center text-white shadow-black"
      >
        <div className="lg:text-2xl md:text-2xl font-semibold sm:text-xl navvbar">
          <Link href="/">
            <span className="text-white cursor-pointer">Calculators.com</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
              <Link href="/Navbar/Futureview">
                <span className="text-white cursor-pointer">Future view</span>
              </Link>
            </li>
            <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
              <Link href="/Navbar/aboutus">
                <span className="text-white cursor-pointer">About Us</span>
              </Link>
            </li>
            <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
              <Link href="/Navbar/contactus">
                <span className="text-white cursor-pointer">Contact Us</span>
              </Link>
            </li>
            <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
              <Link href="/Navbar/aboutus">
                <span className="text-white cursor-pointer">About Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      {menuOpen && (
        // Show menu on smaller screens
        <div className="md:hidden bg-blue-900 text-white px-4 py-2">
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
              <Link href="/Navbar/Futureview">
                <span className="text-white cursor-pointer">Future View</span>
              </Link>
            </li>
            <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
              <Link href="/Navbar/aboutus">
                <span className="text-white cursor-pointer">About us</span>
              </Link>
            </li>
            <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
              <Link href="/Navbar/contactus">
                <span className="text-white cursor-pointer">Contact Us</span>
              </Link>
            </li>
            <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
              <Link href="/Navbar/privacypolicy">
                <span className="text-white cursor-pointer">Privacy policy</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;




// "use client";
// import navfont from "../Tools.logic/Style/fonts.css";
// import React, { useState } from "react";

// import Head from "next/head";

// function Navbar({ Component, pageProps }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <nav
//         style={{
//           minWidth: "100%",
//           // fontFamily: "Roboto, sans-serif",
//         }}
//         className="h-16 bg-blue-900 flex justify-between lg:px-11 sm:px-6 items-center text-white shadow-black"
//       >
//         <div className="lg:text-2xl md:text-2xl font-semibold sm:text-xl navvbar">Calculators.com</div>
//         <div className="hidden md:block">
//           <ul className="flex gap-4">
//             <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
//               Financial
//             </li>
//             <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
//               Fitness
//             </li>
//             <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
//               Math
//             </li>
//             <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
//               Other
//             </li>
//           </ul>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             {menuOpen ? "Close" : "Menu"}
//           </button>
//         </div>
//       </nav>
//       {menuOpen && (
//         // Show menu on smaller screens
//         <div className="md:hidden bg-blue-900 text-white px-4 py-2">
//           <ul className="flex flex-col gap-2">
//             <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
//               Financial
//             </li>
//             <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
//               Fitness
//             </li>
//             <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
//               Math
//             </li>
//             <li className="hover:text-blue-300 transition duration-300 text-lg font-medium cursor-pointer">
//               Other
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;


// "use client";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import SearchIcon from "@mui/icons-material/Search";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import {
//   FacebookOutlined,
//   FacebookSharp,
//   LinkedIn,
//   Twitter,
// } from "@mui/icons-material";
// import { useEffect, useRef, useState } from "react";

// const Navbar = () => {
//   const [scrollY, setScrollY] = useState("");
//   let navbarClasses = ["w-[100%]", "z-[99999]", "p-3"];

//   const menuSheet = useRef();
//   const closeMenu = useRef();
//   const siteTitle = useRef();
//   const siteName = useRef();

//   const menuBtnHandler = () => {
//     // menuSheet.current.style.transform = `translateX(50%)`;
//     closeMenu.current.classList.add("static");
//     closeMenu.current.classList.remove("hidden");
//     menuSheet.current.classList.add("translate-x-[300px]");
//     menuSheet.current.classList.remove("translate-x-[-300px]");
//     siteTitle.current.classList.remove("text-white");
//     siteTitle.current.classList.add("text-black");
//     siteName.current.classList.add("text-black");
//     siteName.current.classList.remove("text-white");

//     // menuSheet.current.classList.add('left-0')
//   };
//   const hideMenuHandler = () => {
//     closeMenu.current.classList.remove("static");
//     closeMenu.current.classList.add("hidden");

//     menuSheet.current.classList.remove("translate-x-[300px]");
//     menuSheet.current.classList.add("translate-x-[-300px]");
//     siteTitle.current.classList.add("text-white");
//     siteTitle.current.classList.remove("text-black");
//     siteName.current.classList.remove("text-black");
//     siteName.current.classList.add("text-white");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     // just trigger this so that the initial state
//     // is updated as soon as the component is mounted
//     // related: https://stackoverflow.com/a/63408216
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//   });
//   return (
//     <div className="h-16 lg:h-52">
//       <header
//         className={` ${navbarClasses.join(" ")} ${
//           scrollY < 10
//             ? "absolute top-0 lg:top-[20px] bg-primary lg:bg-transparent"
//             : "fixed top-0 bg-primary  lg:bg-white  border-b border-b-gray-300 transition-all duration-250 ease-linear"
//         }`}
//       >
//         <div className=" pt-0 lg:pt-5 flex justify-around lg:justify-between px-1">
//           <div className="flex items-center gap-3 z-[999]  w-[100%] lg:w-[auto] justify-start">
//             <span>
//               <FormatAlignLeftIcon
//                 onClick={() => menuBtnHandler()}
//                 className={`hover:cursor-pointer ${
//                   scrollY < 10 ? "text-white" : " text-black"
//                 }`}
//               />
//             </span>

//             <div
//               ref={menuSheet}
//               className="fixed items-baseline z-[9999] top-0 -left-[300px]  h-screen  w-[300px] bg-white transition duration-300 ease-in"
//             >
//               <ul className="flex absolute w-full top-24 flex-col justify-center p-10">
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
//                   Biolody(33)
//                 </li>
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
//                   Chemistry(32)
//                 </li>
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
//                   Construction(21)
//                 </li>
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
//                   Conversion(12)
//                 </li>
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
//                   Ecology(6)
//                 </li>
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
//                   Everyday Life
//                 </li>
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
//                   Finance
//                 </li>
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
//                   Food
//                 </li>
//                 <li className="py-2 border-b w-full pl-3 hover:bg-gray-200 cursor-pointer hover:text-blue-500">
//                   Healtch
//                 </li>
//               </ul>
//             </div>
//             <span
//               onClick={() => hideMenuHandler()}
//               ref={closeMenu}
//               className="close-menut w-[97.5vw] h-[190vh] bg-black bg-opacity-[.5] absolute hidden transition-all duration-300 ease-in "
//             ></span>
//             <div className="flex gap-2 items-center z-[99999]">
//               <h2
//                 ref={siteTitle}
//                 className={`font-bold text-xl text-black ${
//                   scrollY < 10 ? "text-white" : "text-black"
//                 } `}
//               >
//                 Our'
//               </h2>
//               <span
//                 className={`${scrollY < 10 ? "text-white" : "text-black"}`}
//                 ref={siteName}
//               >
//                 CALCULATOR
//               </span>
//             </div>
//           </div>
//           <ul className="hidden lg:flex px-3 gap-4 items-center text-primary font-semibold ">
//             <li className="link">We're hiring!</li>
//             <li className="link">Embed</li>
//             <li className="font-light">Share via</li>
//             <li>
//               <div className="flex gap-2">
//                 <div className="h-[25px] w-[25px] rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     x="0px"
//                     y="0px"
//                     width="25"
//                     height="25"
//                     viewBox="0,0,256,256"
//                   >
//                     <g
//                       fill="#4ebee1"
//                       fillRule="nonzero"
//                       stroke="none"
//                       strokeWidth="1"
//                       strokeLinecap="butt"
//                       strokeLinejoin="miter"
//                       strokeMiterlimit="10"
//                       strokeDasharray=""
//                       strokeDashoffset="0"
//                       fontFamily="none"
//                       fontWeight="none"
//                       fontSize="none"
//                       textAnchor="none"
//                       // style="mix-blend-mode: normal"
//                     >
//                       <g transform="scale(5.12,5.12)">
//                         <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM26.58008,10c-2.65186,0 -4.663,0.86722 -5.90234,2.40039c-1.23934,1.53317 -1.67773,3.58065 -1.67773,5.82617v1.77344h-2c-0.55226,0.00006 -0.99994,0.44774 -1,1v5c0.00006,0.55226 0.44774,0.99994 1,1h2v12c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-12h4c0.47687,-0.00017 0.88729,-0.33701 0.98047,-0.80469l1,-5c0.05844,-0.29363 -0.01774,-0.598 -0.20762,-0.82948c-0.18987,-0.23148 -0.47346,-0.36572 -0.77285,-0.36584h-5v-2.19336c0,-0.48502 0.03137,-0.48103 0.17188,-0.57227c0.14051,-0.09124 0.64832,-0.23437 1.53906,-0.23437h3.28906c0.55226,-0.00006 0.99994,-0.44774 1,-1v-4c-0.00023,-0.42258 -0.26605,-0.79942 -0.66406,-0.94141c0,0 -2.8796,-1.05859 -5.75586,-1.05859zM26.58008,12c1.89242,0 3.64742,0.51045 4.41992,0.75195v2.24805h-2.28906c-1.04726,0 -1.89696,0.08458 -2.62695,0.55859c-0.72999,0.47401 -1.08398,1.38207 -1.08398,2.24805v3.19336c0.00006,0.55226 0.44774,0.99994 1,1h4.7793l-0.59961,3h-4.17969c-0.55226,0.00006 -0.99994,0.44774 -1,1v12h-4v-12c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1h-2v-3h2c0.55226,-0.00006 0.99994,-0.44774 1,-1v-2.77344c0,-1.97948 0.40501,-3.54478 1.23242,-4.56836c0.82741,-1.02358 2.10451,-1.6582 4.34766,-1.6582z"></path>
//                       </g>
//                     </g>
//                   </svg>
//                 </div>
//                 <div className="h-[25px] w-[25px] rounded-full">
//                   <Twitter className="text-primary" />
//                 </div>
//                 <div className="h-[25px] w-[25px] rounded-full">
//                   <LinkedIn className="text-primary" />
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="relative ">
//                 <input
//                   type="search"
//                   className=" w-44 px-4 py-2 text-gray-800 rounded-full focus:outline-none border border-primary"
//                   x-model="search"
//                 />
//                 <SearchIcon
//                   fontSize="small"
//                   className="absolute top-3 right-3 text-primary"
//                 />
//               </div>
//             </li>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useState,useEffect } from "react";

// const Navbar = () => {
//   const [isSideNavbarOpen, setSideNavbarOpen] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);

//   const toggleSideNavbar = () => {
//     setSideNavbarOpen(!isSideNavbarOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY > 20;
//       setScrolled(scrolled);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <nav className={`flex justify-between items-center xl:px-20 lg:px-17 md:px-12 sm:px-4 py-4 transition-all duration-300 z-30 ${
//           isScrolled ? "bg-white shadow-md " : "bg-slate-100"
//         } text-white fixed w-full top-0`}>
//         <div className="left-side flex items-center">
//           <ul className="flex items-center space-x-4">
//             <span
//               className="text-2xl text-black font-semibold cursor-pointer"
//               onClick={toggleSideNavbar}
//             >
//               &#9776;
//             </span>
//             <li className="">
//               <span className="text-black xl:text-2xl lg:text-2xl: md:text-xl sm:text-lg font-extrabold font-mono">LETS</span>{" "}
//               <span className=" text-gray-800 font-semibold xl:2xl lg:2xl md:text-lg sm:text-sm">FIND</span>
//             </li>
//           </ul>
//         </div>
//         <div className="right-side ">
//           <input
//             type="search"
//             name=""
//             id=""
//             className="border-2 border-gray-400 bg-white text-gray-800 xl:w-36 lg:w-36 md:w-36 sm:w-28 px-4 py-2 rounded-full focus:outline-none focus:border-blue-500 transition-all duration-300"
//             placeholder="Search..."
//           />
//         </div>
//       </nav>

//       {/* Side Navbar */}
//       {isSideNavbarOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50">
//           <div className="p-4 text-white">
//             <p>Link 1</p>
//             <p>Link 2</p>
//             <p>Link 3</p>
//             {/* Add more links as needed */}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const controls = useAnimation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     controls.start({ opacity: isOpen ? 0 : 1, x: isOpen ? 0 : -100 });
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     controls.start({ opacity: 0, x: -100 });
//   };

//   return (
//     <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex justify-between items-center p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-white">Lets Find</h1>
//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="text-xl focus:outline-none">
//             &#9776;
//           </button>
//         </div>
//         <ul className="hidden lg:flex space-x-4">
//           <li>
//             <Link href="/" className="cursor-pointer text-white hover:text-gray-100 transition duration-300 text-xl font-semibold font-mono">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/Navbar/Futureview" className="cursor-pointer text-white hover:text-gray-100 transition duration-300 text-xl font-semibold font-mono">
//               FutureView
//             </Link>
//           </li>
//           <li>
//             <Link href="/Navbar/contactus" className="cursor-pointer text-white hover:text-gray-100 transition duration-300 text-xl font-semibold font-mono">
//               ContactUs
//             </Link>
//           </li>
//           <li>
//             <Link href="/Navbar/aboutus" className="cursor-pointer text-white hover:text-gray-100 transition duration-300 text-xl font-semibold font-mono">
//               AboutUs
//             </Link>
//           </li>
//           {/* <li>
//             <Link href="/" className="cursor-pointer text-white hover:text-gray-100 transition duration-300 text-xl font-semibold font-mono">
//               PrivacyPolicy
//             </Link>
//           </li> */}
//         </ul>
//       </div>
//       <motion.ul
//         className={`lg:hidden fixed top-16 left-0 right-0 text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex flex-col items-center space-y-4 p-4 z-50 ${
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         initial={{ opacity: 0, x: -100 }}
//         animate={controls}
//       >
//         <li>
//           <Link
//             href="/"
//             className="cursor-pointer hover:text-gray-300 transition duration-300"
//             onClick={closeMenu}
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/Navbar/Futureview"
//             className="cursor-pointer hover:text-gray-300 transition duration-300"
//             onClick={closeMenu}
//           >
//             FutureView
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/Navbar/contactus"
//             className="cursor-pointer hover:text-gray-300 transition duration-300"
//             onClick={closeMenu}
//           >
//             ContactUs
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/Navbar/aboutus"
//             className="cursor-pointer hover:text-gray-300 transition duration-300"
//             onClick={closeMenu}
//           >
//             AboutUs
//           </Link>
//         </li>
//       </motion.ul>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowMenu(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex justify-between items-center p-4">
//       <h1 className="text-3xl font-bold">Lets Find</h1>

//       <div className="lg:hidden">
//         <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//           {/* Use a more styled icon for the menu button, for example, a hamburger icon */}
//           &#9776;
//         </button>
//       </div>

//       <ul
//         ref={menuRef}
//         className={`lg:flex ${showMenu ? "flex" : "hidden"} flex-col lg:flex-row gap-4`}
//         style={{ listStyle: "none", transition: "transform 0.3s ease-in-out" }}
//       >
//         <li>
//           <Link
//             href="/"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             Home
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Navbar/contactus"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             Contact Us
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Navbar/privacypolicy"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             Privacy Policy
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Navbar/Futureview"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             Future View
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Navbar/aboutus"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             About us
//           </Link>
//         </li>

//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowMenu(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex justify-between items-center p-4">
//       <h1 className="text-2xl font-bold">OUR CALCULATORS</h1>

//       <div className="lg:hidden">
//         <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//           &#8801;
//         </button>
//       </div>

//       <ul
//         ref={menuRef}
//         className={`lg:flex ${
//           showMenu ? "flex" : "hidden"
//         } flex-col lg:flex-row gap-4`}
//         style={{ listStyle: "none" }}
//       >
//         <li>
//           <Link
//             href="/"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             Home
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Navbar/contactus"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             Contact Us
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Navbar/privacypolicy"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             Privacy Policy
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Navbar/Futureview"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             Future View
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Navbar/aboutus"
//             className="menu-link text-lg font-bold p-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block"
//           >
//             About us
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

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
