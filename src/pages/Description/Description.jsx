import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Description = () => {

    const {id}=useParams()
    console.log(id)
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/tech.json')
        .then(res=>res.json())
        .then(data=>{
            const details=data.filter(des=>des.id==id)
            setData(details)
        })
    },[id])

    console.log(data)
    if(data[0]){
        const{title,details,description,price,image,service1,service2,service3}=data[0]
        return(
            <div className="max-w-6xl mx-auto">
                <div className="h-[500px] w-full relative">
                    <img className=" h-[500px] w-full" src={image} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black text-center flex items-center place-content-center "><p className="text-white font-extrabold text-5xl">{title}</p></div>
                    {/* <p className="text-5xl absolute  top-[50%] left-[35%] text-white font-extrabold">{title}</p> */}
                </div>
                <div className="p-6 mt-9" ><button className="btn btn-outline text-3xl text-slate-400">Price:{price}</button></div>
                <div className="p-6 mt-9">
                    <p className="font-bold text-3xl mb-8 text-blue-500">EVENT OVERVIEW</p>
                    <hr className="w-[260px] mb-7"></hr>
                    <p className="font-medium text-2xl">{details}</p>


                </div>
                <h2 className="text-center font-bold text-5xl mt-24 mb-14">Services We Provide</h2>
                
                
                
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center mb-24 place-items-center ">
                    <div className="w-[300px] h-[250px] border-x-2 border-blue-400 rounded-3xl text-center pt-24 px-4 shadow-2xl shadow-gray-700"><p className="text-3xl font-bold text-blue-200">{service1}</p></div>
                    <div className="w-[300px] h-[250px] border-x-2 border-blue-400 rounded-3xl text-center pt-24  shadow-2xl shadow-gray-700"><p className="text-3xl font-bold  text-blue-200">{service2}</p></div>
                    <div className="w-[300px] h-[250px] border-x-2 border-blue-400 rounded-3xl text-center pt-24 shadow-2xl shadow-gray-700"><p className="text-3xl font-bold  text-blue-200">{service3}</p></div>
                </div>
                
                

            </div>
        )
    }
    return (
        <div>
            this is description
            
        </div>
    );
};

export default Description;