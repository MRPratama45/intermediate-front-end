import axios from "axios"

const baseURL = import.meta.env.VITE_API_BASE_URL
// const baseURL = 'https://68806d2bf1dcae717b61f281.mockapi.io'


// instance axios dengan konfigurasi dasar
const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})
// end instance axios dengan konfigurasi dasar


// request interceptor untuk menambahkan token 
apiClient.interceptors.request.use(
  // handle req sukses
  (config) => {
    // mentambahkan token
    const token = localStorage.getItem('token')
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  // handle req error
  (error) => {
    return Promise.reject(error)
  }
)
// end request interceptor untuk menambahkan token 

// response interceptor untuk handle error global


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle error global
    if(error.response?.status === 401){
      // jika unauthorized clear token dan redirect to login
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
// end response interceptor untuk handle error global

export default apiClient