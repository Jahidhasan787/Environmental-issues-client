import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const handleLogIN = (e) => {
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
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        toast("Log in successfully");
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const logInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogIN} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
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
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="mb-5 text-center text-sm">
                  Don't have an account?
                  <Link to="/register" className="text-blue-600 font-bold ">
                    Register
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
      </div>
    </div>
  );
};

export default LogIn;
