"use client";
import { useAuth } from "@root/lib/useAuth";
import React, { useState, useRef } from "react";
import AuthModal from "../Auth/AuthModal";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const initialReviews = [
  {
    id: "1",
    name: "Anna",
    comment:
      "AstLinkedIn saved me hours of networking. The tool is super intuitive and easy to use. It automated my connection requests and messages, and I saw a significant increase in my professional network in just a couple of weeks. Brilliant tool, would definitely recommend it to anyone who wants to grow their LinkedIn presence without spending too much time on manual tasks.",
    rating: 5,
  },
  {
    id: "2",
    name: "Mark",
    comment:
      "This app really helped me streamline my LinkedIn outreach. I managed to connect with industry leaders much faster and my engagement increased significantly. The interface is clean and simple, making it easy for beginners too.",
    rating: 4,
  },
  {
    id: "3",
    name: "Sophia",
    comment:
      "Love the emoji picker integration! It makes leaving feedback and comments way more fun and expressive. The customer support was also very responsive when I had questions.",
    rating: 5,
  },
  {
    id: "4",
    name: "James",
    comment:
      "Good tool overall, but I would like to see more customization options for message templates. Still, it saved me a lot of time and effort.",
    rating: 3,
  },
  {
    id: "5",
    name: "Linda",
    comment:
      "Highly recommend for professionals looking to grow their network without the hassle. It’s like having a personal assistant for LinkedIn. Simple, effective, and reliable.",
    rating: 5,
  },
  {
    id: "6",
    name: "David",
    comment:
      "Started using AstLinkedIn a month ago and already see a boost in my connection requests. The automation is smooth and the analytics dashboard is helpful to track progress.",
    rating: 4,
  },
  {
    id: "7",
    name: "Emily",
    comment:
      "The onboarding was straightforward and I felt confident using the tool from day one. It’s helped me reach out to more potential clients and partners efficiently.",
    rating: 5,
  },
  {
    id: "8",
    name: "Chris",
    comment:
      "It works well for basic automation tasks, but I hope future updates add more advanced features. Still, a solid product for networking growth.",
    rating: 3,
  },
];

const RateUs = () => {
  const { user, loading } = useAuth();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(initialReviews);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const handleEmojiSelect = (emoji: any) => {
    const textarea = commentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;

    const before = comment.substring(0, start);
    const after = comment.substring(end);
    const newComment = before + emoji.native + after;

    setComment(newComment);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + emoji.native.length,
        start + emoji.native.length
      );
    }, 0);
  };

  const toggleExpand = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length < 3) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }
    if (rating === 0) {
      setRatingError(true);
      return;
    } else {
      setRatingError(false);
    }
    if (comment.length < 100) {
      setCommentError(true);
      return;
    } else {
      setCommentError(false);
    }

    const newReview = {
      id: new Date().toISOString(),
      name,
      comment,
      rating,
    };
    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <>
      {/* Reviews List */}
      <div className="mx-auto px-4 py-12 bg-white rounded-2xl shadow-md mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Reviews from Our Users
        </h2>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="m-4 p-4 rounded-lg bg-gray-50 shadow-xl cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition"
            onClick={() => toggleExpand(review.id)}
          >
            <div className="flex justify-start mb-2">
              <strong className="text-gray-800">{review.name}</strong>
              <div className="ml-2">
                {[...Array(review.rating)].map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-600">
                {expanded === review.id && user
                  ? review.comment
                  : `${review.comment.substring(0, 50)}...`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Rate Us Form */}
      {user ? (
        <div className="mx-auto px-4 py-12 bg-white rounded-2xl shadow-md mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">
            Rate LinkedInAddOn
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 mb-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <p className="text-red-500 text-sm">
                Name must be at least 3 characters long.
              </p>
            )}
            <textarea
              placeholder="Your Comment"
              className="w-full p-3 border rounded-lg resize-none"
              rows={4}
              ref={commentRef}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            {commentError && (
              <p className="text-red-500 text-sm">
                Comment must be at least 100 characters long.
              </p>
            )}
            {/* Emoji Picker Toggle */}
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="text-sm text-blue-500 hover:underline"
            >
              {showEmojiPicker ? "Hide Emoji Picker" : "Add Emoji 😀"}
            </button>

            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div className="mt-3 max-w-min p-4 rounded-xl shadow-lg border border-gray-700 bg-white flex justify-center">
                <div className="inline-block">
                  <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                </div>
              </div>
            )}

            {/* Star Rating */}
            <div className="flex items-center space-x-2">
              <label className="text-sm">Rating:</label>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    rating >= star ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
            {ratingError && (
              <p className="text-red-500 text-sm">Rating is required.</p>
            )}

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg font-semibold"
            >
              Add Comment
            </button>
          </form>
        </div>
      ) : (
        <div className="mx-auto px-4 py-12 bg-white rounded-2xl shadow-md mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Please{" "}
            <button
              onClick={() => setShowModal(true)}
              className="text-yellow-500 hover:underline font-semibold cursor-pointer"
            >
              Log In
            </button>{" "}
            to Rate Us
          </h2>
        </div>
      )}

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default RateUs;
