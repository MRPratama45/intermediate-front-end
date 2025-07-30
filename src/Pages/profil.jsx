import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import ComponentDaftarSaya from "../Components/component-daftar-saya";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { authService } from "../services/api/auth-service";
// import { authService } from "../services/api/auth-service";

const Profile = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [pesan, setPesan] = useState('');
  const navigete = useNavigate();

  // load user data saat komponen dimount (dimount= diproses)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigete('/');
      return
    }

    setFormData({
      username: user.username,
      email: user.email,
      password: user.password
    })

  },[navigete])


  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  // end handle change

  // handleDelete
  const handleDelete = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await axios.delete(authService.DeleteProfile(user.id));
      setPesan(response.data.message);

      navigete('/');
    } catch (error) {
      console.log('ini error: ',error);
      
    }
  }
  // end handleDelete


  // handle button edit profile
  const handleEditProfile = async(e) => {
    e.preventDefault()
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await axios.put(authService.updateProfile(user.id, formData));

      setPesan(response.data.message);
      
    } catch (error) {
      console.log('ini error: ',error);
      
    }
  }
  // end handle button edit profile


  return (
    <div>
      <Navbar/>
      <div className="ps-12 bg-black text-white p-10">
        <h1 className="text-2xl font-bold mb-3">Profile</h1>
        {pesan && <p className={pesan.includes('success') ? 'sukses' : 'error'}>{pesan}</p>}
        <div>
          <button type="submit" onClick={handleDelete} className="bg-red-700 rounded-md p-2">Delete Akun</button>
        </div>
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
              <form onSubmit={handleEditProfile}>
                <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                  <p >Nama Pengguna</p>
                  <input type="text" className="w-3/4 text-black" value={formData.username} onChange={handleChange} name="username" required/>
                  <img src="" alt="icon-edit" className="absolute right-0 bottom-5"/>
                </div>          
                <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                  <p >Email</p>
                  <input type="email" className="w-3/4 text-black" value={formData.user} onChange={handleChange} name="email"/>
                  <img src="" alt="icon-edit" className="absolute right-0 bottom-5" />
                </div>
                <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                  <p >Kata Sandi</p>
                  <input type="password" className="w-3/4 text-black" value={formData.password}  onChange={handleChange} name="password" required/>
                  <img src="" alt="icon-edit" className="absolute right-0 bottom-5" />
                </div>
              <button className="bg-blue-700 rounded-lg p-1 mt-2">Simpan</button>
              </form>
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