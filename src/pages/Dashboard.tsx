import { Barchart } from "../components/Barchart";
import { Cards } from "../components/Cards";
import { Piechart } from "../components/Piechart";

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Cards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <Barchart />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <Piechart />
        </div>
      </div>
    </>
  );
}
