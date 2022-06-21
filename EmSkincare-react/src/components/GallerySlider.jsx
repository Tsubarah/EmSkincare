import Slider from "react-slick";
import { images } from "../utils/images";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imagesCopy = [...images]

export default function GallerySlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    centerPadding: 0 + 'px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    // pauseOnFocus:false,
  }

  return (
    <div className="slider">
      <Slider {...settings}>
        {imagesCopy.map(image => (
          <div key={image.name}>
            {/* <h2>{image.name}</h2> */}
            <img src={image.url} alt={image.description} />
          </div>
        ))}
      </Slider>
    </div>
  );
}


