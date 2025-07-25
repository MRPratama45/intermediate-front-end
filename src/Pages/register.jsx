import { useState } from "react";
import {  useNavigate } from "react-router";


import { authService } from "../services/api/auth-service";


import vectorChill from "../assets/vector/Vector-film.png";
import vectorMata from "../assets/vector/Vector-mata.png";
import vectorGoogle from "../assets/vector/vector-google.png";
import myBackground from "../assets/background/login.jpg";

const Registrasi = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError(null)

   // handle submit with validasi pada client-side
    if (formData.password !== formData.confirmPassword) {
      setError('password dan konfirmasi password tidak sesuai')
      setLoading(false)
      return
    }

    if (formData.password.length < 2) {
      setError('password tidak boleh kurang dari 2')
      setLoading(false)
      return
    }

    try {
      const response = await authService.register({
      username: formData.username,
      password: formData.password
      })

      // kondisi jika berhasil
      if (response.status >= 200 && response.status < 300 ) {
        navigate('/') //to login page
        console.log('Response dari register:', response);
      } else {
        setError(response.message || 'Registrasi gagal')
      }
      
    } catch (error) {
      console.log('Registrasi-page: ', error);
       if (error.response?.status === 409) {
          setError('username sudah terdaftar')
        } else {
          setError(error.message || 'terjadi kesalahan saat Registrasi')
        }

    } finally {
      setLoading(false)
    }
  // end handle submit with validasi
  }
  // end handle submit

  // handle visible password
    const tooglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    const toogleConfirmPasswordVisibilty = () => {
      setShowPasswordConfirm(!showPasswordConfirm)
    }
  // end handle visible password

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
          <div className="rounded-2xl p-5 bg-black  text-white">
            <div className="header-login font-bold px-32">
              <div className="inline-flex">
                <img className="w-10" src={vectorChill} alt="icon-Chill" />
                <p className="text-3xl">CHILL</p>
              </div>
            </div>
            <br />
            <div className="sub-header-login text-center">
              <p className="font-bold text-2xl">Daftar</p>
              <p>Selamat Datang!</p>
            </div>

            {/* kondisi */}
            
            {error && (
              <div className="mb-4 p-2 bg-red-500 text-white rounded text-center">
                {error}
              </div>
            )}
            {/* end kondisi */}

            <div className="input-login">
              <form onSubmit={ handleSubmit}>
                <label htmlFor="username"> Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  placeholder="Masukkan username"
                  required
                  className="w-full rounded-full bg-transparent border-2 border-gray-700 p-2"
                />
                <br />
                <br />
                <label htmlFor="password"> Kata Sandi</label>
                <div className="max-w-sm">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Masukkan Kata Sandi"
                    required
                    className="w-full rounded-full bg-transparent border-2 border-gray-700 p-2"
                  />
                  <button 
                    type="button" 
                    onClick={tooglePasswordVisibility} 
                    className="relative -right-80 -top-8 focus:outline-none"
                  >
                    <img
                      className="w-6 "
                      src={vectorMata}
                      alt="icon_mata"
                    />
                  </button>
    
                  <label htmlFor="password">Konfirmasi Kata Sandi</label>
                  <input
                    type={showPasswordConfirm ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    placeholder="Masukkan Kata Sandi"
                    className="w-full rounded-full bg-transparent border-2 border-gray-700 p-2"
                  />
                  <button 
                    type="button" 
                    onClick={toogleConfirmPasswordVisibilty} 
                    className="relative -right-80 -top-8 focus:outline-none"
                  >
                    <img
                      className="w-6 "
                      src={vectorMata}
                      alt="icon_mata"
                    />
                  </button>
                </div>
                <div className="page-lain flex justify-between text-lg text-slate-500">
                  <p>
                    Belum Punya Akun?{" "}
                    <span>
                      <a className="text-white " href="/">
                        Masuk
                      </a>
                    </span>
                  </p>
                  <p className="ml-10">
                    <a href="#">Lupa kata sandi?</a>
                  </p>
                </div>
                <br />
                <div className="submit text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="border-2 bg-slate-600 border-gray-700 rounded-full p-1 w-full"
                  >
                    {loading ? 'loading daftar ...' : 'Daftar'}
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
  );
};

export default Registrasi;
