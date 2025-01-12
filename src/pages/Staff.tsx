import { Cards } from "../components/Cards";
import { Addbutton } from "../components/Addbutton";

export function Staff() {
  return (
    <>
      <h1>Staff</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Staff</Addbutton>
      </div>
      {/* Staff table */}
      <div className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-10 ml-28">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Employee Name
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Joined Date
              </th>
              <th scope="col" className="px-6 py-3">
                DOB
              </th>
              <th scope="col" className="px-6 py-3">
                Adress
              </th>
              <th scope="col" className="px-6 py-3">
                Contact No
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-stone-300 cursor-pointer">
            <tr className="hover:bg-gray-50 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">Kamal Perera</td>
              <td className="px-6 py-4">Manager</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">2025-01-10</td>
              <td className="px-6 py-4">1992-05-23</td>
              <td className="px-6 py-4">Panadura</td>
              <td className="px-6 py-4">0778543231</td>
              <td className="px-6 py-4">kamal@gmail.com</td>
              <td className="px-6 py-4">Manager</td>
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
              <td className="px-6 py-4">Nimal Perera</td>
              <td className="px-6 py-4">Manager</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">2025-01-10</td>
              <td className="px-6 py-4">1992-05-23</td>
              <td className="px-6 py-4">Panadura</td>
              <td className="px-6 py-4">0778543231</td>
              <td className="px-6 py-4">kamal@gmail.com</td>
              <td className="px-6 py-4">Manager</td>
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
              <td className="px-6 py-4">Amal Perera</td>
              <td className="px-6 py-4">Manager</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">2025-01-10</td>
              <td className="px-6 py-4">1992-05-23</td>
              <td className="px-6 py-4">Panadura</td>
              <td className="px-6 py-4">0778543231</td>
              <td className="px-6 py-4">kamal@gmail.com</td>
              <td className="px-6 py-4">Manager</td>
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
              <td className="px-6 py-4">Amal Perera</td>
              <td className="px-6 py-4">Manager</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">2025-01-10</td>
              <td className="px-6 py-4">1992-05-23</td>
              <td className="px-6 py-4">Panadura</td>
              <td className="px-6 py-4">0778543231</td>
              <td className="px-6 py-4">kamal@gmail.com</td>
              <td className="px-6 py-4">Manager</td>
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
              <td className="px-6 py-4">Amal Perera</td>
              <td className="px-6 py-4">Manager</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">2025-01-10</td>
              <td className="px-6 py-4">1992-05-23</td>
              <td className="px-6 py-4">Panadura</td>
              <td className="px-6 py-4">0778543231</td>
              <td className="px-6 py-4">kamal@gmail.com</td>
              <td className="px-6 py-4">Manager</td>
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
