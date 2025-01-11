import { Cards } from "../components/Cards";
import { Addbutton } from "../components/AddButton";

export function Log() {
  return (
    <>
      <h1>Log</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Log</Addbutton>
      </div>
    </>
  );
}
