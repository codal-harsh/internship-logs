import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../global.module.css";
import Navbar from "@/components/nav/navbar";
import { Container } from "react-bootstrap";
import Sidebar from "@/components/nav/sidebar";

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
    <Container fluid className="h-100">
      <div className="row position-fixed w-100">
        <Navbar />
      </div>

      <div className="row h-100">
        <Sidebar />
        <main
          className="w-100 py-5 px-5 overflow-auto col h-100 bg-dark text-white"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="py-2">{children}</div>
        </main>
      </div>
    </Container>
  );
}
