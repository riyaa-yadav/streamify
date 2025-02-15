import React, { useEffect, useState } from "react";
import TilesShimmer from "./TilesShimmer";

const Tiles = () => {
  const [tiles, setTiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/overview/tiles")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch overview data.");
        return res.json();
      })
      .then((data) => {
        setTiles(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <TilesShimmer />;

  const tileData = [
    { title: "Total Users", count: tiles?.totalUsers },
    { title: "Active Users", count: tiles?.activeUsers },
    { title: "Total Streams", count: tiles?.totalStreams },
    { title: "Revenue", count: tiles?.revenue },
    { title: "Top Artist", count: tiles?.topArtist },
  ];

  const isEmpty = tileData.every((tile) => !tile.count);

  if (isEmpty)
    return (
      <div className="text-center text-gray-500 font-medium p-4">
        No data available.
      </div>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
      {tileData.map((tile, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center"
        >
          <h2 className="text-sm text-gray-500">{tile.title}</h2>
          <p className="text-2xl font-medium mt-1">{tile.count || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default Tiles;
