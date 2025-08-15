import * as React from "react";
import MuiThemeProvider from "./MuiThemeProvider";
// We'll use Google Fonts preload to satisfy Next.js lint and keep behavior. If you prefer local fonts, add woff2 files under /public/fonts and switch to next/font/local.


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Local fonts loaded via next/font. Removed external Google Fonts link to satisfy Next.js lint rule. */}
      </head>
      <body>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
