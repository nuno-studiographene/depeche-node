import { useState } from "react";
import Typography from "@mui/material/Typography";
import DatePicker from "react-datepicker";
import Layout from "../../../components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
    <Layout>
      <div id="date-selection-wrapper">
        <Typography id="modal-modal-title" variant="h3" component="h3">
          Choose a time
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Select your time and date
        </Typography>
        <br></br>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleCalendarClick(date)}
          showTimeSelect
        />
        <br></br>
        <br></br>
        <Link
          to={`/consumer/booking/transportation/location-selection`}
          className={isNextButtonActive ? "active" : "disabled"}
        >
          <Button variant="contained">Next</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default DateSelection;
