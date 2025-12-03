import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    if(loading){
        return <p className='text-center mt-10'><span className="loading loading-spinner text-success"></span></p> 
    }

    if (user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;