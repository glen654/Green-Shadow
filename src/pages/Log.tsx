import { Cards } from "../components/Cards";
import { Addbutton } from "../components/Addbutton";
import field from "../assets/field.png";

export function Log() {
  return (
    <>
      <h1>Log</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Log</Addbutton>
      </div>
      {/* Log Table */}
      <div className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-10 ml-28">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Log Date
              </th>
              <th scope="col" className="px-6 py-3">
                Log Details
              </th>
              <th scope="col" className="px-6 py-3">
                Relevant Field
              </th>
              <th scope="col" className="px-6 py-3">
                Relevant Crop
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned Staff
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-stone-300 cursor-pointer">
            <tr className="hover:bg-gray-50 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">
                <img src={field} alt="" className="w-24 h-24 rounded-full" />
              </td>
              <td className="px-6 py-4">2025-01-10</td>
              <td className="px-6 py-4">Banana Crop</td>
              <td className="px-6 py-4">Field 1</td>
              <td className="px-6 py-4">Crop 1</td>
              <td className="px-6 py-4">Nimal Perera</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-2"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">
                <img src={field} alt="" className="w-24 h-24 rounded-full" />
              </td>
              <td className="px-6 py-4">2025-01-10</td>
              <td className="px-6 py-4">Banana Crop</td>
              <td className="px-6 py-4">Field 1</td>
              <td className="px-6 py-4">Crop 1</td>
              <td className="px-6 py-4">Nimal Perera</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-2"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">
                <img src={field} alt="" className="w-24 h-24 rounded-full" />
              </td>
              <td className="px-6 py-4">2025-01-10</td>
              <td className="px-6 py-4">Banana Crop</td>
              <td className="px-6 py-4">Field 1</td>
              <td className="px-6 py-4">Crop 1</td>
              <td className="px-6 py-4">Nimal Perera</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-2"
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
