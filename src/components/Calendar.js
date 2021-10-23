import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Calendar({ date, setDate }) {
  return <DatePicker selected={date} onChange={(date) => setDate(date)} />;
}

export default Calendar;
