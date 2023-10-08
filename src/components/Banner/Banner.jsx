
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
import image8 from '../../assets/Tournaments-780x420.jpg'


const Banner = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    //   };
    return (
        <div className="max-w-6xl mx-auto h-[400px] lg:h-[600px] md:h-[600px] relative">
          {/* <Slider {...settings}>
            <div className="h-[270px] w-[350px] bg-black">
                <img className="h-[270px] " src={image7} alt="" />
            </div>
            <div className="h-[270px]  w-[350px] bg-black">
                <img className="h-[270px] " src={image7} alt="" />
            </div>
            <div className="h-[270px] w-[350px] bg-black">
                <img className="h-[270px]" src={image7} alt="" />
            </div>
            <div className="h-[270px] w-[350px] bg-black">
                <img className="h-[270px] " src={image7} alt="" />
            </div>
            <div className="h-[270px] w-[350px] bg-black">
                <img className="h-[270px] " src={image7} alt="" />
            </div>
            <div className="h-[270px] w-[350px] bg-black">
                <img className="h-[270px] " src={image7} alt="" />
            </div>


          </Slider> */}
          <img className=" h-[400px] lg:h-[600px] md:h-[600px] w-full"src={image8} alt="" />
          <div className="absolute flex-col inset-0 bg-gradient-to-l from-transparent to-black text-center flex items-center place-content-center ">
              <h2 className=" text-4xl lg:text-6xl md:text-6xl font-bold mb-5">T & G Event Management</h2>
              
              <p className="text-2xl lg:text-4xl md:text-4xl font-semibold">"Unlocking Tech & Gaming Spectacles"</p>
              
          </div>
      </div>

            
        
    );
};

export default Banner;