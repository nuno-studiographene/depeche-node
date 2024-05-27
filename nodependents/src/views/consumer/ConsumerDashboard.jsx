import { TextField } from "@mui/material";
import { SERVICES } from "../../utils/constants";
import './styles.css';
import Layout from "../../components/Layout";

const ConsumerDashboard = () => {
    return (
      <Layout>
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
      </Layout>
    );
  };
  
  export default ConsumerDashboard;
  