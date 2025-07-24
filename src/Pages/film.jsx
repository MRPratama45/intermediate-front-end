import { useEffect, useState } from "react"

// base url api
const baseUrl = import.meta.env.VITE_API_BASE_URL

const Film = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [FormData, setFormData] = useState({id: '', name: '', avatar: ''})
  const [isEdit, setIsEdit] = useState(false)

  // perubahan/refresh data
  useEffect(() => {
    fetchData()
  }, [])
  // end perubahan/refresh data
  // ==============================

  // logika get api
  const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/sample-api`)

        if (response.ok) {
          const data = await response.json()
          console.log("data API: ",data)
          setData(data)
        }
        } catch (error) {
          setError(error.message)
          console.log("Error fetching data: ",error);
        }finally {
          setLoading(false)
        }
    }
  // end logika get api
  // ==============================

  // fungsi add data
  const handleAdd = async (e) => { 
    e.preventDefault()

    try {
      const response = await fetch (`${baseUrl}/sample-api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(FormData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      await fetchData() //refresh data
      setFormData({ // reset form
        id: '', 
        name: '',
        avatar: ''
      })
    } catch (error) {
      console.log("error add data: ",error);
      setError(error.message)
      
    }finally {
      setLoading(false)
    }
  }
  // end fungsi add data
  // ==============================
  
  // fungsi update data
  const handleUpdate = async (e) => {
    e.preventDefault()

    try {
     const response = await fetch(`${baseUrl}/sample-api/${FormData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData),
     }) 

     if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
     }

     await fetchData() // refresh data berhasil di update
     setFormData({ // reset form
      id: '',
      name: '',
      avatar: ''
     })
     setIsEdit(false)
    } catch (error) {
      setError(error.message)
      console.log("error update data: ",error);
      
    }finally {
      setLoading(false)
    }
  }
  // end fungsi update data
  // ==============================
  
  // fungsi delete data
  const handleDelete = async (id) =>{
    try {
      const response = await fetch(`${baseUrl}/sample-api/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      await fetchData() // refresh data

    } catch (error) {
      setError(error.message)
      console.log("error delete data: ",error);
    }finally {
      setLoading(false)
    }
  }
  // end fungsi delete data
  // ==============================
  
  // fungsi isi form saat edit
  // const handleEdit = (item) => {
  //   setFormData(item)
  //   setIsEdit(true)
  // }
  // end fungsi isi form saat edit
  // ==============================
  
  // handle input form
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }
  // end handle input form
  // ==============================

  // handler loading dan error
  if (loading) return <div>Loading Data ...</div>
  if (error) return <div>Error: {error}</div>
  // end handler loading dan error


  return (
    <div className="bg-gray-300">
      <h1>Get APi</h1>
      <div>
        <form onSubmit={isEdit ? handleUpdate : handleAdd}>
          <h2>{isEdit ? 'Edit Film' : 'Add New Film'}</h2>

          {isEdit && (
            <div>
              <label>ID: </label>
              <input 
                type="text"
                name="id"
                value={FormData.id}
                onChange={handleInputChange}
                disabled
              />
            </div>
          )}

          <div>
            <label>Name: </label>
            <input 
              type="text"
              name="name"
              value={FormData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Avatar: </label>
            <input 
              type="text"
              name="avatar"
              value={FormData.avatar}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">
            {isEdit ? 'Update' : 'Add'}
          </button>

          {isEdit && (
            <button type="button" onClick={() => {
              setFormData({id: '', name: '', avatar: ''})
              setIsEdit(false)
            }}>
              Cancel
            </button>
          )}
        </form>

        <hr />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {/* Tabel dengan Action Buttons */}

        {data && Array.isArray(data) && data.length > 0 ? 
        (
          <table className="w-full border-collapse border border-gray-400 mt-4">
            <thead>
              <tr className="bg-gray-200">
                {Object.keys(data[0]).map(key => (
                  <th key={key} className="border border-gray-400 p-2">{key}</th>
                ))}
                <th className="border border-gray-400 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  {Object.values(item).map((value, i) => (
                    <td key={i} className="border border-gray-400 p-2">
                      {typeof value === 'string' && value.startsWith('http') ? (
                        <img src={value} alt="avatar" className="w-10 h-10 rounded-full" />
                      ) : (
                        String(value)
                      )}
                    </td>
                  ))}
                  <td className="border border-gray-400 p-2 space-x-2">
                    <button 
                      onClick={() => {
                        setFormData({
                          id: item.id,
                          name: item.name,
                          avatar: item.avatar
                        });
                        setIsEdit(true);
                      }}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : 
        (
          <div className="text-center py-8 bg-gray-100 rounded-lg mt-4">
            <p className="text-gray-500 text-lg">Data kosong</p>
            <p className="text-gray-400">Tidak ada data yang tersedia untuk ditampilkan</p>
          </div>
        )
        }
        </div>
    </div>
  )
}
  

export default Film

