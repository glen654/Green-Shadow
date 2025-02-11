import { Addbutton } from "../components/Addbutton";
import { Cards } from "../components/Cards";
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
import { getAllFields, saveField } from "../reducers/FieldReducer";
import { FieldModel } from "../models/Field";

export function Field() {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const fields = useSelector((state) => state.field);

  const [fieldImage, setFieldImage] = useState<File | null>(null);
  const [fieldName, setFieldName] = useState("");
  const [location, setLocation] = useState("");
  const [extentSize, setExtentSize] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldImage(e.target.files ? e.target.files[0] : null);
  };

  const handleAdd = () => {
    if (!fieldImage || !fieldName || !location || !extentSize) {
      alert("All Fields are required!");
      return;
    }

    const fieldData = new FieldModel(
      fieldName,
      location,
      extentSize,
      fieldImage
    );

    dispatch(saveField(fieldData));
  };

  const handleEdit = (field: FieldModel) => {
    dispatch(openModal());
    setFieldName(field.fieldName);
    setLocation(field.location);
    setExtentSize(field.extentSize);
    setFieldImage(field.fieldImage);
  };
  const handleAddField = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Field added!");
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(getAllFields());
  }, [dispatch]);
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Field
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
        <Addbutton onClick={handleAddField}>Field</Addbutton>
      </div>
      {/* Field Table */}
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
                Field Name
              </th>
              <th scope="col" className="px-6 py-3">
                Field Location
              </th>
              <th scope="col" className="px-6 py-3">
                Extent Size
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-100 cursor-pointer">
            {fields
              .filter(
                (field: FieldModel, index, self) =>
                  index ===
                  self.findIndex(
                    (f: FieldModel) => f.fieldName === field.fieldName
                  )
              )
              .map((field: FieldModel) => (
                <tr
                  key={field.fieldName}
                  className="hover:bg-slate-200 border-b border-gray-950 font-bold"
                >
                  <td className="px-6 py-4">
                    <img
                      src={field.fieldImage}
                      alt={field.fieldName}
                      className="w-24 h-24 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4">{field.fieldName}</td>
                  <td className="px-6 py-4">{field.location}</td>
                  <td className="px-6 py-4">{field.extentSize} sq. ft.</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => handleEdit(field)}
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
              ))}
          </tbody>
        </table>
      </motion.div>
      {/* Add Field Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Add New Field</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Field Image</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="mb-4">
            <label>Field Name</label>
            <input
              type="text"
              name="fieldName"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label>Field Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label>Extent Size</label>
            <input
              type="text"
              name="extentSize"
              value={extentSize}
              onChange={(e) => setExtentSize(Number(e.target.value))}
              required
            />
          </div>
          <div className="flex justify-end">
            <Savebutton handleClick={handleAdd}>Save Field</Savebutton>
            <Updatebutton>Update Field</Updatebutton>
          </div>
        </form>
      </Modal>
    </>
  );
}
