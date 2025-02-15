import React from "react";

const TilesShimmer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-lg h-20 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default TilesShimmer;
