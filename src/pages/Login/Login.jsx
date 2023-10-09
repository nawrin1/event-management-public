import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
    const location=useLocation()
    const{login}=useContext(AuthContext)
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        
        console.log(email,password)
        login(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your have logged in',
                showConfirmButton: false,
                timer: 1500
            })
            
            navigate(location?.state? location.state:'/')
            
            
        })
        .catch(error => {
            setError(error.message)
            console.log(error)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Invalid Email or Password',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')

        })

    }
    return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-300">
            <div className="card-body">
                <form onSubmit={handleLogin}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password"placeholder="password" className="input input-bordered  text-black" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
                </form>
            </div>
            <p className="text-black text-center mb-8">Do no have an account?<Link to='/register' className="head text-blue-700">Register</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Login;