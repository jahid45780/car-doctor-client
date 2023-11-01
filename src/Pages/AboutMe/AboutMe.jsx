import { AiOutlineDownload } from "react-icons/ai";

const AboutMe = () => {
    return (
        <div className="  bg-base-200 text-center py-20 " >
          <h1 className="text-5xl font-bold mt-14 ">About Me</h1>
            <div className="hero  ">
            
  <div className="hero-content flex-col lg:flex-row-reverse gap-24">
    
    <img src="https://i.ibb.co/XbhB9wW/371464803-870386464472613-3776066334767339694-n.jpg" className="  rounded-3xl" />
    <div className=" space-y-3" >
      
      <p className=" text-xl text-orange-400 font-semibold"> EMAIL</p>
      <span> mdjahidhossain22233@gmail.com </span>   
      <p className="text-xl text-orange-400 font-semibold"> ROLE</p>
      <span> full stack developer </span> 
      <p className="text-xl text-orange-400 font-semibold"> PHONE</p>
      <span> 01763943446 </span> <br />
      <button className=" btn btn-primary" >Download CV <AiOutlineDownload className=" text-xl" ></AiOutlineDownload> </button>
        
       
       
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;