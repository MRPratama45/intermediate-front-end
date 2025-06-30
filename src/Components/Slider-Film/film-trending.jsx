import { useState } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from "../../assets/poster/melanjutkanNontonFilm/allOfUsDead.png"
import img2 from "../../assets/poster/melanjutkanNontonFilm/batman.png"
import img3 from "../../assets/poster/melanjutkanNontonFilm/DontLookUp.png"
import img4 from "../../assets/poster/melanjutkanNontonFilm/guardiansGalaxy.png"
import img5 from "../../assets/poster/melanjutkanNontonFilm/littleMermaid.png"
import img6 from "../../assets/poster/melanjutkanNontonFilm/otto.png"
import img7 from "../../assets/poster/melanjutkanNontonFilm/quantumania.png"
import img8 from "../../assets/poster/melanjutkanNontonFilm/theTomorrow.png"
import star from "../../assets/vector/Vector-star.png"

const FilmTrending = () => {
const [images] = useState([
    {
      id: 1,
      url: img1,
      title: `All Of Is Dead`,
      description: `All Of Is Dead`,
      Top10: true,
      episodeBaru: false,
      icon: star,
      score: `4.5/5`
    },
    {
      id: 2,
      url: img2,
      title: `Batman`,
      description: `Batman`,
      Top10: true,
      episodeBaru: false,
      icon: star,
      score: `4.5/5`
    },
    {
      id: 3,
      url: img3,
      title: `Don't Look Up`,
      description: `Don't Look Up`,
      Top10: true,
      episodeBaru: true,
      icon: star,
      score: `4.5/5`
    },
    {
      id: 4,
      url: img4,
      title: `Guardians Galaxy`,
      description: `Guardians Galaxy`,
      Top10: true,
      episodeBaru: false,
      icon: star,
      score: `4.5/5`
    },
    {
      id: 5,
      url: img5,
      title: `Little Mermaid`,
      description: `Little Mermaid`,
      Top10: true,
      episodeBaru: false,
      icon: star,
      score: `4.5/5`
    },
    {
      id: 6,
      url: img6,
      title: `Otto`,
      description: `Otto`,
      Top10: true,
      episodeBaru: false,
      icon: star,
      score: `4.5/5`
    },
    {
      id: 7,
      url: img7,
      title: `Quantum Mania`,
      description: `Quantum Mania`,
      Top10: true,
      episodeBaru: false,
      icon: star,
      score: `4.5/5`
    },
    {
      id: 8,
      url: img8,
      title: `The Tommorow`,
      description: `The Tommorow`,
      Top10: true,
      episodeBaru: false,
      icon: star,
      score: `4.5/5`
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    
    <>
       <div className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">Film Trending</h1>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2 relative">
              <img
                src={img.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
               {img.Top10 && (
                <div className="absolute top-0 right-10 w-8 text-center bg-red-700 text-white text-xs px-2 py-1 rounded">
                  Top 10
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default FilmTrending