import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../component/Footer';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='w-11/12 min-h-[500px] mx-auto'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;