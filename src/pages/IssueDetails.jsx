import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.init";

const IssueDetails = () => {
  const data = useLoaderData();
  const { image, title, description, amount, location, category, date } = data;
   const [user,setUser]= useState(null);
      useEffect(()=>{
              const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                  setUser(currentUser);
              });
              return ()=>{
                  unsubscribe();
              }
          },[]);

  const handleSubmit =(e)=>{
    e.preventDefault();
    const formData ={
        title: e.target.title.value,
        amount: e.target.amount.value,
        name: e.target.name.value,
        email: user?.email,
        phone: e.target.phone.value,
        address: e.target.address.value,
        date: e.target.date.value
    }
    fetch('http://localhost:3000/contribution',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(res=>{
            res.json()
            toast("Saved Contribution data")
        })
        .catch(err=>console.log(err));
        e.target.reset();
  }
  return (
    <div>
      <div className="md:w-9/12 mx-auto pb-10 ">
        <div className="text-center font-bold text-2xl py-5">Issue Details</div>
        <div className="flex flex-col md:flex-row gap-5 items-center shadow-sm rounded p-5">
          <img className="rounded h-[200px] md:h-[400px] w-full md:w-[50%]" src={image} alt="" />
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
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Pay Clean-Up Contribution
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="hero my-5">
                  <div className="hero-content flex-col w-full ">
                    <div className="text-center  ">
                      <h1 className="text-3xl font-bold">Contribution Form</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                      <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                          <label className="label">Issue Title:</label>
                          <input
                            type="text"
                            name="title"
                            className="input w-full"
                            placeholder="Title"
                            required
                          />
                          <label className="label">Amount:</label>
                             <input
                            type="number"
                            name="amount"
                            className="input w-full"
                            placeholder="Amount"
                            required
                          />
                          <label className="label">Contributor Name:</label>
                          <input
                            type="text"
                            name="name"
                            className="input w-full"
                            placeholder="name"
                            required
                          />
                          <label className="label">Phone No:</label>
                          <input
                            type="number"
                            name="phone"
                            className="input w-full"
                            placeholder="Phone No."
                            required
                          />
                          
                          <label className="label">Address:</label>
                          <input
                            type="text"
                            name="address"
                            className="input w-full"
                            placeholder="Address"
                          />
                          <label className="label">Date</label>
                          <input
                            type="date"
                            name="date"
                            className="input w-full"
                            defaultValue={
                              new Date().toISOString().split("T")[0]
                            }
                          />
                          <button className="btn btn-primary mt-4">
                            Save Contribution
                          </button>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
