import vectorChill from "../assets/vector/Vector-film.png";
import vectorMata from "../assets/vector/Vector-mata.png";
import vectorGoogle from "../assets/vector/vector-google.png";
import myBackground from "../assets/background/login.jpg";
import { Link } from "react-router";
const Login = () => {
  console.log();
  
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
              <form>
                <label htmlFor="username"> Username</label>
                <input
                  type="text"
                  placeholder="Masukkan username"
                  className="w-full rounded-full bg-transparent border-2 border-gray-700 p-2"
                />
                <br />
                <br />
                <label htmlFor="password"> Kata Sandi</label>
                <div className="max-w-full ">
                  <input
                    type="password"
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
                  <button
                    type="submit"
                    className="border-2 bg-slate-600 border-gray-700 rounded-full p-1 w-full"
                  >
                    Daftar
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