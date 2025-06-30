import {BrowserRouter, Routes, Route} from "react-router"
import Dashboard from "./Pages/dashboard"
import Login from "./Pages/login"
import Registrasi from "./Pages/register"



function RouteMaster() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="login" element={<Login/>} />
        <Route path="registrasi" element={<Registrasi />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteMaster
