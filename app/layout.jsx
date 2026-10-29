import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capivue | Win the bid before you write it",
  description: "Intelligence infrastructure for complex revenue operations. The AI-powered bid intelligence platform for specialist consultants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8FAFC] text-[#0B1220] antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Ethora Chat Widget Placeholder */}
        {/* <script src="https://...botid-placeholder..." /> */}
      </body>
    </html>
  );
}