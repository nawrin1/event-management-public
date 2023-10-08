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
        const{title,details,description,price,image}=data[0]
        return(
            <div className="max-w-6xl mx-auto">
                <div className="h-[500px] w-full relative">
                    <img className=" h-[500px] w-full" src={image} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black "></div>
                </div>
                {title}
                {details}
                {price}
                {description}
                

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