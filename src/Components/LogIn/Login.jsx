import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SignUpImage from "../../assets/Child adoption-rafiki.png";
import useTitle from "../../Hooks/Hooks";
import { AuthContext } from "../../UserContext/UserContext";

const Login = () => {
  const { logInUser, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Log in");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Congrats",
          text: "User Logged in",
        });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        })
      );
  };
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        })
      );
  };
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
            <form className="card-body" onSubmit={handleForm}>
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
                <p>
                  Don't Have an Account? <Link to={"login"}>Register Now</Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <div className="socialLogIn text-center rounded-b-xl  border-gray-300 border">
              <button
                className="w-full p-5 hover:bg-slate-400 hover:text-white hover:rounded-b-xl duration-300 "
                onClick={handleGoogleLogIn}
              >
                Log in Using Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
