import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/component/layout/Navber";
import Footer from "@/component/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HireHubJA | Job Portal & Hiring Platform",
    template: "%s | HireHubJA",
  },
  description:
    "HireHubJA connects talented job seekers with top employers. Post jobs, apply instantly, and grow your career with our modern hiring platform.",
  keywords: [
    "HireHubJA",
    "job portal",
    "job website",
    "hiring platform",
    "find jobs",
    "post jobs",
    "career opportunities",
  ],
  authors: [{ name: "HireHubJA Team" }],
  creator: "HireHubJA",
  metadataBase: new URL("https://hirehubja.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
