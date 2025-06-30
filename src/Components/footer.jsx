import iconLogo from "../assets/vector/Vector-film.png"
const Footer = () => {
  return(
    <>
         <div className="bg-black text-white p-24">
           <div className="">
             <div className="lg:grid lg:grid-cols-4 lg:justify-center lg:items-center md:inline-block">
               <div className="block w-full">
                 <div className="groupLogo inline-flex items-center mb-5 gap-3">
                   <img src={iconLogo} alt="logo" className="w-10" />
                   <h2 className="font-bold text-4xl">CHILL</h2>
                 </div>
                 <p className="block">@2023 Chill All Rights Reserved</p>
               </div>
               <div className="col-span-2 s:h-10 lg:h-auto">
                 <div className="s:flex s:justify-between">
                   <p className="font-bold">Genre</p>
                   <span>
                     <button>
                       <img
                        src=""
                        alt="vector-bottom"
                        className=" s:relative s:top-3 lg:invisible"
                      />
                    </button>
                  </span>
                </div>
                <div className="genre grid grid-cols-4 w-full lg:h-auto ">
                  <div className="">
                    <div className="listGenre w-fit">
                      <ul className="s:invisible lg:visible">
                        <li>Aksi</li>
                        <li>Anak-Anak</li>
                        <li>Anime</li>
                        <li>Britania</li>
                      </ul>
                    </div>
                  </div>

                  <div className="listGenre w-fit">
                    <ul className="s:invisible lg:visible">
                      <li>Drama</li>
                      <li>Fantasi Ilmiah & Fantasi</li>
                      <li>Kejahatan</li>
                      <li>KDrama</li>
                    </ul>
                  </div>
                  <div className="listGenre">
                    <ul className="s:invisible lg:visible">
                      <li>Komedi</li>
                      <li>Petualangan</li>
                      <li>Perang</li>
                      <li>Romantis</li>
                    </ul>
                  </div>
                  <div className="listGenre">
                    <ul className="s:invisible lg:visible">
                      <li>Sains & Alam</li>
                      <li>Thriller</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="colGenre s:h-10 lg:h-auto">
                <div className="s:flex s:justify-between">
                  <p className="font-bold">Bantuan</p>
                  <span>
                    <img
                      src=""
                      alt="vector-bottom"
                      className="md:relative md:top-3 lg:invisible"
                    />
                  </span>
                </div>
                <div className="listGenre w-fit">
                  <ul className="s:invisible lg:visible">
                    <li>FAQ</li>
                    <li>Kontak Kami</li>
                    <li>Privasi</li>
                    <li>Syarat & Ketentuan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


export default Footer