// import axios from "axios"

import apiCLient from '../api/axios-config'

// base url api
const baseUrl = import.meta.env.VITE_API_BASE_URL

const apiService = {
  // get all data
    getAll: async () => {
      try {
        const response = await apiCLient.get(`${baseUrl}/sample-api`)
        return response
      } catch (error) {
        console.log('error-get: ', error);
        throw error
      }
    },
  // end get all data
// ============================================
  // add new data
    create: async (data) => {
      try {
        const response = await apiCLient.post('sample-api', data)
        return response
      } catch (error) {
        console.log('error-add: ', error);
        throw error
      }
    },
  // end add new data
// ============================================
  // update data 
    update: async (id, data) => {
      try {
        const response = await apiCLient.put(`sample-data/${id}`, data)
        return response
      } catch (error) {
        console.log('error-update: ', error);
        throw error
      }
    },
  // end update data 
// ============================================
  // delete data
    delete: async (id) => {
      try {
        const response = await apiCLient.delete(`sample-data/${id}`)
        return response
      } catch (error) {
        console.log('error-delete: ', error);
        throw error
      }
    }
  // end delete data=
}

export default apiService



































// // get
// async function getSampleApi() {
//   try {
//    const response = await fetch(`${baseUrl}/sample-api`)
//    if (response.ok) {
//     const data = await response.json()
//     console.log("data API: ",data)
//    }
//   //  else {
//   //   throw new Error(`HTTP error! status: ${response.status}`)
//   //  }
//   } catch (error) {
//     console.log("Error fetching data: ",error);
//   }
// }

// // implementasi
// async function getAllDataSampleApi() {
//   const allData = await getSampleApi()
//   console.log(allData);
// }
// getAllDataSampleApi()
// console.log(getAllDataSampleApi());
// // end implementasi


// // end get

// // post

// // put

// // delete