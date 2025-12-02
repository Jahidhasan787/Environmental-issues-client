import React from "react";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import { Link } from "react-router";

const Footer = () => {
  return (
    <div className=" p-16 bg-black text-white ">
      <div className="w-11/12 md:w-11/12 mx-auto flex flex-col gap-5 md:flex-row  justify-between md:items-center">
        <ul>
          <Link to="/">
            <p className="font-bold text-2xl text-green-700">
              Eco<span className="text-red-500">Fixr</span>
            </p>
          </Link>
          <li className="md:py-2">A simple portal to report community issues <br /> help keep your neighborhood clean and safe.</li>
          
        </ul>
        <p>“© 2025 GreenNest. All rights reserved.”</p>
        <div className="flex gap-3">
         <a href=""><FaFacebook className="text-5xl" /></a> 
         <a href=""><RiInstagramFill className="text-5xl" /></a>
         <a href=""><FaXTwitter className="text-5xl" /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
