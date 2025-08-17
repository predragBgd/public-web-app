"use client";

import { useState, useEffect } from "react";
import { db } from "@root/lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  doc,
  where,
} from "firebase/firestore";
import { useAuth } from "@root/lib/useAuth";
import Input from "../Input/Input";
import Button from "../Button/Button";

type Reply = {
  id: string;
  email: string;
  message: string;
  timestamp: any;
};

type Message = {
  id: string;
  email: string;
  message: string;
  timestamp: any;
  replies: Reply[];
};

export default function ChatBox() {
  const { user, role, loading } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [replyInputs, setReplyInputs] = useState<{ [key: string]: string }>({});
  const [isButtonBusy, setIsButtonBusy] = useState(false);

  useEffect(() => {
    if (loading) return;

    const messagesRef = collection(db, "messages");
    const q =
      role === "admin"
        ? query(messagesRef, orderBy("timestamp", "asc"))
        : user
        ? query(
            messagesRef,
            where("email", "==", user.email)
            // orderBy("timestamp", "asc")
          )
        : query(messagesRef, where("email", "==", "")); // fallback query if user is null

    const unsubscribeMessages = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        msgs.push({
          id: docSnap.id,
          email: data.email,
          message: data.message,
          timestamp: data.timestamp,
          replies: [],
        });
      });
      setMessages(msgs);

      // Listen for replies for each message
      msgs.forEach((msg) => {
        const repliesRef = collection(db, "messages", msg.id, "replies");
        const qReplies = query(repliesRef, orderBy("timestamp", "asc"));
        onSnapshot(qReplies, (replySnapshot) => {
          const replies: Reply[] = [];
          replySnapshot.forEach((replyDoc) => {
            const replyData = replyDoc.data();
            replies.push({
              id: replyDoc.id,
              email: replyData.email,
              message: replyData.message,
              timestamp: replyData.timestamp,
            });
          });
          setMessages((prevMessages) =>
            prevMessages.map((m) => (m.id === msg.id ? { ...m, replies } : m))
          );
        });
      });
    });

    return () => unsubscribeMessages();
  }, [user, role, loading]);

  const handleSend = async () => {
    if (!message.trim() || !user?.email) return;

    await addDoc(collection(db, "messages"), {
      email: user.email,
      message,
      timestamp: serverTimestamp(),
    });

    setMessage("");
  };

  const handleReplySend = async (messageId: string) => {
    setIsButtonBusy(true);
    const replyMessage = replyInputs[messageId];
    if (!replyMessage?.trim() || !user?.email) return;

    const messageRef = doc(db, "messages", messageId);
    const repliesRef = collection(messageRef, "replies");

    await addDoc(repliesRef, {
      email: user.email,
      message: replyMessage,
      timestamp: serverTimestamp(),
    });

    setReplyInputs((prev) => ({ ...prev, [messageId]: "" }));

    setTimeout(() => {
      setIsButtonBusy(false);
    }, 2000);
  };

  if (loading) {
    return <p className="text-center p-4">Loading chat...</p>;
  }

  return (
    // Add info for new messages
    <div className="p-1 mx-auto max-w-3xl w-full">
      <div className="h-[600px] overflow-y-auto mb-4 p-4 rounded bg-gray-100 ">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="mb-6 border-1 border-green-900 bg-green-100 text-green-900 rounded-lg p-4"
          >
            <p className="text-sm font-semibold">{msg.email}</p>
            <p className="text-xs text-gray-500">
              {msg.timestamp?.toDate().toLocaleString()}
            </p>
            <p>{msg.message}</p>

            {msg.replies.map((reply) => (
              <div key={reply.id} className="mx-2 p-3 w-full">
                <div className="bg-blue-100 text-blue-900 p-3 rounded-lg border-1 ">
                  <p className="text-sm font-semibold">{reply.email}</p>
                  <p className="text-xs text-gray-500">
                    {reply.timestamp?.toDate().toLocaleString()}
                  </p>
                  <p>{reply.message}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-2 mt-2 w-full">
              <Input
                placeholder="Reply..."
                value={replyInputs[msg.id] || ""}
                onChange={(e) =>
                  setReplyInputs((prev) => ({
                    ...prev,
                    [msg.id]: e.target.value,
                  }))
                }
              />
              <Button
                className="text-blue-500 py-2 cursor-pointer hover:underline"
                onClick={() => handleReplySend(msg.id)}
                isLoading={isButtonBusy}
              >
                Reply
              </Button>
            </div>
          </div>
        ))}
      </div>

      {role !== "admin" && (
        <div className="flex gap-2 w-full items-center">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Send message..."
          />
          <Button
            className="bg-green-600 text-white px-4 h-10 py-1 rounded-lg hover:bg-green-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSend}
          >
            Send Message
          </Button>
        </div>
      )}
    </div>
  );
}
