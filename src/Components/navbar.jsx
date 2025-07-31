import { useState} from "react"
import {Link, useNavigate} from "react-router"
// import { authService } from "../services/api/auth-service"


import iconLogo from "../assets/vector/Vector-film.png"
import iconProfile from "../assets/account/account-profile.png"
import vectorButtom from "../assets/vector/vector-bottom.png"
import subProfile from "../assets/vector/Vector-list-akun.png"
import star from "../assets/vector/Vector-star.png"
import iconKeluar from "../assets/vector/Vector-list-akun-keluar.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  // cek user login atau tidak
  // const isLogin = localStorage.getItem('user' !== null)
  
  const handleLogout = async () => {
    try {
      // hapus data user from local storage
      localStorage.removeItem('user')

      // redirect to login page
      navigate("/");
    } catch (error) {
      console.log('error-logout: ', error);
    }
  }

  return (
    <>
      <div className="flex justify-between bg-black text-white p-4 items-center gap-2">
        <div className="flex items-center gap-2">
          <img src={iconLogo} alt="icon-Chill" className=""/>
          <h2 className="font-bold text-2xl"><a href="/">CHILL</a></h2>
          <ul className="flex gap-20 ms-10">
            <li className=""><Link to="/series">Series</Link></li>
            <li className=""><Link to="/film">Film</Link></li>
            <li className=""><Link to="/daftar-Saya">Daftar Saya</Link></li>
          </ul>
        </div>

        <div className="flex items-center">
          <img
            src={iconProfile}
            alt="vector-avatar"
            className="w-10 h-10 rounded-full mx-3"
          />
          <button>
            <img
              onClick={() => setIsOpen(!isOpen)}
              src={vectorButtom}
              alt="icon-detailAkun"
            />
          </button>
        </div>
      </div>
      <div className="avatar flex items-center me-24 text-white relative">           
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } listDetailAkun text-left absolute right-6 top-16 w-44 bg-black rounded-md z-50 md:right-6 sm:right-2`}
            >
              <ul>
                <li>
                  <div className="flex p-2">
                    <img src={subProfile} alt="venctor-profil" className="me-3 w-5" />
                    <Link to={"/profile"}>Profil Saya</Link>
                  </div>
                </li>
                <li>
                  <div className="flex p-2">
                    <img
                      src={star}
                      alt="venctor-profil"
                      className="me-3 w-5 h-5"
                    />
                    <a href="#">Ubah Premium</a>
                  </div>
                </li>
                <li>
                  <div className="flex p-2">
                    <img src={iconKeluar} alt="venctor-profil" className="me-3 w-5" />
                    <button type="button" onClick={handleLogout}>keluar</button>
                  </div>
                </li>
              </ul>
            </div>
      </div>
    </>
  )
}

export default Navbar