import {BrowserRouter, Routes, Route} from "react-router-dom"
import { WatchlistProvider } from "./context/watchlist-context.jsx"
import Dashboard from "./Pages/dashboard.jsx"
import Login from "./Pages/login.jsx"
import Registrasi from "./Pages/register.jsx"
import DaftarSaya from "./Pages/daftar-saya.jsx"
import Film from "./Pages/film.jsx"
import Profile from "./Pages/profil.jsx"
import AuthWrapper from "./services/api/auth-wrapper.jsx"
import ProtectedRoute from "./Components/protect-route.jsx"


function RouteMaster() {

  return (
      <BrowserRouter>
        <AuthWrapper>
          <WatchlistProvider>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/registrasi" element={<Registrasi />} />

              {/* protect */}
              <Route path="/dashboard" element={<ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>} 
              />
              <Route path="/daftar-saya" element={<ProtectedRoute>
                  <DaftarSaya />
                </ProtectedRoute>} 
              />
              <Route path="/film" element={<ProtectedRoute>
                  <Film />
                </ProtectedRoute>} 
              />
              <Route path="/profile" element={<ProtectedRoute>
                  <Profile />
                </ProtectedRoute>} 
              />
              {/* end protect */}
            </Routes>
          </WatchlistProvider>
        </AuthWrapper>
      </BrowserRouter>
  )
}

export default RouteMaster
