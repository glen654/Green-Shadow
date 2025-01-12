import { Cards } from "../components/Cards";
import { Addbutton } from "../components/Addbutton";

export function Vehicle() {
  return (
    <>
      <h1>Vehicle</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Vehicle</Addbutton>
      </div>
      {/* Vehicle Table */}
      <div className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-10 ml-28">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                License Plate Number
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Fuel Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Remarks
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
              <td className="px-6 py-4">XYZ-002</td>
              <td className="px-6 py-4">Truck</td>
              <td className="px-6 py-4">Diesel</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Assigned to Kamal</td>
              <td className="px-6 py-4">Kamal Perera</td>
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
              <td className="px-6 py-4">XYZ-002</td>
              <td className="px-6 py-4">Truck</td>
              <td className="px-6 py-4">Diesel</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Assigned to Kamal</td>
              <td className="px-6 py-4">Kamal Perera</td>
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
              <td className="px-6 py-4">XYZ-002</td>
              <td className="px-6 py-4">Truck</td>
              <td className="px-6 py-4">Diesel</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Assigned to Kamal</td>
              <td className="px-6 py-4">Kamal Perera</td>
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
              <td className="px-6 py-4">XYZ-002</td>
              <td className="px-6 py-4">Truck</td>
              <td className="px-6 py-4">Diesel</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Assigned to Kamal</td>
              <td className="px-6 py-4">Kamal Perera</td>
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
              <td className="px-6 py-4">XYZ-002</td>
              <td className="px-6 py-4">Truck</td>
              <td className="px-6 py-4">Diesel</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Assigned to Kamal</td>
              <td className="px-6 py-4">Kamal Perera</td>
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
