import React from 'react';
import errorImage from '../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center py-8'>
            
            <img src={errorImage} className='' alt="" />
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Oops, page not found!</h1>
                <p className='py-2 text-gray-700'>The page you are looking for is not available.</p>
                <Link to="/"><button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button></Link>
            </div>   
        </div>
    );
};

export default Error;