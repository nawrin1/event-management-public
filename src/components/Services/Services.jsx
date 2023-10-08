import { Link } from "react-router-dom";


const Services = ({service}) => {
    const {id,title,description,price,image}=service
    return (
        <div className="rounded-[20px] bg-sky-200 flex flex-col text-blue-900 selection mb-16">
            <div className="rounded-t-[20px] flex-1/3">
                <img className="rounded-t-[20px]" src={image} alt="" />

            </div>
            <div className="px-5 pt-3 flex-1/3">
                <h2 className="text-2xl mb-6 font-bold">{title}</h2>
                <p className="text-[18px]">{description}</p>


            </div>
            <div className="flex p-5 justify-between mt-auto flex-1/3">
                <button className="btn btn-outline text-xl font-medium">Price:{price}</button>

                <Link to={`/description/${id}`}><button className="btn btn-outline text-xl font-medium">Details</button></Link>
            </div>




            
        </div>
    );
};

export default Services;