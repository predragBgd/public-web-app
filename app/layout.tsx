import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import ChatContainer from "./components/ChatContainer/ChatContainer";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linked In AddOn",
  description: "LinkedInAddOn - Your AI-Powered LinkedIn Assistant",
  keywords: [
    "LinkedIn automation",
    "LinkedIn outreach",
    "AI assistant",
    "AstLinkedIn",
  ],
  metadataBase: new URL("https://publicaddon.com"),
  icons: {
    icon: "/images/public-logo.png",
  },
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
        <ChatContainer />
        <Footer />
      </body>
    </html>
  );
}
