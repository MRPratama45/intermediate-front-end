import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  SET_CURRENT_MOVIE
} from '../actions/types'

const initialState = {
  movies: [],
  currentMovie: null,
  loading: false,
  error: null
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    // SET CURRENT MOVIE
      case 'SET_CURRENT_MOVIE':
        return {
          ...state,
          currentMovie: action.payload
        }

    // REQUEST
    case FETCH_MOVIE_REQUEST:
    case CREATE_MOVIE_REQUEST:
    case DELETE_MOVIE_REQUEST:
    case UPDATE_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      
      }

    // SUCCCES
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      }
    case CREATE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [action.payload, ...state.movies]
      }
    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: state.movies.map((movie) => movie.id === action.payload.id ? action.payload : movie),
        currentMovie: action.payload
      }
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: state.movies.filter((movie) => movie.id !== action.payload)
      }

    // FAILURE
    case FETCH_MOVIE_FAILURE:
    case CREATE_MOVIE_FAILURE:
    case DELETE_MOVIE_FAILURE:
    case UPDATE_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    // default
    default:
      return state
  }
}

export default movieReducer