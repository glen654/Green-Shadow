import { Cards } from "../components/Cards";
import { Addbutton } from "../components/AddButton";

export function Equipment() {
  return (
    <>
      <h1>Equipment</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Equipment</Addbutton>
      </div>
    </>
  );
}
