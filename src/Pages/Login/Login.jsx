import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = event =>{
        event.preventDefault()
       
    }

    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-14 ">
    
    <img className=" w-[500px] h-96" src="https://i.ibb.co/jJ2D2jJ/login.jpg" alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body  ">
      <h1 className="text-3xl text-center font-bold">Login </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
           <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      
      <div>
        <h1 className=" p-5 ml-9 " >Have an account? <Link to='/signUp' className=" text-xl text-[#FF3811]" > SignUp </Link> </h1>
      </div>


    </div>
  </div>
</div>
        </div>
    );
};

export default Login;