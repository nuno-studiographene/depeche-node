import { Button, TextField } from "@mui/material";
import { SERVICES } from "../../../utils/constants";
import { useState } from "react";

const WorkerSignup = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [fullName, setFullName] = useState("");

  const handleCheckboxSelect = (e) => {
    const value = e.target.value;
    if (selectedServices.includes(value)) {
      setSelectedServices(
        selectedServices.filter((service) => service !== value)
      );
    } else {
      setSelectedServices([...selectedServices, value]);
    }
  };

  const handleName = (e) => {
    setFullName(e.target.value);
  };

  console.log(fullName);
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
      }}
    >
      <header>
        <h1>Services provider</h1>
      </header>
      <form
        style={{
          border: "solid 2px lightgray",
          borderRadius: "20px",
          padding: "20px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50%",
          gap: "30px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Enter your full name"
          variant="standard"
          value={fullName}
          onChange={(e) => handleName(e)}
        />

        <p>Which services do you provide?</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {SERVICES.map((service, index) => (
            <label
              onClick={(e) => {
                handleCheckboxSelect(e);
              }}
              key={service.value + index}
              style={{
                display: "flex",
                gap: "10px",
                padding: "8px 16px",
                borderRadius: "20px",
                border: "solid 1px lightgray",
                backgroundColor: "whitesmoke",
                color: "black",
              }}
            >
              {service.name}
              <input type="checkbox" value={service.value} />
            </label>
          ))}
        </div>
        <Button variant="outlined" type="submit" sx={{ borderRadius: "20px" }}>
          Register now
        </Button>
      </form>
    </section>
  );
};

export default WorkerSignup;
