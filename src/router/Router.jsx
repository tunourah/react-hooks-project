import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx'
import Chat from '../pages/Chat'
import Login from '../pages/Login'
import ErrorPage from '../pages/ErrorPage'
import MainContainer from '../components/MainContainer'
import Home from '../pages/Home'
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
    {
        path: "/MainContainer",
        element: <MainContainer />,
    },
    {
      path:"/Home",
      element: <Home />,
    }
    
  ]);
  
  export default  Router;