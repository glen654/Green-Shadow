import { easeIn } from "motion";
import { motion } from "motion/react";

export function Cards() {
  return (
    <div className="container p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          className="bg-blue-500 text-white p-6 rounded-lg shadow-lg h-50 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeIn }}
          whileHover={{ scale: 1.05 }}
        >
          <div>
            <h6 className="mb-4 text-xl">Number Of Fields</h6>
            <h2 className="text-right flex items-center">
              <i className="fab fa-delicious text-2xl mr-2"></i>
              <span className="mt-4 text-lg">486</span>
            </h2>
            <p className="mt-4 flex justify-between text-sm">
              Used Fields <span>351</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-green-500 text-white p-6 rounded-lg shadow-lg h-50 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
          whileHover={{ scale: 1.05 }}
        >
          <div>
            <h6 className="mb-4 text-xl">Number Of Staff</h6>
            <h2 className="text-right flex items-center">
              <i className="fa-solid fa-people-group text-2xl mr-2"></i>
              <span className="mt-4 text-lg">486</span>
            </h2>
            <p className="mt-4 flex justify-between text-sm">
              Used Staff <span>351</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg h-50 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          whileHover={{ scale: 1.05 }}
        >
          <div>
            <h6 className="mb-4 text-xl">Number Of Vehicles</h6>
            <h2 className="text-right flex items-center">
              <i className="fa-solid fa-truck text-2xl mr-2"></i>
              <span className="mt-4 text-lg">486</span>
            </h2>
            <p className="mt-4 flex justify-between text-sm">
              Used Vehicles <span>351</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-pink-500 text-white p-6 rounded-lg shadow-lg h-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeIn" }}
          whileHover={{ scale: 1.05 }}
        >
          <div>
            <h6 className="mb-4 text-xl">Number Of Equipments</h6>
            <h2 className="text-right flex items-center">
              <i className="fa-solid fa-trowel text-2xl mr-2"></i>
              <span className="mt-4 text-lg">486</span>
            </h2>
            <p className="mt-4 flex justify-between text-sm">
              Used Equipments <span>351</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
