import { Addbutton } from "../components/Addbutton";
import { Cards } from "../components/Cards";
import field from "../assets/field.png";

export function Field() {
  return (
    <>
      <h1>Field</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Field</Addbutton>
      </div>
      {/* Field Table */}
      <div className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-10 ml-16">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Field Name
              </th>
              <th scope="col" className="px-6 py-3">
                Field Location (X)
              </th>
              <th scope="col" className="px-6 py-3">
                Field Location (Y)
              </th>
              <th scope="col" className="px-6 py-3">
                Extent Size
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="hover:bg-gray-50 border-b border-gray-300">
              <td className="px-6 py-4">
                <img src={field} alt="" className="w-24 h-24 rounded-full" />
              </td>
              <td className="px-6 py-4">Field 1</td>
              <td className="px-6 py-4">Location 1</td>
              <td className="px-6 py-4">Location 1</td>
              <td className="px-6 py-4">5000 sq. ft.</td>
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
              <td className="px-6 py-4">
                <img src={field} alt="" className="w-24 h-24 rounded-full" />
              </td>
              <td className="px-6 py-4">Field 2</td>
              <td className="px-6 py-4">Location 1</td>
              <td className="px-6 py-4">Location 1</td>
              <td className="px-6 py-4">5000 sq. ft.</td>
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
              <td className="px-6 py-4">
                <img src={field} alt="" className="w-24 h-24 rounded-full" />
              </td>
              <td className="px-6 py-4">Field 3</td>
              <td className="px-6 py-4">Location 1</td>
              <td className="px-6 py-4">Location 1</td>
              <td className="px-6 py-4">5000 sq. ft.</td>
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
