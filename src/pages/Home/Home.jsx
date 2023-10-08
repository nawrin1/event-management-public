import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";
import image1 from '../../assets/stem-list-EVgsAbL51Rk-unsplash.jpg'
import image2 from '../../assets/rohit-choudhari-tk2_RBZq7RA-unsplash.jpg'
import { HiOutlineMailOpen } from 'react-icons/hi';
import {FaFax} from 'react-icons/fa';
import {BiPhoneCall} from 'react-icons/bi';


const Home = () => {
    const {name}=useContext(AuthContext)
    const data=useLoaderData()
    
    return (
        <div className="max-w-6xl mx-auto"> 
           
            <Banner></Banner>
            <div  className="max-w-6xl mx-auto mt-24">
                <h2 className="text-center text-6xl font-semibold mb-20">Our Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                {
                    data.map((service,idx)=><Services key={idx} service={service}></Services>)
                }
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-24 mb-28">
                <h1 className="text-6xl font-extrabold text-center mb-10">Why Choose Us</h1>
                <div className="flex flex-col lg:flex-row md:flex-row place-items-center">
                    <div className="flex w-[50%] relative">
                       <img className=" w-[400px] h-[200px] lg:h-[350px] lg:w-[370px] md:h-[350px] md:w-[370px] rounded-3xl "src={image1} alt="" />
                       <img className="hidden lg:block md:hidden h-[250px] w-[220px] rounded-3xl shadow-lg shadow-slate-400 absolute left-[250px] top-32 "src={image2} alt="" />
                    </div>
                    <div className=" w-[40%] justify-center">
                        <p className="text-[16px] md:text-[20px] lg:text-xl font-medium mt-8 text-slate-400">"Our team is passionate about tech and gaming events. With years of experience, we understand the unique needs of your audience. From LAN parties to esports tournaments, we've got you covered.We handle every detail, so you can focus on enjoying your event. From logistics to tech setup, we ensure a smooth and immersive experience for your attendees."</p>

                    </div>

                </div>

            </div>
            <div className="mb-10 ">
                <h2 className="text-5xl font-bold text-center mb-3 mt-72">Contact</h2>
                <hr></hr>
                <p className="text-xl font-semibold text-center mb-3 mt-8">We're here to help you turn your tech and gaming event ideas into reality. Whether you have questions, need a quote, or want to discuss your upcoming event, don't hesitate to reach out to us. Our team of experts is eager to assist you every step of the way.
                    Feel free to reach us anytime</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 place-items-center mt-24">
                    <div className="w-[250px] h-[250px] border-y-2 bg-blue-950 border-blue-300 rounded-full ">
                        <HiOutlineMailOpen className=" text-4xl mx-auto mt-7"></HiOutlineMailOpen>
                        <p className="text-center mt-10 text-2xl ">Email:</p>
                        <p className="text-center mt-4 text-xl ">tandgevent@gmail.com</p>

                    </div>
                    <div className="w-[250px] h-[250px] border-y-2  bg-blue-950 border-blue-300 rounded-full">
                        <FaFax className=" text-4xl mx-auto mt-7"></FaFax>
                        <p className="text-center mt-10 text-2xl ">Fax:</p>
                        <p className="text-center mt-4 text-xl ">555-123-4567</p>

                    </div>
                    <div  className="w-[250px] h-[250px] border-y-2  bg-blue-950 border-blue-300  rounded-full">
                        <BiPhoneCall className=" text-4xl mx-auto mt-7"></BiPhoneCall>
                        <p className="text-center mt-10 text-2xl ">Phone</p>
                        <p className="text-center mt-4 text-xl ">+1 (555) 123-4567</p>

                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Home;