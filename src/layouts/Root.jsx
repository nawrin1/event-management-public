import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Puff } from "react-loader-spinner";


const Root = () => {
    const{loader}=useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            
            {
                loader?        <Puff
                height="80"
                width="80"
                radius={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />:<Outlet></Outlet>
            }
            <Footer></Footer>
            
        </div>
    );
};

export default Root;