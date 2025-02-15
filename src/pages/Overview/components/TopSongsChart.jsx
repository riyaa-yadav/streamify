import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Skeleton = () => {
  return (
    <div className="w-full h-[400px] flex flex-col justify-between p-4 rounded-lg bg-gray-100 animate-pulse border border-gray-300">
      <div className="h-full flex items-end gap-4">
        {[...Array(5)].map((_, i) => {
          const randomHeight = Math.floor(Math.random() * 50) + 40;
          return (
            <div
              key={i}
              className="w-1/5 bg-gray-300 rounded-md"
              style={{ height: `${randomHeight}%` }}
            ></div>
          );
        })}
      </div>
      <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
    </div>
  );
};

const TopSongsChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/overview/top-songs")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="w-full rounded-lg border border-gray-300 p-4">
      <h2 className="text-lg font-semibold text-center sm:hidden mb-4">
        Top 5 Streamed Songs
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[500px]">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="song"
                label={{
                  value: "Song",
                  position: "insideBottom",
                  offset: -5,
                  style: { fontSize: "14px", fontWeight: "bold" },
                }}
              />
              <YAxis
                label={{
                  value: "Streams",
                  angle: -90,
                  position: "insideLeft",
                  offset: -5,
                  style: { fontSize: "14px", fontWeight: "bold" },
                }}
              />
              <Tooltip />
              <Bar dataKey="streams" fill="#00C49F" name="Streams" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TopSongsChart;
