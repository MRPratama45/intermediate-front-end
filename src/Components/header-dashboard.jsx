import {Link} from "react-router"
import bgKonten from "../assets/background/dashboard.png"
import vectorSpeaker from "../assets/vector/Vector-speaker.png"
const HeaderDashboard = () => {
  
  return (
    <>
      <img src={bgKonten} alt="img-bg" className="w-full" />
      {/* konten header */}
      <div
        className="absolute
          lg:top-96 lg:left-20 
          md:top-10 md:left-16 s:text-sm lg:text-lg
      "
      >
        <div className="kontenHeader w-1/2 p-5  text-white">
          <h1
            className="font-bold 
          2xl:text-7xl
          lg:text-4xl  
          md:text-4xl "
          >
            Duty After School
          </h1>
          <br />
          <p>
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        {/* button */}
        <div className="button flex justify-between text-white">
          <div className="button">
            <button className="p-5" type="button">
              Mulai
            </button>
            <button className="mx-2" type="button">
              <span className="rounded-xl border-2 border-white px-2">i</span>{" "}
              Selengkapnya
            </button>
            <button
              className="mx-3 rounded-3xl border-2 border-white px-1"
              type="button"
            >
              18+
            </button>
          </div>
          <button className="mx-5" type="button">
            <img
              src={vectorSpeaker}
              alt="speaker-off"
              className="mx-3 rounded-3xl border-2 border-white p-1"
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default HeaderDashboard