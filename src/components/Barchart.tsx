import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export function Barchart() {
  function ChartTooltip({ content }) {
    return <div className="tooltip">{content}</div>;
  }

  function ChartTooltipContent({ indicator }) {
    return (
      <div className={`tooltip-content tooltip-${indicator}`}>
        <span>Tooltip Content</span>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mt-4 mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Crops By Month</h2>
            <p className="text-sm text-gray-600">January - June 2025</p>
          </div>
          <div className="mb-6">
            <div className="relative">
              <BarChart
                accessibilityLayer
                data={chartData}
                width={800}
                height={400}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="desktop" fill="#34D399" radius={4} />
                <Bar dataKey="mobile" fill="#FB923C" radius={4} />
              </BarChart>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <div className="flex gap-2 font-medium">
              Increase up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none">
              Showing total crops for the last 6 months
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
