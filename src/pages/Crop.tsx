import { Cards } from "../components/Cards";
import { Addbutton } from "../components/AddButton";

export function Crop() {
  return (
    <>
      <h1>Crop</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Crop</Addbutton>
      </div>
    </>
  );
}
