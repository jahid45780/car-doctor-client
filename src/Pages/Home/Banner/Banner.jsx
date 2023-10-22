

const Banner = () => {
    return (
        
        <div className="carousel w-full h-[600px] ">
            {/* slide 4 */}
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4jPZn0Q/1.jpg" className="w-full rounded-xl" />
    <div className="absolute flex items-center h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
         
         <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold" >  Affordable Price <br /> For Car Servicing </h2>
            <p className=" text-xl" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-primary mr-5"> Discover More </button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
         </div>

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

  </div> 
  {/* slide 2 */}
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/gvK1J94/2.jpg" className="w-full" />
    <div  className="absolute flex items-center h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] " >
       
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold" >  Affordable Price <br /> For Car Servicing </h2>
            <p className=" text-xl" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-primary mr-5"> Discover More </button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
         </div>

 </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>

  </div> 
{/* slide 3 */}
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/S5dhX6B/3.jpg" className="w-full" />
    <div className="absolute flex items-center h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] " >
   
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold" >  Affordable Price <br /> For Car Servicing </h2>
            <p className=" text-xl" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-primary mr-5"> Discover More </button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
         </div>
     </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>

{/* slide 4 */}

  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/VHzPyyC/4.jpg" className="w-full" />
    <div className="absolute flex items-center h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] "  >
       
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold" >  Affordable Price <br /> For Car Servicing </h2>
            <p className=" text-xl" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-primary mr-5"> Discover More </button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
         </div>


    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>

  </div>


  
</div>

    );
};

export default Banner;