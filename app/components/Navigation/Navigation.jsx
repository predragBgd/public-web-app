import React from "react";

import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <header className="bg-gray-600 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/public-logo.png" alt="Logo" width={40} height={40} />
          </Link>
        </div>
        <div className="flex space-x-6 text-l font-medium text-gray-700">
          <Link
            href="/"
            className="text-white font-semibold hover:text-blue-200 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white font-semibold hover:text-blue-200 transition"
          >
            About
          </Link>
          <Link
            href="/features"
            className="text-white font-semibold hover:text-blue-200 transition"
          >
            Features
          </Link>
          <Link
            href="/contact"
            className="text-white font-semibold hover:text-blue-200 transition"
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="text-white font-semibold hover:text-blue-200 transition"
          >
            FAQ
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
