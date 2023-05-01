import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = ({ position, zoom }) => {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>A beautiful location.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
