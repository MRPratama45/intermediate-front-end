import apiClient from "./axios-config";

export const authService = {

  // auth regis
  async register(userData) {
    try {
      const response = await apiClient.post('/auth/register', userData)
      return response.data
    } catch (error) {
      console.log('error-auth-service: ', error);
      throw this.handleError(error)
    }
  },
  // end auth regis
  
  // auth login
  async login(credentials) {
    try {
      const response = await apiClient.post('/Login', credentials)
      
      // simpan token dan user data ke local storage
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      
      return response.data
    } catch (error) {
      console.log('error-auth-service: ', error);
      throw this.handleError(error)
    }
  },
  // end auth login
 
  // logout
  async logout() {
    try {
      // panggil API logout jika diperlukan
      await apiClient.post('/logout')

    } catch (error) {
      console.log('error-auth-service: ', error);
      throw this.handleError(error)
    } finally {
      // clear local storage
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  },
  // end logout

  // menyimpan ke local storage
  getCurrentUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  // custome handle error
  handleError(error) {
    if (error.response) {
      const serverError = {
        // server error
        message : error.response.data?.message,
        status: error.response.status,
        data: error.response.data
      }
      console.log('API error: ', serverError)
      return serverError

    } else {
      // error jaringan atau lainnya
      console.log('network error: ', error.message)
      return {message: 'Network error', status: 0}
      
    }
  }
}