import Features from "./components/Features/Features";
import { Metadata } from "next";
import Heading from "./components/Heading/Heading";
import ActionLink from "./components/ActionLink/ActionLink";

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
        <Heading
          titleClassName="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          title="Boost Your LinkedIn Profile with AI"
          subtitleClassName="text-lg text-gray-600 mb-8"
          subtitle="Automate connection requests and personalized messaging — save hours every week using Public LinkedIn App."
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ActionLink
            href="/download"
            linkClassName="px-6 py-3 bg-yellow-600 text-gray-900 font-semibold rounded-xl hover:bg-gray-900   hover:text-yellow-500 transition"
          >
            Add to Chrome
          </ActionLink>
          <ActionLink
            href="demo"
            linkClassName="px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-900 transition"
          >
            Watch Demo
          </ActionLink>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <Features />
      </section>
    </>
  );
}
