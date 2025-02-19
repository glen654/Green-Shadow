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
import {
  deleteStaff,
  getAllStaff,
  saveStaff,
  updateStaff,
} from "../reducers/staffReducer";
import { Gender } from "../models/enums/GenderType";
import { getFieldNames } from "../reducers/FieldReducer";
import { FieldModel } from "../models/Field";
import Swal from "sweetalert2";

export function Staff() {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const staffMembers = useSelector((state) => state.staff);
  const fields = useSelector((state) => state.field);

  const initialStaffState = {
    name: "",
    designation: "",
    gender: "" as Gender | "",
    joinedDate: "",
    dob: "",
    address: "",
    contact: "",
    email: "",
    fieldName: "",
  };

  const [staff, setStaff] = useState(initialStaffState);

  const handleAddNewStaff = () => {
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
    resetForm();
    dispatch(closeModal());
    Swal.fire({
      icon: "success",
      title: "Staff Member Saved!",
      text: "Your Staff data has been successfully saved.",
      confirmButtonText: "Ok",
    });
    dispatch(getAllStaff());
  };

  const handleUpdateStaff = () => {
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

    const updatedStaffMember = new StaffModel(
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

    dispatch(updateStaff({ name: staff.name, staff: updatedStaffMember }));
    resetForm();
    dispatch(closeModal());
    Swal.fire({
      icon: "success",
      title: "Staff Member Updated!",
      text: "Your Staff Member data has been successfully updated.",
      confirmButtonText: "Ok",
    });
    dispatch(getAllStaff());
  };

  const handleDelete = (name: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteStaff(name));
        dispatch(getAllStaff());
        Swal.fire("Deleted!", "The Staff Member has been deleted.", "success");
      }
    });
  };

  const resetForm = () => {
    setStaff(initialStaffState);
  };

  const handleEdit = (staff: StaffModel) => {
    dispatch(openModal());
    setStaff(staff);
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
    dispatch(getAllStaff());
  }, [dispatch, staffMembers]);

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
                Field Name
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-100 cursor-pointer">
            {staffMembers
              .filter(
                (staff: StaffModel, index, self) =>
                  index === self.findIndex((s: StaffModel) => s.name === s.name)
              )
              .map((staff: StaffModel) => (
                <tr
                  key={staff.name}
                  className="hover:bg-slate-200 border-b border-gray-950 font-bold"
                >
                  <td className="px-6 py-4">{staff.name}</td>
                  <td className="px-6 py-4">{staff.designation}</td>
                  <td className="px-6 py-4">{staff.gender}</td>
                  <td className="px-6 py-4">
                    {new Date(staff.joinedDate).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(staff.dob).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-6 py-4">{staff.address}</td>
                  <td className="px-6 py-4">{staff.contact}</td>
                  <td className="px-6 py-4">{staff.email}</td>
                  <td className="px-6 py-4">{staff.fieldName}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => handleEdit(staff)}
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline ml-2"
                      onClick={() => handleDelete(staff.name)}
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
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
              {fields.map((field: FieldModel, index) => (
                <option key={index} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <Savebutton handleClick={handleAddNewStaff}>
              Save Staff Member
            </Savebutton>
            <Updatebutton handleClick={handleUpdateStaff}>
              Update Staff Member
            </Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
