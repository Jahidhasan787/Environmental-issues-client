import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-5 mt-3 w-52 p-2 shadow"
            >
              {user ? (
                <>
                  <ul className="">
                    <NavLink to="/">
                      <li className="m-2 ">Home</li>
                    </NavLink>
                    <NavLink to="/issues">
                      <li className="m-2 ">All Issues</li>
                    </NavLink>
                    <NavLink to="/addIssues">
                      <li className="m-2">Add Issues</li>
                    </NavLink>
                    <NavLink to="/myIssues">
                      <li className="m-2">My Issues</li>
                    </NavLink>
                    <NavLink to="/myContribution">
                      <li className="m-2">My Contribution</li>
                    </NavLink>
                  </ul>
                </>
              ) : (
                <>
                  <ul className=" items-center">
                    <NavLink to="/">
                      <li className="m-2 ">Home</li>
                    </NavLink>
                    <NavLink to="/issues">
                      <li className="m-2 ">All Issues</li>
                    </NavLink>  
                  </ul>
                </>
              )}
            </ul>
          </div>
          <Link to="/">
            <p className="btn  text-2xl text-green-700">
              Eco<span className="text-red-500">Fixr</span>
            </p>
          </Link>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <ul className="flex">
                <NavLink to="/">
                  <li className="m-2 lg:block hidden">Home</li>
                </NavLink>
                <NavLink to="/issues">
                  <li className="m-2 lg:block hidden">All Issues</li>
                </NavLink>
                <NavLink to="/addIssues">
                  <li className="m-2 lg:block hidden">Add Issues</li>
                </NavLink>
                <NavLink to="/myIssues">
                  <li className="m-2 lg:block hidden ">My Issues</li>
                </NavLink>
                <NavLink to="/myContribution">
                  <li className="m-2 lg:block hidden">My Contribution</li>
                </NavLink>
              </ul>
              <div className="dropdown mr-7">
                <div tabIndex={0} className="ml-7 ">
                  <img
                    className="rounded-full h-12 outline min-w-10"
                    src={user.photoURL || "/Avatar.png"}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex="0"
                  className="menu  dropdown-content bg-base-100 mt-2 w-30 p-2 shadow "
                >
                  <p className="text-center font-semibold pb-1">
                    {user.displayName}
                  </p>
                  <button className="btn btn-accent" onClick={handleLogOut}>
                    Log Out
                  </button>
                </ul>
              </div>
            </>
          ) : (
            <>
              <ul className="flex items-center">
                <NavLink to="/">
                  <li className="m-2 lg:block hidden">Home</li>
                </NavLink>
                <NavLink to="/issues">
                  <li className="m-2 lg:block hidden">All Issues</li>
                </NavLink>
                <NavLink to="/logIn">
                  <li className="m-2">
                    <button className="btn">Log In</button>
                  </li>
                </NavLink>
                <NavLink to="/register">
                  <li className="m-2">
                    <button className="btn">Register</button>
                  </li>
                </NavLink>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
