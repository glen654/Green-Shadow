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
import { FuelType } from "../models/enums/FuelType";
import { Status } from "../models/enums/StatusType";
import { useEffect, useState } from "react";
import { VehicleModel } from "../models/Vehicle";
import {
  deleteVehicle,
  getAllVehicles,
  saveVehicle,
  updateVehicle,
} from "../reducers/VehicleReducer";
import { AppDispatch } from "../store/Store";
import { StaffModel } from "../models/Staff";
import { getStaffNames } from "../reducers/staffReducer";

export function Vehicle() {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const vehicles = useSelector((state) => state.vehicle);
  const staffMembers = useSelector((state) => state.staff);

  const initialVehicleState = {
    licensePlateNumber: "",
    category: "",
    fuelType: "" as FuelType | "",
    status: "" as Status | "",
    remarks: "",
    staffMember: "",
  };

  const [vehicle, setVehicle] = useState(initialVehicleState);

  const handleAddNewVehicle = () => {
    if (
      !vehicle.licensePlateNumber ||
      !vehicle.category ||
      !vehicle.fuelType ||
      !vehicle.status ||
      !vehicle.remarks ||
      !vehicle.staffMember
    ) {
      alert("All Fields are required!");
      return;
    }

    const newVehicle = new VehicleModel(
      vehicle.licensePlateNumber,
      vehicle.category,
      vehicle.fuelType,
      vehicle.status,
      vehicle.remarks,
      vehicle.staffMember
    );
    dispatch(saveVehicle(newVehicle));
    dispatch(closeModal());
    resetForm();
    dispatch(getAllVehicles());
  };

  const handleUpdateVehicle = () => {
    if (
      !vehicle.licensePlateNumber ||
      !vehicle.category ||
      !vehicle.fuelType ||
      !vehicle.status ||
      !vehicle.remarks ||
      !vehicle.staffMember
    ) {
      alert("All Fields are required!");
      return;
    }

    const updatedVehicle = new VehicleModel(
      vehicle.licensePlateNumber,
      vehicle.category,
      vehicle.fuelType,
      vehicle.status,
      vehicle.remarks,
      vehicle.staffMember
    );

    dispatch(
      updateVehicle({
        licenseNumber: vehicle.licensePlateNumber,
        vehicle: updatedVehicle,
      })
    );
    dispatch(closeModal());
    resetForm();
    dispatch(getAllVehicles());
  };

  const handleDelete = (licensePlateNumber: string) => {
    if (window.confirm("Are you sure want to delete this Vehicle")) {
      dispatch(deleteVehicle(licensePlateNumber));
      dispatch(getAllVehicles());
    }
  };

  const handleEdit = (vehicle: VehicleModel) => {
    dispatch(openModal());
    setVehicle(vehicle);
  };

  const resetForm = () => {
    setVehicle(initialVehicleState);
  };

  const handleAddVehicle = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Vehicle added!");
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(getStaffNames());
    dispatch(getAllVehicles());
  },[dispatch, vehicles, staffMembers])
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vehicle
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
        <Addbutton onClick={handleAddVehicle}>Vehicle</Addbutton>
      </div>
      {/* Vehicle Table */}
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
          <tbody className="bg-slate-100 cursor-pointer">
            {vehicles
              .filter(
                (vehicle: VehicleModel, index, self) =>
                  index ===
                  self.findIndex(
                    (v: VehicleModel) =>
                      v.licensePlateNumber === v.licensePlateNumber
                  )
              )
              .map((vehicle: VehicleModel) => (
                <tr className="hover:bg-slate-200 border-b border-gray-950 font-bold">
                  <td className="px-6 py-4">{vehicle.licensePlateNumber}</td>
                  <td className="px-6 py-4">{vehicle.category}</td>
                  <td className="px-6 py-4">{vehicle.fuelType}</td>
                  <td className="px-6 py-4">{vehicle.status}</td>
                  <td className="px-6 py-4">{vehicle.remarks}</td>
                  <td className="px-6 py-4">{vehicle.staffMember}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => handleEdit(vehicle)}
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline ml-2"
                      onClick={() => handleDelete(vehicle.licensePlateNumber)}
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
        <h2>Add New Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>License Plate Number</label>
            <input
              type="text"
              value={vehicle.licensePlateNumber}
              onChange={(e) =>
                setVehicle({ ...vehicle, licensePlateNumber: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label>Vehicle Category</label>
            <input
              type="text"
              value={vehicle.category}
              onChange={(e) =>
                setVehicle({ ...vehicle, category: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label>Fuel Type</label>
            <select
              name="fuelType"
              value={vehicle.fuelType}
              onChange={(e) =>
                setVehicle({ ...vehicle, fuelType: e.target.value as FuelType })
              }
              id=""
            >
              <option value="" selected>
                Select Fuel Type
              </option>
              <option value={FuelType.DIESEL}>Diesel</option>
              <option value={FuelType.PETROL}>Petrol</option>
              <option value={FuelType.ELECTRIC}>Electric</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Vehicle Status</label>
            <select
              name="status"
              value={vehicle.status}
              onChange={(e) =>
                setVehicle({ ...vehicle, status: e.target.value as Status })
              }
              id=""
            >
              <option value="" selected>
                Select Vehicle Status
              </option>
              <option value={Status.AVAILABLE}>Available</option>
              <option value={Status.UNAVAILABLE}>Unavailable</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Remarks</label>
            <textarea
              name="remarks"
              value={vehicle.remarks}
              onChange={(e) =>
                setVehicle({ ...vehicle, remarks: e.target.value })
              }
              id=""
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <label>Relevant Staff Member</label>
            <select
              name="staffMember"
              value={vehicle.staffMember}
              onChange={(e) =>
                setVehicle({ ...vehicle, staffMember: e.target.value })
              }
              id=""
            >
              <option value="">Select Staff Member</option>
              {staffMembers.map((staff: StaffModel, index) => (
                <option key={index} value={staff}>
                  {staff}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <Savebutton handleClick={handleAddNewVehicle}>
              Save Vehicle
            </Savebutton>
            <Updatebutton handleClick={handleUpdateVehicle}>
              Update Vehicle
            </Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
