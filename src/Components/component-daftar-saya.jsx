import { Link } from "react-router-dom";
import { useContext } from "react";

import {WatchlistContext} from '../context/watchlist-context'

import star from '../assets/vector/Vector-star.png'


const ComponentDaftarSaya = () => {
  const {watchlist, removeFromWatchlist} = useContext(WatchlistContext)
  



  return (
    <div>
      <div className="bg-black text-white h-auto">      
        {watchlist.length === 0 ? (
          <div className="text-center text-black">
            <Link to="/"
              className="bg-blue-600 text-white px-6 py-2 rounded hover: transition-colors"
            >
              Tambah Film Terdaftar
            </Link>
          </div>
        ) : (
          <div>
            {watchlist.map((movie) => {
              return (
                <div key={movie.id} className="border rounded-lg p-4 flex">
                <img 
                  src={movie.url} 
                  alt={movie.title} 
                  className="w-24 h-32 object-cover mr-4"
                />
                <div>
                  <h3>{movie.title}</h3>
                  <div>
                    <img src={star} alt="rating" className=""/>
                    <span>{movie.score}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromWatchlist(movie.id)}
                  className=""
                >
                  X
                </button>
              </div>
              )  
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ComponentDaftarSaya