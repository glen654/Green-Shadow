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
import { CropModel } from "../models/Crop";
import {
  deleteCrop,
  getAllCrops,
  saveCrop,
  updateCrop,
} from "../reducers/CropReducer";
import { getFieldNames } from "../reducers/FieldReducer";

export function Crop() {
  const url = "http://localhost:3000";
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const crops = useSelector((state) => state.crop);
  const fieldNames = useSelector((state) => state.field);

  const initialCropState = {
    commonName: "",
    scientificName: "",
    category: "",
    cropImage: null,
    fieldName: "",
  };

  const [crop, setCrop] = useState<CropModel>(initialCropState);

  const handleAdd = () => {
    if (
      !crop.commonName ||
      !crop.scientificName ||
      !crop.category ||
      !crop.cropImage ||
      !crop.fieldName
    ) {
      alert("All Fields are required!");
      return;
    }

    const cropData = new CropModel(
      crop.commonName,
      crop.scientificName,
      crop.category,
      crop.cropImage,
      crop.fieldName
    );

    dispatch(saveCrop(cropData));
    resetForm();
    dispatch(closeModal());
    dispatch(getAllCrops());
  };

  const handleUpdate = () => {
    if (
      !crop.commonName ||
      !crop.scientificName ||
      !crop.category ||
      !crop.fieldName
    ) {
      alert("All Fields are required!");
      return;
    }

    const cropData = new CropModel(
      crop.commonName,
      crop.scientificName,
      crop.category,
      crop.cropImage,
      crop.fieldName
    );

    dispatch(updateCrop({ commonName: crop.commonName, crop: cropData }));
    resetForm();
    dispatch(closeModal());
    dispatch(getAllCrops());
  };

  const handleDelete = (commonName: string) => {
    if (window.confirm("Are you sure want to delete this crop")) {
      dispatch(deleteCrop(commonName));
      dispatch(getAllCrops());
    }
  };

  const handleEdit = (crop: CropModel) => {
    dispatch(openModal());
    setCrop(crop);
  };

  const resetForm = () => {
    setCrop(initialCropState);
  };

  const handleAddCrop = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Crop added!");
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(getAllCrops());
    dispatch(getFieldNames());
  }, [dispatch, fieldNames, crops]);
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Crop
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
        <Addbutton onClick={handleAddCrop}>Crop</Addbutton>
      </div>
      {/* Crop Table */}
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
                Common Name
              </th>
              <th scope="col" className="px-6 py-3">
                Scientific Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Field Details
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-100 cursor-pointer">
            {crops
              .filter(
                (crop: CropModel, index, self) =>
                  index ===
                  self.findIndex(
                    (c: CropModel) => c.commonName === crop.commonName
                  )
              )
              .map((crop: CropModel) => (
                <tr
                  key={crop.commonName}
                  className="hover:bg-slate-200 border-b border-gray-950 font-bold"
                >
                  <td className="px-6 py-4">
                    <img
                      src={`${url}${crop.cropImage}`}
                      alt={crop.commonName}
                      className="w-24 h-24 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4">{crop.commonName}</td>
                  <td className="px-6 py-4">{crop.scientificName}</td>
                  <td className="px-6 py-4">{crop.category}</td>
                  <td className="px-6 py-4">{crop.fieldName}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => handleEdit(crop)}
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:underline ml-2"
                      onClick={() => handleDelete(crop.commonName)}
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
        <h2>Add New Crop</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Crop Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setCrop({
                  ...crop,
                  cropImage: e.target.files ? e.target.files[0] : null,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label>Common Name</label>
            <input
              type="text"
              name="commonName"
              value={crop.commonName}
              onChange={(e) => setCrop({ ...crop, commonName: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Scientific Name</label>
            <input
              type="text"
              name="scientificName"
              value={crop.scientificName}
              onChange={(e) =>
                setCrop({ ...crop, scientificName: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={crop.category}
              onChange={(e) => setCrop({ ...crop, category: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Field Details</label>
            <select
              name="fieldName"
              value={crop.fieldName}
              onChange={(e) => setCrop({ ...crop, fieldName: e.target.value })}
              id=""
            >
              <option value="">Select Field</option>
              {fieldNames.map((field: FieldModel, index) => (
                <option key={index} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <Savebutton handleClick={handleAdd}>Save Crop</Savebutton>
            <Updatebutton handleClick={handleUpdate}>Update Crop</Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
