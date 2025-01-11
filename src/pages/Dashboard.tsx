import { Barchart } from "../components/Barchart";
import { Cards } from "../components/Cards";
import { Piechart } from "../components/Piechart";

export function Dashboard() {
  return (
    <>
      <h1 className="text-4xl font-bold mt-8 ml-10 mb-2">Dashboard</h1>
      <Cards />
      <Barchart/>
      <Piechart/>
    </>
  );
}
