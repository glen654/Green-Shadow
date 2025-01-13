import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-01-13"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className="shadow-lg bg-white rounded-md p-2 w-full h-full">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          dateFormat="MM/dd/yyyy"
          className="w-full"
        />
      </div>
    </>
  );
}
