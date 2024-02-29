import "../NavBar/NavBar.css";
import imageLogo from "../../Page/Images/jj.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
    return (
        <div>
            <header>
                <div className="header">
                    <div>
                        <img src={imageLogo} alt="" style={{ width: "100px", height: "50px" }} />
                    </div>

                    <div style={{ display: "flex", gap: "20px", padding: "15px" }}>
                        <Link to={"/facture"} className="div">
                            Facture
                        </Link>
                        <Link to={"/offers"} className="div">
                            Offers
                        </Link>
                        <Link to={"/contact"} className="div">
                            Contact
                        </Link>
                    </div>

                    <div style={{ marginTop: "10px", marginRight: "20px" }} className="DiVBu">
                        <Link className="buttn1">
                            <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: "4px" }} />
                            <p>Payer</p>
                        </Link>
                        <Link className="buttn2" to={"/payment"} style={{ fontSize: "10px" }}>
                            <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: "4px" }} />
                            Payer pour quelqun
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}
