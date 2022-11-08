import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = ()=>{
    userLogOut()
    .then(()=>{})
    .catch(err=> console.log(err))
  }

  const hiddenRoute = {
    menuItems: (
      <>
        <Link to="">Reviews</Link>
      </>
    ),
  };
  const userLogingRoute = {
    menuItems: (
      <>
        <Link to={"/signup"}> Sign Up</Link>
        <Link to={"/login"}>Log In</Link>
      </>
    ),
  };
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>{user?.uid && hiddenRoute.menuItems}</li>
          <li>
            {!user?.uid && userLogingRoute.menuItems}
          {user?.uid && <Link onClick={handleLogOut}>Log out</Link>}
          </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          CameraWala
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>{user?.uid && hiddenRoute.menuItems}</li>
          <li>
            {!user?.uid && userLogingRoute.menuItems}
          {user?.uid && <Link onClick={handleLogOut}>Log out</Link>}

          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid && user.displayName} <img className="w-12 rounded-full mx-4" src= {user?.uid && user.photoURL } alt="" />
      </div>
    </div>
  );
};

export default Header;
