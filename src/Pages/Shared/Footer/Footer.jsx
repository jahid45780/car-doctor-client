import { AiFillFacebook,AiFillGoogleSquare, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
      
        <footer className="footer p-10 bg-base-200 mt-5 text-base-content">
  <aside>
      <img className=" w-40 h-36" src="https://i.ibb.co/NtvTp4K/395199656-859942578832265-6048415189227583555-n.jpg" alt="" />
    <p>When you purchase a new vehicle in the United States<br/>You receive a title whether you buy a new or used vehicle from a dealer or a private citizen.</p>
  <div className=" grid grid-cols-3 gap-3" >
  <a href=""> <AiFillFacebook className=" text-5xl rounded-full " ></AiFillFacebook> </a>
    <a href=""> <AiFillGoogleSquare className=" text-5xl rounded-full "  ></AiFillGoogleSquare>  </a>
    <a href=""> <AiFillTwitterCircle className=" text-5xl rounded-full "  ></AiFillTwitterCircle> </a>
  </div>
  </aside> 
 <div className=" footer grid grid-cols-3 mt-14 mr-36" >

 <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>


 </div>
</footer>


    );
};

export default Footer;