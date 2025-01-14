import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { easeIn } from "motion";
import { motion } from "motion/react";

export function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-01-13"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <motion.div
        className="shadow-lg bg-white rounded-md p-2 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease: easeIn }}
        whileHover={{ scale: 1.05 }}
      >
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          dateFormat="MM/dd/yyyy"
          className="w-full"
        />
      </motion.div>
    </>
  );
}
