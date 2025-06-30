import {Link} from "react-router"
import star from "../assets/vector/Vector-star.png"

const Watchlist = ({watchlist, onRemove}) =>{
  return (
    <>
      <div>
        <h1>Daftar Saya</h1>
        {watchlist.length === 0 ? (
          <div>
            <p>Daftar Film Saya Kosong</p>
            <Link to="/"
              className="bg-blue-600 text-white px-6 py-2 rounded hover: transition-colors"
            >
              Film Terdaftar
            </Link>
          </div>
        ) : (
          <div>
            {watchlist.map((movie) => {
              <div key={movie.id}>
                <img 
                  src={movie.url} 
                  alt={movie.tittle} 
                  className=""
                />
                <div>
                  <h3>{movie.tittle}</h3>
                  <div>
                    <img src={star} alt="rating" className=""/>
                    <span>{movie.score}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(movie.id)}
                  className=""
                >
                  X
                </button>
              </div>
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Watchlist