import { Cards } from "../components/Cards";
import { Addbutton } from "../components/Addbutton";

export function Equipment() {
  return (
    <>
      <h1>Equipment</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Equipment</Addbutton>
      </div>
      {/* Equipment Table */}
      <div className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-10 ml-16">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Equipment Name
              </th>
              <th scope="col" className="px-6 py-3">
                Equipment Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned Staff
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned Field
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="px-6 py-4">Shovel</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Kamal Perera</td>
              <td className="px-6 py-4">Field 1</td>
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
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="px-6 py-4">Shovel</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Kamal Perera</td>
              <td className="px-6 py-4">Field 1</td>
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
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="px-6 py-4">Shovel</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Kamal Perera</td>
              <td className="px-6 py-4">Field 1</td>
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
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="px-6 py-4">Shovel</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Kamal Perera</td>
              <td className="px-6 py-4">Field 1</td>
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
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="px-6 py-4">Shovel</td>
              <td className="px-6 py-4">Mechanical</td>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">Kamal Perera</td>
              <td className="px-6 py-4">Field 1</td>
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
