import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Sidebars from "../components/Sidebars/Sidebars";
import Home from "../Pages/Home/Home";
const Layout = () => {
  const location = useLocation();
  const [isCollapsed, setisCollapsed] = useState(false);
  const hidenavbar =
    location.pathname === "/login" || location.pathname === "/signin";

  return (
    <div className=" min-h-screen gap-4 w-full ">
      {!hidenavbar && (
        <div className="flex w-full ">
          <div
            className={`${
              isCollapsed
                ? "w-28 py-10 transition-all duration-300"
                : "w-[350px] gap-4  flex mx-auto pt-14 justify-center "
            }`}
          >
            <Sidebars
              isCollapsed={isCollapsed}
              toggleCollapse={() => setisCollapsed(!isCollapsed)}
            ></Sidebars>
          </div>

          <div className={ ` w-full `}>
            <Navbar
             isCollapsed={isCollapsed}
            ></Navbar>
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
