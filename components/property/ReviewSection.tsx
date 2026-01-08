import React from "react";
import { Review } from "@/interfaces/index";

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex items-center">
        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <p className="font-bold">{review.name}</p>
          <p className="text-yellow-500">★ {review.rating}</p>
        </div>
      </div>
      <p className="mt-2 text-gray-700">{review.comment}</p>
    </div>
  );
};

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <section className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      <div className="mt-4">
        {reviews.map((r, idx) => (
          <ReviewCard key={idx} review={r} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
