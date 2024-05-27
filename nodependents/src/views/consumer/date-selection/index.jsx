import { useState } from "react";
import Typography from "@mui/material/Typography";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const DateSelection = () => {
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleCalendarClick = (date) => {
    setIsNextButtonActive(true);
    setStartDate(date);
  };

  return (
    <div id="date-selection-wrapper">
      <Typography id="modal-modal-title" variant="h1" component="h1">
        Choose a time
      </Typography>

      <Typography id="modal-modal-title" variant="h6" component="h2">
        Select your time and date
      </Typography>

      <DatePicker
        selected={startDate}
        onChange={(date) => handleCalendarClick(date)}
        showTimeSelect
      />

      <Link
        to={`/consumer/booking/transportation/location-selection`}
        className={isNextButtonActive ? "active" : "disabled"}
      >
        Next
      </Link>
    </div>
  );
};

export default DateSelection;
