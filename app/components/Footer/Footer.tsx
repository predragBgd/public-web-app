import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@root/public/public-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-500 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo & Copyright */}
        <div>
          <div className="flex justify-center md:justify-start mb-4 space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="Publicque Logo"
                width={50}
                height={50}
                className="transition-transform duration-300 hover:scale-110 hover:rotate-4"
              />
              <h3 className="text-2xl font-bold text-yellow-500">Publique</h3>
            </Link>
          </div>
          <p className="text-l font-semibold">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Linkovi */}
        <ul className="space-y-2">
          <li className="font-semibold">
            <Link
              href="/about"
              className="text-lg hover:text-yellow-400 transition"
            >
              About
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              href="/features"
              className="text-lg hover:text-yellow-400 transition"
            >
              Features
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              href="/contact"
              className="text-lg hover:text-yellow-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">
            <Link
              href="/faq"
              className="text-lg hover:text-yellow-400 transition"
            >
              FAQ
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              href="/privacy"
              className="text-lg hover:text-yellow-400 transition"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
