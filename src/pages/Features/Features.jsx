import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Feature from "../Feature/Feature";
import {MdMiscellaneousServices} from 'react-icons/md'


const Features = () => {
    // const data=useLoaderData()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("/features.json")
        .then(res=>res.json())
        .then(data=>setData(data))

    },[])

   
    
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-Kanit font-bold text-slate-500 text-center mt-24 mb-24 border-b-2  border-slate-400"><div>Additional facilities and features</div>
            </h2>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-12 mb-56 ">
                {
                    data.map((datas,idx)=><Feature key={idx} datas={datas}></Feature>)

                }
                
            </div>

            
        </div>
    );
};

export default Features;