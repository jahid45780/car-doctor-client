import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [service, setService] = useState([])

    useEffect(()=>{
        fetch('Service.json')
        .then(res=> res.json())
        .then(data=> setService(data) )
    },[])

    return (
        <div className=" m-3" >
            <div className=" text-center mt-4 space-y-2" >
                <h1 className=" text-[#FF3811] text-2xl font-semibold " > Service </h1>
                <h1 className=" font-bold text-4xl" >Our Service Area</h1>
                <p> the majority have suffered alteration in some form, by <br /> injected humour, or randomised words which do not look even slightly believable.  </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4" >
               {
                service.map(cardService => <ServiceCard 
                key={cardService._id} Service={cardService}
                    ></ServiceCard> )
               }
            </div>
        </div>
    );
};

export default Service;