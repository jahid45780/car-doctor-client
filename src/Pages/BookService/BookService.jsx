
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const BookService = () => {
    const service = useLoaderData()
    const { title, img, price, _id } = service;
   const {user} = useContext(AuthContext)

    const handleBookService = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const textarea = form.textarea.value
        const email = user?.email
        const booking ={
            customerName: name,
            email,
            date,
            img,
            textarea,
            service:title,
            service_id: _id,
            price : price
           
        }

        console.log(booking)
        
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body:JSON.stringify(booking)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire('Booking Successfully')
        })
     
    }

    return (
        <div>

            <img className=" w-full h-[390px] lg:relative " src={img} alt="" />



            <div className=" text-center lg:absolute lg:-mt-[50px] lg:ml-[540px] py-3 px-7 bg-[#FF3811]" >
                <h2 className=" text-xl  font-bold " >{title} </h2>
            </div>

            <form onSubmit={handleBookService} className="bg-[#F3F3F3] m-2 " >

                <div className=" grid gir lg:grid-cols-2 gap-3 mt-20" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Date" name="date" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  placeholder="Your Email" defaultValue={user?.email} className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text"  placeholder="Due Amount" defaultValue={'$'+ price} className="input input-bordered" required />

                    </div>
                  
                </div>
              <textarea name="textarea" placeholder="Your Message" className=" mt-4 border-2 border-blue-300 lg:w-full " cols="30" rows="10"></textarea>

                <button className="btn btn-block mt-3 bg-[#FF3811] text-white" > <input  type="submit" value="Order Confirm" /></button>

            </form>

        </div>
    );
};

export default BookService;