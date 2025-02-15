import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Skeleton = () => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center relative bg-gray-100 animate-pulse rounded-lg p-4 border border-gray-300">
      <div className="w-full flex justify-center">
        <div className="h-8 w-1/4 bg-gray-300 mb-4 rounded"></div>
      </div>

      <div className="h-[250px] w-[250px] bg-gray-300 rounded-full mt-8"></div>
    </div>
  );
};

const RevenueChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/overview/revenue")
      .then((res) => res.json())
      .then((res) => setData(res.sources))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="w-full rounded-lg border border-gray-300 p-4">
      <h2 className="text-lg font-semibold text-center sm:hidden mb-4">
        Revenue Distribution
      </h2>

      <div className="overflow-x-auto">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              outerRadius={120}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="top" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
