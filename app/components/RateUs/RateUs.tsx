"use client";
import React from "react";

interface Review {
  id: string;
  name: string;
  email: string;
  comment: string;
  rating: number;
}
const initialReviews: Review[] = [
  {
    id: "1",
    name: "Anna",
    email: "ana@example.com",
    comment:
      "AstLinkedIn saved me hours of networking. The tool is super intuitive and easy to use. It automated my connection requests and messages, and I saw a significant increase in my professional network in just a couple of weeks. Brilliant tool, would definitely recommend it to anyone who wants to grow their LinkedIn presence without spending too much time on manual tasks.",
    rating: 5,
  },
  {
    id: "2",
    name: "Wiliam",
    email: "wiliam@example.com",
    comment:
      "Easy to use and helped me grow my network fast. I was initially skeptical about automation on LinkedIn, but this tool has proven to be both effective and safe. The interface is straightforward, and the settings let me control the pace of my connections. I've connected with 50+ professionals in my field in just a month. It's a great time-saver!",
    rating: 4,
  },
  {
    id: "3",
    name: "Helen",
    email: "helen@example.com",
    comment:
      "Great features, especially personalized messages! The ability to send personalized connection requests and messages makes this tool stand out. I love how it automates everything while still allowing for a personal touch. It’s an excellent way to save time while making meaningful connections. I'm excited to see how it can further improve my LinkedIn strategy over time.",
    rating: 5,
  },
  {
    id: "4",
    name: "John",
    email: "john@example.com",
    comment:
      "It works well, but UI could be more modern. While the automation features of AstLinkedIn have helped me expand my network, I feel that the user interface could use some modernization. Some of the settings are a bit hard to navigate at first, and the visual design feels a little outdated. However, the functionality is top-notch, and the tool is reliable. Hopefully, future updates will improve the UI experience.",
    rating: 3,
  },
  {
    id: "5",
    name: "Sara",
    email: "sara@example.com",
    comment:
      "The auto-connect feature is a game changer! I love the auto-connect feature. It takes a lot of the manual work out of networking. I set the tool to connect with people in my industry at specific intervals, and it has really boosted my LinkedIn activity. I've noticed an increase in responses and job opportunities ever since I started using it. It's the perfect solution for busy professionals like me!",
    rating: 5,
  },
];

const RateUs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [reviews, setReviews] = React.useState<Review[]>(initialReviews);
  const [expanded, setExpanded] = React.useState<string | null>(null);
  const toggleExpand = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: new Date().toString(),
      name,
      email,
      comment,
      rating,
    };
    setReviews([newReview, ...reviews]);
    setName("");
    setEmail("");
    setComment("");
    setRating(0);
  };

  return (
    <>
      {/* Reviews List */}
      <div className=" mx-auto px-4 py-12 bg-white rounded-2xl shadow-md mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Reviews from Our Users
        </h2>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="m-4 p-4 rounded-lg bg-gray-50 shadow-xl cursor-pointer hover:shadow-2xl  hover:-translate-y-2 transition"
            onClick={() => toggleExpand(review.id)}
          >
            <div className="flex items-center gap-2 mb-1">
              <strong className="text-gray-800">{review.name}</strong>
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <div>
                {expanded === review.id ? (
                  <p className="text-gray-600">{review.comment}</p>
                ) : (
                  <p className="text-gray-600">
                    {review.comment.substring(0, 100)}...
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Rate Us Form */}
      <div className=" mx-auto px-4 py-12 bg-white rounded-2xl shadow-md mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Rate LinkedInAddOn
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          <div className="flex flex-col space-y-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Comment"
              className="w-full p-3 border rounded-lg resize-none"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              autoComplete="on"
              required
            />
            <div className="flex items-center space-x-2">
              <label className="text-sm">Rating:</label>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer ${
                    rating >= star ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg font-semibold"
          >
            Add Comnent
          </button>
        </form>
      </div>
    </>
  );
};

export default RateUs;
