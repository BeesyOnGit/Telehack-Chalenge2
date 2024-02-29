import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import imageMain from "../../Page/Images/Main.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCommentDots , faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import "../DashBord/Dash.css"
export default function Dash() {
    return(
        <div>
              <NavBar/>
              <div className="mainDash" style={{position:'relative', width:'100%'}}>
                  

                  <section className="Section1" style={{background:`url(${imageMain})` , backgroundPosition:'center center' , backgroundSize:'cover' , backgroundRepeat:'none'}}>
                       <div className="white">
                          <div className="inputDiv" style={{position:'relative'}}> <input type="text" name="" id="" /></div>
                          <FontAwesomeIcon icon={faMagnifyingGlass} style={{position:"absolute",right:'20px',top:'22px'}} />
                       </div>
                  </section>





            <Link to={'/message'} className="Chat" >
                <div className="DivChat">
                    <FontAwesomeIcon icon={faCommentDots} size="xl"  color="white"/>
                </div>
             </Link>


              </div>
        </div>
    )
}