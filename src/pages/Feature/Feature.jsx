

const Feature = ({datas}) => {
    console.log(datas)
    const{point,description}=datas
   
    return (
        <div className="box-border p-4 border-4 border-teal-400 bg-teal-200 rounded-r-full">
            <div className="h-full w-full bg-teal-400 rounded-r-full p-4 ">
            <h2 className="font-semibold font-Kanit text-2xl lg:text-3xl md:text-3xl mb-7 text-green-950">{point}</h2>
            <p className="font-medium font-Kanit text-[16px] lg:text-[18px] md:text-[18px] text-black">{description}</p>
            </div>
            
        </div>
    );
};

export default Feature;