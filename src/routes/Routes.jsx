import React from 'react';
import { createBrowserRouter } from 'react-router';
import Error from '../pages/Error';
import Root from './Root';
import Home from '../pages/Home';
import AllIssues from '../pages/AllIssues';
import Register from '../pages/Register';
import LogIn from '../pages/LogIn';
import MyIssues from '../pages/MyIssues';
import MyContribution from '../pages/MyContribution';

 export const router =createBrowserRouter([
  {
    path:"/",
    Component: Root, 
    errorElement: <Error></Error>,
    children:[
        {
            index: true,
            // loader: ()=>fetch("/app.json"),
            path: "/",
            Component:Home,
        },
        {
          path:"/issues",
          Component:AllIssues,
        },
        {
          path:"/logIn",
          Component:LogIn,
        },
        {
          path:"/register",
          Component:Register,
        },
        {
          path:"myIssues",
          Component: MyIssues,
        },
        {
          path:'myContribution',
          Component: MyContribution,
        },
        {
          path:"*",
          Component:Error,
        }
        
    ]
     
  }
])