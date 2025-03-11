import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"; // Star icon

interface StarRatingProps {
  movieId: number; // Movie ID is needed to store ratings separately
}

const StarRating: React.FC<StarRatingProps> = ({ movieId }) => {
  const [userRating, setUserRating] = useState<number>(0);

  // Load saved rating from localStorage when component mounts
  useEffect(() => {
    const savedRating = localStorage.getItem(`movie-${movieId}-rating`);
    if (savedRating) {
      setUserRating(JSON.parse(savedRating));
    }
  }, [movieId]);

  // Function to handle rating
  const handleRating = (rating: number) => {
    setUserRating(rating);
    localStorage.setItem(`movie-${movieId}-rating`, JSON.stringify(rating)); // Save in localStorage
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={24}
          color={star <= userRating ? "gold" : "gray"}
          onClick={() => handleRating(star)}
          className="cursor-pointer"
        />
      ))}
      <p className="ml-2 text-white">{userRating} / 5</p>
    </div>
  );
};

export default StarRating;
