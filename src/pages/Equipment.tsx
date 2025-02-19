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
import { Status } from "../models/enums/StatusType";
import { useEffect, useState } from "react";
import { EquipmentModel } from "../models/Equipment";
import { EquipType } from "../models/enums/EquipType";
import {
  deleteEquipment,
  getAllEquipment,
  saveEquipment,
  updateEquipment,
} from "../reducers/EquipmentReducer";
import { FieldModel } from "../models/Field";
import { StaffModel } from "../models/Staff";
import { getFieldNames } from "../reducers/FieldReducer";
import { getStaffNames } from "../reducers/staffReducer";
import Swal from "sweetalert2";

export function Equipment() {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const equipments = useSelector((state) => state.equipment);
  const staffMembers = useSelector((state) => state.staff);
  const fields = useSelector((state) => state.field);

  const initialEquipState = {
    equipName: "",
    equipType: "" as EquipType | "",
    status: "" as Status | "",
    staffMember: "",
    fieldName: "",
  };

  const [equipment, setEquipment] = useState(initialEquipState);

  const handleAddNewEquipment = () => {
    if (
      !equipment.equipName ||
      !equipment.equipType ||
      !equipment.status ||
      !equipment.staffMember ||
      !equipment.fieldName
    ) {
      alert("All Fields are required");
      return;
    }

    const newEquipment = new EquipmentModel(
      equipment.equipName,
      equipment.equipType,
      equipment.status,
      equipment.staffMember,
      equipment.fieldName
    );

    dispatch(saveEquipment(newEquipment));
    dispatch(closeModal());
    resetForm();
    Swal.fire({
      icon: "success",
      title: "Equipment Saved!",
      text: "Your Equipment data has been successfully saved.",
      confirmButtonText: "Ok",
    });
    dispatch(getAllEquipment());
  };

  const handleUpdateEquipment = () => {
    if (
      !equipment.equipName ||
      !equipment.equipType ||
      !equipment.status ||
      !equipment.staffMember ||
      !equipment.fieldName
    ) {
      alert("All Fields are required");
      return;
    }

    const updatedEquipment = new EquipmentModel(
      equipment.equipName,
      equipment.equipType,
      equipment.status,
      equipment.staffMember,
      equipment.fieldName
    );

    dispatch(
      updateEquipment({
        equipName: equipment.equipName,
        equipment: updatedEquipment,
      })
    );
    dispatch(closeModal());
    resetForm();
    Swal.fire({
      icon: "success",
      title: "Equipment Updated!",
      text: "Your Equipment data has been successfully updated.",
      confirmButtonText: "Ok",
    });
    dispatch(getAllEquipment());
  };

  const handleDelete = (equipName: string) => {
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
        dispatch(deleteEquipment(equipName));
        dispatch(getAllEquipment());
        Swal.fire("Deleted!", "The Equipment has been deleted.", "success");
      }
    });
  };
  const resetForm = () => {
    setEquipment(initialEquipState);
  };

  const handleEdit = (equipment: EquipmentModel) => {
    dispatch(openModal());
    setEquipment(equipment);
  };
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

  useEffect(() => {
    dispatch(getFieldNames());
    dispatch(getStaffNames());
    dispatch(getAllEquipment());
  }, [dispatch, fields, staffMembers, equipments]);
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
            {equipments
              .filter(
                (equipment: EquipmentModel, index, self) =>
                  index ===
                  self.findIndex(
                    (e: EquipmentModel) => e.equipName === e.equipName
                  )
              )
              .map((equipment: EquipmentModel) => (
                <tr
                  key={equipment.equipName}
                  className="hover:bg-slate-200 border-b border-gray-950 font-bold"
                >
                  <td className="px-6 py-4">{equipment.equipName}</td>
                  <td className="px-6 py-4">{equipment.equipType}</td>
                  <td className="px-6 py-4">{equipment.status}</td>
                  <td className="px-6 py-4">{equipment.staffMember}</td>
                  <td className="px-6 py-4">{equipment.fieldName}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => handleEdit(equipment)}
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline ml-2"
                      onClick={() => handleDelete(equipment.equipName)}
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </motion.div>

      {/* Add Equipment Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Add New Equipment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Equipment Name</label>
            <input
              type="text"
              value={equipment.equipName}
              onChange={(e) =>
                setEquipment({ ...equipment, equipName: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label>Equipment Type</label>
            <select
              name="equipType"
              id=""
              value={equipment.equipType}
              onChange={(e) =>
                setEquipment({
                  ...equipment,
                  equipType: e.target.value as EquipType,
                })
              }
            >
              <option value="" selected>
                Select Equipment Type
              </option>
              <option value={EquipType.Electrical}>Electrical</option>
              <option value={EquipType.Mechanical}>Mechanical</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Equipment Status</label>
            <select
              name="status"
              id=""
              value={equipment.status}
              onChange={(e) =>
                setEquipment({ ...equipment, status: e.target.value as Status })
              }
            >
              <option value="" selected>
                Select Equipment Status
              </option>
              <option value={Status.AVAILABLE}>Available</option>
              <option value={Status.UNAVAILABLE}>Unavailable</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Staff Member</label>
            <select
              name="staffMember"
              id=""
              value={equipment.staffMember}
              onChange={(e) =>
                setEquipment({ ...equipment, staffMember: e.target.value })
              }
            >
              <option value="">Select Staff Member</option>
              {staffMembers.map((staff: StaffModel, index) => (
                <option key={index} value={staff}>
                  {staff}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label>Field Name</label>
            <select
              name="fieldName"
              id=""
              value={equipment.fieldName}
              onChange={(e) =>
                setEquipment({ ...equipment, fieldName: e.target.value })
              }
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
            <Savebutton handleClick={handleAddNewEquipment}>
              Save Equipement
            </Savebutton>
            <Updatebutton handleClick={handleUpdateEquipment}>
              Update Equipment
            </Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
