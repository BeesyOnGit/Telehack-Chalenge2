import { Routes,Route } from "react-router-dom"
import './App.css'
import Login from "./Page/Login/Login"
import Register from "./Page/Register/Register"
import Dash from "./Page/DashBord/Dash"
import Facture from "./Page/Facture/Facture"
import Contact from "./Page/Contact/Contact"
import Payment from "./Page/Payment/payment"
import Offers from "./Page/Offers/Offers"

function App() {

  return (
    <>
        <Routes>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/facture' element={<Facture/>}/>
             <Route path='/offers' element={<Offers/>}/> 
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/payment' element={<Payment/>}/>
            <Route path='/Dash' element={<Dash/>}/>
        </Routes>
    </>
  )
}

export default App
