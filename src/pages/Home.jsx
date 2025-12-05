import React from "react";
import { useLoaderData } from "react-router";
import IssueCard from "../component/IssueCard";
import Banner from "../component/Banner";
import { FaHammer, FaRoad, FaTools, FaTrashAlt } from "react-icons/fa";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="my-20 w-11/12 mx-auto">
        <h2 className="text-4xl mb-5 text-center font-bold ">Issue Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2"><FaTrashAlt /></p>
            <h3 className="text-xl font-semibold">Garbage</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2"><FaHammer /></p>
            <h3 className="text-xl font-semibold">Illegal Construction</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2"><FaTools /></p>
            <h3 className="text-xl font-semibold">Broken Public Property</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <p className="text-4xl text-blue-600 mb-2"><FaRoad /></p>
            <h3 className="text-xl font-semibold">Road Damage</h3>
            <p className="text-gray-600">Report garbage in your area</p>
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-4xl  my-10">Latest Issues</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {data.map((issue) => (
          <IssueCard key={issue._id} issue={issue}></IssueCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
