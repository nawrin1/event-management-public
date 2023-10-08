import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";


const Home = () => {
    const {name}=useContext(AuthContext)
    const data=useLoaderData()
    
    return (
        <div> 
           
            <Banner></Banner>
            <div  className="max-w-6xl mx-auto mt-24">
                <h2 className="text-center text-6xl font-semibold mb-20">Our Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                {
                    data.map((service,idx)=><Services key={idx} service={service}></Services>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default Home;