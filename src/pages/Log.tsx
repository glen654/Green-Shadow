import { Cards } from "../components/Cards";
import { Addbutton } from "../components/Addbutton";
import field from "../assets/field.png";
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
import { LogModel } from "../models/Log";
import {
  deleteLog,
  getAllLogs,
  saveLog,
  updateLog,
} from "../reducers/LogReducer";
import { getFieldNames } from "../reducers/FieldReducer";
import { getCropNames } from "../reducers/CropReducer";
import { getStaffNames } from "../reducers/staffReducer";
import { CropModel } from "../models/Crop";
import { StaffModel } from "../models/Staff";
import Swal from "sweetalert2";

export function Log() {
  const url = "http://localhost:3000";
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const logs = useSelector((state) => state.log);
  const fields = useSelector((state) => state.field);
  const staffMembers = useSelector((state) => state.staff);
  const crops = useSelector((state) => state.crop);

  const initialLogState = {
    logName: "",
    logDate: new Date(),
    logImage: null,
    fieldName: "",
    cropName: "",
    staffMember: "",
  };

  const [log, setLog] = useState<LogModel>(initialLogState);

  const handleAdd = () => {
    if (
      !log.logName ||
      !log.logDate ||
      !log.logImage ||
      !log.fieldName ||
      !log.cropName ||
      !log.staffMember
    ) {
      alert("All fields are required");
      return;
    }

    const logData = new LogModel(
      log.logName,
      log.logDate,
      log.logImage,
      log.fieldName,
      log.cropName,
      log.staffMember
    );

    dispatch(saveLog(logData));
    resetForm();
    dispatch(closeModal());
    Swal.fire({
      icon: "success",
      title: "Log Saved!",
      text: "Your Log data has been successfully saved.",
      confirmButtonText: "Ok",
    });
    dispatch(getAllLogs());
  };

  const handleUpdate = () => {
    if (
      !log.logName ||
      !log.logDate ||
      !log.fieldName ||
      !log.cropName ||
      !log.staffMember
    ) {
      alert("All fields are required");
      return;
    }

    const logData = new LogModel(
      log.logName,
      log.logDate,
      log.logImage,
      log.fieldName,
      log.cropName,
      log.staffMember
    );

    dispatch(updateLog({ logName: log.logName, log: logData }));
    resetForm();
    dispatch(closeModal());
    Swal.fire({
      icon: "success",
      title: "Log Updated!",
      text: "Your Log data has been successfully Updated.",
      confirmButtonText: "Ok",
    });
    dispatch(getAllLogs());
  };

  const handleDelete = (logName: string) => {
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
        dispatch(deleteLog(logName));
        dispatch(getAllLogs());
        Swal.fire("Deleted!", "The Log has been deleted.", "success");
      }
    });
  };

  const handleEdit = (log: LogModel) => {
    dispatch(openModal());
    setLog(log);
  };

  const resetForm = () => {
    setLog(initialLogState);
  };

  const handleAddLog = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Log added!");
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(getAllLogs());
    dispatch(getFieldNames());
    dispatch(getCropNames());
    dispatch(getStaffNames());
  }, [dispatch, logs, fields, crops, staffMembers]);
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Log
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
        <Addbutton onClick={handleAddLog}>Log</Addbutton>
      </div>
      {/* Log Table */}
      <motion.div
        className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg mt-6 ml-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: easeIn }}
      >
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Log Name
              </th>
              <th scope="col" className="px-6 py-3">
                Log Date
              </th>
              <th scope="col" className="px-6 py-3">
                Relevant Field
              </th>
              <th scope="col" className="px-6 py-3">
                Relevant Crop
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
            {logs
              .filter(
                (log: LogModel, index, self) =>
                  index ===
                  self.findIndex((l: LogModel) => l.logName === log.logName)
              )
              .map((log: LogModel) => (
                <tr
                  key={log.logName}
                  className="hover:bg-slate-200 border-b border-gray-950 font-bold"
                >
                  <td className="px-6 py-4">
                    <img
                      src={`${url}${log.logImage}`}
                      alt={log.logName}
                      className="w-24 h-24 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4">{log.logName}</td>
                  <td className="px-6 py-4">
                    {new Date(log.logDate).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-6 py-4">{log.fieldName}</td>
                  <td className="px-6 py-4">{log.cropName}</td>
                  <td className="px-6 py-4">{log.staffMember}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => handleEdit(log)}
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline ml-2"
                      onClick={() => handleDelete(log.logName)}
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </motion.div>

      {/* Add Log Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Add New Log</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Observed Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setLog({
                  ...log,
                  logImage: e.target.files ? e.target.files[0] : null,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label>Log Name</label>
            <input
              type="text"
              name="logName"
              value={log.logName}
              onChange={(e) => setLog({ ...log, logName: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Log Date</label>
            <input
              type="date"
              name="logDate"
              value={log.logDate.toISOString()}
              onChange={(e) =>
                setLog({ ...log, logDate: new Date(e.target.value) })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label>Relevant Field</label>
            <select
              name="fieldName"
              value={log.fieldName}
              onChange={(e) => setLog({ ...log, fieldName: e.target.value })}
              id=""
            >
              <option value="">Select Field</option>
              {fields.map((field: FieldModel, index) => (
                <option key={index} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label>Relevant Crop</label>
            <select
              name="cropName"
              value={log.cropName}
              onChange={(e) => setLog({ ...log, cropName: e.target.value })}
              id=""
            >
              <option value="">Select Crop</option>
              {crops.map((crop: CropModel, index) => (
                <option key={index} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label>Relevant Staff Member</label>
            <select
              name=""
              value={log.staffMember}
              onChange={(e) => setLog({ ...log, staffMember: e.target.value })}
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
            <Savebutton handleClick={handleAdd}>Save Log</Savebutton>
            <Updatebutton handleClick={handleUpdate}>Update Log</Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
