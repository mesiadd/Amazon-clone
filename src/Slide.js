import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from "react";

function Slide() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <img />
          <img />
          <img />
          <img />
          <div>
            
          </div>
        </Slider>
      </div>
    );
}

export default Slide;
