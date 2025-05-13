import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "animate.css";
import { IoLogoAngular } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GiSideswipe } from "react-icons/gi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Sidebars = ({ isCollapsed, toggleCollapse }) => {
  console.log("colusesed", isCollapsed);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())

      .then((data) => setData(data));
  }, []);
  
  return (
    <div
      className={` ${
        isCollapsed
          ? " w-52 text-center ml-4 items-center justify-center  p-0 "
          : "w-full"
      } transition-all duration-300 `}
    >
      <div className={`flex    top-4 items-center mb-4`}>
        <h1
          className={`absolute top-5   flex items-center gap-2  text-2xl  justify-between text-center 
            ${isCollapsed ? "" : "left-8"}
            `}
        >
          <span
            className={`${
              isCollapsed ? "text-4xl  pl-1 " : "block text-3xl  "
            }`}
          >
            <IoLogoAngular />
          </span>
          <span className={`${isCollapsed ? "hidden " : "block"}`}>
            {" "}
            Company Logo{" "}
          </span>
          <span
            className={`transition-transform duration-700  ${
              isCollapsed
                ? "relative left-1  rotate-180 text-2xl p-1 bg-[#4d81f1] text-white rounded-full"
                : " relative left-1  rounded-full p-2 text-xl bg-[#4d81f1] text-white"
            }`}
            onClick={() => toggleCollapse(!isCollapsed)}
          >
            <MdKeyboardDoubleArrowLeft className="" />
          </span>
        </h1>
      </div>
      {data.map((item) => (
        (
          <Sidebar
            key={item.id}
            item={item}
            isCollapsed={isCollapsed}
            sectiontype="Main"
          ></Sidebar>
        ),
        (
          <Sidebar
            key={item.id}
            item={item}
            isCollapsed={isCollapsed}
            sectiontype="Inventory"
          ></Sidebar>
        ),
        <Sidebar
          key={item.id}
          item={item}
          isCollapsed={isCollapsed}
          sectiontype="alamin"
        ></Sidebar>
      ))}
    </div>
  );
};

export default Sidebars;
