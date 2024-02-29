import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import imageMain from "../../Page/Images/Main.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "../DashBord/Dash.css";
export default function Dash() {
    const position = [35.70285291123579, -0.6377538442839725];

    return (
        <div>
            <div className="mainDash" style={{ position: "relative", width: "100%" }}>
                <section
                    className="Section1"
                    style={{
                        background: `url(${imageMain})`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "none",
                    }}
                >
                    <div className="white">
                        <div className="inputDiv" style={{ position: "relative" }}>
                            <input type="text" name="" id="" />
                        </div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ position: "absolute", right: "20px", top: "22px" }} />
                    </div>
                </section>
            </div>
            {/* <MapContainer center={position} zoom={10} scrollWheelZoom={false} className="leafletMap">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}></Marker>
            </MapContainer> */}
        </div>
    );
}
