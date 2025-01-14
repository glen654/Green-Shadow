import { Cards } from "../components/Cards";
import { Addbutton } from "../components/Addbutton";
import { Modal } from "../components/Modal";
import { Savebutton } from "../components/Savebutton";
import { Updatebutton } from "../components/Updatebutton";
import { Calender } from "../components/Calender";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../reducers/ModalSlice";
import { motion } from "motion/react";
import { easeIn } from "motion";

export function Equipment() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const handleAddEquipment = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Equipment added!");
    dispatch(closeModal());
  };
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Equipment
      </motion.h1>
      <div className="flex flex-wrap gap-6">
        <div className="flex-grow">
          <Cards />
        </div>
        <div className="flex-shrink-0">
          <div className="relative h-full mr-10">
            <Calender />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4 mr-56">
        <Addbutton onClick={handleAddEquipment}>Equipment</Addbutton>
      </div>
      {/* Equipment Table */}
      <motion.div
        className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-6 ml-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: easeIn }}
      >
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
          <tbody className="bg-slate-100 cursor-pointer">
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
      </motion.div>

      {/* Add Equipment Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Add New Equipment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Equipment Name</label>
            <input type="text" required />
          </div>
          <div className="mb-4">
            <label>Equipment Type</label>
            <select name="" id="">
              <option value="" selected>
                Select Equipment Type
              </option>
              <option value="ELECTRICAL">Electrical</option>
              <option value="MECHANICAL">Mechanical</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Equipment Status</label>
            <select name="" id="">
              <option value="" selected>
                Select Equipment Status
              </option>
              <option value="AVAILABLE">Available</option>
              <option value="UNAVAILABLE">Unavailable</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Relevant Field</label>
            <select name="" id=""></select>
          </div>
          <div className="mb-4">
            <label>Relevant Staff Member</label>
            <select name="" id=""></select>
          </div>
          <div className="flex justify-end">
            <Savebutton>Save Equipement</Savebutton>
            <Updatebutton>Update Equipment</Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
