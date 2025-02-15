import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Skeleton = () => {
  return (
    <div className="w-full h-[400px] rounded-lg bg-gray-100 animate-pulse p-4 border border-gray-300">
      <div className="w-full flex justify-end">
        <div className="h-6 w-1/4 bg-gray-300 mb-4 rounded"></div>
      </div>
      <div className="h-[280px] w-full bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg"></div>
      <div className="h-6 w-full bg-gray-300 rounded mt-4"></div> {/* X-axis */}
    </div>
  );
};

const UserGrowthChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/overview/user-growth")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="w-full rounded-lg border border-gray-300 p-4">
      <h2 className="text-lg font-semibold text-center sm:hidden mb-4">
        User Growth Over Time
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[500px]">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" align="right" />
              <Line
                type="monotone"
                dataKey="totalUsers"
                stroke="#0088FE"
                name="Total Users"
              />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="#00C49F"
                name="Active Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserGrowthChart;
