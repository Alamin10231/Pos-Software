import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "animate.css";
import { IoLogoAngular } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GiSideswipe } from "react-icons/gi";

const Sidebars = ({ isCollapsed, toggleCollapse }) => {
  console.log("colusesed", isCollapsed);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())

      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div
      className={` ${
        isCollapsed ? " w-96 items-center justify-center  p-0 " : "w-full"
      } transition-all duration-300`}
    >
      <div className={`flex    top-4 items-center mb-4`}>
        <h1
          className={`absolute top-5   flex items-center gap-2 text-2xl  justify-between text-center
            ${isCollapsed ? "" : "left-8"}
            `}
        >
          <span
            className={`${
              isCollapsed ? "text-4xl  pl-4 " : "block text-3xl  "
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
                ? "relative left-2 top-1"
                : " relative left-6 text-xl rounded-full p-2 bg-[#1abc9c] text-white"
            }`}
            onClick={() => toggleCollapse(!isCollapsed)}
          >
            <GiSideswipe />
          </span>
        </h1>
      </div>
      {data.map(
        (item) => (
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
          )
          
        )
      )}
    </div>
  );
};

export default Sidebars;
