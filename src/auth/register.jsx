import { useState  } from "react";
import {  useNavigate } from "react-router";
import { useEffect } from "react"; 

import { authService } from "../services/api/auth-service";

// img/icon
import vectorChill from "../assets/vector/Vector-film.png";
import vectorMata from "../assets/vector/Vector-mata.png";
import vectorGoogle from "../assets/vector/vector-google.png";
import myBackground from "../assets/background/login.jpg";
// end img/icon


const Registrasi = () => {
  
   const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  // cek jika sudah login
      useEffect(() =>{
        const user = localStorage.getItem('user')
  
        if (user) {
          navigate('/dashboard')
        }
      }, [navigate])
    // end cek jika sudah login

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
     if (error) setError(null);
  }
  // end handle change

  // handle submit
  const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Validasi
      if (!formData.username || !formData.password || !formData.confirmPassword) {
        setError('Semua field harus diisi');
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        setError('Password dan konfirmasi password tidak sama');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        await authService.register({
          username: formData.username,
          password: formData.password
        });
        
        alert('Registrasi berhasil! Silakan login');
        navigate('/dashboard');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
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
              <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder="Masukkan Kata Sandi"
                    required
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
