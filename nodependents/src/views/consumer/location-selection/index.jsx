import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import imgUrl1 from "../../../assets/fake-1.png";
import imgUrl2 from "../../../assets/fake-2.png";
import Layout from "../../../components/Layout";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

const libraries = ["places"]; // Include Places library for better location search

const mapContainerStyle = {
  width: "642px", // Adjust width and height as needed
  height: "400px",
};

const center = {
  lat: 40.7128, // Replace with your default latitude
  lng: -74.0059, // Replace with your default longitude
};

const zoom = 10;

const LocationSelection = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);
  const [markers, setMarkers] = useState([]);

  const [image, setImage] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  }, []);

  const handleMarkerDragEnd = (event) => {
    setDestinationLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const onMapClick = (e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
    setImage(image + 1);
  };

  const streets = [
    { label: "Rua Interesses", value: 1 },
    { label: "Rua Da Escada", value: 2 },
    { label: "Ben Dover Street", value: 3 },
    { label: "Avenida Paulista", value: 4 },
    { label: "Praça da Sé", value: 5 },
    { label: "Rua Augusta", value: 6 },
    { label: "Largo do Machado", value: 7 },
    { label: "Avenida Rio Branco", value: 8 },
    { label: "Rua XV de Novembro", value: 9 },
    { label: "Beco do Batman", value: 10 },
    { label: "Rua Teodoro Sampaio", value: 11 },
    { label: "Rua Oscar Freire", value: 12 },
    { label: "Avenida Brigadeiro Faria Lima", value: 13 },
    { label: "Avenida Ipiranga", value: 14 },
    { label: "Rua da Consolação", value: 15 },
    { label: "Avenida António Augusto Aguiar", value: 24 },
    { label: "Rua Augusta", value: 16 }, // Repeated for variety
    { label: "Praça Floriano Peixoto", value: 17 },
    { label: "Rua Haddock Lobo", value: 18 },
    { label: "Avenida Paulista", value: 19 }, // Repeated for variety
    { label: "Avenida Faria Lima", value: 20 }, // Abbreviated version
    { label: "Rua Ilha do Faial", value: 21 },
    { label: "Avenida Brigadeiro", value: 22 }, // Abbreviated version
    { label: "Parque Ibirapuera", value: 23 },
  ];

  const switchImage = () => {
    setImage(image + 1);
  };

  return (
    <Layout>
      <div id="location-selection-wrapper">
        <Typography id="modal-modal-title" variant="h3" component="h3">
          Where should we take you?
        </Typography>
        <br></br>
        {image === 0 && (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={streets}
            sx={{ width: 300 }}
            onChange={switchImage}
            renderInput={(params) => (
              <TextField {...params} label="Type your location" />
            )}
          />
        )}
        {image === 1 && (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={streets}
            sx={{ width: 300 }}
            onChange={switchImage}
            renderInput={(params) => (
              <TextField {...params} label="Type your destination" />
            )}
          />
        )}
        <br></br>
        {image === 1 && (
          <img src={imgUrl1} alt="random" className="maps-wrapper" />
        )}
        {image === 2 && (
          <img src={imgUrl2} alt="random" className="maps-wrapper" />
        )}

        {image === 0 && (
          <LoadScript
            googleMapsApiKey="AIzaSyCRJ94h_gxrzE1VIIOrsiEoTEVFEyuYjVg"
            libraries={libraries}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={zoom}
              center={currentLocation || center}
              onClick={onMapClick}
            >
              {markers[markers.length - 1] && (
                <Marker
                  position={{
                    lat: markers[markers.length - 1].lat,
                    lng: markers[markers.length - 1].lng,
                  }}
                />
              )}
            </GoogleMap>
          </LoadScript>
        )}
        <br></br>
        <Link
          to={`/consumer/booking/transportation/file-upload`}
          className={image === 2 ? "active" : "disabled"}
        >
          <Button variant="contained">Next</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default LocationSelection;
