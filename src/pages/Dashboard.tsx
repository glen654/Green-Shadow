import { Barchart } from "../components/Barchart";
import { Calender } from "../components/Calender";
import { Cards } from "../components/Cards";
import { Piechart } from "../components/Piechart";

export function Dashboard() {
  return (
    <div className="p-6">
      <h1>Dashboard</h1>
      <div className="flex flex-wrap gap-6">
        <div className="flex-grow">
          <Cards />
        </div>
        <div className="flex-shrink-0">
          <div className="relative h-full mr-2">
            <Calender />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <Barchart />
        <div className="flex-1 w-full lg:w-1/2">
          <Piechart />
        </div>
      </div>
    </div>
  );
}
