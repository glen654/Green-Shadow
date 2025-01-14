import { CirclePlus } from "lucide-react";
import { easeIn } from "motion";
import { motion } from "motion/react";

export function Addbutton({ children, onClick }) {
  return (
    <>
      <motion.button
        className="flex items-center bg-green-500 text-white px-6 py-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.11, ease: easeIn }}
        whileHover={{ scale: 1.05 }}
        onClick={onClick}
      >
        <CirclePlus className="mr-2" />
        Add {children}
      </motion.button>
    </>
  );
}
