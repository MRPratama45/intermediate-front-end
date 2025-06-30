import { useState, useContext } from "react"
import { Link } from "react-router"
import { WatchlistContext } from "../../context/watchlist-context.jsx"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from "../../assets/poster/melanjutkanNontonFilm/allOfUsDead.png"
import img2 from "../../assets/poster/melanjutkanNontonFilm/batman.png"
import img3 from "../../assets/poster/melanjutkanNontonFilm/DontLookUp.png"
import img4 from "../../assets/poster/melanjutkanNontonFilm/guardiansGalaxy.png"
import img5 from "../../assets/poster/melanjutkanNontonFilm/littleMermaid.png"
import img6 from "../../assets/poster/melanjutkanNontonFilm/otto.png"
import img7 from "../../assets/poster/melanjutkanNontonFilm/quantumania.png"
import img8 from "../../assets/poster/melanjutkanNontonFilm/theTomorrow.png"
import star from "../../assets/vector/Vector-star.png"

const TopRating = () => {
  // context
  const {watchlist, addToWatchlist, removeFromWatchlist} = useContext(WatchlistContext)
  // end context

  const [images] = useState([
      {
        id: 1,
        url: img1,
        title: `All Of Is Dead`,
        description: `All Of Is Dead`,
        Top10: false,
        episodeBaru: true,
        icon: star,
        score: `4.5/5`,
        top10: false
      },
      {
        id: 2,
        url: img2,
        title: `Batman`,
        description: `Batman`,
        Top10: false,
        episodeBaru: false,
        icon: star,
        score: `4.5/5`,
        top10: false
      },
      {
        id: 3,
        url: img3,
        title: `Don't Look Up`,
        description: `Don't Look Up`,
        Top10: false,
        episodeBaru: false,
        icon: star,
        score: `4.5/5`,
        top10: true
      },
      {
        id: 4,
        url: img4,
        title: `Guardians Galaxy`,
        description: `Guardians Galaxy`,
        Top10: false,
        episodeBaru: false,
        icon: star,
        score: `4.5/5`,
        top10: false
      },
      {
        id: 5,
        url: img5,
        title: `Little Mermaid`,
        description: `Little Mermaid`,
        Top10: false,
        episodeBaru: false,
        icon: star,
        score: `4.5/5`,
        top10: false
      },
      {
        id: 6,
        url: img6,
        title: `Otto`,
        description: `Otto`,
        Top10: false,
        episodeBaru: false,
        icon: star,
        score: `4.5/5`,
        top10: false
      },
      {
        id: 7,
        url: img7,
        title: `Quantum Mania`,
        description: `Quantum Mania`,
        Top10: false,
        episodeBaru: false,
        icon: star,
        score: `4.5/5`,
        top10: false
      },
      {
        id: 8,
        url: img8,
        title: `The Tommorow`,
        description: `The Tommorow`,
        Top10: false,
        episodeBaru: false,
        icon: star,
        score: `4.5/5`,
        top10: false
      },
    ]);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

    // add movie to daftar saya
    const [selectMovie, setSelectedMovie] = useState(null)
    const [showPopup, setShowPopup] =useState(false)
    // const [watchlist, setWatchlist] =useState(() => {
    //   const saved = localStorage.getItem('watchlist-film');
    //   return saved ? JSON.parse(saved) : []
    // }) // state untuk menyimpan film yg sudah di tambahkan di local storage
  
    // const handleAddToDaftarSaya = (movie) => {
    //   console.log(`Film add to daftar saya: ${movie.title} - berhasil di tambahkan`);
    //   // setSelectedMovie(movie)
    //   // setShowPopup(false)

    //   if (!watchList.some(item => item.id === selectMovie.id)) {
    //     setWatchList([...watchList, selectMovie])
    //   }
    //   setShowPopup(false)
    // }

    // const handleRemoveFromWatchList = (movieId) => {
    //   // hapus film dari watchlist
    //   setWatchList(watchList.filter(item => item.id !== movieId))
    // }

    const isInWatchList = (movieId) => {
      // cek film terdaftar atau tidak
      return watchlist.some(item => item.id === movieId)
    }

    // Gunakan useEffect untuk menyimpan ke localStorage
    // useEffect(() => {
    //   localStorage.setItem('watchlist', JSON.stringify(watchList));
    // }, [watchList]);



  return (
  <>
    <div className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">Top Rating Film dan Series Hari ini</h1>
        <Link 
          to="/daftar-saya" 
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors"
        >
          View Watchlist ({watchlist.length})
        </Link>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2 relative cursor-pointer" 
            onClick={() => {
              setSelectedMovie(img) 
              setShowPopup(true)
            }}>
              <img
                src={img.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md over:opacity-80 transition-opacity"
              />
              {img.episodeBaru && (
                <div className="absolute top-10 ms-5 bg-blue-700 text-white text-xs px-2 py-1 rounded">
                  Episode Baru
                </div>
              )}
              {img.top10 && (
                <div className="absolute top-0 right-10 w-8 text-center bg-red-700 text-white text-xs px-2 py-1 rounded">
                  Top 10
                </div>
              )}
              {/* cek film fi list */}
              {isInWatchList(img.id) && (
                <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  In Watchlist
                </div>
              )}
              {/* end cek film fi list */}
            </div>
          ))}
        </Slider>

        {/* popup */}
        {showPopup && selectMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 p-4 text-black">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
              <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                X
              </button>
              
              <div className="flex mb-4">
                <img src={selectMovie.url} 
                  alt={selectMovie.title}
                  className="w-32 h-48 object-cover rounded-lg mr-4" 
                />
                <span>{selectMovie.score}</span>
              </div>
              <p className="mt-2 text-gray-600">{selectMovie.description}</p>
            

              <div className="flex justify-between mt-4">
                {/* kondisi add/remove film */}
                {isInWatchList(selectMovie.id) ? (
                  <button
                    onClick={() => removeFromWatchlist(selectMovie.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    -
                  </button>
                ): (
                  <button
                  onClick={() => addToWatchlist(selectMovie)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hoer:bg-blue-700 transition-colors"
                >
                  +
                </button>
                )}
                {/* end kondisi add/remove film */}
                <button 
                  onClick={() => setShowPopup(false)}
                  className="border border-gray-300 px-4 py-2 rounded text-black hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
  </>
  )
}

export default TopRating