import React, { useState } from "react";
import reviews from "./reviews";

const Reviews = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [allReviews, setReviews] = useState(reviews);
  const handleInput = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    if (name === "review") setReview(e.target.value);
    if (name === "rating") setRating(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setReviews((prev) => [{ review, rating }, ...prev]);
    setRating(0);
    setReview("");
  };
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <h2>Share your island Experience</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "800px",
          justifyItems: "center",
        }}
      >
        <input
          type="text"
          maxLength={50}
          required
          style={{ width: 300 }}
          name="review"
          value={review}
          onChange={handleInput}
          placeholder="Enter your thoughts here"
        />
        <label>Rating:</label>
        <input
          type="number"
          max={5}
          min={0}
          required
          name="rating"
          value={rating}
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {allReviews.map((review, i) => (
          <div style={{ marginBottom: 12 }} key={i}>
            <p>rating: {review.rating}/5</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
