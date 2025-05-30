import Link from "next/link";
import Features from "./components/Features/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstLinkedIn - Boost Your LinkedIn Profile with AI",
  description:
    "Automate connection requests and personalized messaging on LinkedIn. Save hours every week using Public LinkedIn App.",

  keywords: [
    "LinkedIn automation",
    "AI assistant",
    "LinkedIn outreach",
    "LinkedIn profile boost",
    "Public LinkedIn App",
  ],
  metadataBase: new URL("https://publicaddon.com"),
  icons: {
    icon: "/images/public-logo.png",
  },
};

export default function Home() {
  return (
    <>
      <section className="bg-gray-300 p-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Boost Your LinkedIn Profile with AI
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Automate connection requests and personalized messaging — save hours
          every week using Public LinkedIn App.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/download"
            className="px-6 py-3 bg-yellow-600 text-gray-900 font-semibold rounded-xl hover:bg-gray-900   hover:text-yellow-500 transition"
          >
            Add to Chrome
          </Link>
          <Link
            href="demo"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-900 transition"
          >
            Watch Demo
          </Link>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <Features />
      </section>
    </>
  );
}
