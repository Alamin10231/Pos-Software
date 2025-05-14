import React from "react";

import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Sidebars from "../components/Sidebars/Sidebars";
import AdminDashboard1 from "../Pages/AdminDashboard/AdminDashboard1";
import AdminDashboard2 from "../Pages/AdminDashboard/AdminDashboard2";

export const router = createBrowserRouter([
  {
    // path: "/",
    // element: <Layout />,
    // children: [
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/SignUp",
    //   element: <SignUp />,
    // },
    // {
    //   path: "/sidebars",
    //   element: <Sidebars></Sidebars>,
    // },
    // {
    //   path: "/admindashboard2",
    //   element: <AdminDashboard2></AdminDashboard2>,
    // },
    // ],
  },
]);
