import {BrowserRouter, Routes, Route} from "react-router-dom"
import { WatchlistProvider } from "./context/watchlist-context.jsx"
import Dashboard from "./Pages/dashboard.jsx"
import Login from "./Pages/login.jsx"
import Registrasi from "./Pages/register.jsx"
import DaftarSaya from "./Pages/daftar-saya.jsx"


function RouteMaster() {

  return (
      <BrowserRouter>
        <WatchlistProvider>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registrasi" element={<Registrasi />} />
            <Route path="/daftar-saya" element={<DaftarSaya />} />
          </Routes>
        </WatchlistProvider>
      </BrowserRouter>
  )
}

export default RouteMaster
