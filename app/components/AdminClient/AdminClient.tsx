"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@root/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function AdminClient() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/");
        return;
      }

      try {
        const docRef = doc(db, "users", user.uid);
        const snap = await getDoc(docRef);
        const data = snap.data();

        if (!snap.exists() || data?.basicInformation?.role !== "admin") {
          router.push("/");
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Loading admin panel...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome, Admin</h1>
    </div>
  );
}
