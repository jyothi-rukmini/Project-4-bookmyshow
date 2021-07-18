import React from "react";
import HeroSlider from "react-slick";

// Compoenent
import { NextArrow, PrevArrow } from "./Arrows.component";



const HeroCarousal = () => {
  const settingsLG = { 
    arrows : true,
    autoplay : true,
    centerMode : true,
    centerPadding : "300px",
    slidesToShow : 1,
    infinite : true,
    slidesToScroll: 1,
    nextArrow : <NextArrow/>,
    prevArrow : <PrevArrow/>,
  };
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow : <NextArrow/>,
    prevArrow : <PrevArrow/>,
  };
    
      const images = [
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1587986100063-d1c34ca3dc6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1578305034054-6eb022b06c9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ];
    
      return (
        <>
          <div className="lg:hidden">
            <HeroSlider {...settings}>
              {images.map((image) => (
                <div className="w-full h-56 md:h-80 py-3 ">
                  <img src={image} alt="testing" className="w-full h-full" />
                </div>
              ))}
            </HeroSlider>
          </div>
    
          <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
              {images.map((image) => (
                <div className="w-full h-96 px-2 py-3">
                  <img
                    src={image}
                    alt="testing"
                    className="w-full h-full rounded-md"
                  />
                </div>
              ))}
            </HeroSlider>
          </div>
        </>
      );
    };
    
    export default HeroCarousal;
