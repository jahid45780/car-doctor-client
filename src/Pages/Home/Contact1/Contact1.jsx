import { AiOutlineCalendar,AiOutlinePhone } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
const Contact1 = () => {
    return (
        <div className=" bg-black text-white p-20  mr-8 m-2 " >
            <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 " >
                <p className=" flex items-center gap-1" >
             <AiOutlineCalendar className=" text-3xl" ></AiOutlineCalendar>
             <p> We are open monday-friday <br /> 7:00 am - 9:00 pm </p>
                </p>
        
          <p  className=" flex items-center gap-1" >
         <AiOutlinePhone className=" text-3xl" ></AiOutlinePhone>
         <p> Have a question? <br /> +8906468087 </p>
          </p>
          
          <p  className=" flex items-center gap-1" >
         <TiLocationOutline className=" text-3xl" ></TiLocationOutline>
         <p> Need a repair? our address <br /> Liza Street, New York </p>
          </p>
              

            </section>
        </div>
    );
};

export default Contact1;