import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const Update = () => {
  const data = useLoaderData();
  const { _id, title, description, amount, category } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData ={
       title: e.target.title.value,
       category: e.target.category.value,
       description:e.target.description.value,
       amount:e.target.amount.value,
    }
     fetch(`http://localhost:3000/issues/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(res=>{res.json();
            toast("Updated successfully")
        })
        .catch(err=>console.log(err));
       
  };

  return (
    <div>
      <div className="">
        <div className="hero my-5">
          <div className="hero-content flex-col w-full ">
            <div className="text-center  ">
              <h1 className="text-3xl font-bold">Update Issue</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
              <form onSubmit={handleUpdate} className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Issue Title:</label>
                  <input
                    type="text"
                    name="title"
                    className="input w-full"
                    placeholder="Title"
                    defaultValue={title}
                    required
                  />
                  <label className="label">Category:</label>
                  <select
                    className="select w-full"
                    name="category"
                    id=""
                    defaultValue={category}
                  >
                    <option value="">Select a Category</option>
                    <option value="Garbage">Garbage</option>
                    <option value="Road damage">Road Damage</option>
                    <option value="Illegal Construction">
                      Illegal Construction
                    </option>
                    <option value="Broken Public Property">
                      Broken Public Property
                    </option>
                  </select>
                  <label className="label">Amount:</label>
                  <input
                    type="number"
                    name="amount"
                    className="input w-full"
                    placeholder="Amount"
                    defaultValue={amount}
                    required
                  />
                  <label className="label">Description:</label>
                  <div className="relative">
                    <textarea
                      className="textarea w-full"
                      rows={5}
                      name="description"
                      defaultValue={description}
                      id=""
                      placeholder="Write your issue details..."
                    ></textarea>
                  </div>
                  <button className="btn btn-primary mt-4">Update</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-action">
        </div>
      </div>
    </div>
  );
};

export default Update;
