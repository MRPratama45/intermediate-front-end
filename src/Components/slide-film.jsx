// import React, {useState} from "react"
// import { useNavigate } from "react-router-dom"
// import ModalsImage from "../components/modals-image"
import MelanjutkanFilm from "./Slider-Film/melanjutkan-film"
import TopRating from "./Slider-Film/top-rating"
import FilmTrending from "./Slider-Film/film-trending"
import RilisBaru from "./Slider-Film/rilis-baru"


const SlideFilm = () => {
  return (
   <>
    <div className="bg-black text-white">
      <MelanjutkanFilm />
      <TopRating />
      <FilmTrending />
      <RilisBaru />
      
    </div>
  </>
  )
}

export default SlideFilm