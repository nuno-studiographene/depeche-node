import { TextField } from "@mui/material";
import { SERVICES } from "../../utils/constants";
import './styles.css';

const ConsumerDashboard = () => {
    return (
      <div style={{padding: '20px'}}>
        <header>
          <h1>Consumer Dashboard</h1>
        </header>
        <div>
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>
        <div>
          {SERVICES.map((service, index) => (
            <div key={index}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ConsumerDashboard;
  