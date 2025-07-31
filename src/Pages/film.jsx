import Navbar from "../Components/navbar"
import FilmList from "../Components/Page-Film/FilmList"


const Film = () => {
  return(
    <div>
      <Navbar />
      <div className="bg-black text-white">
        <h1>film page</h1>
        <hr />
        <FilmList/>
      </div>
    </div>
  )
}

export default Film