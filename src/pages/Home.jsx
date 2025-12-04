import React from 'react';
import { useLoaderData } from 'react-router';
import IssueCard from '../component/IssueCard';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>


            <div className="text-center font-bold text-5xl  my-10">Latest Issues</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    data.map(issue => <IssueCard key={issue._id} issue={issue}></IssueCard>)
                }
            </div>
        </div>
    );
};

export default Home;