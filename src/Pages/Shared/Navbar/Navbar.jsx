import { Link } from "react-router-dom";


const Navbar = () => {

    const navItem = <>
    
    <li> <Link to='/' > Home </Link> </li>
    <li> <Link to='/about' > About </Link> </li>
    <li> <Link to='/services' > Services  </Link> </li>
    <li> <Link to='/blog' >Blog</Link> </li>
    <li> <Link to='/contact' >contact</Link> </li>
    <li> <Link to='/login' >Login</Link> </li>
    
    </>

    return (
        <div>
         
         <div className="navbar bg-base-100 mb-4 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {
            navItem
         }
      </ul>
    </div>
   <Link to='/' className="btn btn-ghost normal-case text-xl" >
    <img className=" h-16 w-20 rounded-lg " src="https://i.ibb.co/NtvTp4K/395199656-859942578832265-6048415189227583555-n.jpg" alt="" />
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {
    navItem
   }
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-secondary">Appointment</button>
   
  </div>
</div>


        </div>
    );
};

export default Navbar;