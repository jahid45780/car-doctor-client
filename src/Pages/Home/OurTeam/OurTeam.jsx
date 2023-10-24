import { AiOutlineFacebook,AiOutlineTwitter,AiOutlineWhatsApp,AiOutlineInstagram } from "react-icons/ai";

const OurTeam = () => {
    return (
        <div>
            <div className=" text-center" >
       <h1 className=" text-[#FF3811] text-2xl font-semibold " > Team </h1>
       <h1 className=" text-4xl font-bold" >Meet Our Team</h1>
       <p> the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

         <section className=" grid grid-cols-1 md:grid-cols-3 gap-3 mt-6" >
   {/* card 1 */}
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/jz6R3vB/2.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Car Engine Plug</h2>
    <p> Engine Expert </p>
    <div className=" flex items-center gap-3 text-4xl mb-5 " >
     <a href="https://www.facebook.com/mdjahid.hossain.16547/"> <AiOutlineFacebook></AiOutlineFacebook> </a>
     <a href=""> <AiOutlineTwitter></AiOutlineTwitter> </a>
     <a href=""> <AiOutlineWhatsApp></AiOutlineWhatsApp> </a>
     <a href=""> <AiOutlineInstagram></AiOutlineInstagram> </a>
    </div>
  </div>
</div>
   {/* card 2 */}
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/mbTjxYn/3.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Car Engine Plug</h2>
    <p> Engine Expert </p>
    <div className=" flex items-center gap-3 text-4xl mb-5 " >
     <a href="https://www.facebook.com/mdjahid.hossain.16547/"> <AiOutlineFacebook></AiOutlineFacebook> </a>
     <a href=""> <AiOutlineTwitter></AiOutlineTwitter> </a>
     <a href=""> <AiOutlineWhatsApp></AiOutlineWhatsApp> </a>
     <a href=""> <AiOutlineInstagram></AiOutlineInstagram> </a>
    </div>
  </div>
</div>
   {/* card 3 */}
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/Cs6JcS3/1.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Car Engine Plug</h2>
    <p> Engine Expert </p>
    <div className=" flex items-center gap-3 text-4xl mb-5 " >
     <a href="https://www.facebook.com/mdjahid.hossain.16547/"> <AiOutlineFacebook></AiOutlineFacebook> </a>
     <a href=""> <AiOutlineTwitter></AiOutlineTwitter> </a>
     <a href=""> <AiOutlineWhatsApp></AiOutlineWhatsApp> </a>
     <a href=""> <AiOutlineInstagram></AiOutlineInstagram> </a>
    </div>
  </div>
</div>

         </section>

        </div>
    );
};

export default OurTeam;