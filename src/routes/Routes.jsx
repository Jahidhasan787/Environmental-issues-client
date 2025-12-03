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
import AddIssue from '../pages/AddIssue';
import IssueDetails from '../pages/IssueDetails';
import PrivateRoutes from './PrivateRoutes';

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
          loader:()=>fetch('http://localhost:3000/issues'),
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
          path:"/myIssues",
          element:<PrivateRoutes><MyIssues></MyIssues></PrivateRoutes>
        },
        {
          path:"/addIssues",
          element:<PrivateRoutes><AddIssue></AddIssue></PrivateRoutes>
        },
        {
          path:'/myContribution',
          element:<PrivateRoutes><MyContribution></MyContribution></PrivateRoutes>
        },
        {
          path:'/issueDetails/:id',
          loader: ({params})=>fetch(`http://localhost:3000/issues/${params.id}`),
          element:<PrivateRoutes><IssueDetails></IssueDetails></PrivateRoutes>
        },
        {
          path:"*",
          Component:Error,
        }
        
    ]
     
  }
])