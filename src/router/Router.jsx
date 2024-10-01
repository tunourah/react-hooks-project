import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx'
import Chat from '../pages/Chat'
import Login from '../pages/Login'
import ErrorPage from '../pages/ErrorPage'
const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    
  ]);
  
  export default  Router;