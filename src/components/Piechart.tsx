import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Tooltip } from "recharts";

const chartData = [
  { field: "Field One", staff: 54, fill: " #4285f4" },
  { field: "Field Two", staff: 86, fill: " #1d8e3e" },
  { field: "Field Three", staff: 24, fill: " #ff7139" },
  { field: "Field Four", staff: 32, fill: " #0078d4" },
  { field: "Field Five", staff: 65, fill: " #9e9e9e" },
];
export function Piechart() {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-full h-full lg:w-1/2 max-w-4xl">
      <div className="pb-4 mb-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold">Field-Staff Assignment</h2>
        <p className="text-sm text-gray-600">January - June 2024</p>
      </div>
      <div className="flex justify-center items-center">
        <PieChart width={400} height={250}>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            itemStyle={{ color: "black" }}
            formatter={(value, name) => [`${value} assignments`, name]}
          />
          <Pie
            data={chartData}
            dataKey="staff"
            nameKey="field"
            outerRadius={100}
            fill="#4CAF50"
            label={({ payload }) => `${payload.field}: ${payload.staff}`}
            labelLine={false}
          />
        </PieChart>
      </div>
      <div className="text-sm text-gray-500 mt-6">
        <div className="flex items-center gap-2 font-medium">
          Staff assignment up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <p>Showing total staff assignments for the last 6 months</p>
      </div>
    </div>
  );
}
