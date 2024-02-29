import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import imageMain from "../../Page/Images/Main.jpg"
import One from "../Images/One.jpeg"
import Two from "../../Page/Images/Two.jpeg"
import four from "../Images/Four.jpeg"
import three from "../../Page/Images/Three.jpeg"
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



                  <div className="section2">
                    <h2 style={{margin:"20px auto" , padding:'15px' , textAlign:'center' }}>Our Servise</h2>
                     <div className="dakhl1">

                          <div className="divOfSection2">
                             <img src={One} alt="" style={{width:'130px' , height:'130px' , borderRadius:'20px'}} />
                             <h3 style={{marginBottom:'10px'}}>IDOOM ADSL</h3>
                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur sit soluta. Fuga optio facilis eveniet harum eligendi fugit distinctio qui, soluta eius sequi quaerat corporis iusto ratione at!
      
                            </p>
                          </div>

                          <div className="divOfSection2">
                             <img src={Two} alt="" style={{width:'130px' , height:'130px' , borderRadius:'20px'}} />
                              <h3 style={{marginBottom:'10px'}}>IDOOM ADSL</h3>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur sit soluta. Fuga optio facilis eveniet harum eligendi fugit distinctio qui, soluta eius sequi quaerat corporis iusto ratione at!
                            </p>
                          </div>

                          <div className="divOfSection2">
                            <img src={three} alt=""  style={{width:'130px' , height:'130px' , borderRadius:'20px'}}/>
                             <h3 style={{marginBottom:'10px'}}>IDOOM ADSL</h3>
                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur sit soluta. Fuga optio facilis eveniet harum eligendi fugit distinctio qui, soluta eius sequi quaerat corporis iusto ratione at!
                            </p>
                          </div>

                     </div>
                  </div>
                       


                       <div className="section3">
                           
                           <div className="DakhlSection3">
                               <div>
                                <img src={four} alt="" style={{width:'400Px',height:'300px' , marginLeft:'120px'}} />
                            </div>

                            <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                                <div>
                                    <p style={{marginBottom:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, alias dolorum? Veniam id necessitatibus temporibus dolor minus, itaque, at eaque accusamus fugit omnis eligendi autem deleniti laboriosam enim odit beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, alias dolorum? Veniam id necessitatibus temporibus dolor minus, itaque, at eaque accusamus fugit omnis eligendi autem deleniti laboriosam enim odit beatae</p>
                                    <button className="ButtnReadMoreInsection3">Read More</button>
                                </div>
                            </div>
                           </div>
                            
                       </div>
      





            <Link to={'/message'} className="Chat" >
                <div className="DivChat">
                    <FontAwesomeIcon icon={faCommentDots} size="xl"  color="white"/>
                </div>
             </Link>


              </div>
        </div>
    )
}