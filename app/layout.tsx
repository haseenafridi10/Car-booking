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
    <html lang="en">
      <body
        className={ `relative` }
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
