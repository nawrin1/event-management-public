import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";
import image1 from '../../assets/stem-list-EVgsAbL51Rk-unsplash.jpg'
import image2 from '../../assets/rohit-choudhari-tk2_RBZq7RA-unsplash.jpg'


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
            
        </div>
    );
};

export default Home;