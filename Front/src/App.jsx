import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Dash from "./Page/DashBord/Dash";
import Facture from "./Page/Facture/Facture";
import Contact from "./Page/Contact/Contact";
import Payment from "./Page/Payment/payment";
import Offers from "./Page/Offers/Offers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
    const [chatHide, setChatHide] = useState(true);
    const [messages, setMessages] = useState(true);

    return (
        <>
            <div className="Chat">
                {chatHide && (
                    <div className="chatContainer">
                        <div className="ty inputChat">
                            <section className="messagesContainer">
                                {/* {messages &&
                                    messages.map((message, i) => {
                                        // const { sender, content } = message;
                                        return <div></div>;
                                    })} */}
                            </section>
                            <input type="text" placeholder="discuter avec le support technique" />
                        </div>
                    </div>
                )}
                <div
                    className="DivChat"
                    onClick={() => {
                        setChatHide(!chatHide);
                    }}
                >
                    <FontAwesomeIcon icon={faCommentDots} size="xl" color="white" />
                </div>
            </div>
            <NavBar />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/facture" element={<Facture />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/Dash" element={<Dash />} />
            </Routes>
        </>
    );
}

export default App;
