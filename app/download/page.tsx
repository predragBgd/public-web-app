import React from "react";
import { Metadata } from "next";
import ActionLink from "@/components/ActionLink/ActionLink";

export const metadata: Metadata = {
  title: "Install AstLinkedIn Chrome Extension",
  description:
    "Automate your LinkedIn activities with ease using our powerful browser extension.",

  keywords: ["Install AstLinkedIn", "Add to Chrome"],
  metadataBase: new URL("https://publicaddon.com"),
  icons: {
    icon: "/images/public-logo.png",
  },
};

const Download = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Install AstLinkedIn Chrome Extension
        </h1>
        <p className="mb-6 text-lg">
          Automate your LinkedIn activities with ease using our powerful browser
          extension.
        </p>
        <ActionLink
          href="https://chrome.google.com/webstore/detail/your-extension-id"
          target="_blank"
          linkClassName="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Add to Chrome
        </ActionLink>
        <div className="mt-12 text-left">
          <h2 className="text-2xl font-semibold mb-4">How to Install?</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Click the button above to open the Chrome Web Store.</li>
            <li>Click “Add to Chrome”.</li>
            <li>Confirm by clicking “Add extension”.</li>
            <li>
              The extension icon will appear in the top-right corner of your
              browser.
            </li>
          </ol>
        </div>
        <div className="mt-16">
          <p>
            Need help?
            <ActionLink href="/contact" linkClassName="text-blue-600 underline">
              Contact support
            </ActionLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;
