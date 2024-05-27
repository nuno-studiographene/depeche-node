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
          borderRadius: "20px",
          padding: "20px 40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "100%",
          height: "80%",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "50px",
          }}
        >
          <TextField
            id="standard-basic"
            sx={{
              width: "30%",
            }}
            label="Enter your full name"
            variant="standard"
            value={fullName}
            onChange={(e) => handleName(e)}
          />

          <TextField
            id="standard-basic"
            sx={{
              width: "30%",
            }}
            label="Location"
            variant="standard"
            value={fullName}
            onChange={(e) => handleName(e)}
          />

          <TextField
            id="standard-basic"
            sx={{
              width: "30%",
            }}
            label="Description"
            variant="standard"
            value={fullName}
            onChange={(e) => handleName(e)}
          />
        </div>
        <p>Which services do you provide?</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {SERVICES.map((service, index) => (
            <label
              onClick={(e) => {
                handleCheckboxSelect(e);
              }}
              key={service.value + index}
              style={{
                cursor: "pointer",
                width: "420px",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
                padding: "12px 24px",
                borderRadius: "25px",
                backgroundColor: "black",
                color: "white",
                fontSize: "22px",
              }}
            >
              {service.name}
              <p style={{ fontSize: "12px", color: "lightgrey" }}>
                {service.description}
              </p>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                  alignItems: "end",
                  padding: "8px 4px",
                }}
              >
                <input
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "25px",
                    height: "25px",
                  }}
                  type="checkbox"
                  value={service.value}
                />
              </div>
            </label>
          ))}
        </div>
        <Button
          variant="outlined"
          type="submit"
          sx={{
            borderRadius: "20px",
            width: "30%",
            alignSelf: "center",
            color: "blue",
            fontSize: "18px",
          }}
        >
          Register now
        </Button>
      </form>
    </section>
  );
};

export default WorkerSignup;
