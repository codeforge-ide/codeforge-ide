import * as React from "react";
import MuiThemeProvider from "./MuiThemeProvider";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500','700'],
  variable: '--font-roboto',
});
// We'll use Google Fonts preload to satisfy Next.js lint and keep behavior. If you prefer local fonts, add woff2 files under /public/fonts and switch to next/font/local.


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        {/* Fonts loaded via next/font/google to satisfy Next.js lint and avoid page-level custom font links */}
      </head>
      <body>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
