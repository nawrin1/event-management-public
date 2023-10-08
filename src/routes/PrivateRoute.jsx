import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Puff } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if (loading){
        return <>
        <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </>
    }
    if (user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
export default PrivateRoute;