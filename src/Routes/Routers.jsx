import React from "react";

import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin/Signin";
import Sidebars from "../components/Sidebars/Sidebars";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/sidebars",
        element: <Sidebars></Sidebars>,
      },
    ],
  },
]);
