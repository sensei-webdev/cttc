import React from "react";
import { StarIcon } from "lucide-react";

const StarRating = () => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          size={20}
          fill="yellow"
          color="yellow"
        />
      ))}
    </div>
  );
};

export default StarRating;
