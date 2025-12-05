import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { Link } from "react-router";
import { toast } from "react-toastify";

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

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/issues/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        toast("Added successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-10">
      <div className="text-center pb-10">
        <h1 className="text-5xl font-bold">My Issues</h1>
      </div>
      {issues.map((issue) => (
        <div key={issue._id}>
          <div className="bg-green-100 mb-5 flex justify-between p-5 rounded-xl gap-5">
            <div className="flex w-[60%] lg:w-[25%] items-center">
              <img className="w-20 h-22 rounded-xl" src={issue.image} alt="" />
              <div>
                <h1 className="px-2">Title: {issue.title}</h1>
                <h1 className="text-red-400 rounded px-2 ">{issue.category}</h1>
                <h1 className="px-2">Amount: {issue.amount}</h1>
              </div>
            </div>
            <div className=" w-[35%] hidden lg:block ">
                <div className="flex items-center justify-center break-all">
                   {issue.description} 
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-end items-center gap-5 w-[20%] lg:w-[30%] ">
              <Link to={`/update-issue/${issue._id}`}>
                <button className="btn btn-accent">Update</button>
              </Link>
              <label htmlFor="my_modal_6" className="btn btn-error">
                Delete
              </label>

              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Hello!</h3>
                  <p className="py-4">
                    Are you sure you want to delete this?
                  </p>
                  <div className="modal-action">
                     <span onClick={()=>{handleDelete(issue._id)}} className=" btn-error mr-2"><label htmlFor="my_modal_6" className="btn">Delete</label></span>
                     <Link to={"/issues"}><button className="btn"><label htmlFor="my_modal_6" className="">Back</label></button></Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyIssues;
