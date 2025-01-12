import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date("2024-02-25"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className="shadow-lg">
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
