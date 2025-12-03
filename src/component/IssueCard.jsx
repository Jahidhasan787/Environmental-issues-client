import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const IssueCard = ({ issue }) => {
  const { _id, image, category, title, location, amount } = issue;
  return (
    <div>
      <div className="flex flex-col justify-between card bg-base-100 h-[450px] shadow-sm border border-gray-100">
        <figure>
          <img
            src={image}
            alt="plant image"
            className="w-[400px] h-[300px] rounded-2xl py-3 mt-10"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{title}</h2>
            <span className="bg-green-200 rounded px-2 py-1">{category}</span>
          </div>
          <div className=" pb-3">
            <p>{location}</p>
            <p className="font-bold ">Amount: ${amount}</p>
          </div>

          <div className="card-actions ">
            <Link to={`/issueDetails/${_id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
