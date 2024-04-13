import React from 'react';
import Link from 'next/link';
// import page from "/../Navbar/aboutus/page.jsx";

const Page = () => {
  return (
    <ul className='bg-gray-200 py-3 flex flex-wrap justify-center items-center gap-6 h-auto font-medium text-sm lg:text-base cursor-pointer'>
      <li className='underline'>
        <Link href="../.././Navbar/aboutus" legacyBehavior><a>About us</a></Link> |
      </li>
      <li className='underline'>
        <Link href='../.././Navbar/contactus' legacyBehavior><a>contact us</a></Link> |
      </li>
      <li className='underline'>
        <Link href='../.././Navbar/Futureview' legacyBehavior><a>Future View</a></Link> |
      </li>
      <li className='underline'>
        <Link href='../.././Navbar/privacypolicy' legacyBehavior><a>Privacy Policy</a></Link> |
      </li>
      <li className='underline'>
        <Link href='/' legacyBehavior><a>© ourcalculators.com</a></Link>
      </li>
    </ul>
  );
};

export default Page;
