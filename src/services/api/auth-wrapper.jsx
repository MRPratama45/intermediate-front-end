import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";


import { authService } from "./auth-service";


const AuthWrapper = ({children}) =>{

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    const checkAuth = () => {
      const currentUser = authService.getCurrentUser()

      // jika sudah login tp akses halaman auth(login/regis)
        if (currentUser && ['/', '/registrasi'].includes(location.pathname)) {
          navigate('/Dashboard')
        }
      // end jika sudah login tp akses halaman auth(login/regis)

      // jika belum login dan mengaksesn dashboard/halaman terproteksi
        if (!currentUser && !['/', '/registrasi'].includes(location.pathname)) {
          navigate('/')
        }
      // end jika belum login dan mengaksesn dashboard/halaman terproteksi
    }
    checkAuth()
  }, [navigate, location])

  return children  
}

export default AuthWrapper
