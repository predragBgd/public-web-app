"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@root/lib/useAuth";
import { auth } from "@root/lib/firebase";
import AuthModal from "@/components/Auth/AuthModal";
import { usePathname, useRouter } from "next/navigation";
import Button from "../Button/Button";
import Header from "../Header/Header";

const Navigation = () => {
  const { user, role } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      if (role === "admin" && pathname === "/user-reviews") {
        router.push("/");
      }
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Header className="bg-gray-500 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/public-logo.png" alt="Logo" width={40} height={40} />
        </Link>

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

          {user ? (
            <>
              {role === "admin" && (
                <Link
                  href="/user-reviews"
                  className="text-white font-semibold hover:text-blue-200 transition"
                >
                  Admin Chat
                </Link>
              )}
              <Button
                label="Logout"
                onClick={handleSignOut}
                buttonClassName="text-white font-semibold hover:text-red-300 transition cursor-pointer"
              />
            </>
          ) : (
            <Button
              label="Login"
              onClick={() => setShowModal(true)}
              buttonClassName="text-white font-semibold hover:text-blue-200 transition cursor-pointer"
            />
          )}
        </div>
      </nav>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </Header>
  );
};

export default Navigation;
