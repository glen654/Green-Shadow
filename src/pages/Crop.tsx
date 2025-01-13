import { Cards } from "../components/Cards";
import { Addbutton } from "../components/Addbutton";
import field from "../assets/field.png";
import { Modal } from "../components/Modal";
import { useState } from "react";

export function Crop() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCrop = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop added!");
    setIsModalOpen(false);
  };
  return (
    <>
      <h1>Crop</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton onClick={handleAddCrop}>Crop</Addbutton>
      </div>
      {/* Crop Table */}
      <div className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-10 ml-28">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Common Name
              </th>
              <th scope="col" className="px-6 py-3">
                Scientific Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Season
              </th>
              <th scope="col" className="px-6 py-3">
                Field Details
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
              <td className="px-6 py-4">Crop 1</td>
              <td className="px-6 py-4">Crop 1</td>
              <td className="px-6 py-4">Fruit</td>
              <td className="px-6 py-4">Winter</td>
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
            <tr className="hover:bg-gray-50 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">
                <img src={field} alt="" className="w-24 h-24 rounded-full" />
              </td>
              <td className="px-6 py-4">Crop 2</td>
              <td className="px-6 py-4">Crop 2</td>
              <td className="px-6 py-4">Fruit</td>
              <td className="px-6 py-4">Winter</td>
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
            <tr className="hover:bg-gray-50 border-b border-gray-950 font-bold">
              <td className="px-6 py-4">
                <img src={field} alt="" className="w-24 h-24 rounded-full" />
              </td>
              <td className="px-6 py-4">Crop 3</td>
              <td className="px-6 py-4">Crop 3</td>
              <td className="px-6 py-4">Fruit</td>
              <td className="px-6 py-4">Winter</td>
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

      {/* Add Crop Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Add New Crop</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Crop Image</label>
            <input type="file" accept="image/*" />
          </div>
          <div className="mb-4">
            <label>Common Name</label>
            <input type="text" required />
          </div>
          <div className="mb-4">
            <label>Scientific Name</label>
            <input type="text" required />
          </div>
          <div className="mb-4">
            <label>Category</label>
            <input type="text" required />
          </div>
          <div className="mb-4">
            <label>Season</label>
            <input type="text" required />
          </div>
          <div className="mb-4">
            <label>Field Details</label>
            <select name="" id=""></select>
          </div>
        </form>
      </Modal>
    </>
  );
}
