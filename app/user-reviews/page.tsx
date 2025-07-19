"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "@root/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import ChatBox from "@/components/ChatBox/ChatBox";
import Paragraf from "@/components/Paragraf/Paragraf";

function UserRevews() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push("/");
        return;
      }
      try {
        const docRef = doc(db, "users", user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const data = snap.data();
          const role = data?.basicInformation?.role;
          if (role === "admin") {
            setIsAdmin(true);
          } else {
            router.push("/");
          }
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-yellow-600 mb-4">
          User Chat
        </h2>
        <Paragraf className="text-gray-600 text-lg">
          Chat with other users.
        </Paragraf>
      </div>
      <ChatBox />
    </section>
  );
}

export default UserRevews;
