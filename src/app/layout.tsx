// import { Tweet } from "@/app/(home)/Tweet";
import type { Metadata } from "next";
import "./globals.css";
// import Home from "@/(home)/page";

import { poppins } from "@/shared/fonts/Poppins";


export const metadata: Metadata= {
  title: {
    template: "%s - X App", default: ""},
  description: "Front-end project, the copy of X.com"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full h-full  ${poppins.className}`}>
        {children}
        {/* <Home/> */}
      </body>
    </html>
  );
}
