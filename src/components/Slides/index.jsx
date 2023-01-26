import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slide.scss';

const Slides = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src='/assets/images/slide1.png' alt='' />
        </div>
        <div>
          <img src='/assets/images/slide2.png' alt='' />
        </div>
        <div>
          <img src='/assets/images/slide3.png' alt='' />
        </div>
        <div>
          <img src='/assets/images/slide4.jpg' alt='' />
        </div>
      </Slider>
    </>
  )
}

export default Slides;