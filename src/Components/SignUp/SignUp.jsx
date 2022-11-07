import React from "react";
import { Link } from "react-router-dom";
import SignUpImage from "../../assets/Child adoption-rafiki.png";

const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content w-full  flex flex-col  lg:flex-row md:flex-col sm:flex-col">
          <div className="text-center w-1/2 md:flex-col-reverse">
            <h1 className="text-5xl font-bold">
              <img src={SignUpImage} alt="" />
            </h1>
          </div>
          <div className="card flex-shrink-0 w-1/2  shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
                <p>Already Have an Account? <Link to={'/login'} className=' text-orange-500'>Log in Now</Link></p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <div className="socialLogIn text-center rounded-b-xl  border-gray-300 border">
              <button className="w-full p-5 hover:bg-slate-400 hover:text-white hover:rounded-b-xl duration-300 ">
                Log in Using Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
