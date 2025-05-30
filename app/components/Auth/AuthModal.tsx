"use client";
import React, { useState } from "react";
import { auth, signInWithEmailAndPassword, db } from "@root/lib/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Fetch user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        if (userData.isActive === false) {
          setError("Your account is inactive. Please contact support.");
          setLoading(false);
          return;
        }
      }

      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 100);
    } catch (error) {
      setLoading(false);
      if (typeof error === "object" && error !== null && "code" in error) {
        setError("Login failed. Please check your credentials.");
      } else {
        setError("Unexpected error. Please try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg space-y-4 w-80 text-black relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          X
        </button>
        <h2 className="text-xl font-bold text-center">Log In</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-100 border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-100 border border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full p-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
