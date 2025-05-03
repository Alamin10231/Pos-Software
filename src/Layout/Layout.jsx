import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Sidebars from "../components/Sidebars/Sidebars";
import Home from "../Pages/Home/Home";
const Layout = () => {
  const location = useLocation();
  const hidenavbar =
    location.pathname === "/login" || location.pathname === "/signin";

  return (
    <div className=" min-h-screen gap-4">
      {!hidenavbar && (
        <div className="flex w-full ">
          <div className="w-1/7 gap-4   flex mx-auto pt-14 justify-center">

            <Sidebars></Sidebars>
           
          </div>
         

          <div className="w-5/6">
            <Navbar></Navbar>
            <div className="bg-gray-200 h-screen  ">
          <Home></Home>
          </div>
          </div>
        </div>
      )}

      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
