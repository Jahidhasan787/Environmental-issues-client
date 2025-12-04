import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { Link } from "react-router";

const MyIssues = () => {
  const [user, setUser] = useState(null);
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/myIssues?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIssues(data);
        });
    }
  }, [user]);



  return (
    <div className="my-10">
      <div className="text-center pb-10">
        <h1 className="text-5xl font-bold">My Issues</h1>
      </div>
      {issues.map((issue) => (
        <div key={issue._id}>
          <div className="bg-green-100 mb-5 flex justify-between p-5 rounded-xl gap-5">
            <div className="flex w-[25%] items-center">
              <img className="w-20 h-22 rounded-xl" src={issue.image} alt="" />
              <div>
                <h1 className="px-2">Title: {issue.title}</h1>
                <h1 className="text-red-400 rounded px-2 ">{issue.category}</h1>
                <h1 className="px-2">Amount: {issue.amount}</h1>
              </div>
            </div>
            <div className="w-[35%] flex items-center justify-center break-all ">
              {issue.description}
            </div>
            <div className="flex md:flex-row flex-col justify-end items-center gap-5 w-[30%] ">
              <Link to={`/update-issue/${issue._id}`}><button className="btn btn-accent">Update</button></Link>
              <button className="btn btn-error mr-2">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyIssues;
