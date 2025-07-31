import axios from "axios";

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
} from './types'

const baseUrl = 'https://68806d2bf1dcae717b61f281.mockapi.io/movie'


// Action untuk menyimpan current movie
export const setCurrentMovie = (movie) => ({
  type: SET_CURRENT_MOVIE,
  payload: movie
});

// fetch all
export const fetchMovie = () => {
  return async (dispatch) => {
    try {
      dispatch({type: FETCH_MOVIE_REQUEST})

      const response = await axios.get(baseUrl)

      dispatch({
        type: FETCH_MOVIE_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      console.log('fetch all movie actions gagal');
      
      dispatch({
        type: FETCH_MOVIE_FAILURE,
        payload: error.message
      })
    }
  }
}

// create new
export const createMovie = (movieData) => {
  return async (dispatch) => {
    try {
      dispatch({type: CREATE_MOVIE_REQUEST})

      const response = await axios.post(baseUrl, movieData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      
      dispatch({
        type: CREATE_MOVIE_SUCCESS,
        payload: response.data  
      })

      // Reset current movie setelah create
      dispatch(setCurrentMovie(null));
    } catch (error) {
      console.log('error create actions gagal');
      dispatch({
        type: CREATE_MOVIE_FAILURE,
        payload: error.response?.data?.message || error.message
      })
    }
  }
}

// update
export const updateMovie = (id, movieData) => {
  return async (dispatch) => {
    try {
      dispatch({type: UPDATE_MOVIE_REQUEST});

      console.log('try update');
      
      // Pastikan ID valid
      if (!id) {
        throw new Error('ID film tidak valid');
      }

      // Format data sesuai kebutuhan API
      const payload = {
        title: movieData.title,
        descriptions: movieData.descriptions,
        // Jika url adalah file, kita tidak bisa mengirim langsung
        // MockAPI biasanya hanya menerima URL string
        url: typeof movieData.url === 'string' ? movieData.url : ''
      };

      const response = await axios.put(`${baseUrl}/${id}`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.data) {
        throw new Error('Tidak ada data yang diterima dari server');
      }

      dispatch({
        type: UPDATE_MOVIE_SUCCESS,
        payload: response.data  
      });

      dispatch(setCurrentMovie(response.data));
      
      return response.data;
    } catch (error) {
      console.error('Update error:', error);
      
      const errorMsg = error.response?.data?.message || 
                      error.message || 
                      'Gagal memperbarui film';
      
      dispatch({
        type: UPDATE_MOVIE_FAILURE,
        payload: errorMsg
      });
      
      throw error;
    }
  };
};

// delete
export const deleteMovie = (id) => {
  return async (dispatch) => {
    try {
      dispatch({type: DELETE_MOVIE_REQUEST});

      if (!id) {
        throw new Error('ID film tidak valid');
      }

      const response = await axios.delete(`${baseUrl}/${id}`);
      
      // MockAPI biasanya mengembalikan data yang dihapus
      if (!response.data) {
        throw new Error('Penghapusan gagal atau tidak dikonfirmasi');
      }

      dispatch({
        type: DELETE_MOVIE_SUCCESS,
        payload: id // Ganti dari response.data menjadi id
      })

            
      dispatch(setCurrentMovie(null));
      
      return true; // Indikasi sukses
    } catch (error) {
      console.error('Delete error:', error);
      
      const errorMsg = error.response?.data?.message || 
                      error.message || 
                      'Gagal menghapus film';
      
      dispatch({
        type: DELETE_MOVIE_FAILURE,
        payload: errorMsg
      });
      
      throw error;
    }
  };
};