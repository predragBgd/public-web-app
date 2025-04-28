import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linked In AddOn",
  description: "LinkedInAddOn - Your AI-Powered LinkedIn Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-100 font-sans text-gray-900 antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
