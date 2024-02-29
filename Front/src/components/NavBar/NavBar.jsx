import "../NavBar/NavBar.css"
import imageLogo from "../../Page/Images/jj.png"
import { Link } from "react-router-dom"
export default function NavBar(){
     return(
        <div>
              <header>
                
                  <div className="header">
                     <div>
                         <img src={imageLogo} alt="" style={{width:'100px' , height:'50px' }} />
                     </div>

                      <div style={{display:'flex', gap:'20px' , padding:'15px'}}>
                          <Link to={"/facture"} className="div">Facture</Link>
                          <Link to={"/offers"}  className="div">Offers</Link>
                          <Link to={"/contact"}  className="div">Contact</Link>
                          <Link  to={"/payment"}  className="div">E-payment</Link>
                      </div>

                      <button>Z</button>

                  </div>
              </header>
        </div>
     )
}