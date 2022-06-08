import React from 'react'

import {
    Carousel,
    Wrap,
} from './ImgSliderStyles'

const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src="/images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-badag.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-scales.jpg" alt="" />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider