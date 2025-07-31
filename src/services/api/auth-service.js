import apiClient from "./axios-config";

export const authService = {


  // update data profile
  async updateProfile(id, data) {
    try {
      const response = await apiClient.put(`/user/${id}`, data)

      // update local storage
      localStorage.setItem('user', JSON.stringify(response.data))

      return response
    } catch (error) {
      console.log('error-update: ', error);
      throw error
    }
  },
  // end update data profile

  // delete
  async DeleteProfile(id){
    try {
      const response = await apiClient.delete(`/user/${id}`)

      // delete local storage
      localStorage.removeItem('user')
      return response
    } catch (error) {
      console.log(error);
      
    }
  },
  // end delete

  // auth regis
  // async register(userData) {
  //   try {
  //     const response = await apiClient.post('/user', userData)

  //     // simpan ke local storage
  //     localStorage.setItem('user', JSON.stringify(response.data))

  //     console.log('Response dari register-auth:', response);

  //     return {
  //       status: response.status,
  //       data: response.data
  //     }
  //   } catch (error) {
  //     console.log('error-register-auth-service: ', error);
  //     throw this.handleError(error)
  //   }
  // },
  // end auth regis
  
  // auth login  
  async login({ username, password }) {
    const response = await apiClient.get('/user');
    const user = response.data.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      throw new Error('Username atau password salah');
    }

    localStorage.setItem('user', JSON.stringify(user));
    return user;
  },

  async register(data) {
    const response = await apiClient.post('/user', data);
    return response.data;
  },

  logout() {
    localStorage.removeItem('user');
  },
  // end auth login
 
  // logout
  // async logout() {
  //   try {
  //     // panggil API logout jika diperlukan
  //     await apiClient.post('/logout')
  //     // navigate('/')
  //   } catch (error) {
  //     console.log('error-logout-auth-service: ', error);
  //     throw this.handleError(error)
  //   } finally {
  //     // clear local storage
  //     localStorage.removeItem('auth')
  //     // localStorage.removeItem('token')
  //     // localStorage.removeItem('username')
  //   }
  // },
  // end logout

  // menyimpan ke local storage
  // getCurrentUser() {
  //   try {
  //     const authData = localStorage.getItem('auth')
  //     if (!authData) return null

  //     return JSON.parse(authData)
  //     } catch (error) {
  //       console.log('error-getCurrentUser-auth-service:', error);
  //       this.clearAuth()
  //       return null
  //     }

  //   }, 
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
          errorMessage = error.response.data?.message || 'error dari server (be)'
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

