
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React from "react";
import Slider from "react-slick";
import image1 from '../../assets/aboodi-vesakaran-oxP3bl3xQPI-unsplash.jpg';
import image2 from '../../assets/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg';
import image3 from '../../assets/andreas-ronningen-S2YssLw97l4-unsplash.jpg';
import image4 from '../../assets/cupcakes-380178_1280.jpg'
import image5 from '../../assets/joy-memon-rdjAQGAbLT4-unsplash.jpg';
import image6 from '../../assets/cristina-gottardi-6Frs5Cht6Pc-unsplash.jpg'
import image7 from '../../assets/game developer conference.webp'


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            <div className="h-[270px] w-[350px] bg-slate-400">
                <img className="h-[270px] " src={image7} alt="" />
            </div>
            <div className="h-[270px]  w-[350px] bg-slate-400">
                <img className="h-[270px] " src={image7} alt="" />
            </div>
            <div className="h-[270px] w-[350px] bg-slate-400">
                <img className="h-[270px]" src={image7} alt="" />
            </div>
            <div className="h-[270px] w-[350px] bg-slate-400">
                <img className="h-[270px] " src={image7} alt="" />
            </div>
            <div className="h-[270px] w-[350px] bg-slate-400">
                <img className="h-[270px] " src={image7} alt="" />
            </div>
            <div className="h-[270px] w-[350px] bg-slate-400">
                <img className="h-[270px] w-auto object-cover" src={image7} alt="" />
            </div>


          </Slider>
      </div>

            
        
    );
};

export default Banner;