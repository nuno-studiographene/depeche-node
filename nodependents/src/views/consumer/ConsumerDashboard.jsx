import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { SERVICES } from "../../utils/constants";
import "./styles.css";

const ConsumerDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <header>
        <h1>Consumer Dashboard</h1>
      </header>
      <div>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </div>
      <div>
        {SERVICES.map((service, index) => (
          <div key={index}>
            <Link to={`/consumer/booking/transportation/date-selection`}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumerDashboard;
