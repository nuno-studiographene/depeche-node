import { TextField } from "@mui/material";
import { SERVICES } from "../../utils/constants";
import './styles.css';
import Layout from "../../components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";

const ConsumerDashboard = () => {
  const [selectedServices, setSelectedServices] = useState(SERVICES);
    const handleChange = (e) => {
      const value = e.target.value;
      setSelectedServices(
        SERVICES.filter((service) =>
          service.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    };
    return (
      <Layout>
          <header>
            <h1>Consumer Dashboard</h1>
          </header>
          <div style={{margin: '20px 0'}}>
            <TextField 
              id="outlined-basic" 
              label="Search" 
              variant="outlined" 
              onChange={handleChange}
              style={{width: '100%'}}
            />
          </div>
          <div className="list">
            {selectedServices.map((service, index) => (
              <Link to={`/consumer/booking/transportation/date-selection`}>
              <div key={index} className="card">
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </div>
              </Link>
            ))}
          </div>
      </Layout>
    );
  };
  
  export default ConsumerDashboard;
  