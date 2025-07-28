import { useNavigate, Link } from "react-router";
import {useEffect, useState} from "react";

import { authService } from "../services/api/auth-service";


import vectorChill from "../assets/vector/Vector-film.png";
import vectorMata from "../assets/vector/Vector-mata.png";
import vectorGoogle from "../assets/vector/vector-google.png";
import myBackground from "../assets/background/login.jpg";

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // cek jika sudah login
    useEffect(() =>{
      const user = localStorage.getItem('user')

      if (user) {
        navigate('/dashboard')
      }
    }, [navigate])
  // end cek jika sudah login

    // handle change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
    // end handle change


  // handle submit
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true)
    setError(null)

    // logika proses login
    try {
      const response = await authService.login(formData)
      console.log('login respon debug: ', response);

      navigate('/dashboard') // redirect to dashboard dengan login sukses
    } catch (error) {
      console.log('error-page-login: ',error);

      // handle error spesifik
        if (error.response?.status === 401) {
          setError('Username atau Password salah')
        
        } else if (error.response?.status === 404) {
          setError('Akuntidak ditemukan')
      
        } else {
          setError('Terjadi kesalahan saat login')
        }
      // end handle error spesifik
    
    }finally {
      setLoading(false)
    }
    // end logika proses login
  }
  // end handle submit

  return (
    <>
      <div className="">
        <img className="w-screen" src={myBackground} alt="bg-login" />
        <div
          className="w-screen absolute flex justify-center 
          2xl:top-1/4 2xl:-left-5
          xl:top-0 xl:left-0 
          lg:top-0 lg:left-0  
          md:top-0 md:left-0  
          sm:top-0 sm:left-0  
          s:top-0  s:left-0"
        >
          <div className=" rounded-2xl p-5 bg-black  text-white">
            <div className="header-login font-bold px-32">
              <div className="flex justify-center">
                <img className="w-10" src={vectorChill} alt="icon-Chill" />
                <p className="text-3xl">CHILL</p>
              </div>
            </div>
            <br />
            <div className="sub-header-login text-center">
              <p className="font-bold text-2xl">Masuk</p>
              <p>Selamat datang kembali!</p>
            </div>
            <div className="input-login">
              <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Masukkan username"
                  className="w-full rounded-full bg-transparent border-2 border-gray-700 p-2"
                />
                <br />
                <br />
                <label htmlFor="password"> Kata Sandi</label>
                <div className="max-w-full ">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Masukkan Kata Sandi"
                    className="w-full rounded-full bg-transparent border-2 border-gray-700 p-2"
                  />

                  <img
                    className="w-6 relative -right-80 -top-8"
                    src={vectorMata}
                    alt="icon_mata"
                  />
                </div>
                <div className="page-lain flex justify-between text-lg text-slate-500">
                  <p>
                    Belum Punya Akun?{" "}
                    <span>
                      <a className="text-white " href="/registrasi">
                        Daftar
                      </a>
                    </span>
                  </p>
                  <p className="ml-10">
                    <Link to="#">Lupa kata sandi?</Link>
                  </p>
                </div>
                <br />
                <div className="submit text-center">
                 {error && <div className="error"> {error} </div>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="border-2 bg-slate-600 border-gray-700 rounded-full p-1 w-full"
                  >
                    {loading ? 'Loading...' : 'Masuk'}
                  </button>
                  <p className="my-2 text-slate-500 ">atau</p>
                  <button
                    type="submit"
                    className="border-2 border-gray-700 rounded-full p-1 w-full"
                  >
                    <img
                      className="inline-flex me-3 w-5"
                      src={vectorGoogle}
                      alt="icon_google"
                    />
                    <a href="https://google.com">Masuk dengan Google</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login