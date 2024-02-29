import "../NavBar/NavBar.css"

import imageLogo from "../../Page/Images/jj.png"
export default function NavBar(){
     return(
        <div>
              <header>
                <div className="header">
                     <div>
                         <img src={imageLogo} alt="" style={{width:'100px' , height:'50px', }} />
                     </div>

                      <div>
                          <div>Facture</div>
                          <div></div>
                          <div></div>
                          <div></div>
                      </div>

                </div>
              </header>
        </div>
     )
}