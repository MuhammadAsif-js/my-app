import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Navbar/page';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
      />
    </head>
    <body>
      <Navbar />
      {children}
      <Analytics/>
    </body>
  </html>
);

export default RootLayout;
