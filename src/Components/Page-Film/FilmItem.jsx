import React from "react";
import {connect} from "react-redux"
import {deleteMovie, setCurrentMovie, } from "../../actions/movieActions"




const FilmItem = ({movie, deleteMovie, updateMovie, setCurrentMovie}) => {

    // handle update
  const handleUpdate = (movie) => {
    console.log('UPDATE BUTTON CLICKED', movie)
     setCurrentMovie(movie);
  }

  // handle delete
  const handleDelete = (id) => {
    deleteMovie(movie.id)
    
  }

  return (
    <div className="border p-4 mb-4">
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <p className="text-gray-600">{movie.descriptions}</p>
      {movie.url && (
        <img src={movie.url} alt={movie.title} className="w-32 h-auto my-2" />
      )}
      <div className="flex gap-2 mt-2">
        <button 
          onClick={() => handleUpdate(movie)} 
          className="bg-red-600 text-white rounded-xl p-2"
        >
          Update
        </button>
        <button 
          onClick={() => {
            if(window.confirm('Yakin ingin menghapus film ini?')) {
              handleDelete(movie.id)
            }
          }} 
          className="bg-blue-600 text-white rounded-xl p-2"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default connect(null, { setCurrentMovie, deleteMovie })(FilmItem)