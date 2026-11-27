import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://capivuetech.com"),
  title: {
    default: "Capivue | Win the bid before you write it",
    template: "%s | Capivue",
  },
  description:
    "Intelligence infrastructure for complex revenue operations. The AI-powered bid intelligence platform for specialist consultants.",
  openGraph: {
    type: "website",
    url: "https://capivuetech.com",
    siteName: "Capivue",
    title: "Win the bid before you write a single word",
    description:
      "AI-powered Bid Intelligence with Zero-Retention AI, Azure Central India residency, and Superadmin-verified audit logs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Capivue Bid Intelligence — Deal Room preview with Azure Central India, Zero-Retention AI, and Full Audit Trail badges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Win the bid before you write a single word",
    description:
      "AI-powered Bid Intelligence with Zero-Retention AI, Azure Central India residency, and Superadmin-verified audit logs.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
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