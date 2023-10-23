

const ServiceCard = ({Service}) => {
    const {title, img, price} = Service;
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className=" h-64" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">  {title} </h2>
    <p className="text-[#FF3811] text-xl " > Price:${price} </p>
    
  </div>
</div> 
        </div>
    );
};

export default ServiceCard;