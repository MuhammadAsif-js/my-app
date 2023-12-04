import React from "react";
import Navbar from "./Navbar/page";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Our calculators",
    template: "%s | Our calculators",
  },
  description:
    "Our calculators provide wide range of calculators to perform your day to day tasks effeciently",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="dGBBkNwH0r3qsHb2D8y1KYPIFYDC6SFq8k4x72hpqJw" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
      />
      <Script
        strategy="afterInteractive"  //lazyOnload
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.CALCULATORS_TRACKING_ID}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.CALCULATORS_TRACKING_ID}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
    </head>
    <body>
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;

// import React from "react";
// import Navbar from "./Navbar/page";
// import "./globals.css";
// import { Metadata } from "next";
// import Script from "next/script";

// export const metadata: Metadata = {
//   title: {
//     default: "Our calculators",
//     template: "%s | Our calculators",
//   },
//   description:
//     "Our calculators provide wide range of calculators to perform your day to day tasks effeciently",
// };

// const RootLayout = ({ children }: { children: React.ReactNode }) => (
//   <html lang="en">
//     <head>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
//       />
//     </head>
//     <body>
//       <Navbar />
//       {children}
//     </body>
//   </html>
// );

// export default RootLayout;
