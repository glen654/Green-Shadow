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
import { AppDispatch } from "../store/Store";
import { useEffect, useState } from "react";
import { StaffModel } from "../models/Staff";
import { saveStaff } from "../reducers/staffReducer";
import { Gender } from "../models/enums/GenderType";
import { getFieldNames } from "../reducers/FieldReducer";
import { FieldModel } from "../models/Field";

export function Staff() {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const staffMembers = useSelector((state) => state.staff);
  const fields = useSelector((state) => state.field);

  const [staff, setStaff] = useState({
    name: "",
    designation: "",
    gender: "" as Gender | "",
    joinedDate: "",
    dob: "",
    address: "",
    contact: "",
    email: "",
    fieldName: "",
  });

  const handleAdd = () => {
    if (
      !staff.name ||
      !staff.designation ||
      !staff.gender ||
      !staff.joinedDate ||
      !staff.dob ||
      !staff.address ||
      !staff.contact ||
      !staff.email ||
      !staff.fieldName
    ) {
      alert("All fields are required");
      return;
    }

    const joinedDateObj = new Date(staff.joinedDate);
    const dobObj = new Date(staff.dob);

    const newStaffMember = new StaffModel(
      staff.name,
      staff.designation,
      staff.gender,
      joinedDateObj,
      dobObj,
      staff.address,
      staff.contact,
      staff.email,
      staff.fieldName
    );
    dispatch(saveStaff(newStaffMember));
  };

  const handleAddStaff = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Staff added!");
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(getFieldNames());
  }, [dispatch]);
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Staff
      </motion.h1>
      <div className="flex flex-wrap gap-6">
        ;
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
        <Addbutton onClick={handleAddStaff}>Staff</Addbutton>
      </div>
      {/* Staff table */}
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
          <tbody className="bg-slate-100 cursor-pointer">
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
            <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
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
      </motion.div>

      {/* Add Crop Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Add New Staff Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Name</label>
            <input
              type="text"
              value={staff.name}
              onChange={(e) => setStaff({ ...staff, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Designation</label>
            <input
              type="text"
              value={staff.designation}
              onChange={(e) =>
                setStaff({ ...staff, designation: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label>Gender</label>
            <select
              name="gender"
              id=""
              value={staff.gender}
              onChange={(e) =>
                setStaff({ ...staff, gender: e.target.value as Gender })
              }
            >
              <option value="" selected>
                Select Gender
              </option>
              <option value={Gender.MALE}> Male</option>
              <option value={Gender.FEMALE}>Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Joined Date</label>
            <input
              type="date"
              name="joinedDate"
              value={staff.joinedDate}
              onChange={(e) =>
                setStaff({ ...staff, joinedDate: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label>Date of Birth</label>
            <input
              type="date"
              name="Dob"
              value={staff.dob}
              onChange={(e) => setStaff({ ...staff, dob: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Address</label>
            <input
              type="text"
              value={staff.address}
              onChange={(e) => setStaff({ ...staff, address: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Contact No</label>
            <input
              type="text"
              value={staff.contact}
              onChange={(e) => setStaff({ ...staff, contact: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              value={staff.email}
              onChange={(e) => setStaff({ ...staff, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Field Name</label>
            <select
              name="fieldName"
              value={staff.fieldName}
              onChange={(e) =>
                setStaff({ ...staff, fieldName: e.target.value })
              }
              required
            >
              <option value="">Select Field</option>
              {fields.map((field: FieldModel) => (
                <option key={`field-${field.fieldName}`} value={field.fieldName}>
                  {field.fieldName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <Savebutton handleClick={handleAdd}>Save Staff Member</Savebutton>
            <Updatebutton>Update Staff Member</Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
