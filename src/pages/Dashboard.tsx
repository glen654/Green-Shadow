import { Barchart } from "../components/Barchart";
import { Calender } from "../components/Calender";
import { Cards } from "../components/Cards";
import { Piechart } from "../components/Piechart";

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="flex flex-wrap gap-6">
        <div className="flex-1">
          <Cards />
        </div>
        <div className="w-[350px] mr-10">
          <div className="relative">
            <Calender />
          </div>
        </div>
      </div>

      <Barchart/>
      <Piechart/>
    </>
  );
}
