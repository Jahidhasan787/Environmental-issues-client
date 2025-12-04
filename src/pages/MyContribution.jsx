import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { Link } from 'react-router';

const MyContribution = () => {
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
          fetch(`http://localhost:3000/myContribution?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              setIssues(data);
            });
        }
      }, [user]);

      console.log(issues)

    return (
        <div className="my-10">
      <div className="text-center pb-10">
        <h1 className="text-5xl font-bold">My Contribution</h1>
      </div>
      {issues.map((issue) => (
        <div key={issue._id}>
          <div className="">
            <div className="bg-green-100 mb-5 flex justify-between items-center p-5 rounded-xl gap-5">
                <h1 className="px-2">Title: {issue.title}</h1>
                <h1 className="text-red-400 rounded px-2 ">{issue.category}</h1>
                <h1 className="px-2">Amount: {issue.amount}</h1>
                <h1 className="px-2">Date: {issue.date}</h1>
                <button className='btn btn-accent'>Download Report</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default MyContribution;