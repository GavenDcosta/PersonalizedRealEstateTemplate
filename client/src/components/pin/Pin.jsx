import { Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Make sure to import Leaflet library
import {Link} from "react-router-dom"
import markerImg from "./marker-icon-2x.png";

function Pin({ item }) {
  // Create an icon instance
  const customIcon = L.icon({
    iconUrl: markerImg,
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  });

  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
