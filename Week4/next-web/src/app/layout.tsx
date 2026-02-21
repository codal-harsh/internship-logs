import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NExT Blogs -An open source blog app",
  description: "NExT Blogs is an open source blog app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-100 h-100 text-white bg-dark`}
      >
        {children}
      </body>
    </html>
  );
}
