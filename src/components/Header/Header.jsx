import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2';
import './Header.css'

const Header = () => {
    const{user,logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const navlinks=<>
    <li><NavLink to='/'>Home</NavLink></li>
    {
        user && <>
            <li><NavLink to='/features'>Features</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
        </>
    }
    </>
    const handleLogOut=()=>{
        logout()
        .then(() => {
       
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your have logged out',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/')
        })
        .catch(error => console.error (error))

    }
    return (
        <div className="navbar bg-black border-2 border-blue-400 text-white max-w-6xl mx-auto mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-gray-900 rounded-box w-52">
                    {navlinks}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">T & G Event Management</a>
            </div>
            <div className="navbar-center hidden lg:flex text-black lg:text-white">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user? <><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="" />
                    </div>
                    </label>
                    <Link to='/login'><button onClick={handleLogOut}>Logout</button></Link>

                    </>:
                    <nav>
                    <NavLink to='/login'><button className="p-4">Login</button></NavLink>
                    <NavLink to='/register'><button className="p-4">Register</button></NavLink>
                    </nav>
                }
                

            </div>
        </div>
    );
};

export default Header;