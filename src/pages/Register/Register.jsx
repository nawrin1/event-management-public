import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";

 


const Register = () => {
    const navigate=useNavigate()
    const {createAccount}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        const name=e.target.name.value
        const photo=e.target.photo.value
        console.log(email,password,name,photo)
        const regexPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};:'"\\|,.<>/?]).{6,}$/;
        const isPassword=regexPassword.test(password)
        if(!isPassword){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Your entered wrong password',
                showConfirmButton: false,
                timer: 1500
            })

        }

        else{
            createAccount(email,password)
            .then(result=>{
                console.log(result)
                 
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your have registered',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/login')
                
    
                
            })
            .catch(error=>{
                console.error(error)
            })
        }
    }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-300">
            <div className="card-body">
                <form onSubmit={handleRegister}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL.." className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
                </form>
            </div>
            <p className="text-black text-center mb-8">Already have an account?<Link to='/login' className=" text-blue-700">Login</Link></p>

            </div>
        </div>
        </div>
    );
};

export default Register;