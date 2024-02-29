import "../Login/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Side from "../Images/Side.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import imLogo from "../Images/jj.png";
import { generalAddEditFunction, generalGetFunction } from "../../MiddleWear/ClientFunctions";
import { loginFunc } from "../../MiddleWear/ApiMiddleWear";

export default function Login() {
    const [email, setEmail] = useState("");
    const [loding, setLoding] = useState(false);
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [test, setTest] = useState(false);
    const navigate = useNavigate();
    const login = async () => {
        generalAddEditFunction("", {
            endPoint: loginFunc({ phoneFix: email, passWord: password }),
            lang: "fr",
            successCode: "11",
            refresh: () => {},
            optFunc: (data) => {
                window.localStorage.setItem("token", data);

                return setTimeout(() => {
                    navigate("/");
                    return location.reload();
                }, 2000);
            },
        });
    };

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <div className="login" style={{ background: `url(${""})`, backgroundSize: "cover" }}>
                <div className="BoxLogin">
                    <div className="one">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={imLogo} alt="" className="StyleImageBig" style={{ width: "100Px", height: "70px" }} />
                        </div>

                        <div style={{ marginTop: "40Px" }}>
                            <div className="ty">
                                <input
                                    type="texte"
                                    placeholder="numero fix"
                                    style={{ border: email == "" && test ? "1px solid red" : "" }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {email == "" && test && <p className="Wari">Pls Enter Your Email</p>}
                            </div>

                            <div className="ty">
                                <input
                                    type="password"
                                    placeholder="mot de pass"
                                    style={{ border: password == "" && test ? "1px solid red" : "" }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {password == "" && test && <p className="Wari">Pls Enter Your password</p>}
                            </div>

                            <div className="butt">
                                <button className="bbbb" onClick={login}>
                                    <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faPaperPlane} /> Login
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="two" style={{ background: `url(${Side})`, backgroundSize: "cover" }}>
                        {err != "" && <p className="Err">{err}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
