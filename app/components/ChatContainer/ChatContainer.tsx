"use client";
import React from "react";
import ChatBox from "../ChatBox/ChatBox";
import { useAuth } from "@root/lib/useAuth";

const ChatContainer = () => {
  const { user, role } = useAuth();
  const [open, setOpen] = React.useState(false);

  if (!user) return null;

  return (
    <>
      {user && role !== "admin" && (
        <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end space-y-2">
          {open && (
            <div className="w-90 h-auto bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300">
              <ChatBox />
            </div>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="bg-yellow-500 text-black px-4 py-2 rounded-xl hover:bg-yellow-400 transition cursor-pointer"
          >
            {open ? "Close Chat" : "Open Chat"}
          </button>
        </div>
      )}
    </>
  );
};

export default ChatContainer;
