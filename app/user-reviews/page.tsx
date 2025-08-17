"use client";
import UserReviewsClient from "@/components/UserReviewsClient/UserReviewsClient";
function UserRevews() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-yellow-600 mb-4">
          User Chat
        </h2>
      </div>
      <UserReviewsClient />
    </section>
  );
}

export default UserRevews;
