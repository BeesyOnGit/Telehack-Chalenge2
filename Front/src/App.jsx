import { Routes,Route } from "react-router-dom"
import './App.css'
import Login from "./Page/Login/Login"
import Register from "./Page/Register/Register"
import Dash from "./Page/DashBord/Dash"

function App() {

  return (
    <>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/Dash' element={<Dash/>}/>
        </Routes>
    </>
  )
}

export default App
