import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteMovie, fetchMovie } from "../../actions/movieActions";
import FilmItem from "./FilmItem"
import FilmForm from "./FilmForm"

const FilmList = ({ movies, loading, error, fetchMovie, deleteMovie, currentMovie  }) => {

  useEffect(() => {
    fetchMovie()
  }, [fetchMovie])


  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <FilmForm currentProduct={currentMovie} />
      <h1>Film List</h1>
      {movies.length === 0 ? (
        <p>No movies available</p>
      ) : (
        movies.map(movie => (
          <FilmItem 
            key={movie.id} 
            movie={movie} 
            deleteMovie={deleteMovie}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movie.movies || [], 
  currentMovie: state.movie.currentMovie,
  loading: state.movie.loading,
  error: state.movie.error
});

export default connect(mapStateToProps, { fetchMovie:fetchMovie, deleteMovie }) (FilmList);