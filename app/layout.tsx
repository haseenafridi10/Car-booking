import type { Metadata } from "next";
import "./globals.css";
import { relative } from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Car Booking platform",
  description: "Discover the best cars here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={ `relative bg-white dark:bg-black-100 text-black dark:text-white ` }
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
