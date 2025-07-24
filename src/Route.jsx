import {BrowserRouter, Routes, Route} from "react-router-dom"
import { WatchlistProvider } from "./context/watchlist-context.jsx"
import Dashboard from "./Pages/dashboard.jsx"
import Login from "./Pages/login.jsx"
import Registrasi from "./Pages/register.jsx"
import DaftarSaya from "./Pages/daftar-saya.jsx"
import Film from "./Pages/film.jsx"
import Profile from "./Pages/profil.jsx"


function RouteMaster() {

  return (
      <BrowserRouter>
        <WatchlistProvider>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/registrasi" element={<Registrasi />} />
            <Route path="/daftar-saya" element={<DaftarSaya />} />
            <Route path="/film" element={<Film />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </WatchlistProvider>
      </BrowserRouter>
  )
}

export default RouteMaster
