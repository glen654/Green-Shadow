import { Cards } from "../components/Cards";
import { Addbutton } from "../components/AddButton";

export function Vehicle() {
  return (
    <>
      <h1>Vehicle</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Vehicle</Addbutton>
      </div>
    </>
  );
}
