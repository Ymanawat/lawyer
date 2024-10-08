import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "MK Vaidya - Expert Tax Lawyer",
  description:
    "Providing expert legal services with integrity and dedication. Your trusted partner in navigating complex tax matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DisclaimerPopup/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
