import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceCard = ({Service}) => {
    const { _id, title, img, price} = Service;
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className=" h-64" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">  {title} </h2>
  
    <div className=" flex" >
    <p className="text-[#FF3811] text-xl " > Price:${price} </p>
     <button> <Link to={`/checkout/${_id}`} > <FiArrowRight className=" text-2xl text-[#FF3811] " ></FiArrowRight> </Link> </button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ServiceCard;