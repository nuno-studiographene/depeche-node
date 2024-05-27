import Layout from "../../../components/Layout";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./styles.css";

const Confirmation = () => {
  return (
    <Layout>
      <div id="confirmation-wrapper">
        <header>
          <Typography id="modal-modal-title" variant="h3" component="h3">
            Review your order
          </Typography>

          <br></br>

          <div className="flex">
            <Typography id="modal-modal-title" variant="h5" component="h5">
              Service:
            </Typography>
            <p>Delivery of medication</p>
          </div>

          <div className="flex">
            <Typography id="modal-modal-title" variant="h5" component="h5">
              Date:
            </Typography>
            <p>27th of June 2024. 3pm</p>
          </div>

          <div className="flex">
            <Typography id="modal-modal-title" variant="h5" component="h5">
              Destination:
            </Typography>
            <p>Hospital Cuf na Rua Ilha do Faial</p>
          </div>

          <br></br>

          <div className="flex">
            <Typography id="modal-modal-title" variant="h2" component="h2">
              Total:
            </Typography>
            <p>33.2€</p>
          </div>
          <br></br>
          <Button variant="contained">Checkout</Button>
        </header>
      </div>
    </Layout>
  );
};

export default Confirmation;
