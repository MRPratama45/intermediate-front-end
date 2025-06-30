import {BrowserRouter, Routes, Route} from "react-router"
import Dashboard from "./Pages/dashboard"
import Login from "./Pages/login"
import Registrasi from "./Pages/register"
import PageDaftarSaya from "./Pages/daftar-saya"



function RouteMaster() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="login" element={<Login/>} />
        <Route path="registrasi" element={<Registrasi />} />
        <Route path="daftar-saya" element={<PageDaftarSaya />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteMaster
