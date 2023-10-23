

const About = () => {
    return (
        <div>
         <div className="hero min-h-screen mt-5 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
<div className=" lg:w-1/2 relative " >
<img src="https://i.ibb.co/hRjnXyz/person.jpg" className=" w-3/4 rounded-lg shadow-2xl" />
<img src="https://i.ibb.co/31ZzG6C/parts.jpg" className=" w-1/2 absolute right-9 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
</div>
    <div className=" lg:w-1/2 space-y-2 p-4 " >
        <h1 className=" text-[#FF3811] text-xl font-semibold " >About Us</h1>
      <h1 className="text-5xl font-bold"> We are qualified <br /> & of experience <br /> in this field </h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p className="py-6"> the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
      <button className="btn btn-warning p-2"> Get More Info </button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default About;