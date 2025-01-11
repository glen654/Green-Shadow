import { Addbutton } from "../components/AddButton";
import { Cards } from "../components/Cards";

export function Field() {
  return (
    <>
      <h1>Field</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Field</Addbutton>
      </div>
    </>
  );
}
