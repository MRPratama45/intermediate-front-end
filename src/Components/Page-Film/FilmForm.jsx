  import React, {  useEffect, useState} from "react"
  import {connect} from "react-redux"
  import {
    createMovie,
    updateMovie,
    deleteMovie,
    setCurrentMovie 
  } from "../../actions/movieActions";

  const FilmForm = ({ createMovie, updateMovie, setCurrentMovie, currentProduct = null }) => {
    const [movie, setMovie] = useState({
      title: "",
      descriptions: "",
      url: ""
    })

      // Load data untuk edit
      console.log('CURRENT PRODUCT DARI REDUX:', currentProduct);
      useEffect(() => {
        if (currentProduct) {
          setMovie(currentProduct);
        }
      }, [currentProduct]);

        // Handle perubahan input text/textarea
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setMovie({...movie, [name]: value});
        };

        // Handle khusus untuk file upload
        const handleFileChange = (e) => {
          setMovie({...movie, url: e.target.files[0]});
        };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!movie.title || !movie.descriptions) {
      alert("Title dan descriptions harus diisi");
      return;
    }

    try { 
      // Buat FormData untuk file upload
      const formData = new FormData();
      formData.append('title', movie.title);
      formData.append('descriptions', movie.descriptions);
      
      // Jika ada file baru, tambahkan ke FormData
      if (movie.url instanceof File) {
        formData.append('url', movie.url);
      } else if (movie.url) {
        // Jika url adalah string (existing file), tambahkan sebagai field biasa
        formData.append('url', movie.url);
      }

      console.log('Movie yang akan diupdate:', movie)

      if (movie.id) {
        // await updateMovie(movie.id, formData);
        await updateMovie(movie.id, {
          title: movie.title,
          descriptions: movie.descriptions,
          url: typeof movie.url === 'string' ? movie.url : ''
        });
        alert('Film berhasil diperbarui!');
        setCurrentMovie(null);
      } else {
        await createMovie(formData);
        alert('Film berhasil ditambahkan!');
      }
      
      // Reset form setelah sukses
      setMovie({
        title: "",
        descriptions: "",
        url: ""
      });
    } catch (error) {
      console.error('Error:', error);
      alert(`Gagal menyimpan film: ${error.message}`);
  }
};




     // Fungsi untuk reset form
  const handleCancel = () => {
    setMovie({
      title: "",
      descriptions: "",
      url: ""
    });

    setCurrentMovie(null);
  };

    return (
      <div >
        <h1>Film Form</h1>
        <form onSubmit={handleSubmit}>
          <h2>{movie.id ? 'Update Movie' : 'Add Movie'}</h2>

          <div>
            <label>Title: </label>
            <input 
              type="text"
              name="title"
              value={movie.title}
              onChange={handleInputChange}
              className="text-black"
              required 
            />
          </div>

          <div>
            <label>Descriptions: </label>
            <textarea 
              name="descriptions"
              value={movie.descriptions}
              onChange={handleInputChange}
              className="text-black"
              required 
            />
          </div>

          <div>
            <label>Gambar: </label>
           <input 
              type="file" 
              onChange={handleFileChange}
              required={!movie.id}
            />
            {movie.url && typeof movie.url === 'string' && (
              <img 
                src={movie.url} 
                alt="Current poster" 
                className="w-20 h-auto mt-2"
              />
            )}
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover: transition-colors">
            {movie.id ? 'Update Movie' : 'Add Movie'}
          </button>
          
          {movie.id && (
            <button type="button" onClick={handleCancel} className="bg-red-600 text-white px-6 py-2 rounded hover: transition-colors">
              Cancel
            </button>
          )}
          
        </form>
      </div>
    )
  }

const mapStateToProps = (state) => ({
  // Coba beberapa kemungkinan path
  currentProduct: 
    state.movie?.currentMovie ||  // Jika menggunakan 'movie' (tunggal)
    state.movies?.currentMovie || // Jika menggunakan 'movies' (jamak)
    null // Fallback value
});

  export default connect(mapStateToProps, {
    createMovie,
    updateMovie,
    deleteMovie,
    setCurrentMovie 
  })(FilmForm)