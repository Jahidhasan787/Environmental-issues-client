import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("password must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("password must have uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("password must have lowercase letter");
      return;
    } else {
      setError("");
    }

    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        toast("Registration complete");
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };
const provider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero-content flex-col justify-center my-10 mx-auto">
      <div className="text-center w-[500px] ">
        <h1 className="text-5xl font-bold">Register!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Photo URL:</label>
            <input
              type="url"
              className="input"
              placeholder="Enter Photo URL"
              name="photoURL"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={eye ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setEye(!eye);
                }}
                className="btn btn-xs absolute right-6 z-1 top-2"
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="mb-5 text-center text-sm">
              Already have an account?
              <Link to="/logIn" className="text-blue-600 font-bold ">
                {" "}
                Log in
              </Link>
            </p>
            <button
              onClick={logInWithGoogle}
              className="btn text-blue-500 mt-2"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </fieldset>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
