import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

const AddIssue = () => {
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
       category: e.target.category.value,
       location: e.target.location.value,
       description:e.target.description.value,
       image:e.target.image.value,
       amount:e.target.amount.value,
       email:e.target.email.value,
       date:e.target.date.value

    }
    fetch('http://localhost:3000/issues',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(formData),
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
   }     
    
  return (
    <div>
      <div className="hero my-5">
        <div className="hero-content flex-col w-full ">
          <div className="text-center  ">
            <h1 className="text-5xl font-bold">Add New Issue</h1>
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
                />
                <label className="label">Category:</label>
                <select className="select w-full" name="category" id="">
                    <option value="">Select a Category</option>
                    <option value="Garbage">Garbage</option>
                    <option value="Road damage">Road Damage</option>
                    <option value="Illegal Construction">Illegal Construction</option>
                    <option value="Broken Public Property">Broken Public Property</option>
                </select>
                <label className="label">Location:</label>
                <input
                  type="text"
                  name="location"
                  className="input w-full"
                  placeholder="Location"
                />
                <label className="label">Description:</label>
                <div className="relative">
                  <textarea className="textarea w-full" rows={5} name="description" id="" placeholder="Write your issue details..."></textarea>
                </div>
                <label className="label">Image URL:</label>
                <input
                  type="text"
                  name="image"
                  className="input w-full"
                  placeholder="https://example.com"
                />
                <label className="label">Amount:</label>
                <input
                  type="number"
                  list="amount"
                  name="amount"
                  className="input w-full"
                  placeholder="Enter Amount"
                />
                <datalist id ="amount">
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="350">350</option>
                    <option value="400">400</option>
                </datalist>
                <label className="label">Date</label>
                <input
                  type="date"
                  name="date"
                  className="input w-full"
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
                <label className="label">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  value={user?.email}
                  readOnly
                />
                <button className="btn btn-primary mt-4">Add Issue</button>

              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIssue;
