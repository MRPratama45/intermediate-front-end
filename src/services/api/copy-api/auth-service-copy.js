// import { useNavigate } from "react-router";
import apiClient from "./axios-config";

// const navigate = useNavigate()

export const authService = {

  // auth regis
  async register(userData) {
    try {
      const response = await apiClient.post('/register', userData)

      console.log('Response dari register-auth:', response);
      return {
        status: response.status,
        data: response.data
      }
    } catch (error) {
      console.log('error-register-auth-service: ', error);
      throw this.handleError(error)
    }
  },
  // end auth regis
  
  // auth login
  isAuthenticated(){
    return !!this.getCurrentUser()
  },
  
  async login(credentials) {
    try {
      const response = await apiClient.post('/Login', credentials)

      console.log('auth - service debug: ', response);
      

      // makesure struktur valid response (success/tidak sukses)
      if (!response.data?.token) {
        console.log('Response dari login-auth:', response);
         throw new Error('struktur respon tidak valid karen: ', response.error)
      }

      // simpan token dan user data ke local storage
      localStorage.setItem('auth', JSON.stringify({
        token: response.data.token,
        username: response.data.username || {username: credentials.username}
      }))
      
      return response.data
    } catch (error) {
      localStorage.removeItem('auth')
      console.log('error-login-auth-service: ', error);
      this.clearAuth()
      throw error
    }
  },
  // end auth login
 
  // logout
  async logout() {
    try {
      // panggil API logout jika diperlukan
      await apiClient.post('/logout')
      // navigate('/')
    } catch (error) {
      console.log('error-logout-auth-service: ', error);
      throw this.handleError(error)
    } finally {
      // clear local storage
      localStorage.removeItem('auth')
      // localStorage.removeItem('token')
      // localStorage.removeItem('username')
    }
  },
  // end logout

  // menyimpan ke local storage
  getCurrentUser() {
    try {
      const authData = localStorage.getItem('auth')
      if (!authData) return null

      return JSON.parse(authData)
      } catch (error) {
        console.log('error-getCurrentUser-auth-service:', error);
        this.clearAuth()
        return null
      }

    }, 
    clearAuth(){
      localStorage.removeItem('auth')
      // localStorage.removeItem('token')
      // localStorage.removeItem('username')
    
  },

  // custome handle error
  handleError(error) {
    let errorMessage = 'terjadi Kesalahan'
    let statusCode = 0

    if (error.response) {

      // server respon with error status
      statusCode = error.response.status

      // custome message berdasarka status code
      switch (statusCode) {
        case 400:
          errorMessage = 'Data tidak Valid'
          break;
        case 401:
          errorMessage = 'Authentikasi gagal'
          break;
        case 403:
          errorMessage = 'Akses ditolak'
          break;
        case 404:
          errorMessage = 'End point tidak ditemukan'
          break;
        case 500:
          errorMessage = 'Server Error'
          break;
  
        default:
          errorMessage = error.response.dadta?.message || 'error dari server (be)'
      }
      
    } else if (error.request) {
      // req dibuat tapi tidak mendapatkan response
      errorMessage = 'Tidak ada response dari server'

    } else {
      // error lannya
      errorMessage = error.message
    }

    console.error (`Auth Error [${statusCode}]: `, errorMessage);
    return new Error(errorMessage)    
  }
}

