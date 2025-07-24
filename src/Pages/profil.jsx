import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import ComponentDaftarSaya from "../Components/component-daftar-saya";

const Profile = () => {
  return (
    <div>
      <Navbar/>
      <div className="ps-12 bg-black text-white p-10">
        <h1 className="text-2xl font-bold mb-3">Profile</h1>
        <div>
          <div className="flex">
          {/* kiri */}
            <div className="flex-col w-1/2">
              <div className="flex">
                <img src="" alt="icon-profile" />
                <div>
                  <button className="bg-red-700">Ubah Foto</button>
                  <p><span><img src="" alt="icon-upload-img" /></span> Maksimal 2MB</p>  
                </div>
              </div>
              <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                <p >Nama Pengguna</p>
                <input type="text" className="w-3/4" />
                <img src="" alt="icon-edit" className="absolute right-0 bottom-5"/>
              </div>          
              <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                <p >Email</p>
                <input type="email" className="w-3/4" />
                <img src="" alt="icon-edit" className="absolute right-0 bottom-5" />
              </div>
              <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                <p >Kata Sandi</p>
                <input type="password" className="w-3/4" />
                <img src="" alt="icon-edit" className="absolute right-0 bottom-5" />
              </div>
              <button className="bg-blue-700 rounded-lg p-1 mt-2">Simpan</button>
            </div>
            {/* kanan */}
            <div className="flex w-2/6 h-3/4 rounded-lg bg-slate-500 p-3"> 
              <div className="w-1/4">
                <img src="" alt="icon-speaker-teriak" />
              </div>
              <div className="w-full">
                <h4 className="font-bold ">Saat ini anda belum berlangganan</h4>
                <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu !</p>
                <button className="bg-blue-700 rounded-lg p-1 relative left-56 ">Mulai Langganan</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <ComponentDaftarSaya />
      <Footer/>
    </div>
  )
}

export default Profile