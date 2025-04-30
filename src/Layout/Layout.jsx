import React from "react";
import { Outlet, useLocation } from "react-router";
import Home from "../Pages/Home/Home";
const Layout = () => {
  const location = useLocation();
  const hidenavbar =
    location.pathname === "/login" || location.pathname === "/signin";

  return (
    <div>
    {!hidenavbar && 
      
      <Home></Home>      
      } 


      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
