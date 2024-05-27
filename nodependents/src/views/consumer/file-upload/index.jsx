import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Layout from "../../../components/Layout";
import Typography from "@mui/material/Typography";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload here
    console.log(file);
  };

  return (
    <Layout>
      <div id="location-selection-wrapper">
        <Typography id="modal-modal-title" variant="h3" component="h3">
          Upload your prescription
        </Typography>

        <br></br>

        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
        </form>

        <br></br>
        <Link
          to={`/consumer/booking/transportation/confirmation`}
          className={file !== null ? "active" : "disabled"}
        >
          <Button variant="contained">Next</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default FileUpload;
