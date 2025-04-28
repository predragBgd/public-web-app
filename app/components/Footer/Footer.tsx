import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@root/public/public-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo & Copyright */}
        <div>
          <div className="flex justify-center md:justify-start mb-4">
            <Image src={logo} alt="Publicque Logo" width={60} height={60} />
          </div>
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Publicque</h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Useful Links */}
        <ul className="space-y-2 text-bold">
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/features" className="hover:text-yellow-400 transition">
              Features
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/faq" className="hover:text-yellow-400 transition">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
