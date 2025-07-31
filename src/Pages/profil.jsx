import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { authService } from "../services/api/auth-service";


import ComponentDaftarSaya from "../Components/component-daftar-saya";
import iconProfile from "../assets/account/account-profile.png"
import speakerLangganan from "../assets/vector/Vector-speaker-teriak.png"


const Profile = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [pesan, setPesan] = useState('');
  // const [previewURL, setPreviewURL] = useState('');
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

  // handleImage
    // const handleImage = (e) => {
    //   const selectedFileImage = e.target.files[0]

    //   if (selectedFileImage) {
        
    //     // preview gambar
    //     const readerPreview = new FileReader();
    //     readerPreview.onload = () => {
    //       setPreviewURL(readerPreview.result)
    //     }
    //     readerPreview.readAsDataURL(selectedFileImage)
    //   }
    // }
  // handleImage

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
      const user = JSON.parse(localStorage.getItem('user'))

       if (!user?.id) {
        setPesan('Data user tidak valid');
        return;
      }

      const response = await authService.DeleteProfile(user.id)
      alert('data berhasil di hapus');
      setPesan('data berhasil di hapus');

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
      // const response = await axios.put(authService.updateProfile(user.id, formData));
      const response = await authService.updateProfile(user.id, formData);

      setPesan(response.data.message);
      alert('Username dan password berhasil di ubah');
      navigete('/dashboard');
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
          <button type="submit" onClick={handleDelete}  className="bg-red-700 rounded-md p-2">Delete Akun</button>
        </div>
        <div>
          <div className="flex">
          {/* kiri */}
            <div className="flex-col w-1/2">
              <div className="flex-col">
                <img src={iconProfile} alt="icon-profile" className="w-36 my-2" />
                <div>
                  <input type="file" accept="image/" />
                  <div className="flex gap-2 my-2">
                    <p>Maksimal 2MB</p>   
                    <button className="bg-blue-700 rounded-lg px-1">Ubah Foto</button>
                  </div>
                </div>
              </div>
              <form onSubmit={handleEditProfile}>
                <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                  <p >Nama Pengguna</p>
                  <input type="text" className="bg-slate-600 w-3/4 text-white" value={formData.username} onChange={handleChange} name="username" required/>
                </div>          
                <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                  <p >Email</p>
                  <input type="email" className="bg-slate-600 w-3/4 text-white" onChange={handleChange} name="email"/>
                </div>
                <div className="bg-slate-600 border-2 border-black rounded-md p-1 w-3/4 relative">
                  <p >Kata Sandi</p>
                  <input type="password" className="bg-slate-600 w-3/4 text-white" value={formData.password}  onChange={handleChange} name="password" required/>
                </div>
              <button className="bg-blue-700 rounded-lg p-1 mt-2">Simpan</button>
              </form>
            </div>
            {/* kanan */}
            <div className="flex w-2/6 h-3/4 rounded-lg bg-slate-500 p-3"> 
              <div className="w-1/4">
                <img src={speakerLangganan} alt="icon-speaker-teriak" />
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