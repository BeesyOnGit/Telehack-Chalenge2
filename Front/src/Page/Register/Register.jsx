import "../Login/Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Page/Register/Register.css"
import Side  from "../Images/Side.jpg"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import imLogo from "../Images/jj.png"
import { useContext } from "react";


export default function Register() {
    let [email , setEmail] = useState('')
    let [phonePres , setPhonePres] = useState('')
    let [phoneLinge , setPhoneLinge] = useState('')
    let [firstName , setFirstName] = useState('')
    let [lasteName , setLasteName] = useState('')

    let [loding , setLoding] = useState(false)
    let [password, setPassword] = useState('')
    let [err, setErr] = useState('')
    let [test, setTest] = useState(false)
    let nav = useNavigate()

    async function login(event) {
      event.preventDefault()
      if(email == "" || password =="") {
        setTest(true)
        return
      }
      setLoding(true)
      const res = await axios.post('http://localhost:8080/authfcation/login',{
        email:email,
        password:password
      })
      setLoding(false)
      console.log(res);
      if(res.data == 'Email is Wongr'){
         setErr(res.data)
        return
      }
      if(res.data == "Password IS Wongr"){
       setErr(res.data)
        return
      }
      window.localStorage.setItem('Token', res.data.token)
      nav('/accueil')
        // try {
        //      const res = await axios.post('')
                 
        // } catch (err) {
        //     console.log(err);
        // }
    }

    return(
        <div style={{width:'100%',height:'100vh'}}>
              <div className="login" style={{background:`url(${''})`, backgroundSize:'cover'}}>
                  <div className="BoxLogin">
                    <div className="one">
                          <div style={{display:'flex',justifyContent:'center'}}><img src={imLogo} alt="" className="StyleImageBig" style={{width:'100Px', height:'70px'}} /></div>
                            
                           <div style={{marginTop:'40Px'}}>

                               
                            <div className="ty cl" style={{display:'flex'}}>
                                <div >
                                    <input type="password" placeholder="Phone 1 " style={{border:password == "" && test ?'1px solid red':''}}  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                                    {password == ""  && test && <p className="Wari">Pls Enter Your password</p>}
                                </div>

                                <div >
                                     <input type="password" placeholder="Phone 2" style={{border:password == "" && test ?'1px solid red':''}}  value={lasteName} onChange={(e)=>setLasteName(e.target.value)}/>
                                    {password == ""  && test && <p className="Wari">Pls Enter Your password</p>}
                                </div>

                           </div>


                              <div className="ty">
                            <input type="email" placeholder="Email" style={{border:email == "" && test ?'1px solid red':''}} value={email} onChange={(e)=>setEmail(e.target.value)} />
                            {email == ""  && test && <p className="Wari">Pls Enter Your Email</p>}
                          </div>

                           <div className="ty">
                              <input type="password" placeholder="Password" style={{border:password == "" && test ?'1px solid red':''}}  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                               {password == ""  && test && <p className="Wari">Pls Enter Your password</p>}
                           </div>


                            <div className="ty cl" style={{display:'flex'}}>
                                <div >
                                    <input type="password" placeholder="Phone 1 " style={{border:password == "" && test ?'1px solid red':''}}  value={phoneLinge} onChange={(e)=>setPhoneLinge(e.target.value)}/>
                                    {password == ""  && test && <p className="Wari">Pls Enter Your Phone 1</p>}
                                </div>

                                <div >
                                     <input type="password" placeholder="Phone 2" style={{border:password == "" && test ?'1px solid red':''}}  value={phonePres} onChange={(e)=>setPhonePres(e.target.value)}/>
                                    {password == ""  && test && <p className="Wari">Pls Enter Your phone 2</p>}
                                </div>

                           </div>

                           <div className="butt">
                              <button className="bbbb" onClick={login} >
                                <FontAwesomeIcon  style={{marginRight:'4px'}} icon={faPaperPlane} />  Register
                              </button>
                            </div>
                           </div>
                    </div>

                       <div className="two" style={{background:`url(${Side})`,backgroundSize:'cover'}}>
                         {err != "" && <p className="Err">{err}</p>}
                       </div>

                   
                  </div>
                  
                  
              </div>
        </div>
    )
}