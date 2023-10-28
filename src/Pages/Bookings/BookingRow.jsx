import { AiFillDelete } from "react-icons/ai";


const BookingRow = ({booking,handleDelete,handleBookingConfirm}) => {

     const { _id, customerName, date, service, price, img, status} = booking;



    return (
        <tr>
                            <th>
                                <label>
                                <button onClick={()=> handleDelete (_id) } className="btn btn-square">
                             <AiFillDelete className=" text-4xl hover:bg-red-500 " ></AiFillDelete>
                          </button>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className=" rounded w-28 h-20">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                  
                                </div>
                            </td>
                            <td>
                             {service}
                                
                            </td>
                            <td> {customerName} </td> 
                            <td> {date} </td>
                            <td> ${price} </td>
                            <th>
                 {  
                  status === 'confirm' ?  <span className=" font-bold text-primary" > confirmed  </span> :  
                    <button onClick={()=> handleBookingConfirm(_id)} className="btn btn-ghost btn-xs "> Please Confirm</button>
                 }
                            </th>
                        </tr>
    );
};

export default BookingRow;