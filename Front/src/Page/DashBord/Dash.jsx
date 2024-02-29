import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
import "../DashBord/Dash.css"
export default function Dash() {
    return(
        <div>
              <NavBar/>
              <div className="mainDash" style={{position:'relative'}}>
                  hh


            <Link to={'/message'} className="Chat" >
                <div className="DivChat">
                    <FontAwesomeIcon icon={faCommentDots} size="xl"  color="white"/>
                </div>
             </Link>
              </div>
        </div>
    )
}