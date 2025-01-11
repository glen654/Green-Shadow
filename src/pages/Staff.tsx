import { Cards } from "../components/Cards";
import { Addbutton } from "../components/AddButton";

export function Staff() {
  return (
    <>
      <h1>Staff</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Staff</Addbutton>
      </div>
    </>
  );
}
