import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import GoogleMapReact from "google-map-react";
import React from "react";
import mapStyles from "../../mapStyles";
import "./Map.css";

const API_KEY = "YOUR_API_KEY";

const Map = ({ coords, places, setCoords, setBounds, setChildClicked }) => {
  const matches = useMediaQuery("(min-width:600px)");

  const renderPlace = (place, i) => (
    <div
      className="markerContainer"
      lat={Number(place.latitude)}
      lng={Number(place.longitude)}
      key={i}
    >
      {!matches ? (
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} className="paper">
          <Typography className="typography" variant="subtitle2" gutterBottom>
            {place.name}
          </Typography>
          <img
            className="pointer"
            src={
              place.photo
                ? place.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
          />
          <Rating
            name="read-only"
            size="small"
            value={Number(place.rating)}
            readOnly
          />
        </Paper>
      )}
    </div>
  );

  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.length && places.map(renderPlace)}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
