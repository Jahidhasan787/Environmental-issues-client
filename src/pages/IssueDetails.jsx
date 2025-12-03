import React from "react";
import { Link, useLoaderData } from "react-router";

const IssueDetails = () => {
  const data = useLoaderData();
  const { image, title, description, amount, location, category, date } = data;

 
  return (
    <div>
      <div className="md:w-9/12 mx-auto pb-10 ">
        <div className="text-center font-bold text-2xl py-5">Issue Details</div>
        <div className="flex flex-col md:flex-row gap-5 items-center shadow-sm rounded p-5">
          <img className="rounded h-[400px] w-[50%]" src={image} alt="" />
          <div>
            <h2 className="text-2xl font-bold pb-2">{title}</h2>
            <span className="text-red-400 rounded px-2 py-1 outline">
              {category}
            </span>
            <p className="pt-2">Location : {location}</p>
            <p className="pb-2">Date : {date}</p>
            <p className="pb-2 text-gray-600">{description}</p>
            <div className="flex justify-between items-center pb-2 font-bold">
              <p>Amount: ${amount}</p>
            </div>
            <button
              className="btn btn-primary"
            >
              Pay Clean-Up Contribution
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
