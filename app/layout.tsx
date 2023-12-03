import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./Navbar/page";
import "./globals.css";
import { Metadata } from "next";


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
      {/* <title>our calculators</title> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta name="description" content="Our calculators provide wide range of calculators to perform your day to day tasks effeciently" /> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
      />
    </head>
    <body>
      <Navbar />
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
