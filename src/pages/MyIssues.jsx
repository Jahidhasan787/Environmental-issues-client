import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

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

  const handleUpdate = () => {};

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
              <button
                className="btn btn-accent"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Update
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div className="hero my-5">
                    <div className="hero-content flex-col w-full ">
                      <div className="text-center  ">
                        <h1 className="text-3xl font-bold">
                          Contribution Form
                        </h1>
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

              {/* <button className="btn btn-accent">Update</button> */}
              <button
                className="btn btn-error"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Delete
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div className="hero my-5">
                    <div className="hero-content flex-col w-full ">
                      <div className="text-center  ">
                        <h1 className="text-3xl font-bold">
                          Contribution Form
                        </h1>
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

              {/* <button className="btn btn-error mr-2">Delete</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyIssues;
