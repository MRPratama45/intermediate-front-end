import React, {useState} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from '../assets/poster/filmTrending/duttyAfterSchool.png'
import img2 from '../assets/poster/filmTrending/guardiansGalaxy.png'
import img3 from '../assets/poster/filmTrending/littleMermaid.png'
import img4 from '../assets/poster/filmTrending/missing.png'
import img5 from '../assets/poster/filmTrending/otto.png'
import img6 from '../assets/poster/filmTrending/quantumania.png'
import img7 from '../assets/poster/filmTrending/tehTomorrow.png'


const RilisBaru= () =>{
  const [images, setImages] = useState([
    {
      id: 1,
      url: img1,
      title: `Dutty After School`,
      description: `Dutty After School`,
      Top10: true,
      episodeBaru: false
    },
    {
      id: 2,
      url: img2,
      title: `Guardians Galaxy`,
      description: `Guardians Galaxy`,
      Top10: false,
      episodeBaru: true 
    },
    {
      id: 3,
      url: img3,
      title: `Little Mermaid`,
      description: `Little Mermaid`,
      Top10: true,
      episodeBaru: false  
    },
    {
      id: 4,
      url: img4,
      title: `Missing`,
      description: `Missing`,
      Top10: false,
      episodeBaru: true 
    },
    {
      id: 5,
      url: img5,
      title: `Otto`,
      description: `Otto`,
      Top10: false,
      episodeBaru: false  
    },
    {
      id: 6,
      url: img6,
      title: `Quantumania`,
      description: `Quantumania`,
      Top10: false,
      episodeBaru: false  
    },
    {
      id: 7,
      url: img7,
      title: `The Tomorrow`,
      description: `The Tomorrow`,
      Top10: false,
      episodeBaru: false  
    }
  ])

  const [selectedImage, setSelectedImage] = useState(null)
  // const [showModals, setShowModals] = useState(false)
  // const navigate = useNavigate()

  const settingCarousel =  {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 5, // jumlah gambar yg di tampilkan
    slideToScroll:1,
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
  }

  // const handleClickImage = (image) => {
  //   setSelectedImage(image)
  //   setShowModals(true)
  // }

  // const handleDeleteImageModals = (id) =>{
  //   setImages(images.filter(image => image.id !== id))
  //   setShowModals(false)
  // }

  // const handleAddImagesModals = () => {
  //   navigate('/daftarSaya')
  // }



  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Rilis Baru</h1>

      {/* slider */}
      <Slider {...settingCarousel}>
          {images.map((image) => (
            <div 
              key={image.id} 
              className="px-2 cursor-pointer hover:scale-105 transition-transform"
              // onClick={() => handleClickImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              {image.episodeBaru ? (<h3 className="absolute top-8 text-xs ms-8 bg-blue-700 rounded-full p-1" >Episode Baru</h3>): null}
              {image.Top10 ? (<h3 className="absolute top-0 ms-45 text-xs bg-red-700 w-7 text-center rounded p-1" >Top 10</h3>): null}
            </div>
          ))}
        </Slider>

        {/* {showModals && (
          <ImageDetailModal 
            image={selectedImage}
            // onClose={() => setShowModals(false)}
            // onDelete={handleDeleteImageModals}
          />
        )} */}
      </div>
      {/* end slider */}
    
    </>

  )
}


export default RilisBaru